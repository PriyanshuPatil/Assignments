import logo from './logo.svg';
import './App.css';
import AllRoutes from './routes/AllRoutes';
import Navbar from './components/Navbar';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <> 
    <Navbar/>
 <AllRoutes/>
    </>

  );
}

export default App;
