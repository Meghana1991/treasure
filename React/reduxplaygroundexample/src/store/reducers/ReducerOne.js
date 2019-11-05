import React, { Component } from 'react';

const intialState = {
    risks: [
        {
            riskName: 'RISK 1',
            riskType: 'PACKAGE'
        }
    ]
}

const ReducerOne = (state = intialState, action) => {
    switch (action.type) {
        case 'ALL':
            console.log('comes ere')
            return state;
        case 'ADD':
            let obj = {
                ...state,
                risks: [
                    ...state.risks,
                    action.payload
                ]
            }
            return obj
        case 'ASYNCCALL':
            console.log('ASYNC CALL AFTER 2 SECONDS')
            return state
    }
    return state;
}
export default ReducerOne;