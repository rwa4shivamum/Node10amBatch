const BASE_URL = "http://localhost:8080/api/v1";

export const getCategories = async () => {
    const res = await fetch(`${BASE_URL}/getAllCategory`);
    return res.json();
}

export const getProductByCategory = async (id) => {
    const res = await fetch(`${BASE_URL}/getCategoryProduct/${id}`);
    return res.json();
}

export const getSingleProduct = async (id) => {
    const res = await fetch(`${BASE_URL}/singleProduct/${id}`);
    return res.json();
}