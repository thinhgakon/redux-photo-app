const initialState = [

];

const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_ALBUM':
            const newList = [...state];
            newList.push(action.payload);
            return newList;

        default:
            break;
    }
    return state;
}

export default photoReducer;