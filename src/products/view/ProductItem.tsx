import React from 'react';
import {Card, Col, Button} from 'react-bootstrap';
import Product from '../core/types/Product';

interface Props {
  product: Product;
}

const ProductItem = (props: Props) => {
  return (
    <Col lg={3} md={4} sm={6}>
      <Card className="p-2">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Title>{props.product.name}</Card.Title>
        <Card.Text>{props.product.price}</Card.Text>
      </Card>
    </Col>
  );
};

export default ProductItem;
