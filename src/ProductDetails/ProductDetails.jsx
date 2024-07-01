import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const productDetails = useLoaderData();
    const { title, brand, description, images, price } = productDetails;

    return (
        <div className=" flex justify-center">
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={images}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-blue-800">Brand: {brand}</p>
                    <p>{description}</p>
                    <h2 className="font-bold">Price: ${price}</h2>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                    <Link to='/product'>
                        <button className="btn btn-outline btn-warning">Back to Previous page</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;