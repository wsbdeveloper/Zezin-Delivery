const market = (state = [],action) =>{
    switch(action.type){
        case 'ADD_PRODUCT_MARKET':
            return [
                ...state,
                {
                    market : action.products
                }
            ]
        default:
            return state
    }
}

export default market;