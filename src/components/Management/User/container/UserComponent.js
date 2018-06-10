import {connect} from 'react-redux';
import R from 'ramda';
import * as systemActions from 'redux/actions/systemActions'
import * as userActions from 'redux/actions/userActions'
import User from '../display/User';

function mapStateToProps(state) {
    return {
    	form: state.user.form,
        userList: state.user.userList,
        authenticated: state.user.authenticated,
        currentTraineeId: state.user.form._id,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onInputFieldChange(field, value){
            dispatch( userActions.updateInputField(field, value) )
        },
        addUser(e){
            e.preventDefault();
            dispatch( userActions.addUser() )
        },
        removeUser(id){
            dispatch( userActions.removeUser(id) )
        },
        saveUser(id){
            dispatch( userActions.updateUser(id) )
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(User)

