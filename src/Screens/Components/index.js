import React, {Component} from 'react';

import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';

export default class InlineLabelExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item inlineLabel>
              <Label>Nome</Label>
              <Input />
            </Item>
            <Item inlineLabel last>
              <Label>Telefone</Label>
              <Input />
            </Item>
            <Item inlineLabel last>
              <Label>Sexo</Label>
              <Input />
            </Item>
            <Item inlineLabel last>
              <Label>Cpf</Label>
              <Input />
            </Item>
            <Item inlineLabel last>
              <Label>Região</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
