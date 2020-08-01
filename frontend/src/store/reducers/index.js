const initialState = {

}

const updateObj = (state, newState) => {
    return {... state,
            ...newState
    }
}

const BaseReducer = (state=initialState, action) => {
  
}

export default BaseReducer;