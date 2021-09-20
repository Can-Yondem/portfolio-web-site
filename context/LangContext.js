import React,{ createContext,useState, useEffect} from "react";
import {lang_config} from "../lang_config";
import axios from "axios";

const LangContext = createContext();

export const LangProvider = ({children}) => {
    const [language, setLanguage] = useState("tr");
    const lang= lang_config[language];
    const [peopleData, setPeopleData] = useState(null);
    const [projectData, setProjectData] = useState(null);
    const [skillData, setSkillData] = useState(null);

    const URL = "https://limitless-castle-16392.herokuapp.com";
    const getPeople = `${URL}/people?_locale=${language}`
	const getSkills = `${URL}/skills`
	const getProject = `${URL}/projects?_locale=${language}`

    useEffect(() => {
        const fetchData = async () => {
        const response = await axios.get(getPeople);
        setPeopleData(response.data[0]);
        }
        fetchData();
    },[language]);

    useEffect(async () => {
        const fetchData = async () => {
            const response = await axios.get(getProject);
            setProjectData(response.data);
        }
        fetchData();
    },[language]);

    useEffect(() => {
        const fetchData = async () => {
        const response = await axios.get(getSkills);
        setSkillData(response.data);
        }
        fetchData();
      },[]);
    

    if (!peopleData) return null;
    if (!projectData) return null;
    if (!skillData) return null;

    console.log("asd",skillData);
    return (
        <LangContext.Provider value={{setLanguage, language, lang, peopleData, projectData, skillData}}>
            {children}
        </LangContext.Provider>
    )
}

export default LangContext;
