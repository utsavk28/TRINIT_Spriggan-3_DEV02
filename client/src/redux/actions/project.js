import axios from 'axios';
import url from '../../utils/api';
import {
    GET_BUG,
    GET_BUGS,
    GET_PROJECT,
    CREATE_PROJECT,
    GET_PROJECTS,
    PROJECT_ERROR,
} from '../type';

export const getAllBugsforProject = (projectId) => async (dispatch) => {
    try {
        const res = await axios.get(`${url}/api/bugs/project/${projectId}`);
        dispatch({
            type: GET_BUGS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: PROJECT_ERROR,
            payload: 'error',
        });
    }
};

export const getBug = (bugId) => async (dispatch) => {
    try {
        const res = await axios.get(`${url}/api/bugs/${bugId}`);
        dispatch({
            type: GET_BUG,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: PROJECT_ERROR,
            payload: 'error',
        });
    }
};

export const getProjects = () => async (dispatch) => {
    try {
        const res = await axios.get(`${url}/api/project/`);
        // console.log(res.data);
        dispatch({
            type: GET_PROJECTS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: PROJECT_ERROR,
            payload: 'error',
        });
    }
};

export const getUserProjects = () => async (dispatch) => {
    try {
        const res = await axios.get(`${url}/api/project/user`);
        // console.log(res.data);
        dispatch({
            type: GET_PROJECTS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: PROJECT_ERROR,
            payload: 'error',
        });
    }
};

export const getProject = (projectId) => async (dispatch) => {
    try {
        const res = await axios.get(`${url}/api/project/${projectId}`);
        dispatch({
            type: GET_PROJECT,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: PROJECT_ERROR,
            payload: 'error',
        });
    }
};

export const createProject =
    ({ projectname, descriptions }) =>
    async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const body = JSON.stringify({ projectname, descriptions });
        try {
            await axios.post(`${url}/api/project/`, body, config);
            getUserProjects();
        } catch (error) {
            dispatch({
                type: PROJECT_ERROR,
                payload: 'error',
            });
        }
    };

export const reportBug =
    ({ title, descriptions, projectId }) =>
    async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const body = JSON.stringify({ title, descriptions, projectId });
        try {
            await axios.post(`${url}/api/bugs/`, body, config);
        } catch (error) {
            dispatch({
                type: PROJECT_ERROR,
                payload: 'error',
            });
        }
    };
