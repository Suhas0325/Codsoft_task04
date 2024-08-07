const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.id === item.id);

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                        x.id === existItem.id ? { ...x, qty: x.qty + 1 } : x
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...item, qty: 1 }],
                };
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
            };
        case 'DECREASE_QUANTITY':
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === action.payload.id && item.qty > 1
                        ? { ...item, qty: item.qty - 1 }
                        : item
                ),
            };
        default:
            return state;
    }
};

export default cartReducer;
