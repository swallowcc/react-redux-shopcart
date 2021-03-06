import {GET_PRODUCT_LIST_SUCCESS,
         GETTING_PRODUCT_LIST,
         ENABLE_ADD_TO_SHOPCART,
         DISABLE_ADD_TO_SHOPCART} from '../constants/actionTypes';

let initialState = {
    product_list: [],
    is_loading: true,
};

/**
 * @param {object} state
 * @param {string} action
 * @return {function} The reducer of product
 */
export default function product(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT_LIST_SUCCESS:
            state = {
                ...action,
                is_loading: false,
            };
            break;
        case GETTING_PRODUCT_LIST:
            state = initialState;
            break;
        case ENABLE_ADD_TO_SHOPCART:
            {
                state = {
                    ...state,
                    is_loading: false,
                };

                let product = state.product_list.filter(({id}) => id == action.id)[0];
                delete(product.is_disabled);
                break;
            }
        case DISABLE_ADD_TO_SHOPCART:
            {
                state = {
                    ...state,
                    is_loading: false,
                };

                let product = state.product_list.filter(({id}) => id == action.id)[0];
                product.is_disabled = true;
                break;
            }
    }

    return state;
}
