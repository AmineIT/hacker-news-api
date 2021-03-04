import * as types from '../actions/types'
import axios from 'axios'
import { returnErrors } from './errorActions'

const fetchData = (endPoint) => {
    return axios.get(`${types.BASE_URL}/${endPoint}${types.JSON_QUERY}`)
}

export const fetchPosts = (endPoint) => (dispatch, getState) => {

    // We'll be using the endPoint paramater to distinguich between the two paths (i.e. /newstories or /topstories) 

    dispatch({
        type: types.LOADING_DATA
    })

    fetchData(endPoint).then(res => {

        const { data } = res
        // Store the Posts ID to load more data
        dispatch({
            type: endPoint === '/newstories' ? types.FETCH_NEW_POSTS_IDS : types.FETCH_TOP_POSTS_IDS,
            payload: data
        })

        const { newPostsIDs, topPostsIDs } = getState().posts

        const IDsArray = endPoint === '/newstories' ? [...newPostsIDs] : [...topPostsIDs]

        const promises = IDsArray.slice(0, 10).map(id => {
            return fetchData(`/item/${id}`).then(res => res.data)
        })

        Promise.all(promises).then(res => {
            dispatch({
                type: endPoint === '/newstories' ? types.FETCH_NEW_POSTS : types.FETCH_TOP_POSTS,
                payload: res
            })
        })

    }).catch(() => {
        dispatch(
            returnErrors('Failed to fetch posts', '500', 'FAIL_FETCH_POSTS')
        )
    })

}

export const loadMore = (endPoint) => (dispatch, getState) => {

    dispatch({
        type: types.LOADING_DATA
    })

    const { newPostsIDs, topPostsIDs, newLimit, newSkip, topLimit, topSkip } = getState().posts

    const IDsArray = endPoint === '/newstories' ? [...newPostsIDs] : [...topPostsIDs]
    const begin = endPoint === '/newstories' ? newSkip : topSkip
    const end = endPoint === '/newstories' ? newLimit : topLimit

    const promises = IDsArray.slice(begin, end).map(id => {
        return fetchData(`/item/${id}`).then(res => res.data)
    })

    Promise.all(promises).then(res => {
        dispatch({
            type: endPoint === '/newstories' ? types.LOAD_MORE_NEW_POSTS : types.LOAD_MORE_TOP_POSTS,
            payload: res
        })
    }).catch(() => {
        dispatch(
            returnErrors('Failed to load more posts', '500', 'FAIL_LOAD_POSTS')
        )
    })

}

// export const fetchTopPosts = () => (dispatch, getState) => {

//     dispatch({
//         type: types.LOADING_DATA
//     })

//     fetchData('/topstories').then(res => {

//         const { data } = res
//         // Store the Posts ID to load more data
//         dispatch({
//             type: types.FETCH_TOP_POSTS_IDS,
//             payload: data
//         })

//         const { topLimit, topSkip, topPostsIDs } = getState().posts

//         const promises = topPostsIDs.slice(topSkip, topLimit).map(id => {
//             return fetchData(`/item/${id}`).then(res => res.data)
//         })

//         Promise.all(promises).then(res => {
//             dispatch({
//                 type: types.FETCH_TOP_POSTS,
//                 payload: res
//             })
//         })

//     }).catch(() => {
//         dispatch(
//             returnErrors('Failed to fetch posts', '500', 'FAIL_FETCH_POSTS')
//         )
//     })

// }