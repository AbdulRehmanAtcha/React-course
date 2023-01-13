import React, { Component } from 'react'
import './Items.css'

export class Items extends Component {
    render() {
        let {title,description, imgURL, source, author, url} = this.props;
        return (
            <div>
                <div className="box">
                    <img src={imgURL} style={{height: "220px"}} alt="NewsImage"/>
                    <h2>Source: <span style={{fontWeight:"bolder", color: "#351c75"}}>{source}</span></h2>
                    <h2>Author: <span style={{fontWeight:"bolder", color: "#351c75"}}>{author}</span></h2>
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <a rel='noreferrer' href={url} target="_blank" title='Click'><button>Read More</button></a>
                </div>
            </div>
        )
    }
}

export default Items
