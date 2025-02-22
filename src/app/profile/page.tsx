'use client'
import { cn } from '@/shared/helper/utils'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaHandsClapping } from 'react-icons/fa6'

interface ISidebarItem {
  name: string
  path: string
  icon: React.ReactNode
  // items?: ISubItem[]
}

// interface ISubItem {
//   name: string
//   path: string
// }

const items: ISidebarItem[] = [
  {
    name: 'Dashboard',
    path: '/profile/overview',
    icon: <p></p>
  },
  {
    name: 'CV Attachment',
    path: '/profile/attachment',
    icon: <p></p>
  },
  {
    name: 'ITviec Profile',
    path: '/profile/itviec-profile',
    icon: <p></p>
  },
  {
    name: 'My Jobs',
    path: '/profile/jobs',
    icon: <p></p>
  },
  {
    name: 'Job Invitation',
    path: '/profile/job-invitation',
    icon: <p></p>
  },
  {
    name: 'Email Subscriptions',
    path: '/profile/email-sub',
    icon: <p></p>
  },
  {
    name: 'Settings',
    path: '/profile/setting',
    icon: <p></p>
    // items: [
    //   {
    //     name: 'General',
    //     path: '/settings'
    //   },
    //   {
    //     name: 'Security',
    //     path: '/settings/security'
    //   },
    //   {
    //     name: 'Notifications',
    //     path: '/settings/notifications'
    //   }
    // ]
  }
]

export default function Profile({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const currentPath = useRouter()
  const activePath = usePathname() // Lấy router từ Next.js

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
          {items.map((item, index) => (
            <li
              key={index}
              className={cn(
                'flex gap-x-2 items-center p-2 cursor-pointer rounded-md',
                activePath === item.path && 'bg-red-100 text-red-500 font-bold'
              )}
              onClick={() => currentPath.push(item.path)}
            >
              <FaCalendarAlt />
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className='h-max col-span-8'>{children}</section>
    </div>
  )
}
