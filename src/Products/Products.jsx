// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";


const Products = () => {
    const {products} = useLoaderData();
    console.log(products);
    //2 nd system//
    // const [products, setProducts]=useState([]);
    // useEffect(()=>{
    //     fetch('https://dummyjson.com/products')
    //     .then(res=>res.json())
    //     .then(data=> setProducts(data.products))
    // },[])

    // console.log(products);

    return (
        <div className="md:grid md:grid-cols-4">
            {
                products.map(product=><Product key={product.id} product={product}></Product>)
            }
        </div>

    );
};

export default Products;