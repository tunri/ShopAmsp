import axios from "axios";

// heroku: https://web-api-ecomerce.herokuapp.com/

const http = axios.create({
	baseURL: "https://web-api-ecomerce.herokuapp.com/",
});

export default http;
