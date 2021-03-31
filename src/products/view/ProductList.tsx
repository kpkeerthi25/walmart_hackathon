import React from 'react';
import {Row} from 'react-bootstrap';
import Product from '../core/types/Product';
import ProductItem from './ProductItem';
import './ProductList.css';
interface Props {}

const products: Product[] = [
  {
    name: '1',
    picture: 'a',
    brand_name: 'b',
    price: 10.0,
  },
  {
    name: '1',
    picture: 'a',
    brand_name: 'b',
    price: 10.0,
  },
  {
    name: '1',
    picture: 'a',
    brand_name: 'b',
    price: 10.0,
  },
  {
    name: '1',
    picture: 'a',
    brand_name: 'b',
    price: 10.0,
  },
  {
    name: '1',
    picture: 'a',
    brand_name: 'b',
    price: 10.0,
  },
  {
    name: '1',
    picture: 'a',
    brand_name: 'b',
    price: 10.0,
  },
  {
    name: '1',
    picture: 'a',
    brand_name: 'b',
    price: 10.0,
  },
];

const ProductList = (props: Props) => {
  return (
    <Row>
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </Row>
  );
};

export default ProductList;
