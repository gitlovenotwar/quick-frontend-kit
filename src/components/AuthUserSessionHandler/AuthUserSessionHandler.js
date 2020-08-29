import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class AuthUserSessionHandler extends Component {
  render() {
    const {
      profile,
      children,
    } = this.props;
    if(profile && profile.id) return children;
    return null;
  }
}

const mapStateToProps = (state, props) => {
  const {
    profile,
  } = state;
  return {
    profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthUserSessionHandler);
