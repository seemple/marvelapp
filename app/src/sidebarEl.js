import React, { Component } from "react";
import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Grid,
  Container,
  Card,
  Divider
} from "semantic-ui-react";
import CardItem from "./card";
import MenuItem from "./Menu";
import { QueryRenderer, graphql } from "react-relay";
import environment from "./Environment";

const sidebarElQuery = graphql`
  query sidebarElQuery($count: Int!) {
    characters(first: $count) {
      edges {
        node {
          ...Card_card
        }
      }
    }
  }
`;

const charactersCardGroup = ({ characters }) =>
  <Card.Group itemsPerRow={3} stackable>
    {characters.edges.map(({ node }) => (
      <CardItem key={node.id} character={node} />
    ))}
  </Card.Group>;

const charactersGroupRendered = ({characters}) =>
<QueryRenderer
    environment={environment}
    query={sidebarElQuery}
    variables={{
      count: 5
    }}
    render={({ error, props }) => {
      return(
        <Grid padded stretched>
        <Grid.Column key={1}>
          <Sidebar.Pushable as={Segment}>
            <Sidebar.Pusher>
              <Container>
                <MenuItem key={3} />
                <Divider hidden clearing />
                if (error) <div>{error.message}</div>
                if (props) <charactersCardGroup character={props} />
                <Divider hidden clearing />
              </Container>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
      )
    }}
/>;

export default charactersGroupRendered;