const reducer = (state, action) => {
    switch(action.type) {
        case "SET_LOADING" :
            return{
                ...state,
                isLoading : true,
            };
        case "GET_PAYLOAD" : 
            return {
                ...state,
                isLoading: false,
                payloads : action.payload.payloads
            };
        case "GET_HISTORY" :
            return {
                ...state,
                isLoading: false,
                history : action.payload.history
            }
    }
    return state;
};

export default reducer;