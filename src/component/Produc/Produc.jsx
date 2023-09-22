import { useLoaderData } from "react-router-dom";

const Produc = () => {
    const Product = useLoaderData();
    const { thumbnail, brand, description, price } = Product;
    return (
        <div className="flex">
            <div>
                <img src={thumbnail} alt="" />
                <h3 className="text-3xl">{brand}</h3>
            </div>
            <div>
                <p>{description}</p>
                <h3 className="text-3xl">{price}</h3>
            </div>
        </div>
    );
};

export default Produc;