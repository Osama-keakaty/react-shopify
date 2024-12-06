import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { useEffect } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils.js';
import { useAuthStore } from './stores/auth.store.js';
import { useShallow } from 'zustand/shallow';
import { useAppStore } from './stores/app.store.js';


// import Home from './routes/home/home.component'
// import Navigation from './routes/navigation/navigation.component'
// import Auth from './routes/auth/auth.component'
// import Category from './components/category/category.component.jsx';

const Home = lazy(() => import('./routes/home/home.component'))
const Navigation = lazy(() => import('./routes/navigation/navigation.component'))
const Auth = lazy(() => import('./routes/auth/auth.component'))
const Category = lazy(() => import('./components/category/category.component.jsx'))
function App() {
  const { setCurrentUser } = useAuthStore(useShallow((state) => ({
    setCurrentUser: state.setCurrentUser,

  })))
  const { setWidthWindow } = useAppStore(useShallow((state) => ({
    setWidthWindow: state.setWidthWindow,
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

  useEffect(() => {
    const handleResize = () => {
      setWidthWindow();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setWidthWindow]);


  return (
    <div className='app' >
      <Suspense fallback={<p>loading ...</p>}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path=':category/*' element={<Category />} />
          </Route>
          <Route path='/auth' element={<Auth />}>
          </Route>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
