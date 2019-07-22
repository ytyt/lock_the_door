import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { colors } from '../themes'

const Button = ({ children, onClick, text }) => {
  return (
    <button css={text ? textButtonStyle : buttonStyle} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button

const buttonStyle = css`
  -webkit-appearance: none;
  display: inline-block;
  border: none;
  border-radius: 20px;
  padding: 1em;
  text-align: center;
  width: 100%;
  background: ${colors.accent};
  color: ${colors.white};
`

const textButtonStyle = css`
  -webkit-appearance: none;
  border: none;
  display: inline-block;
  text-align: center;
  text-decoration: underline;
  background: none;
`
