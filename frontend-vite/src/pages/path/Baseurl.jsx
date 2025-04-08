const baseUrl =
  import.meta.env.MODE !== "production"
    ? "http://localhost:7000"
    : "https://ishop-ecommerce-website.onrender.com";

export default baseUrl;