import React, { Component } from 'react';
import './Items.css';
import sample from '../images/logo.png'

export class Item extends Component {
  render() {
    let {title, description} = this.props;
    return (
      <>
        <div className="main">
          <div className="box">
            <img src={sample} alt="Logo" style={{height: "240px", width: "100%", marginTop: "10px"}} />
            <hr />
            <h2>{title}</h2>
            <p>{description}</p>
            <button>Hello</button>
          </div>
        </div>
      </>
    )
  }
}

export default Item
