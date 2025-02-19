import Image from 'next/image'
import company from '../../shared/assets/images/job-company.png'
import Link from 'next/link'
import { BiDollarCircle } from 'react-icons/bi'
import { PiBuildingOfficeLight } from 'react-icons/pi'
import { FiMapPin } from 'react-icons/fi'
import { LuDot } from 'react-icons/lu'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

export default function Job() {
  return (
    <div className='py-10 px-[90px] bg-[#F7F7F7]'>
      <h2 className='text-2xl font-bold'>112 việc làm reactjs tại Việt Nam</h2>

      <section className='filter p-4 bg-white flex justify-between gap-x-4'>
        <div className='filter-left flex gap-x-4'>
          <div className='search-city w-max'>
            <form className='w-max'>
              <select id='countries' className='bg-gray-50 border border-gray-300 p-2.5 rounded-xl outline-none'>
                <option defaultValue=''>Chọn Thành Phố</option>
                <option value='US'>United States</option>
                <option value='CA'>Canada</option>
                <option value='FR'>France</option>
                <option value='DE'>Germany</option>
              </select>
            </form>
          </div>

          <div className='search-city w-max'>
            <form className='w-max'>
              <select id='countries' className='bg-gray-50 border border-gray-300 p-2.5 rounded-xl outline-none'>
                <option defaultValue=''>Chọn Thành Phố</option>
                <option value='US'>United States</option>
                <option value='CA'>Canada</option>
                <option value='FR'>France</option>
                <option value='DE'>Germany</option>
              </select>
            </form>
          </div>

          <div className='search-city w-max'>
            <form className='w-max'>
              <select id='countries' className='bg-gray-50 border border-gray-300 p-2.5 rounded-xl outline-none'>
                <option defaultValue=''>Chọn Thành Phố</option>
                <option value='US'>United States</option>
                <option value='CA'>Canada</option>
                <option value='FR'>France</option>
                <option value='DE'>Germany</option>
              </select>
            </form>
          </div>
          <div className='search-city w-max'>
            <form className='w-max'>
              <select id='countries' className='bg-gray-50 border border-gray-300 p-2.5 rounded-xl outline-none'>
                <option defaultValue=''>Chọn Thành Phố</option>
                <option value='US'>United States</option>
                <option value='CA'>Canada</option>
                <option value='FR'>France</option>
                <option value='DE'>Germany</option>
              </select>
            </form>
          </div>
        </div>
        <div className='filter-right'>
          <div className='search-city w-max'>
            <form className='w-max'>
              <select id='countries' className='bg-gray-50 border border-gray-300 p-2.5 rounded-xl outline-none'>
                <option defaultValue=''>Chọn Thành Phố</option>
                <option value='US'>United States</option>
                <option value='CA'>Canada</option>
                <option value='FR'>France</option>
                <option value='DE'>Germany</option>
              </select>
            </form>
          </div>
        </div>
      </section>

      {/* main jobs */}
      <main className='grid grid-cols-10 gap-x-4'>
        <section className='list-job col-span-4 h-max border border-red-200 rounded-xl p-4 bg-white shadow-md'>
          <div className='job'>
            <p className='job-time'>Đăng 1 ngày trước</p>
            <div className='job-head'>
              <h4>Middle Full Stack Developer (NodeJS, Angular, ReactJS)</h4>
              <div className='company flex items-center gap-x-4'>
                <Image src={company} alt='' width={60} height={60} quality={80} />
                <p>AlphaSphere</p>
              </div>
              <div className='salary'>
                <p className='flex items-center gap-x-4'>
                  <BiDollarCircle /> <Link href='/'>Đăng nhập để xem mức lương</Link>
                </p>
              </div>
            </div>
            <div className='job-body'>
              <div className='flex items-center gap-x-4'>
                <PiBuildingOfficeLight />
                <p>Tai Van Phong</p>
              </div>
              <div className='flex items-center gap-x-4'>
                <FiMapPin />
                <p>TP Ho Chi Minh</p>
              </div>

              <div className='tech grid grid-cols-4 items-center gap-x-2'>
                <p className='bg-slate-50 border rounded-full w-max p-2 text-sm'>Reactjs</p>
                <p className='bg-slate-50 border rounded-full w-max p-2 text-sm'>HTML5</p>
                <p className='bg-slate-50 border rounded-full w-max p-2 text-sm'>Javascript</p>
                <p className='bg-slate-50 border rounded-full w-max p-2 text-sm'>Typescript</p>
              </div>
            </div>
            <div className='job-bottom'>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>Career growth and development opportunities</span>
              </p>
            </div>
          </div>
        </section>

        <section className='col-span-6 border border-red-200 rounded-xl p-4 bg-white shadow-md'>
          <div className='head'>
            <div className='flex justify-between'>
              <div className='flex gap-x-4 items-center'>
                <Image src={company} alt='logo' width={100} height={100} quality={80} />
                <div className='content'>
                  <h2 className='font-bold text-2xl'>Middle Full Stack Developer (NodeJS, Angular, ReactJS)</h2>
                  <div className='name'>AlphaSphere</div>
                  <p className='flex items-center gap-x-4'>
                    <BiDollarCircle /> <Link href='/'>Đăng nhập để xem mức lương</Link>
                  </p>
                </div>
              </div>

              <FaArrowUpRightFromSquare />
            </div>
            <button className='w-full bg-red-700 py-2 rounded-md text-white font-bold mt-4'>Ứng Tuyển</button>
            <span className='w-full border border-gray-300'></span>
          </div>

          <div className='body overflow-y-scroll h-[500px]'>
            <div className='info py-4 border-b-[1px] border-gray-300'>
              <p className='flex items-center gap-x-4'>
                <BiDollarCircle />{' '}
                <Link href='/'> DC Tower, 111D Lý Chính Thắng, Võ Thị Sáu, Quận 3, TP Hồ Chí Minh </Link>
              </p>
              <p className='flex items-center gap-x-4'>
                <BiDollarCircle /> <Link href='/'>Tại văn phòng</Link>
              </p>
              <p className='flex items-center gap-x-4'>
                <BiDollarCircle /> <Link href='/'>1 ngày trước</Link>
              </p>
              <div className='skills flex gap-x-2 items-center'>
                <p>Skills: </p>
                <div className='tech flex gap-x-2'>
                  <p className='bg-slate-50 border rounded-full w-max p-2 text-sm'>Reactjs</p>
                  <p className='bg-slate-50 border rounded-full w-max p-2 text-sm'>HTML5</p>
                  <p className='bg-slate-50 border rounded-full w-max p-2 text-sm'>Javascript</p>
                  <p className='bg-slate-50 border rounded-full w-max p-2 text-sm'>Typescript</p>
                </div>
              </div>
            </div>
            <div className='reason py-4 border-b-[1px] border-gray-300'>
              <h4 className='font-bold text-xl'>3 Lý do để gia nhập công ty</h4>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>Career growth and development opportunities</span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>Supportive culture with work-life balance</span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>Competitive compensation and benefits</span>
              </p>
            </div>
            <div className='desc py-4 border-b-[1px] border-gray-300'>
              <h4 className='font-bold text-xl'>Mô tả công việc</h4>
              <p>
                We are seeking a talented and motivated Middle Full-Stack Web Developer to join our dynamic team. The
                ideal candidate will have a strong foundation in both front-end and back-end development, with a passion
                for building efficient and scalable web applications. You will work closely with other developers,
                designers, and product managers to deliver high-quality software solutions.
              </p>
              <p>Responsibilities:</p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>
                  Design, develop, and maintain front-end components using HTML, CSS, JavaScript, and TypeScript within
                  modern frameworks such as React.js or Angular.
                </span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>
                  Ensure the technical feasibility of UI/UX designs while maintaining performance and accessibility
                  standards.
                </span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>
                  Optimize web applications for maximum speed, scalability, and responsiveness across various devices.
                </span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>
                  Collaborate closely with designers to implement visually appealing and intuitive user interfaces.
                </span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>
                  Develop and maintain server-side applications using languages such as Node.js, ensuring seamless
                  integration with front-end components.
                </span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>
                  Write clean, efficient, and maintainable code, following industry best practices and coding standards.
                </span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>
                  Implement and integrate RESTful APIs, ensuring smooth communication between applications and
                  third-party services.
                </span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>
                  Manage data storage solutions using databases such as MongoDB and Redis for efficient data retrieval
                  and scalability.
                </span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>Troubleshoot, diagnose, and resolve issues to maintain system reliability and performance.</span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>
                  Collaborate with cross-functional teams to define and implement technical solutions that align with
                  business goals.
                </span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>Stay up-to-date with emerging technologies and continuously enhance development processes.</span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>
                  Participate in code reviews, providing constructive feedback to maintain code quality and consistency.
                </span>
              </p>
            </div>
            <div className='require py-4 border-b-[1px] border-gray-300'></div>
            <div className='why py-4 border-b-[1px] border-gray-300'></div>
            <div className='address py-4 border-b-[1px] border-gray-300'></div>
          </div>
        </section>
      </main>

      {/* pagination */}
      <div className='pagination w-max mx-auto'>
        <nav aria-label='Page navigation example'>
          <ul className='inline-flex -space-x-px text-sm'>
            <li>
              <a
                href='#'
                className='flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              >
                1
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              >
                2
              </a>
            </li>
            <li>
              <a
                href='#'
                aria-current='page'
                className='flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
              >
                3
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              >
                4
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              >
                5
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
