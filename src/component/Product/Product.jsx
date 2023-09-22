import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ Product }) => {
    const { id, brand, description, images, price } = Product;

    return (
        <div>


            <div className="card  bg-base-100 shadow-xl">
                <figure><img className='h-80 w-full' src={images[0]} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{brand}</h2>
                    <p>{description}</p>
                    <h3 className='text-4xl font-extrabold'> $ {price}</h3>
                    <div className="card-actions justify-end">
                        <Link to={`/Product/${id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
Product.propTypes = {
    Product: PropTypes.object.isRequired
};
export default Product;