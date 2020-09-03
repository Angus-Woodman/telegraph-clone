import React, { Component } from 'react';

class SinglePostsContainer extends Component {

  render(){
        return(
            <section id="singlePostsContainer">
              <h1> Single Post </h1>
              {console.log(this.props.posts)}
            </section>
        )
    }
}

export default SinglePostsContainer;
