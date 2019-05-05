import React from 'react';

function getSymbolByCurrency(currency) {
    return {
        BRL: 'R$',
    }[currency] || '';
};

const Price = (props) => {

    const {currency, value} = props;
    const symbol = getSymbolByCurrency(currency);

    return <div>{symbol} {value}</div>;

};

export default Price;