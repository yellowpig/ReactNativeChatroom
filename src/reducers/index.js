function chatReducer(state = [], action) {
    switch (action.type) {
        case 'MSG_IN':
            return state.concat([action.msg]);

        default:
            return state
    }
}

export default function reducers(state={},action){
    return{
        messages:chatReducer(state.messages,action),
    };
}