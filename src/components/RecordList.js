import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import RecordListItem from './RecordListItem'
import isSameDay from 'date-fns/is_same_day'
import { colors } from '../themes'

const RecordList = ({ list }) => {
  return (
    <div css={listStyle}>
      {list
        ? list.map((item, i) => {
            const previous = list[i - 1]
            const showDate = shouldShowDate(previous, item)

            return (
              <RecordListItem
                key={i}
                date={item.createdAt}
                showDate={showDate}
              />
            )
          })
        : null}
    </div>
  )
}

function shouldShowDate(previous, current) {
  if (!previous) {
    return true
  }
  const isNewDay = !isSameDay(
    previous.createdAt.seconds * 1000,
    current.createdAt.seconds * 1000
  )
  return isNewDay
}

const listStyle = css`
  position: fixed;
  bottom: 0;
  left: 5%;
  width: 90%;
  height: 65vh;
  background: ${colors.white};
  border-radius: 6px 6px 0 0;
`

export default RecordList
