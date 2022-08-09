import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback } from 'reactstrap';
import ProductImage from "./ProductImage/ProductImage-file.component"
// import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import './main.css';

class Product extends Component {

  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState = () => ({
    data: {
      sellingPrice: '',
      commissionRate: '',
      recievable: '',
      discount: '',
      discounts: '',
      recievables: '',
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
    if (data.sellingPrice === '') errors.sellingPrice = 'Selling Price can not be blank.';
    if (data.commissionRate === '') errors.commissionRate = 'Commission Rate can not be blank.';
    if (data.recievable === '') errors.recievable = 'recievable can not be blank.';
    if (data.discount === '') errors.subCategory = 'Discount can not be blank.';
    if (data.discounts === '') errors.noStock = 'Discounts can not be blank.';
    if (data.recievables === '') errors.recievables = 'Recievables can not be blank.';
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
      <div className="form-section">
      <div className="form-header">
      <Form onSubmit={this.handleSubmit}>
        {/* <FormGroup>
          <Input style={{background: "#f8f8fb"}} type="text" id="addProduct" value={data.addProduct} invalid={errors.addProduct ? true : false} name="addProduct" onChange={this.handleChange} placeholder="Fillin the product details" />
          <FormFeedback>{errors.addProduct}</FormFeedback>
        </FormGroup> */}

        <div className="Input-Header-Section">
        <FormGroup>
          <Label className="label-for-ProductComponent" for="sellingPrice">Selling Price</Label>       
          <Input type="text"  className="sellingPrice" style={{padding: "13%"}} id="sellingPrice lg" value={data.sellingPrice} invalid={errors.sellingPrice ? true : false} name="sellingPrice" onChange={this.handleChange} placeholder="₦ 80, 000 " />
          <FormFeedback>{errors.sellingPrice}</FormFeedback>
        </FormGroup>

        <FormGroup className="commissionRate-Header">
          <Label className="label-for-ProductComponent" for="commissionRate">Commission Rate</Label>
          <Input className="commissionRate" id="commissionRate" type='text' value={data.commissionRate} invalid={errors.commissionRate ? true : false} name="commissionRate" onChange={this.handleChange} placeholder="% 10" />
          <FormFeedback>{errors.commissionRate}</FormFeedback>
        </FormGroup>
        </div>

        <FormGroup>
          <Label className="label-for-ProductComponent" for="recievable">Recievable</Label>
          <Input id="recievable" style={{padding: "28px", background: "#f1f1f2"}} value={data.recievable} invalid={errors.recievable ? true : false} name="recievable" onChange={this.handleChange} placeholder=" ₦ 72,000" />
          <FormFeedback>{errors.recievable}</FormFeedback>
        </FormGroup>

        <div className="Input-Header-Section">
        <FormGroup>
          <Label for="discount">Discount</Label>
          <Input id="discount" className="discount" style={{padding: "28px"}} value={data.discount} invalid={errors.discount ? true : false} name="discount" onChange={this.handleChange} placeholder="₦ 10, 000" />
          <FormFeedback>{errors.discount}</FormFeedback>
        </FormGroup>

        <FormGroup className="discount-header">
          <Label for="discounts">Discounts </Label>
          <Input id="discounts" className="discounts" value={data.discounts} invalid={errors.discounts ? true : false} name="discounts" onChange={this.handleChange} placeholder="₦ 70, 000" />   
          <FormFeedback>{errors.noStock}</FormFeedback>
        </FormGroup>
        </div>

        <FormGroup>
          <Label className="label-for-ProductComponent" for="recievables">Recievables</Label>
          <Input id="recievables" style={{padding: "28px", background: "#f1f1f2"}} value={data.recievables} invalid={errors.recievables ? true : false} name="recievables" onChange={this.handleChange} placeholder=" ₦ 62,000" />
          <FormFeedback>{errors.recievables}</FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label className="label-for-ProductComponent" for="recievables">Add Product Images</Label>
        </FormGroup>
        {/* <Button color="primary">Register</Button> */}
      </Form>

      
      {/* <ProductImage /> */}

      </div>
      <div className="ProductImage-components">
      <ProductImage />
      </div>
      </div>
    );
  }
}

export default Product;
