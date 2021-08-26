const FOLLOW = 'FOLLOW';
const UNFOLLOW ='UNFOLLOW';
const SET_USERS ='SET_USERS';

let initialState = {
  users: [
    // { id: 1, followed: false, fullName: 'Andrew', status: 'I am the boss', location: {city: 'Moscow', country: 'Russia'} },
    // { id: 2, followed: true, fullName: 'Sasha', status: 'I am not the boss', location: {city: 'Minsk', country: 'Belarus'} },
    // { id: 3, followed: false, fullName: 'Mikola', status: 'I am the ???', location: {city: 'Kiev', country: 'Ukrain'} },
  ]
}

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map( u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
      case UNFOLLOW:
        return {
          ...state,
          users: state.users.map( u => {
            if (u.id === action.userId) {
              return {...u, followed: false}
            }
            return u;
          })
        }
      case SET_USERS: {
        return {
          ...state,
          users: [...state.users, ...action.users]
        }
      }
    default:
      return state;
  }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })

export const unfollowAC = (userId) => 
({ type: UNFOLLOW, userId })

export const setUsersAC = (users) => 
({ type: SET_USERS })

export default usersReducer;
