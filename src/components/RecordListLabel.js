import React from 'react'
import formatDate from 'date-fns/format'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { colors } from '../themes'

const RecordListLabel = ({ timestamp }) => {
  const current = new Date(timestamp)
  const year = formatDate(current, 'YYYY')
  const month = formatDate(current, 'MMMM')
  const date = formatDate(current, 'D')

  return (
    <div css={containerStyle}>
      <div css={dateStyle}>{date}</div>
      <div>
        <p>{month}</p>
        <p>{year}</p>
      </div>
    </div>
  )
}

const containerStyle = css`
  display: flex;
  font-size: 0.85rem;
  color: ${colors.gray};
  line-height: 1.3;
`

const dateStyle = css`
  font-weight: bold;
  font-size: 1.8rem;
  color: ${colors.blackWeak};
  padding-right: 0.4em;
`

export default RecordListLabel
