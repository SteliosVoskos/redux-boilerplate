import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actionCreators/actions';
import App from '../components/App';

function mapStateToProps(state) {
    return {
        person: state.person
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
};

const Main = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default Main;
