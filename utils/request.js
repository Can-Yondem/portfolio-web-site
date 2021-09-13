import axios from "axios";

const URL = "https://strapi-portfolio-api-ex.herokuapp.com/";

const request = {
    getPeople: axios.get(`${URL}/people`),
	getSkills: axios.get(`${URL}/skills`),
	getProjects: axios.get(`${URL}/projects`),
	getSocialMedia: axios.get(`${URL}/social-medias`)
}

export default request;


