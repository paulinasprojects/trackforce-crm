import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page';
import MainLayout from './layout/main-layout';
import SignUpPage from './pages/sign-up-page';
import SignInPage from './pages/sign-in-page';
import ResetPasswordPage from './pages/reset-password-page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout><HomePage /></MainLayout>} />
      <Route path='/sign-up' element={<SignUpPage />} />
      <Route path='/sign-in' element={<SignInPage />} />
      <Route path='/reset-password' element={<ResetPasswordPage />} />
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
