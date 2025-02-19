import type { Metadata } from 'next'
import '../style/index.scss'
import Header from '@/shared/components/header/header'
import Footer from '@/shared/components/footer/footer'

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin']
// })

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin']
// })

export const metadata: Metadata = {
  title: 'ITViec | Việc Làm IT',
  description:
    'ITViec là nền tảng tuyển dụng hàng đầu tại Việt Nam dành riêng cho ngành IT, giúp kết nối lập trình viên với các công ty công nghệ qua hệ thống tìm kiếm việc làm thông minh. 🚀'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
