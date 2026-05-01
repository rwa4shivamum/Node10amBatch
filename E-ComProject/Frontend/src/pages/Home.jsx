import { useEffect, useState } from "react";
import { getCategories } from "../api";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";

function Home() {

const [categories, setCategories] = useState([]);
const navigate = useNavigate();

useEffect(() => {
    loadCategories();
}, []);

const loadCategories = async () => {
    const data = await getCategories();
    setCategories(data.data);
};

return (
    <div>
        <h1>Categories</h1>

        {categories.map(cat => (
            <CategoryCard
                key={cat._id}
                category={cat}
                onClick={() => navigate(`/products/${cat._id}`)}
            />
        ))}
    </div>
);

}

export default Home;