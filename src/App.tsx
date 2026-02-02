import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home-page';
import MainLayout from './layout/main-layout';
import SignUpPage from './pages/sign-up-page';
import SignInPage from './pages/sign-in-page';
import ResetPasswordPage from './pages/reset-password-page';
import PricingPage from './pages/pricing-page';
import ContactPage from './pages/contact-page';
import CustomerPage from './pages/customer-page';
import ChangelogPage from './pages/changelog-page';
import ProductPage from './pages/product-page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout><HomePage /></MainLayout>} />
      <Route path='/pricing' element={<MainLayout><PricingPage /></MainLayout>} />
      <Route path='/contact' element={<MainLayout><ContactPage /></MainLayout>} />
      <Route path='/changelog' element={<MainLayout><ChangelogPage /></MainLayout>} />
      <Route path='/customer' element={<MainLayout><CustomerPage /></MainLayout>} />
      <Route path='/product' element={<MainLayout><ProductPage /></MainLayout>} />
      <Route path='/sign-up' element={<SignUpPage />} />
      <Route path='/sign-in' element={<SignInPage />} />
      <Route path='/reset-password' element={<ResetPasswordPage />} />
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
