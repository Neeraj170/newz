import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl}=this.props
    return (
      <div>
        <div className="card my-3">
        <img src={!imageUrl?"https://hbr.org/resources/images/article_assets/2023/07/Jul23_06_1488880093.jpg":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary btn-dark">Read more</a>
        </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
