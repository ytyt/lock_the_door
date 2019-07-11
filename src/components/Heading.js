import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Heading = ({ title }) => {
  return (
    <div css={containerStyle}>
      <h1 css={h1Style}>{title}</h1>
    </div>
  );
};

export default Heading;

const containerStyle = css`
  padding: 1em;
  text-align: center;
`;

const h1Style = css`
  font-size: 1.4rem;
  font-weight: normal;
`;
