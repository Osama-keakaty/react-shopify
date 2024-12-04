import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component'
import Home from './routes/home/home.component'
import Auth from './routes/auth/auth.component'
import { useEffect } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils.js';
import { useAuthStore } from './stores/auth.store.js';
import { useShallow } from 'zustand/shallow';

function App() {
  const { setCurrentUser } = useAuthStore(useShallow((state) => ({
    setCurrentUser: state.setCurrentUser,

  })))

  useEffect(() => {
    try {

      const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
          createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
      });
      return unsubscribe;
    } catch (error) {
      console.log(error)
    }
  }, [setCurrentUser]);

  return (
    <div className='app' >
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='/auth' element={<Auth />}>
        </Route>
      </Routes>
    </div>
  )
}

export default App
