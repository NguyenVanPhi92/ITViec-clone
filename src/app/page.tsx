// 'use client';
import Footer from '@/shared/components/footer/footer'
import Header from '@/shared/components/header/header'
import LoginPage from './(auth)/login/page'
export default function Home() {
  return (
    <div className=''>
      <Header />
      <LoginPage />
      <Footer />
    </div>
  )
}
