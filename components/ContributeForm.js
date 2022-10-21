import React, { Component } from "react";
import { Button, Form, Input, Message } from "semantic-ui-react";

class ContributeForm extends Component {
  state = {
    value: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
  };
    
  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input
            label="ether"
            labelPosition="right"
            value={this.state.value}
            onChange={(e) => this.state.value({ value: e.target.value })}
          />
        </Form.Field>
        <Button primary>Contribute!</Button>
      </Form>
    );
  }
}

export default ContributeForm;
