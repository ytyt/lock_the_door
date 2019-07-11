import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { config } from "./config";

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;
