import { ThemeProvider } from 'styled-components';
import { Container } from './styles';
import defaultTheme from '../../assets/styles/themes/default';
import GlobalStyle from '../../assets/styles/Global';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import RoutesPage from '../../Routes'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Container>
          <Header />
          <RoutesPage /> 
        </Container>
      </ThemeProvider>
    </BrowserRouter>

  );
}

export default App;
