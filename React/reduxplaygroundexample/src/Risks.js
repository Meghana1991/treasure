import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions/actionOne'
import AddRisk from './AddRisk';
import SecondaryComponent from './SecondaryComponent';

class Risks extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.rks.map((each) => {
                    return <div>{each.riskName} - {each.riskType}</div>
                })}
                <AddRisk />
                <SecondaryComponent />
            </React.Fragment >
        )
    }
}

const mapStateToProps = state => {
    return {
        rks: state.general.risks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllRisks: () => dispatch({ type: actionTypes.GETALLRISKS })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Risks)