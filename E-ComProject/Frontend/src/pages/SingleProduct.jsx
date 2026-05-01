import { useEffect, useState } from "react";
import { getSingleProduct } from "../api";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    loadProduct();
    console.log(product)
  }, [id]);

  const loadProduct = async () => {
    const data = await getSingleProduct(id);
    console.log(data.data)
    setProduct(data.data);
  };

  if (!product) return <p>Loading...</p>;
  
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h3>₹{product.price}</h3>
      <img src={product.image} alt="" width="300px" height="200px"/>
    </div>
  );
}

export default SingleProduct;
