import { call, take, takeEvery, fork, put, all } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { LOGIN_REQUEST, LOGOUT, ADD_RECORD } from "../constants/actions";
import {
  loginSuccess,
  logInFailure,
  loaded,
  getRecordSuccess
} from "../actions";
import { provider, auth, db } from "../firebase";

function* signIn(context) {
  try {
    yield call(auth.signInWithPopup(provider).catch(e => {}));
    yield call(context.history.push, "/");
  } catch (e) {
    yield put(logInFailure());
  }
}

function* signOut() {
  yield call([auth, auth.signOut]);
}

const authChannel = () => {
  const channel = eventChannel(emit => {
    const unsubscribe = auth.onAuthStateChanged(user => emit({ user }));
    return unsubscribe;
  });
  return channel;
};

function* setUser(firebaseUser) {
  const user = {
    displayName: firebaseUser.displayName,
    uid: firebaseUser.uid
  };
  yield db
    .collection("users")
    .doc(user.uid)
    .set(user, { merge: true });
}

function* checkUserStatusSaga(context) {
  const channel = yield call(authChannel);
  while (true) {
    const { user } = yield take(channel);
    if (user) {
      yield put(loginSuccess(user));
      yield fork(() => setUser(user));
      yield put(loaded());
      if (context.history.location.pathname === "/auth") {
        yield call(context.history.push, "/");
      }
      yield fork(() => getRecord(user.uid));
    } else {
      yield put(loaded());
    }
  }
}

function* addRecord(action) {
  yield db.collection("records").add({
    user: db.collection("users").doc(action.payload),
    createdAt: new Date()
  });
  yield fork(() => getRecord(action.payload));
}

function* getRecord(uid) {
  const docs = [];
  const user = db.collection("users").doc(uid);
  yield db
    .collection("records")
    .where("user", "==", user)
    .orderBy("createdAt", "desc")
    .limit(10)
    .get()
    .then(list => {
      list.forEach(doc => {
        docs.push(doc.data());
      });
    });
  yield put(getRecordSuccess(docs));
}

export default function* rootSaga(context) {
  yield all([
    checkUserStatusSaga(context),
    takeEvery(LOGIN_REQUEST, signIn),
    takeEvery(LOGOUT, signOut),
    takeEvery(ADD_RECORD, addRecord)
  ]);
}
