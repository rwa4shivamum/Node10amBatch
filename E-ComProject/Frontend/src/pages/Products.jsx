import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { getProductByCategory } from "../api";

function Products() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadProducts();
  }, [id]);

  const loadProducts = async () => {
    const data = await getProductByCategory(id);
    setProducts(data.data);
  };

  return (
    <div>
      <h1>Products</h1>

      {products.map((p) => (
        <ProductCard
          key={p._id}
          product={p}
          onClick={() => navigate(`/product/${p._id}`)}
        />
      ))}
    </div>
  );
}

export default Products;
