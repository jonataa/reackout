import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Product from '../Product';
import { Container } from './style';

const GET_PRODUCTS = gql`
  {
    products {
      id
      title
      photo {
        url
        alt
      }
      price {
        value
        currency
      }
    }
  }
`;

const renderProducts = ({data, loading, error}) => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    return data.products.map((product, index) => (
        <Product key={index} title={product.title} photo={product.photo} price={product.price} />
    ));
}; 

const ProductList = () => {
    return (
        <Container>
            <Query query={GET_PRODUCTS}>{renderProducts}</Query>
        </Container>
    );
};

export default ProductList;