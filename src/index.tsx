import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import {
  h2Color,
  h2Weight,
  h2Size,
  h3Color,
  h3Weight,
  h3Size,
  h4Color,
  h4Weight,
  h4Size,
} from './components/constatns/constantsStyle';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const theme = createTheme({
  typography: {
    h2: {
      fontSize: h2Size,
      fontWeight: h2Weight,
      color: h2Color,
      maxWidth: 400,
      backgroundColor: '#62caec',
      padding: 15,
      textAlign: 'left',
    },
    h3: {
      fontSize: h3Size,
      fontWeight: h3Weight,
      color: h3Color,
    },
    h4: {
      fontSize: h4Size,
      fontWeight: h4Weight,
      color: h4Color,
    },
    body1: {
      color: '#3e3e3e',
      fontSize: 16,
    },
    body2: {
      color: '#94A3B8',
      fontSize: 16,
    },
    fontFamily: 'Roboto',
  },
});

root.render(
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>
);
