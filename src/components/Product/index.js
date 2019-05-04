import React from 'react';

import Price from '../Price';

const Product = (props) => {

    const {id, title, price} = props;

    return (
        <div>id: {id}, title: {title}, price: <Price currancy={price.currancy} value={price.value} /></div>
    );

};

export default Product;