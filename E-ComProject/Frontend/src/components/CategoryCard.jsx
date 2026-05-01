function CategoryCard({ category, onClick }) {
  return (
    <button onClick={onClick} style={{ margin: "10px" }}>
      {[category.name]}
    </button>
  );
}

export default CategoryCard;
