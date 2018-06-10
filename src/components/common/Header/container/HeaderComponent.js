import {connect} from 'react-redux';
import R from 'ramda';
import * as systemActions from 'redux/actions/systemActions'
import * as loginActions from 'redux/actions/loginActions'
import Header from '../display/Header';
import { hashHistory } from 'react-router-dom'


function mapStateToProps(state) {
    return {
        authenticated:state.login.authenticated,
        isAdmin: state.login.isAdmin,
    	menuOpen:state.system.menuOpen,
    	currentTab:state.system.currentTab,
        appData:state.system.appData,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleMenu(){
            dispatch(systemActions.toggleMenu())
        },
        goTo(tab){
        	dispatch(systemActions.setCurrentTab(tab))
        },
        logout(){   
            dispatch(loginActions.logout())
        },
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Header)

