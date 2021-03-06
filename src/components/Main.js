import React, { Component } from 'react'
import Heading from './Heading'
import Button from './Button'
import RecordList from './RecordList'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export default class Main extends Component {
  render() {
    const { uid, displayName } = this.props.auth
    const { list } = this.props.record
    return (
      <div css={style}>
        <Heading title={`Hi, ${displayName}`} />
        <Button onClick={() => this.props.addRecord(uid)}>Post</Button>
        <RecordList list={list} />
        <Button text onClick={this.props.doLogout}>
          ログアウト
        </Button>
      </div>
    )
  }
}

const style = css`
  padding: 0 5%;
`
