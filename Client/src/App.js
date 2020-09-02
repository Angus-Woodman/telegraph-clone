import React from "react";
import "./styles/App.css";
import PostContainer from "./Containers/PostContainer"

class App extends React.Component {
  state = {};
  render() {
    return (
      <>
        <h1>New React App</h1>
        <PostContainer/>
      </>
    );
  }
}
export default App;
