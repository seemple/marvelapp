import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Grid, Container, Card, Divider } from 'semantic-ui-react'
import CardItem from "./card";
import MenuItem from "./Menu";

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
                            <CardItem />
                            <CardItem />
                            <CardItem />
                            <CardItem />
                            <CardItem />
                            <CardItem />
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

export default SidebarEl