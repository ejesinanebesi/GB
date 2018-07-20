import React from 'react';
import ReactDOM from 'react-dom';

import Layout from "./app/layouts/Layout";
import Contacts from "./app/child/Contacts";
import About from "./app/child/About";
import Content from "./app/child/Content";
import Posts from "./app/components/Posts/Posts";

import Comments from "./app/components/Comments/Comments";
import CommentView from "./app/components/Comments/CommentView";

import store from "./app/stores/store";
import {Provider} from "react-redux";


import {Route, Router, IndexRoute, browserHistory} from 'react-router';

const app = document.getElementById('app');

ReactDOM.render
(
    <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Content}/>
            {/*<Route path="Content" component={Content}/>*/}
            <Route path="Content" component={Posts}/>
            <Route path="About" component={About}/>
            <Route path="Contacts" component={Contacts}/>
            <Route path="Comments" component={Comments}>
                <Route path=":commentId" component={CommentView}/>
            </Route>
            <Route path="*" component={Contacts}/>
        </Route>
    </Router>
    </Provider>, app
);