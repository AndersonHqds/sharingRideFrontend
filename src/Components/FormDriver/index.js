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
          <Input placeholder="Name:" />
        </Item>
      </Form>
    </Content>
  );
}
