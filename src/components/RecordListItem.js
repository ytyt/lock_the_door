import React from "react";
import formatDate from "date-fns/format";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const RecordList = ({ date }) => {
  return (
    <div>
      {date.seconds
        ? formatDate(date.seconds * 1000, "h:mm")
        : formatDate(date.createdAt, "h:mm")}
    </div>
  );
};

export default RecordList;
