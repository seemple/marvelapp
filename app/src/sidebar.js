import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Grid, Container, Card, Divider } from 'semantic-ui-react'
import CardItem from "./card"
import MenuItem from "./Menu"
import { createFragmentContainer, graphql} from "react-relay"
import {QueryRenderer,graphql} from "react-relay"
import environment from "./Environment"

class SidebarEl extends Component {
  
  render() {

    return (
      <Grid padded stretched>
          
          <Grid.Column key={1}>
            
            <Sidebar.Pushable as={Segment}>
            <Sidebar.Pusher>
                <Container>
                    <MenuItem key={3} />
                    <Divider hidden clearing />
                    <Card.Group itemsPerRow={3} stackable>
                      {this.props.viewer.characters.edges.map(({node}) =>
                        <CardItem key={node.id} character={node} />
                      )}
                    </Card.Group>
                    <Divider hidden clearing />
                </Container>
            </Sidebar.Pusher>
            </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
    )
  }
}

export default createFragmentContainer(Sidebar, graphql `
fragment Sidebar_viewer on Sidebar{
	characters(last:5) @connection(key:"Sidebar_characters",filters[]){
		edges{
			node{
				...Card_card
			}
		}	
	}
}
`)