
import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback } from 'reactstrap';
// import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState = () => ({
    data: {
      addProduct: '',
    },
    errors: {}
  });

  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: ''
      }
    });
  }

  validate = () => {
    const { data } = this.state;
    let errors = {};

    if (data.addProduct === '') errors.addProduct = 'Add Product can not be blank.';
    return errors;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { data } = this.state;

    const errors = this.validate();

    if (Object.keys(errors).length === 0) {
      console.log(data);
      // Call an api here
      // Resetting the form
      this.setState(this.getInitialState());
    } else {
      this.setState({ errors });
    }
  }

  render() {
    const { data, errors } = this.state;
    return (
      <div className="header">
      <Form className="ml-3" onSubmit={this.handleSubmit}>
        <FormGroup>
        <Label className="ml-4" style={{fontSize: "27px", fontWeight: "bold"}} for="addProduct">Add Product</Label>
          <Input style={{background: "#f8f8fb"}} type="text" id="addProduct" value={data.addProduct} invalid={errors.addProduct ? true : false} name="addProduct" onChange={this.handleChange} placeholder="Fillin the product details" />
          <FormFeedback>{errors.addProduct}</FormFeedback>
        </FormGroup>
        {/* <Button color="primary">Register</Button> */}
      </Form>
         {/* <h3 className="">Add Product</h3> */}
      </div>
    );
  }
}

export default Header;

