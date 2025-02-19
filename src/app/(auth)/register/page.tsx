import Link from 'next/link'

export default function Home() {
  return (
    <div className=''>
      <h2 className='text'>Register Page</h2>
      <Link href='/login'>Đăng Nhập</Link>
    </div>
  )
}
