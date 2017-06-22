/**
 * Created by Mark on 6/20/17.
 */
import '../dist/css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
var apiKey = process.env.apikey;


// curious if this will work...
filepicker.setKey(apiKey);

// Our views are rendered inside the #content
ReactDOM.render(
    Routes,
    document.getElementById('content')
);
