import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";


const Products = () => {
    const { products } = useLoaderData();
    // console.log(products);
    return (
        <div className="grid md:grid-cols-3 gap-5  p-5">
            {
                products?.map((product, index) => <Product key={index} Product={product}> </Product>)
            }

        </div>
    );
};

export default Products;