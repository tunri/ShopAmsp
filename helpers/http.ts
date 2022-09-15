import axios from "axios";

// heroku: https://web-api-ecomerce.herokuapp.com/

const http = axios.create({
	baseURL: "http://stale-rooms-jump-200-215-228-188.loca.lt",
});

export default http;
