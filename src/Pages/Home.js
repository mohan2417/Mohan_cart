import { Fragment, useEffect, useState } from "react";
import Productcard from "../Components/ProductCart";
import { useSearchParams } from "react-router-dom";
// import productsmodel from "../../../backend/Models/productModel";

export default function Home() {
    const [products , setproduct] = useState([]);
    const [searchParams ,  setSearchParams] = useSearchParams()
    useEffect (() => {
   fetch(process.env.REACT_APP_API_URL+'/product?'+searchParams.toString())
   .then(res => res.json())
   .then(res => setproduct(res.product || []));
    },[searchParams])
  return (
    <Fragment>
      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5">
        <div className="row">
            {products.map(product => (<Productcard  product={product}/>))}
         {/* <Productcard/> */}
        </div>
      </section>
    </Fragment>
  );
}

