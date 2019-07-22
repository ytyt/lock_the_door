import React from 'react'
import formatDate from 'date-fns/format'
import RecordListLabel from './RecordListLabel'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const RecordList = ({ date, showDate }) => {
  const timestamp = date.seconds ? date.seconds * 1000 : date.createdAt
  return (
    <div>
      {showDate ? <RecordListLabel timestamp={timestamp} /> : ''}
      {formatDate(timestamp, 'h:mm')}
    </div>
  )
}

export default RecordList
