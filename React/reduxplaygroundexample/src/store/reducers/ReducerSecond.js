import React, { Component } from 'react';

const intialState = {
    issues: [
        {
            issueName: 'ISSUE 1',
            issueType: 'PACKAGE'
        }
    ]
}

const ReducerSecond = (state = intialState, action) => {
    // switch (action.type) {
    //     case 'ALL':
    //         console.log('comes ere')
    //         return state;
    // }
    return state;
}

export default ReducerSecond;