import React, { Component } from 'react';
import './App.css';
import SidebarEl from "./sidebar";
import { QueryRenderer, graphql } from "react-relay"
import environment from "./Environment"

const AppCharactersQuery = graphql`
query AppCharactersQuery{
	viewer{
		...Sidebar_viewer
	}
}`

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={AppCharactersQuery}
        render={({ error, props }}) =>{
        if(error){
          return <div>{error.message}</div>
        } else if (props) {
          return <SidebarEl viewer={props.viewer} />
        }
        return <div>Loading</div>
  })
      />
  }
}

export default App;
