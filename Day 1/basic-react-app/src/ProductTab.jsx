import Product from "./Product"

function ProductTab() {
    return (
    <>
        <Product title="phone" price={20000}/>
        <Product title="laptop" price={50000}/>
        <Product title="pen"/>
    </>
    );
}

export default ProductTab;