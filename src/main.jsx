'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

// view
import Header from './views/header.jsx';
import MainContent from './views/main-content.jsx';

ReactDOM.render(<Header name="liuyuan demo"></Header>, document.getElementById('react-header'));
ReactDOM.render(<MainContent title="main"></MainContent>, document.getElementById('react-root'));