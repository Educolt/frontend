// import dependencies
import { useEffect } from 'react';

// import app global styles
import { GlobalStyle } from './styles/global'

// pages 
import { SignIn } from './pages/SignIn'
import { Dashboard } from './pages/Dashboard'
import { api } from './services/api'


function App() {

  useEffect(() => {
    const loadUsers = async () => {
      const response = await api.get('/user');

      const users = response.data;

      console.log(users)
    }
    loadUsers();
  }, [])

  return (
    <> 
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

export default App;
