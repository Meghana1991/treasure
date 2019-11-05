import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions/actionOne'

class AddRisk extends Component {
    state = {
        riskName: '',
        riskType: ''
    }

    updateState = (event) => {
        let key = event.target.name;
        this.setState({
            [key]: event.target.value
        })
        console.log('Pack Data', this.state)

    }

    render() {
        return (
            <form>
                <label>Risk Name</label><input onChange={this.updateState} type="text" name="riskName" />
                <label>Risk Type</label><input onChange={this.updateState} type="text" name="riskType" />
                <button type="button" onClick={() => this.props.onAdd(this.state)}>Add Risk</button>
                <button type="button" onClick={() => this.props.onAsync(this.state)}>Async Thunk Middleware</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        rks: state.general.risks
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAdd: (newRisk) => dispatch({ type: actionTypes.ADDNEWRISK, payload: newRisk }),
        onAsync: (result) => dispatch(actionTypes.storeResult(result)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddRisk)