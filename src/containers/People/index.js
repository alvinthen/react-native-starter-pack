// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators as peopleActionCreators } from '../../redux/modules/people';

import People from './presenter';

const mapStateToProps = state => ({ people: state.people.people });
const mapDispatchToProps = dispatch => bindActionCreators({
  doFetchPeople: peopleActionCreators.doFetchPeople,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(People);
