import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions/actionOne'

class SecondaryComponent extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.issues.map((each) => {
                    return <div>{each.issueName} - {each.issueType}</div>
                })}
            </React.Fragment >
        )
    }
}

const mapStateToProps = state => {
    return {
        issues: state.second.issues
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllRisks: () => dispatch({ type: actionTypes.GETALLRISKS })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SecondaryComponent)