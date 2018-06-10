import * as types from '../actions/actionTypes';
import R from 'ramda';
const emptyForm = {
        email:'',
        firstName:'',
        lastName:'',
        email:'',
    }
const initialState = {
	form:emptyForm,
    userList:[],
    userPackageMap:{},
    currentUser:{}
}

export default function(state = initialState, action) {
    switch (action.type) {
    	case types.UPDATE_USER_FIELD:
    		return R.assocPath(['form',action.field], action.value, state )
        case types.SET_CURRENT_USER:
            return R.assoc('currentUser', action.user, state )
        case types.SET_CURRENT_USER_LIST:
            return R.assocPath(['currentUser', action.listName], action.list, state )
        case types.SET_EDIT_USER:
            var newState =  R.clone(state)
            newState.form = R.mergeDeepRight(emptyForm,action.user)
            return newState
        case types.SET_USER_LIST:
            return R.assoc('userList', action.userList, state )
        default:
            return state;
    }
}

