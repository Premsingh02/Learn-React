import Product from "./Product.jsx "

function ProductTab() {
    let options = ["hi-tech", "durable", "fast"];
    // let options2 = {a: "hi-tech", b:"durable", c:"fast"};
    return (
    <>
        <Product title="phone" price={20000} features={options} features2={{a:"hi-tech",b:"durable"}}/>
        <Product title="laptop" price={50000}/>
        <Product title="pen" price={1}/>
    </>
    );
}

export default ProductTab;