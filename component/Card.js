import * as React from "react";
import { Card, Title, Paragraph, Button } from "react-native-paper";

function CardContact(props) {
  const { el } = props;
  // function editData() {}

  // function wipeData() {}

  return (
    <Card>
      <Card.Content>
        <Title>{el.firstName} {el.lastName}</Title>
        <Paragraph>{el.id}</Paragraph>

        <Card.Actions>
          <Button mode="contained" onPress={editData}>
            Edit
          </Button>
          <Button mode="contained" onPress={wipeData}>
            Delete
          </Button>
        </Card.Actions>
      </Card.Content>
    </Card>
  );
}

export default CardContact;
