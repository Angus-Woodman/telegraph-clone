import React, { Component } from 'react';

class AllPostsContainer extends Component {

  render(){
        return(
            <section id="allPostsContainer">
              <h1> All Posts </h1>
              <ul>
              {console.log(this.props)}
              {this.props.posts.map(st => <li key = {st.id}>{st.title}, {st.name}, {st.content}</li>)}
              </ul>
            </section>
        )
    }
}

export default AllPostsContainer;
