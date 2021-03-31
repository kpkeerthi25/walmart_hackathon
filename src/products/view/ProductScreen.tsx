import React from 'react';
import {Container} from 'react-bootstrap';
import ProductList from './ProductList';

interface Props {}

const ProductScreen = (props: Props) => {
  return (
    <div className="container-fluid mt-4 ">
      <ProductList />
    </div>
  );
};

export default ProductScreen;
