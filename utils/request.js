import axios from "axios";

const URL = "http://localhost:1337";

const request = {
    getPeople: axios.get(`${URL}/people`),
	getSkills: axios.get(`${URL}/skills`),
	getProjects: axios.get(`${URL}/projects`),
	getSocialMedia: axios.get(`${URL}/social-medias`)
}

export default request;


