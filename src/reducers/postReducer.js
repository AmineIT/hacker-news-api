import * as types from '../actions/types'

const initialState = {
    newPostsIDs: [],
    newPosts: [],
    topPostsIDs: [],
    topPosts: [],
    newLimit: 20,
    topLimit: 20,
    newSkip: 10,
    topSkip: 10,
    topLength: 0,
    newLength: 0,
    isLoading: false,
};

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case types.LOADING_DATA:
            return {
                ...state,
                isLoading: true
            }
        case types.FETCH_NEW_POSTS_IDS:
            return {
                ...state,
                isLoading: false,
                newPostsIDs: action.payload,
                newLength: action.payload.length
            }
        case types.FETCH_NEW_POSTS:
            return {
                ...state,
                newPosts: action.payload,
                isLoading: false,
            }
        case types.FETCH_TOP_POSTS_IDS:
            return {
                ...state,
                isLoading: false,
                topPostsIDs: action.payload,
                topLength: action.payload.length
            }
        case types.FETCH_TOP_POSTS:
            return {
                ...state,
                topPosts: action.payload,
                isLoading: false,
            }
        case types.LOAD_MORE_NEW_POSTS:
            return {
                ...state,
                isLoading: false,
                newPosts: [...state.newPosts, ...action.payload],
                newLimit: [...state.newPosts, ...action.payload].length + state.newLimit,
                newSkip: [...state.newPosts, ...action.payload].length
            }
        case types.LOAD_MORE_TOP_POSTS:
            return {
                ...state,
                isLoading: false,
                topPosts: [...state.topPosts, ...action.payload],
                topLimit: [...state.topPosts, ...action.payload].length + state.topLimit,
                topSkip: [...state.topPosts, ...action.payload].length
            }
        default:
            return state;
    }
}