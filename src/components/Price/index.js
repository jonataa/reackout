import React from 'react';

function getSymbolByCurrancy(currancy) {
    return {
        BRL: 'R$',
    }[currancy] || '';
};

const Price = (props) => {

    const {currancy, value} = props;
    const symbol = getSymbolByCurrancy(currancy);

    return (
        <span>{symbol} {value}</span>
    );

};

export default Price;