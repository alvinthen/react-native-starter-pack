// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { actionCreators as peopleActionCreators } from '../../redux/modules/people';

import People from './presenter';

type Props = {
  doFetchPeople: Function,
  goToPerson: Function,
  people: Array<{ name: string, url: string }>,
}

class PeopleContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.doFetchPeople();
  }

  render() {
    return <People people={this.props.people} goToPerson={this.props.goToPerson} />;
  }
}

const mapStateToProps = state => ({ people: state.people.people });
const mapDispatchToProps = dispatch => bindActionCreators({
  doFetchPeople: peopleActionCreators.doFetchPeople,
  goToPerson: person => NavigationActions.navigate({ routeName: 'Person', params: person }),
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
