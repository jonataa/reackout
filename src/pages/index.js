import withData from '../lib/apollo';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';

export default withData(props => (
    <Layout>
        <ProductList></ProductList>
    </Layout>
));