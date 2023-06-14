import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Options from './components/options/option';
import MyComponent0 from './components/home/0';
import MyComponent1 from './components/home/1';
import MyComponent2 from './components/home/2';
import MyComponent3 from './components/home/3';
import GlobalStyle from './common/css/globalStyle';

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/MBTI">
                    <Options />
                </Route>
                <Route exact path="/0">
                    <MyComponent0 />
                </Route>
                <Route exact path="/1">
                    <MyComponent1 />
                </Route>
                <Route exact path="/2">
                    <MyComponent2 />
                </Route>
                <Route exact path="/3">
                    <MyComponent3 />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
