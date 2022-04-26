import { useSelector } from 'react-redux';
import { selectQuestsLoading } from '../../store/data/selectors';
import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import Loader from '../loader/loader';
import { appTheme } from './common';
import * as S from './app.styled';
import { AppRoutes, StatusLoading } from 'const';
import Page404 from 'components/page-404/page-404';


const App = () => {
  const questsLoading = useSelector(selectQuestsLoading);

  if ([StatusLoading.Idle, StatusLoading.Loading].includes(questsLoading)) {
    return (
      <Loader />
    );
  }

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Router>
        <Switch>
          <Route exact path={AppRoutes.Contacts}>
            <Contacts />
          </Route>
          <Route exact path={AppRoutes.Home}>
            <Home />
          </Route>
          <Route exact path={`${AppRoutes.DetailedQuest}/:id`}>
            <DetailedQuest />
          </Route>
          <Route >
            <Page404 />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
