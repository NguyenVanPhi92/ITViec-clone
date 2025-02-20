import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaAngleRight, FaCalendarAlt } from 'react-icons/fa'
import { FaHandsClapping } from 'react-icons/fa6'
import avatar from '../../shared/assets/images/avatar.jpg'
import { MdOutlineMail } from 'react-icons/md'

export default function Profile() {
  return (
    <div className='py-10 px-[90px] bg-[#F7F7F7] grid grid-cols-12 gap-x-8'>
      {/* Sidebar */}
      <section className='p-4 col-span-4 h-max bg-white'>
        <div className='info p-2'>
          <p className='flex gap-x-2 items-center'>
            <FaHandsClapping />
            <span>Xin Chao</span>
          </p>
          <h5 className='font-bold'>Nguyen Van Phi</h5>
        </div>
        <ul>
          <li className='flex gap-x-2 items-center p-2 bg-red-100 cursor-pointer text-red-500 font-bold rounded-md'>
            <FaCalendarAlt />
            <Link href='/'>Tong Quan</Link>
          </li>
          <li className='flex gap-x-2 items-center p-2 rounded-md'>
            <FaCalendarAlt />
            <Link href='/'>Ho so dinh kem</Link>
          </li>
          <li className='flex gap-x-2 items-center p-2 rounded-md'>
            <FaCalendarAlt />
            <Link href='/'>Ho so ITviec</Link>
          </li>
          <li className='flex gap-x-2 items-center p-2 rounded-md'>
            <FaCalendarAlt />
            <Link href='/'>Viec lam cua toi</Link>
          </li>
          <li className='flex gap-x-2 items-center p-2 rounded-md'>
            <FaCalendarAlt />
            <Link href='/'>Loi moi cong viec</Link>
          </li>
          <li className='flex gap-x-2 items-center p-2 rounded-md'>
            <FaCalendarAlt />
            <Link href='/'>Dang ky nhan email</Link>
          </li>
          <li className='flex gap-x-2 items-center p-2 rounded-md'>
            <FaCalendarAlt />
            <Link href='/'>Cai Dat</Link>
          </li>
        </ul>
      </section>
      <section className='h-max col-span-8'>
        <div className='p-4 mb-4 bg-white flex items-center gap-x-4'>
          <Image
            src={avatar}
            alt='avatar'
            width={100}
            height={100}
            quality={80}
            className='rounded-full object-cover w-20 h-20'
          />
          <div className='info'>
            <h5 className='font-bold text-2xl'>Nguyễn Vạn Phi</h5>
            <p className='flex items-center gap-x-2'>
              <MdOutlineMail />
              <span>Lập trình viên Front-end</span>
            </p>
            <p className='flex items-center gap-x-2'>
              <MdOutlineMail />
              <span>nguyenvanphidmx123455@gmail.com</span>
            </p>
            <p className='flex items-center gap-x-2'>
              <Link href='/'>Cap Nhat Ho So</Link> <FaAngleRight />
            </p>
          </div>
        </div>
        <div className='p-4 mb-4 bg-white'>
          <h5 className='text-2xl font-bold'>Hồ sơ đính kèm của bạn</h5>
        </div>
        <div className='p-4 mb-4 bg-white'>
          <h5 className='text-2xl font-bold'>Hồ sơ ITviec</h5>
        </div>
        <div className='p-4 bg-white'>
          <h5 className='text-2xl font-bold'>Hoạt động của bạn</h5>
          <div className='band-list grid grid-cols-3 gap-x-4'>
            <div className='band p-4 bg-blue-100 border border-blue-100 hover:border-blue-500 cursor-pointer rounded-md'>
              <p>Việc làm đã ứng tuyển</p>
              <p className='flex items-center gap-x-2'>
                <span>4</span> <FaAngleRight />
              </p>
            </div>
            <div className='band p-4 bg-[#FFF5F5] border border-[#FFF5F5] hover:border-red-500 cursor-pointer rounded-md'>
              <p>Việc làm đã lưu</p>
              <p className='flex items-center gap-x-2'>
                <span>4</span> <FaAngleRight />
              </p>
            </div>
            <div className='band p-4 bg-[#EAF9E9] border border-[#EAF9E9] hover:border-green-500 cursor-pointer rounded-md'>
              <p>Lời mời công việc</p>
              <p className='flex items-center gap-x-2'>
                <span>4</span> <FaAngleRight />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
