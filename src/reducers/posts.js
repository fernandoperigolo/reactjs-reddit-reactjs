import {
  SET_POSTS,
  SET_MORE_POSTS,
} from '../actions/posts'

export default function posts(state = {}, action) {
  switch(action.type){
    case SET_POSTS:
      return {
        itens: {
          ...action.payload.posts,
        },
        after: action.payload.after,
      }
    case SET_MORE_POSTS:
      return {
        itens: {
          ...state.itens,
          ...action.payload.posts,
        },
        after: action.payload.after,
      }
   default:
      return state
  }
}
