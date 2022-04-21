import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Settings from './Pages/Settings';
import Questions from './Pages/Questions';
import Results from './Pages/Results';
import { Box, Container, Typography } from '@mui/material';


function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Switch>
            <Route path="/" exact>
              <Typography variant="h2" fontWeight="bold">Trivia Hub!</Typography>
              <Settings />
            </Route>
            <Route path="/questions">
              <Questions />
            </Route>
            <Route path="/results">
              <Results />
            </Route>
          </Switch>
        </Box>
      </Container> 
    </Router>
  );
}

export default App;
