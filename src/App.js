import { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'material-icons/iconfont/material-icons.css';
import M from 'materialize-css';
import './App.css';
import PortfolioContainer from './components/PortfolioContainer';

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <>
      <PortfolioContainer />
    </>
  );
}

export default App;
