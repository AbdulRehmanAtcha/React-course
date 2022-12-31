import React, { Component } from 'react'
import Item from './Item'

export class News extends Component {
  render() {
    return (
      <div>
        News Component
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </div>
    )
  }
}

export default News
