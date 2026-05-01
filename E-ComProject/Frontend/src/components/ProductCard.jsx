function ProductCard({ product, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid #ccc",
        margin: "10px",
        padding: "10px",
        cursor: "pointer",
      }}
    >
      <h3>{[product.name]}</h3>
      <p>₹{product.price}</p>
    </div>
  );
}

export default ProductCard;
