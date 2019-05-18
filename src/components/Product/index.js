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
`;

const Title = styled.p`
    color: #102E4A;
    font-weight: 300;
`;

const Product = ({title, price, photo = {}}) => (
    <Container>
        <Photo as="img" src={photo.url} alt={photo.alt}></Photo>
        <Title>{title}</Title>
        <Price currency={price.currency} value={price.value} />
        <Button variant="outlined">Comprar</Button>
    </Container>
);

export default Product;