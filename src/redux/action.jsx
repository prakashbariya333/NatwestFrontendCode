import AxiosApi from '../services/AxiosApi'
import * as actionTypes from './actionTypes';

export const setMetadata = (metadata) => ({ type: actionTypes.SET_METADATA, metadata : metadata  })
export const setPayments = (payments) => ({ type: actionTypes.SET_PAYMENT, payments : payments  })

export const getPayments = (metadata) => {
    return dispatch => {
        let requestParam = { params : {}};
        if(metadata) {
            requestParam.params.pagelndex = metadata.nextPageIndex
        }
        console.log(metadata,requestParam );
        return AxiosApi.get("/payments", requestParam).then(response => {
            dispatch(setPayments(response.data.results));
            dispatch(setMetadata(response.data.metaDatal));
        }).catch(err => {

        });
    };
};