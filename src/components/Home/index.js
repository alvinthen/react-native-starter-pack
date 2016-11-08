import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../../ducks/navigation';
import Home from './presenter';

export default connect((state, ownProps) => ({
  ...ownProps,
}),
(dispatch, ownProps) => {
  const navigateAction = ownProps.extraText ?
    () => actions.popRoute('GlobalNavigation') :
    () => actions.pushRoute({ key: 'sth', extraText: '\nThis is something extra' }, 'GlobalNavigation');
  return {
    navigate: bindActionCreators(navigateAction, dispatch),
  };
},
)(Home);
