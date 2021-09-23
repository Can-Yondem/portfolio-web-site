import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { postEmail, getPeople, getSkills,getProject } from "../../urls";
import {lang_config} from "../../lang_config";

export const fetchPeopleData = createAsyncThunk("people/getPeople", async (lang) => {
    console.log(lang);
    const res = await axios.get(`${getPeople}?_locale=${lang}`)
    return res.data[0]
})

export const fetchSkillsData = createAsyncThunk("fetchData/getSkills", async () => {
    const res = await axios.get(getSkills)
    return res.data
})

export const fetchProjectsData = createAsyncThunk("fetchData/getProjects", async (lang) => {
    const res = await axios.get(`${getProject}?_locale=${lang}`)
    return res.data
})

export const postMail = createAsyncThunk("fetchData/postmail", async (senderData) => {
    await axios.post(postEmail,senderData )
})


export const peopleSlice = createSlice({
    name: "fetchData",
    initialState: {
        peopleData: null,
        skillsData: null,
        projectsData: null,
        isLoading: false,
        language: lang_config["tr"]
    },
    reducers: {
        mailData: (state, action) => {
            state.userEmailData = action.payload
        },
        setLanguage: (state, action) => {
            state.language = lang_config[action.payload];
        }
    },
    extraReducers: {
        [fetchPeopleData.fulfilled]: (state, action) => {
            state.peopleData = action.payload;
            state.isLoading = true;
        },
        [fetchSkillsData.fulfilled]: (state, action) => {
            state.skillsData = action.payload;
        },
        [fetchProjectsData.fulfilled]: (state, action) => {
            state.projectsData = action.payload;
        },
        [postMail.fulfilled]: (state, action) => {
            alert("Your message has been sent");
        },
        
    }

})

export const { mailData,setLanguage } = peopleSlice.actions;
export default peopleSlice.reducer;