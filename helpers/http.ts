import axios from "axios";

// heroku: https://web-api-ecomerce.herokuapp.com/api

const http = axios.create({
	baseURL: "https://web-api-ecomerce.herokuapp.com",
});

export default http;
