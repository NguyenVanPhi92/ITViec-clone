import Image from 'next/image'
import logo from '../../assets/images/ITViec.png'
import { FaChevronDown } from 'react-icons/fa6'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='px-10 py-5 flex justify-between items-center bg-gradient-to-r from-[#121212] to-[#53151C] text-white'>
      <div className='nav-left flex items-center gap-x-8'>
        <div className='logo'>
          <Link href='/'>
            <Image alt='logo' src={logo} width={80} height={80} quality={90} />
          </Link>
        </div>
        <div className='nav-left__list flex items-center gap-x-4'>
          <div className='flex items-center gap-x-1 cursor-pointer'>
            <p>Việc Làm IT</p>
            <FaChevronDown />
          </div>
          <div className='flex items-center gap-x-1 cursor-pointer'>
            <p>Top Công Ty IT</p>
            <FaChevronDown />
          </div>
          <div className='flex items-center gap-x-1 cursor-pointer'>
            <p>Blog</p>
            <FaChevronDown />
          </div>
        </div>
      </div>
      <div className='nav-right flex items-center gap-x-4'>
        <div>Nhà Tuyển Dụng</div>
        <div className='flex items-center gap-x-2'>
          <Link href='/register'>Đăng ký</Link>| <Link href='/login'>Đăng Nhập</Link>
        </div>
        <div className='language flex items-center gap-x-2'>
          <div>EN</div> | <div>VI</div>
        </div>
      </div>
    </header>
  )
}
