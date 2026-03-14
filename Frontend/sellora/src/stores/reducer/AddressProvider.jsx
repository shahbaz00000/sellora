const addressReducer = (addresses, action) => {
    switch (action.type) {
        case 'SET-ADDRESS':
            return action.payload.addresses;

        case 'ADD-ADDRESS':
            return [...addresses, action.payload.address];
    }
}
export default addressReducer;