import React, { Component } from 'react';

class PostContainer extends Component {

handleInput = (e) => {
  const { name, value } = e.target;
  this.setState({ [name]: value });
};

  render(){
        return(
            <section id="postContainer">
              <form>
                <input type="text" name="name" placeholder="Pseudonym" onChange={this.handleInput}/>
                <input type="text" name="title" placeholder="Title" onChange={this.handleInput}/>
                <input type="text" name="message" placeholder="Message" onChange={this.handleInput}/>
                <input type="submit" value="Submit"/>
              </form>
            </section>
        )
    }
}

export default PostContainer;
