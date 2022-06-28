const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:7000"
    : "https://mern-ishop-backend.herokuapp.com";

module.exports = baseUrl;