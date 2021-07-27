export const movieReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      if (!state.includes(action.movieId)) {
        return [...state, action.movieId]
      }
      return state
      

    case 'REMOVE_MOVIE':
      return state.filter(id => id !== action.movieId)

    default:
      console.log(`Unhandled action type: ${action.type}`)
      return state
    
  }
}