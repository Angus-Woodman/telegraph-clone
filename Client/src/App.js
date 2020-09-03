import React from "react";
import "./styles/App.css";
import PostContainer from "./Containers/PostContainer"
import AllPostsContainer from "./Containers/AllPostsContainer"
import SinglePostContainer from "./Containers/SinglePostContainer"
import PostsByNameContainer from "./Containers/PostsByNameContainer"
import { Switch, Route, withRouter } from "react-router-dom";

class App extends React.Component {
  state = {};
  render() {
    return (
      <>
        <h1>Telegraph Clone</h1>

        <Switch>
          <Route id="path1" exact path="/" render={() => (<PostContainer/>)}/>

          <Route id="path3" path="/posts" render={() => ( <AllPostsContainer/> )}></Route>

          <Route id="path3" path="/id" render={() => ( <SinglePostContainer/> )} ></Route>

          <Route id="path3" path="/name" render={() => ( <PostsByNameContainer/> )} ></Route>
        </Switch>
      </>
    );
  }
}
export default withRouter(App);
