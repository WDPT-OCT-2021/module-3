import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3001/api/products",
    withCredentials: true,
});

export const productService = {
    getProductsList: () => instance.get("/").then((res) => res.data),
    getProduct: (productId) =>
        instance.get(`/${productId}`).then((res) => res.data),
    createProduct: (body) => instance.post("/", body).then((res) => res.data),
    updateProduct: (bodyWithProductId) =>
        instance.put("/", bodyWithProductId).then((res) => res.data),
    deleteProduct: (productId) =>
        instance.delete(`/${productId}`).then((res) => res.data),
};
