
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, title, category, images,price } = product;
    return (
        <div className="card card-compact bg-stone-200 m-2 shadow-xl">
            <figure>
                <img className='h-52 w-full'
                    src={images}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='font-bold text-teal-600'>{category}</p>
                <h1 className='text-xl font-bold'>${price}</h1>
                <div className="card-actions justify-end">
                    
                    <Link to={`/product/${id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object,
}
export default Product;
