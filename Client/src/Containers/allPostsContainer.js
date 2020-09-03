import React, { Component } from 'react';

class AllPostsContainer extends Component {

    getAllPosts() {
    fetch('http://localhost:3000/posts')
        .then(r => r.json())
        .then((data) => {let postData = data})
        // .then((data) => {
        //   let x = (data.posts[0].name)
        //   console.log(x)
        //   this.updateState(x)
        // })
        .then(this.updateState(postData))
        .catch(console.warn)
};

  updateState = (data) => {
    console.log(data)
    this.setState({data})
  }

  // appendPosts(data) {
  //   console.log(data)
  //   data.posts.forEach(appendPost);
  // }
  //
  // appendPost(postData) {
  //   const newLi = document.createElement('li');
  // }

  render(){
    // this.getAllPosts()
        return(
            <section id="allPostsContainer">
              <p> All Posts </p>
              <button onClick={this.getAllPosts}> Get all posts </button>
            </section>
        )
    }
}

export default AllPostsContainer;
