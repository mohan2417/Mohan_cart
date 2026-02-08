import { Fragment, useEffect, useState } from "react";
import Productcard from "../Components/ProductCart";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [products, setproduct] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_API_URL +
          "/api/v1/products?" +
          searchParams.toString()
      )
      .then(res => setproduct(res.data.product || []))
      .catch(err => console.error(err));
  }, [searchParams]);

  return (
    <Fragment>
      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5">
        <div className="row">
          {products.map(product => (
            <Productcard product={product} />
          ))}
        </div>
      </section>
    </Fragment>
  );
}
