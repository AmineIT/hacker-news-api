import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './store';
import NewArticles from './components/new-articles';
import TopArticles from './components/top-articles';

// Configuration of the Chakra UI -- Chakra UI is a React based component library that helps speed up building the app (https://chakra-ui.com/)
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={NewArticles} />
            <Route exact path='/new-posts' component={NewArticles} />
            <Route exact path='/top-posts' component={TopArticles} />
          </Switch>
        </Router>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
