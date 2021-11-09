import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/views/containers/App'
import { Provider } from "react-redux";
import {store} from "./app/store";
import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from "@mui/material";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
)
