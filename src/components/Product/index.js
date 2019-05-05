import React from 'react';

import Price from '../Price';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    padding: 10px;
`;

const Photo = styled.img`
    width: 100%;
    border: 1px solid #000;
`;

const Title = styled.p`
    color: red;
`;

const Product = ({title, price, photo = {}}) => {

    return (
        <Container>
            <Photo as="img" src={photo.url} alt={photo.alt}></Photo>
            <Title>{title}</Title>
            <Price currency={price.currency} value={price.value} />
            <Button variant="contained" color="primary">Comprar</Button>
        </Container>
    );

};

export default Product;