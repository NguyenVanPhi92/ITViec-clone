import Image from 'next/image'
import logo from '../../assets/images/ITViec.png'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { IoLogoYoutube } from 'react-icons/io'
import { MdOutlinePhoneInTalk } from 'react-icons/md'
import { MdOutlineMail } from 'react-icons/md'
import { PiTelegramLogo } from 'react-icons/pi'
import Link from 'next/link'
import FooterSVG from '@/shared/assets/svgs/Footer-svg'

export default function Footer() {
  return (
    <footer className='px-10 py-5 relative flex flex-col gap-y-14 bg-gradient-to-r from-[#121212] to-[#53151C] text-white'>
      <div className='footer-head flex justify-around items-center'>
        <div className='logo flex flex-col gap-y-14'>
          <div className='logo-head'>
            <Image alt='logo' src={logo} width={180} height={180} quality={90} />
            <p className='logo-title mt-2 text-lg'>Ít nhưng mà chất</p>
          </div>
          <div className='logo-bottom flex items-center gap-x-4'>
            <div className='border rounded-full p-2 bg-slate-500 w-max'>
              <FaLinkedinIn />
            </div>
            <div className='border rounded-full p-2 bg-slate-500 w-max'>
              <FaFacebookF />
            </div>
            <div className='border rounded-full p-2 bg-slate-500 w-max'>
              <IoLogoYoutube />
            </div>
          </div>
        </div>

        <div className='footer-content flex gap-x-6'>
          <div className='col-1 flex flex-col gap-y-4'>
            <h4 className='font-bold text-xl'>About Us</h4>
            <Link href='/'>Home</Link>
            <Link href='/'>About Us</Link>
            <Link href='/'>AI Match Service</Link>
            <Link href='/'>Contact Us</Link>
            <Link href='/'>All Jobs</Link>
            <Link href='/'>FAQ</Link>
          </div>

          <div className='col-2 flex flex-col gap-y-4'>
            <h4 className='font-bold text-xl'>Campaign</h4>
            <Link href='/'>IT Story</Link>
            <Link href='/'>Writing Contest</Link>
            <Link href='/'>Featured IT Jobs</Link>
            <Link href='/'>Annual Survey</Link>
          </div>

          <div className='col-3 flex flex-col gap-y-4'>
            <h4 className='font-bold text-xl'>Terms & Conditions</h4>
            <Link href='/'>Privacy Policy</Link>
            <Link href='/'>Operating Regulation</Link>
            <Link href='/'>Complaint Handling</Link>
            <Link href='/'>Terms & Conditions</Link>
            <Link href='/'>Press</Link>
          </div>

          <div className='col-4 flex flex-col gap-y-4'>
            <h4 className='font-bold text-xl'>Want to post a job? Contact us at:</h4>
            <p className='flex items-center gap-x-2'>
              <MdOutlinePhoneInTalk />
              <Link href='/'>Ho Chi Minh: (+84) 977 460 519</Link>
            </p>
            <p className='flex items-center gap-x-2'>
              <MdOutlinePhoneInTalk />
              <Link href='/'>Ha Noi: (+84) 983 131 351</Link>
            </p>
            <p className='flex items-center gap-x-2'>
              <MdOutlineMail />
              <Link href='/'>Email: love@itviec.com</Link>
            </p>
            <p className='flex items-center gap-x-2'>
              <PiTelegramLogo />
              <Link href='/'>Submit contact information</Link>
            </p>
          </div>
        </div>
      </div>

      <div className='footer-bottom pt-6 border-t flex justify-center items-center gap-x-4'>
        <p>Copyright © IT VIEC JSC</p> | <p>Tax code: 0312192258</p>
      </div>

      <div className='absolute right-0'>
        <FooterSVG />
      </div>
    </footer>
  )
}
