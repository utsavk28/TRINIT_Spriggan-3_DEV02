import {
    GET_BUG,
    GET_BUGS,
    GET_PROJECT,
    CREATE_PROJECT,
    GET_PROJECTS,
    PROJECT_ERROR,
} from '../type';

const initialState = {
    loading: true,
    project: {},
    projects: [],
    error: null,
    bugs: [],
    bug: {},
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
        default:
            return state;
    }
};

export default reducer;
