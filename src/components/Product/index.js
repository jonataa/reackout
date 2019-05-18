import React from 'react';

import Price from '../Price';
import Button from '@material-ui/core/Button';
import { 
    Container,
    Photo,
    Title,
} from './style';

const Product = ({title, price, photo = {}}) => (
    <Container>
        <Photo as="img" src={photo.url} alt={photo.alt}></Photo>
        <Title>{title}</Title>
        <Price currency={price.currency} value={price.value} />
        <Button variant="outlined">Comprar</Button>
    </Container>
);

export default Product;