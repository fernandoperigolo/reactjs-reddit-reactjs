import {
  fetchPostsSortBy,
} from '../utils/RedditAPI'

import { normalizeObjectBy } from '../utils/helpers'

export const SET_POSTS = 'SET_POSTS'
export const SET_MORE_POSTS = 'SET_MORE_POSTS'

function setPosts(posts, after) {
  return {
    type: SET_POSTS,
    payload: {
      posts,
      after,
    },
  }
}

function setMorePosts(posts, after) {
  return {
    type: SET_MORE_POSTS,
    payload: {
      posts,
      after,
    },
  }
}

export function handleFetchPostsSortBy(filter, afterId = '') {
  return (dispatch) => {
    return fetchPostsSortBy(filter, afterId).then(({data}) => {
      dispatch(setPosts(normalizeObjectBy('data', 'id', data.children), data.after))
    })
    .catch(error =>  console.warn('Error on try to fetchPostsSortBy:', error))
  }
}

export function handleFetchPostsAfterSortBy(filter, afterId = '') {
  return (dispatch) => {
    return fetchPostsSortBy(filter, afterId).then(({data}) => {
      dispatch(setMorePosts(normalizeObjectBy('data', 'id', data.children), data.after))
    })
    .catch(error =>  console.warn('Error on try to handleFetchPostsAfterSortBy:', error))
  }
}
