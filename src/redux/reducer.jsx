import * as actionTypes from './actionTypes';
import {updateObject} from "../shared/utility";

const defaultState = {
    metadata : {},
    payments : []
};

const setMetadata = (state, action) => {
    return updateObject(state, {
        metadata: action.metadata
    })
};

const setPayments = (state, action) => {
    return updateObject(state, {
        payments: state.payments.concat(action.payments)
    })
};

export const reducer = (state = defaultState, action) => {
    switch(action.type){
        case actionTypes.SET_PAYMENT: return setPayments(state, action);
        case actionTypes.SET_METADATA: return setMetadata(state, action);
        default: return state
    }
};