import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { createFragmentContainer, graphql} from "react-relay"

const CardItem = ({props}) => (
  <Card as="Grid.Column" width="3">
    <Image src={`/assets/images/avatar/large/${this.props.character.image}`} />
    <Card.Content>
      <Card.Header>
        {this.props.character.name}
      </Card.Header>
      <Card.Meta>
        <span className='userId'>
        {this.props.character.id}
        </span>
      </Card.Meta>
      <Card.Description>
        {this.props.character.Description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)

export default createFragmentContainer(CardItem, graphql `
fragment card_character on character{
  id,
  name,
  description,
  image
}
`)