import { Routes , Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import PageLayout from './Layouts/PageLayouts/PageLayout';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebase';
import { useEffect } from 'react';
function App() {
  const [authUser] = useAuthState(auth);

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (event) => {
      if (event.matches) {
        localStorage.setItem('chakra-ui-color-mode', 'dark');
      } else {
        localStorage.setItem('chakra-ui-color-mode', 'light');
      }
    };

    // Check the color scheme when the component mounts
    handleChange({ matches: mediaQueryList.matches });

    // Listen for changes
    mediaQueryList.addEventListener('change', handleChange);

    // Clean up the event listener when the component unmounts
    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, []);
  return (
    <PageLayout>
    <Routes>
      <Route path='/' element={authUser ? <HomePage/> : <Navigate to='/auth'/>}/>
      <Route path='/auth' element={!authUser ? <AuthPage/> : <Navigate to='/' />}/>
      <Route path='/:username' element={<ProfilePage/>}/>
    </Routes>
    </PageLayout>
  )
}

export default App
