import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import RecordListItem from "./RecordListItem";

const RecordList = ({ list }) => {
  return (
    <div>
      {list
        ? list.map((item, i) => (
            <RecordListItem key={i} date={item.createdAt} />
          ))
        : null}
    </div>
  );
};

export default RecordList;
