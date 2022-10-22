const Reducer = (state, action) => {
    if(state===undefined)
    {
        return {
            counter : 0
        }
    }
    switch(action.type)
    {
        case "INCREASE":
        state.counter = state.counter + 1;
        break;
        default:
        break;
    }
    return{...state}
}
export default Reducer;