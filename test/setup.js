import React from 'react';
import { expect } from 'chai';
import jsdom from 'jsdom';

const doc = jsdom.jsdom('<!doctype html><htm><body></body></htm>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
    if (!(key in global)) {
        global[key] = window[key];
    }
});

global.React = React;
global.expect = expect;