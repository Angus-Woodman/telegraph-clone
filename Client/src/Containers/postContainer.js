import React, { Component } from 'react';

class PostContainer extends Component {

  state = {
    post: {name: '', title: '', content: ''}
  }

handleSubmit = (e) => {
  e.preventDefault();

  const postData = {
        name: e.target.name.value,
        title: e.target.title.value,
        content: e.target.message.value
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: { "Content-Type": "application/json" }
    };

     fetch('http://localhost:3000/posts', options)
        .then(r => r.json())
        .then(this.updateState)
        .catch(console.warn)
}

updateState = (data) => {
  this.setState({post: data})
}

  render(){
        return(
            <section id="postContainer">
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="Pseudonym"/>
                <input type="text" name="title" placeholder="Title"/>
                <input type="text" name="message" placeholder="Message"/>
                <input type="submit" value="Publish"/>
              </form>

              <p>{this.state.post.name} {this.state.post.title} {this.state.post.content}</p>
            </section>
        )
    }
}

export default PostContainer;
