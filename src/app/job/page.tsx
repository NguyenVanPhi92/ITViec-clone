import Image from 'next/image'
import company from '../../shared/assets/images/job-company.png'
import Link from 'next/link'
import { BiDollarCircle } from 'react-icons/bi'
import { PiBuildingOfficeLight } from 'react-icons/pi'
import { FiMapPin } from 'react-icons/fi'
import { LuDot } from 'react-icons/lu'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { FaFlagUsa } from 'react-icons/fa'

export default function Job() {
  return (
    <div className='py-10 px-[90px] bg-[#F7F7F7]'>
      <h2 className='text-2xl font-bold'>118 việc làm Reactjs tại Việt Nam</h2>

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

      {/* Main Jobs */}
      <main className='grid grid-cols-10 gap-x-8'>
        {/* List job */}
        <section className='list-job col-span-4'>
          {Array.from({ length: 8 }, (_, i) => (
            <div
              className='job relative h-max border border-l-4 border-l-red-400 mb-4 border-red-200 rounded-xl p-4 bg-white shadow-md'
              key={i}
            >
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

                <div className='tech flex items-center gap-x-2'>
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

              <span className='absolute -right-[7px] top-1/2 w-2 h-4 bg-red-500 clip-triangle'></span>
            </div>
          ))}
        </section>
        {/* Job Detail */}
        <section className='col-span-6 h-max rounded-xl p-4 bg-white shadow-md'>
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
            <div className='require py-4 border-b-[1px] border-gray-300'>
              <h4 className='font-bold text-xl'>Yêu cầu công việc</h4>
              <p>
                1. Possessed a Bachelor’s Degree / Diploma / Professional Certificate in Information Technology,
                Computer Science, Software Engineering or any IT related field{' '}
              </p>
              <p>2. From 7 years - 12 years+ of proven working experience as a Front-end Developer</p>
              <p>3. Ability to perform well in a fast-paced environment.</p>
              <p>4. Familiarity with browser testing and debugging.</p>
              <p>5. Excellent analytical and multitasking skills</p>
              <p>
                6. In-depth understanding of the entire web development process (design, development, and deployment)
              </p>
              <p>7. Provide suggestion/solutions on client’s change request.</p>
              <p>
                8. Flexibility to quickly adjust task priorities for unforeseen changes while following task deadlines.
              </p>
              <p>
                9. Possessed a Bachelor’s Degree / Diploma / Professional Certificate in Information Technology,
                Computer Science, Software Engineering or any IT related field
              </p>
              <p>
                10. Hands on experience with frontend technology reactjs, redux, sass/scss, ES5/6, nodejs (nice-to-have)
              </p>
              <p>11. Experience in solving problems like caching, pagination and etc.</p>
              <p>12. Knowledgeable on web services and able to integrate API into website.</p>
              <p>13. Knowledgeable on mobile responsive approach</p>
              <p>14. Familiar with Git Repository</p>
              <p>15. Required language(s): Good English communication skills</p>
            </div>
            <div className='why py-4 border-b-[1px] border-gray-300'>
              <h4 className='font-bold text-xl'>Added Advantage: </h4>
              <p>1. Fast learner</p>
              <p>2. Experience in leading / guiding junior(s) </p>
              <p>3. Ability to convert normal HTML to separate components using frontend frameworks. </p>
              <p>4. Experience on identifying and solving performance issue on the website. </p>
              <p>5. Understand metrics score such as First Contentful Paint, Time to Interactive etc. </p>
              <p>
                6. In-depth understanding of the entire web development process design, development,Self-motivated to
                complete target/goals, and plan several phases of the target/goal and take action to achieve it
              </p>
              <p>7. Willing to share knowledge with others. </p>
              <p>8. Willing to learn knowledge and skills out of frontend developer jobscope</p>
              <p>9. Knowledge on SEO</p>
              <p>10. Understanding of layout aesthetics</p>
            </div>
            <div className='address py-4 border-b-[1px] border-gray-300'>
              <h4 className='font-bold text-xl'>Tại sao bạn sẽ yêu thích làm việc tại đây</h4>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>English Working Environment</span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>Performance Evaluation twice/year </span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>Long-term Career Path </span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>Team Sharing & Leadership Training Benefit </span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>Premium insurance, Health Check, Fitness & Vision Claim Care</span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>Team Building, Quarterly Eating, Bonding </span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>Birthday Lucky Money & Celebration</span>
              </p>
            </div>
            <div className='address py-4 '>
              <h4 className='font-bold text-xl'>Byteuptech</h4>
              <p>Byteup Technology</p>
              <div className='info-company grid grid-cols-3 gap-x-4 mt-4'>
                <div className='col'>
                  <div className='item'>
                    <p className='text-sm text-gray-500'>Mô hình công ty</p>
                    <p>Dịch vụ và Tư vấn giải pháp</p>
                  </div>
                  <div className='item'>
                    <p className='text-sm text-gray-500'>Quốc gia</p>
                    <p className='flex items-center gap-x-2'>
                      <FaFlagUsa />
                      <span>Malaysia</span>
                    </p>
                  </div>
                </div>
                <div className='col'>
                  <div className='item'>
                    <p className='text-sm text-gray-500'>Mô hình công ty</p>
                    <p>Dịch vụ và Tư vấn giải pháp</p>
                  </div>
                  <div className='item'>
                    <p className='text-sm text-gray-500'>Quốc gia</p>
                    <p className='flex items-center gap-x-2'>
                      <FaFlagUsa />
                      <span>Malaysia</span>
                    </p>
                  </div>
                </div>
                <div className='col'>
                  <div className='item'>
                    <p className='text-sm text-gray-500'>Mô hình công ty</p>
                    <p>Dịch vụ và Tư vấn giải pháp</p>
                  </div>
                  <div className='item'>
                    <p className='text-sm text-gray-500'>Quốc gia</p>
                    <p className='flex items-center gap-x-2'>
                      <FaFlagUsa />
                      <span>Malaysia</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Pagination */}
      <div className='pagination w-max mx-auto'>
        <nav aria-label='Page navigation example'>
          <ul className='inline-flex -space-x-px text-sm'>
            <li>
              <a
                href='#'
                className='flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-700 dark:text-gray-400 '
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-700 dark:text-gray-400 '
              >
                1
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-700    dark:text-gray-400 '
              >
                2
              </a>
            </li>
            <li>
              <a
                href='#'
                aria-current='page'
                className='flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700  dark:bg-gray-700 dark:text-white'
              >
                3
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-700    dark:text-gray-400 '
              >
                4
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-700    dark:text-gray-400 '
              >
                5
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-700    dark:text-gray-400 '
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
