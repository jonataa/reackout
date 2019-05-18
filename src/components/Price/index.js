import React from 'react';

import { Text } from './style';

function getSymbolByCurrency(currency) {
    return {
        BRL: 'R$',
    }[currency] || '';
};

const Price = (props) => {
    const {currency, value} = props;
    const symbol = getSymbolByCurrency(currency);

    return <Text>{symbol} {value}</Text>;
};

export default Price;