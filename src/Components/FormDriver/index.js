import React from 'react';
import {Content, Form, Item, Input} from 'native-base';

export default function FormDriver() {
  return (
    <Content>
      <Form>
        <Item>
          <Input placeholder="Name:" />
        </Item>
        <Item>
          <Input placeholder="Car Name:" />
        </Item>
        <Item>
          <Input placeholder="Car Board:" />
        </Item>
        <Item>
          <Input placeholder="From Location:" />
        </Item>
        <Item>
          <Input placeholder="To Location:" />
        </Item>
      </Form>
    </Content>
  );
}
