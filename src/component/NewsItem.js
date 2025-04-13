import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title,description,imageUrl,newsurl}=this.props;
    return (
      <div className="my-3">
      <div>
        <div className="card" style={{width: "18rem"}}>
        <img src={imageUrl} alt="News" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel='noreferrer' href={newsurl} target='_blank' className="btn btn-sm btn-primary">Read More &raquo;</a>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default NewsItem