import axios from "axios";

// heroku: https://web-api-ecomerce.herokuapp.com/

const http = axios.create({
	baseURL: "https://web-api-ecomerce.herokuapp.com/",
});

export const fetcher = (path: string) =>
	http.get(path).then((res: any) => res.data);

export default http;
