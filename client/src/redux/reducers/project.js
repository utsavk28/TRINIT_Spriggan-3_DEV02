import {
    GET_BUG,
    GET_BUGS,
    GET_PROJECT,
    CREATE_PROJECT,
    GET_PROJECTS,
    PROJECT_ERROR,
    GET_THREAD,
} from '../type';

const initialState = {
    loading: true,
    project: {},
    projects: [],
    error: null,
    bugs: [],
    bug: {},
    comments: [],
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_PROJECT:
            return {
                ...state,
                project: payload,
                loading: false,
                error: null,
            };
        case GET_PROJECTS:
            return {
                ...state,
                projects: payload,
                loading: false,
                error: null,
            };
        case GET_BUG:
            return {
                ...state,
                bug: payload,
                loading: false,
                error: null,
            };
        case GET_BUGS:
            return {
                ...state,
                bugs: payload,
                loading: false,
                error: null,
            };
        case PROJECT_ERROR:
            return {
                ...state,
                error: payload,
            };
        case GET_THREAD:
            return {
                ...state,
                comments: payload,
            };
        default:
            return state;
    }
};

export default reducer;
