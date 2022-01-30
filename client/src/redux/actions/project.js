import axios from 'axios';
import url from '../../utils/api';
import {
    GET_BUG,
    GET_BUGS,
    GET_PROJECT,
    CREATE_PROJECT,
    GET_PROJECTS,
    PROJECT_ERROR,
    GET_THREAD,
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
        console.log('000');
        const res = await axios.get(`${url}/api/project/user/request`);
        // console.log(res.data);
        // const res = {
        //     data:0
        // }
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
    ({ title, descriptions, projectId, threat_level = 0 }) =>
    async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const body = JSON.stringify({
            title,
            descriptions,
            projectId,
            threat_level,
        });
        try {
            await axios.post(`${url}/api/bugs/`, body, config);
        } catch (error) {
            dispatch({
                type: PROJECT_ERROR,
                payload: 'error',
            });
        }
    };

export const joinProject =
    ({ projectId }) =>
    async (dispatch) => {
        try {
            await axios.put(`${url}/api/project/join/${projectId}`);
        } catch (error) {
            dispatch({
                type: PROJECT_ERROR,
                payload: 'error',
            });
        }
    };

export const getThreadbyBugId =
    ({ bugId }) =>
    async (dispatch) => {
        try {
            const res = await axios.get(`${url}/api/comments/bug/${bugId}`);
            console.log(res.data);
            console.log(bugId);
            dispatch({
                type: GET_THREAD,
                payload: res.data,
            });
        } catch (error) {
            dispatch({
                type: PROJECT_ERROR,
                payload: 'thread error',
            });
        }
    };

export const postComment =
    ({ bugId, comment }) =>
    async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const body = JSON.stringify({ description: comment, bugId });
        // console.log(body);
        try {
            await axios.post(`${url}/api/comments/`, body, config);
            getThreadbyBugId({ bugId });
        } catch (error) {
            dispatch({
                type: PROJECT_ERROR,
                payload: 'error',
            });
        }
    };
