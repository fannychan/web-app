import React, { Component } from 'react';

class MediaObject extends Component{
    render() {
      return (
        <article className="media">
          <figure className="media-left">
            <p className="MediaObject-img">
              <img src={this.props.imageSource} />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.jobRole} </strong>
                {this.props.jobName}
                <br/>
                {this.props.information}
              </p>
            </div>
          </div>
        </article>
      );
    }
}

export default MediaObject;
