// import app global styles
import { GlobalStyle } from './styles/global'

import { api } from './services/api'
import { useEffect } from 'react'

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
      <h1>Hello APPLICATION</h1>
      <GlobalStyle />
    </>
  );
}

export default App;
