const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:7000"
    : "https://ishop-ecommerce-website.onrender.com";

module.exports = baseUrl;
