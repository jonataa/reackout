import withData from '../lib/apollo';

import {
    Layout,
    ProductList,
} from '../components';

export default withData(props => (
    <Layout>
        <ProductList></ProductList>
    </Layout>
));