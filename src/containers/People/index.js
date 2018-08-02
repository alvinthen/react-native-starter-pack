// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { actionCreators as peopleActionCreators } from '../../redux/modules/people';

import People from './presenter';

type Props = {
  doFetchPeople: Function,
  people: Array<{ name: string, url: string }>,
}

const mapStateToProps = state => ({ people: state.people.people });
const mapDispatchToProps = dispatch => bindActionCreators({
  doFetchPeople: peopleActionCreators.doFetchPeople,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(People);
