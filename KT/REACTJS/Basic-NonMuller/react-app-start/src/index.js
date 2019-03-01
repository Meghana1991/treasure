import React from 'react';
import ReactDom from 'react-dom';

/**
 * The below code will be compiled to
 * React.createElement(...) Hence we need to import
 * the React at the beginning 
 */

const element = <h1>React prac</h1>;

console.log(element); //this is reactelement which is a part of virtual DOM, this element is kept as watch now, whenever the state of this changes, the react will check for the previous curren value and then accordingly updates that portion alone in the DOM, instead of updating WHOLE dom everytime the state changes

/**
 * Render this in the real DOM
 */

ReactDom.render(element, document.getElementById('root'));