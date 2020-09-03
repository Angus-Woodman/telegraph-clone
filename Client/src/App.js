import React from "react";
import "./styles/App.css";
import PostContainer from "./Containers/PostContainer"
import AllPostsContainer from "./Containers/AllPostsContainer"
import SinglePostContainer from "./Containers/SinglePostContainer"
import PostsByNameContainer from "./Containers/PostsByNameContainer"
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    posts: []
  }

//Gets all posts from server and then runs updateState
  getAllPosts() {
    fetch('http://localhost:3000/posts')
        .then(r => r.json())
        .then(this.updateState)
        .catch(console.warn)
  };

//Sets the state as an array of all posts
  updateState = (data) => {
    this.setState({posts: data.posts})
  }

//runs the getALLPosts function once after component has finished mounting
  componentDidMount(){
    this.getAllPosts()
  }

  render() {
    return (
      <>
        <h1>Telegraph Clone</h1>

        <Switch>
          <Route id="path1" exact path="/" render={() => (<PostContainer/>)}/>

          <Route id="path3" path="/posts" render={() => ( <AllPostsContainer posts={this.state.posts}/> )}></Route>

          <Route id="path3" path="/id" render={() => ( <SinglePostContainer posts={this.state.posts}/> )} ></Route>

          <Route id="path3" path="/name" render={() => ( <PostsByNameContainer posts={this.state.posts}/> )} ></Route>
        </Switch>
      </>
    );
  }
}
export default App;
