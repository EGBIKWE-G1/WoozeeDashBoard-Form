import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback } from 'reactstrap';
// import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
// import '../main.css';
import '../SelectOption.css';
   
class Register extends Component {

  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState = () => ({
    data: {
      // addProduct: '',
      productName: '',
      productDescription: '',
      productCategory: '',
      subCategory: '',
      noStock: '',
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

    // if (data.addProduct === '') errors.addProduct = 'Add Product can not be blank.';
    if (data.productName === '') errors.productName = 'Product Name can not be blank.';
    if (data.productDescription === '') errors.productDescription = 'Product Description can not be blank.';
    if (data.productCategory === '') errors.productCategory = 'Product Category can not be blank.';
    if (data.subCategory === '') errors.subCategory = 'Sub Category can not be blank.';
    if (data.noStock === '') errors.noStock = 'No.available in stock can not be blank.';
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
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label className="label-for-RegisterComponent" for="productName">Product Name</Label>
          <div className="col-sm-40">
          <Input type="text" className="productName" id="productName" value={data.productName} invalid={errors.productName ? true : false} name="productName" onChange={this.handleChange} placeholder="Enter product name" />
          </div>
          <FormFeedback>{errors.productName}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label className="label-for-RegisterComponent" for="productDescription">Product Description</Label>
          <Input id="productDescription" className="productDescription"  type='textareas' value={data.productDescription} invalid={errors.productDescription ? true : false} name="productDescription" onChange={this.handleChange} placeholder="Enter product description" />
          <FormFeedback>{errors.productDescription}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label className="label-for-RegisterComponent" for="productCategory">Product Category</Label>
          <Input id="productCategory" type="select" className="productCategory" style={{border: "none", height: "50px"}} value={data.productCategory} invalid={errors.productCategory ? true : false} name="productCategory" onChange={this.handleChange} placeholder="Select category" />
          <FormFeedback>{errors.productCategory}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label className="label-for-RegisterComponent" for="subCategory">Sub Category</Label>
          <Input id="subCategory"  value={data.subCategory} invalid={errors.subCategory ? true : false} name="subCategory" onChange={this.handleChange} placeholder="Select sub category" />
          {/* <div className="container p-5 Select-Section">
          <select className="Select-Format" name="format" id="format">
            <option selected disabled>Choose a book format</option>
            <option value="pdf">PDF</option>
            <option value="text">text</option>
            <option value="epub">epub</option>
            <option value="fb2">fb2</option>
          </select>
          </div> */}
          <FormFeedback>{errors.subCategory}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label className="label-for-RegisterComponent" for="noStock">No.available in stock</Label>
          <Input id="noStock" value={data.noStock} invalid={errors.noStock ? true : false} name="noStock" onChange={this.handleChange} placeholder="00" />
          <FormFeedback>{errors.noStock}</FormFeedback>
        </FormGroup>
        {/* <Button color="primary">Register</Button> */}
      </Form>
    );
  }
}

export default Register;
