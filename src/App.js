import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { useEffect } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils.js';
import { useAuthStore } from './stores/auth.store.js';
import { useShallow } from 'zustand/shallow';
import { useAppStore } from './stores/app.store.js';
import LoadingScreen from './components/loading-screen/loading-screen.component.jsx';

const Home = lazy(() => import('./routes/home/home.component'))
const Layout = lazy(() => import('./routes/layout/layout.component.jsx'))
const Auth = lazy(() => import('./routes/auth/auth.component'))
const Checkout = lazy(() => import('./routes/checkout/checkout.component'))
const Category = lazy(() => import('./routes/category/category.component.jsx'))

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
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path=':category/*' element={<Category />} />
            <Route path='/checkout' element={<Checkout />} />
          </Route>
          <Route path='/auth' element={<Auth />} />
          <Route path='/loading' element={<LoadingScreen />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
