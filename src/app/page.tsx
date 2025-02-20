import Image from 'next/image'
import LoginPage from './(auth)/login/page'
import { IoSearch } from 'react-icons/io5'
import hot from '../shared/assets/images/hot.png'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa6'
import Link from 'next/link'
import fpt from '../shared/assets/images/FSOFT.png'
import company from '../shared/assets/images/company.png'
import { BiDollarCircle } from 'react-icons/bi'
import { FiMapPin } from 'react-icons/fi'
import { PiBuildingOfficeLight } from 'react-icons/pi'
import { Fragment } from 'react'
export default function Home() {
  return (
    <>
      {/* // Search Filter */}
      <div className='px-40 py-14 flex flex-col gap-y-8 border-t-[1px] border-t-[#ffebeb24] bg-gradient-to-r from-[#121212] to-[#53151C] text-white'>
        <h2 className='title font-bold text-2xl'>1,095 Việc làm IT cho Developer "Chất"</h2>

        <div className='search flex items-center gap-x-4'>
          <div className='search-city w-max'>
            <form className='w-max'>
              <select
                id='countries'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              >
                <option defaultValue=''>Chọn Thành Phố</option>
                <option value='US'>United States</option>
                <option value='CA'>Canada</option>
                <option value='FR'>France</option>
                <option value='DE'>Germany</option>
              </select>
            </form>
          </div>
          <div className='search-input w-full'>
            <input
              className='w-full bg-white 
            placeholder:text-slate-400 text-slate-700 text-sm border  rounded-md px-3 py-2 transition duration-300 ease focus:outline-none  hover:border-slate-300'
              placeholder='Nhập tên công việc hoặc công ty bạn muốn tìm'
            />
          </div>
          <button className='flex items-center gap-x-2 w-36 bg-blue-500 text-white p-2.5 rounded-lg'>
            <IoSearch />
            <span>Tìm Kiếm</span>
          </button>
        </div>

        <div className='suggest flex items-center gap-x-4'>
          <p>Gợi ý cho bạn:</p>
          <p className='w-max p-3 border rounded-full'>Reactjs</p>
        </div>
      </div>

      {/* Title */}

      <div className='flex justify-center items-center gap-x-4 bg-[#F7F7F7] py-4 border-b-[1px] border-b-[#e5e5e5]'>
        <Image alt='hot' src={hot} width={50} height={50} quality={80} />

        <div className='flex items-center gap-x-2'>
          <p className='font-bold text-lg'>Khám phá Lời mời công việc</p>
          <p>x2 tốc độ tìm việc và có cơ hội nhận lịch ITviec độc quyền!</p>
        </div>

        <FaRegArrowAltCircleRight className='text-red-500' />
      </div>

      {/* Section 1 Porfile */}
      <main className='my-10 mx-[90px]'>
        <h2 className='text-center font-bold text-2xl'>Công cụ tốt nhất cho hành trang ứng tuyển của bạn</h2>

        <div className='tools grid grid-cols-3 gap-x-3 py-14'>
          {Array.from({ length: 3 }, (_, i) => (
            <Fragment key={i}>
              <div className='card flex gap-x-4'>
                <div className='img'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80' fill='none'>
                    <g id='feature-userprofile' clipPath='url(#clip0_9429_137537)'>
                      <path
                        id='Ellipse 4'
                        d='M72.0726 67.7001C61.6698 87.8182 38.8776 96.7395 21.1648 87.6264C3.45201 78.5132 -2.47389 54.8165 7.92894 34.6984C18.3318 14.5802 41.124 5.65891 58.8368 14.7721C76.5496 23.8852 82.4754 47.5819 72.0726 67.7001Z'
                        fill='#FAFAFA'
                      />
                      <rect
                        id='Rectangle 695'
                        opacity='0.7'
                        x='37.6116'
                        y='29.5831'
                        width='32.2633'
                        height='41.4646'
                        rx='3'
                        transform='rotate(6 37.6116 29.5831)'
                        fill='#F7F7F7'
                        stroke='#D6D6D6'
                        strokeWidth='0.4'
                      />
                      <rect
                        id='Rectangle 136'
                        x='11.9961'
                        y='15.2793'
                        width='41.7725'
                        height='53.5399'
                        rx='4'
                        transform='rotate(-6 11.9961 15.2793)'
                        fill='url(#paint0_linear_9429_137537)'
                      />
                      <ellipse
                        id='Ellipse 21'
                        cx='8.09507'
                        cy='9.383'
                        rx='8.09507'
                        ry='9.383'
                        transform='matrix(0.867913 0.496716 -0.496703 0.867921 32.6016 19.1992)'
                        fill='url(#paint1_linear_9429_137537)'
                      />
                      <g id='Group'>
                        <path
                          id='Vector'
                          d='M34.6485 27.9177C36.0662 27.7686 37.0689 26.2518 36.8879 24.5297C36.7069 22.8076 36.1828 21.4512 33.993 21.6813C31.8032 21.9115 31.5725 23.3472 31.7535 25.0693C31.9345 26.7914 33.2307 28.0667 34.6485 27.9177Z'
                          fill='url(#paint2_linear_9429_137537)'
                        />
                        <path
                          id='Vector_2'
                          d='M30.2952 33.1887C30.2913 33.1592 30.2838 33.0837 30.2952 33.1887V33.1887Z'
                          fill='url(#paint3_linear_9429_137537)'
                        />
                        <path
                          id='Vector_3'
                          d='M40.0022 32.2516C39.9817 32.0521 40.0006 32.2227 40.0022 32.2516V32.2516Z'
                          fill='url(#paint4_linear_9429_137537)'
                        />
                        <path
                          id='Vector_4'
                          d='M39.9784 32.0432C39.6574 29.394 39.2435 28.4515 37.0377 28.1128C36.4519 28.0229 35.8628 28.3555 35.3073 28.562C35.1446 28.6225 34.9531 28.6707 34.7296 28.6942C34.5061 28.7177 34.3087 28.7103 34.137 28.685C33.5507 28.5984 32.9055 28.3956 32.3513 28.6053C30.2897 29.3855 30.0604 30.3783 30.2834 32.9637C30.3039 33.2026 30.3032 33.2154 30.2995 33.1878C30.322 33.395 30.392 33.5962 30.5544 33.7269C31.0107 34.0942 32.2813 34.753 35.3327 34.4323C38.5375 34.0955 39.5963 33.1101 39.9104 32.684C40.0019 32.5598 40.0214 32.404 40.0056 32.2506C40.0066 32.2678 40.0016 32.2348 39.9784 32.0432Z'
                          fill='url(#paint5_linear_9429_137537)'
                        />
                      </g>
                      <g id='Ellipse 20' opacity='0.1' filter='url(#filter0_f_9429_137537)'>
                        <ellipse cx='39.1992' cy='81.1992' rx='32' ry='6' fill='#3E3E3E' />
                      </g>
                      <rect
                        id='Rectangle 693'
                        x='20.3516'
                        y='46.8262'
                        width='24.915'
                        height='3.2'
                        rx='1.6'
                        transform='rotate(-6 20.3516 46.8262)'
                        fill='url(#paint6_linear_9429_137537)'
                      />
                      <rect
                        id='Rectangle 694'
                        x='20.9219'
                        y='53.3359'
                        width='31.917'
                        height='3.2'
                        rx='1.6'
                        transform='rotate(-6 20.9219 53.3359)'
                        fill='url(#paint7_linear_9429_137537)'
                      />
                      <path
                        id='Vector_5'
                        d='M58.2239 42.3145L65.3238 35.2146C64.1292 34.7159 63.0444 33.9872 62.1309 33.07C61.2133 32.1564 60.4843 31.0712 59.9854 29.8762L52.8855 36.9761C52.3316 37.53 52.0542 37.8075 51.8161 38.1127C51.5349 38.473 51.2938 38.8628 51.0971 39.2753C50.931 39.6247 50.8072 39.9972 50.5595 40.7402L49.252 44.6597C49.1918 44.8392 49.1829 45.0319 49.2262 45.2161C49.2696 45.4004 49.3634 45.5689 49.4973 45.7027C49.6311 45.8366 49.7996 45.9304 49.9839 45.9738C50.1681 46.0171 50.3608 46.0082 50.5403 45.948L54.4598 44.6405C55.2038 44.3928 55.5753 44.269 55.9247 44.1029C56.3375 43.9061 56.7273 43.6652 57.0873 43.3839C57.3925 43.1458 57.67 42.8684 58.2239 42.3145ZM67.2936 33.2448C68.0015 32.5369 68.3992 31.5767 68.3992 30.5756C68.3992 29.5744 68.0015 28.6143 67.2936 27.9064C66.5857 27.1985 65.6256 26.8008 64.6244 26.8008C63.6233 26.8008 62.6631 27.1985 61.9552 27.9064L61.1037 28.7579L61.1402 28.8644C61.5598 30.0651 62.2465 31.1548 63.1485 32.0515C64.072 32.9805 65.1999 33.6807 66.4421 34.0963L67.2936 33.2448Z'
                        fill='url(#paint8_linear_9429_137537)'
                      />
                    </g>
                    <defs>
                      <filter
                        id='filter0_f_9429_137537'
                        x='-0.800781'
                        y='67.1992'
                        width='80'
                        height='28'
                        filterUnits='userSpaceOnUse'
                        colorInterpolationFilters='sRGB'
                      >
                        <feFlood floodOpacity='0' result='BackgroundImageFix' />
                        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
                        <feGaussianBlur stdDeviation='4' result='effect1_foregroundBlur_9429_137537' />
                      </filter>
                      <linearGradient
                        id='paint0_linear_9429_137537'
                        x1='32.8824'
                        y1='15.2793'
                        x2='32.8824'
                        y2='68.8192'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#ECECEC' />
                        <stop offset='1' stopColor='#C1C1C1' />
                      </linearGradient>
                      <linearGradient
                        id='paint1_linear_9429_137537'
                        x1='8.09507'
                        y1='0'
                        x2='8.09507'
                        y2='18.766'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='white' />
                        <stop offset='1' stopColor='white' stopOpacity='0' />
                      </linearGradient>
                      <linearGradient
                        id='paint2_linear_9429_137537'
                        x1='31.7473'
                        y1='24.8247'
                        x2='36.8817'
                        y2='24.2851'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#151515' />
                        <stop offset='1' stopColor='#616161' />
                      </linearGradient>
                      <linearGradient
                        id='paint3_linear_9429_137537'
                        x1='30.2917'
                        y1='33.1596'
                        x2='30.2922'
                        y2='33.1596'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#151515' />
                        <stop offset='1' stopColor='#616161' />
                      </linearGradient>
                      <linearGradient
                        id='paint4_linear_9429_137537'
                        x1='39.9968'
                        y1='32.2002'
                        x2='39.9975'
                        y2='32.2002'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#151515' />
                        <stop offset='1' stopColor='#616161' />
                      </linearGradient>
                      <linearGradient
                        id='paint5_linear_9429_137537'
                        x1='30.1647'
                        y1='31.556'
                        x2='39.8623'
                        y2='30.5368'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#151515' />
                        <stop offset='1' stopColor='#616161' />
                      </linearGradient>
                      <linearGradient
                        id='paint6_linear_9429_137537'
                        x1='20.445'
                        y1='48.3017'
                        x2='45.36'
                        y2='48.3017'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#151515' />
                        <stop offset='1' stopColor='#616161' />
                      </linearGradient>
                      <linearGradient
                        id='paint7_linear_9429_137537'
                        x1='21.0415'
                        y1='54.8115'
                        x2='52.9585'
                        y2='54.8115'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#151515' />
                        <stop offset='1' stopColor='#616161' />
                      </linearGradient>
                      <linearGradient
                        id='paint8_linear_9429_137537'
                        x1='58.7992'
                        y1='26.8008'
                        x2='58.7992'
                        y2='46.0008'
                        gradientUnits='userSpaceOnUse'
                      >
                        <stop stopColor='#ED1B2F' />
                        <stop offset='1' stopColor='#B51424' />
                      </linearGradient>
                      <clipPath id='clip0_9429_137537'>
                        <rect width='80' height='80' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className='content flex flex-col gap-y-4'>
                  <h3 className='font-bold text-xl'>Hồ sơ cá nhân</h3>
                  <p>Kiến tạo hồ sơ ITviec với cấu trúc chuẩn mực cùng các gợi ý chi tiết</p>
                  <Link href='/' className='border border-red-300 rounded-sm text-red-400 w-max px-4 py-2 '>
                    Cập nhật hồ sơ
                  </Link>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </main>

      {/* Section 2 Company */}
      <main className='my-10 mx-[90px]'>
        <h2 className='text-center font-bold text-2xl'>Nhà tuyển dụng hàng đầu</h2>

        <div className='card-list grid grid-cols-3 gap-3 justify-center '>
          {Array.from({ length: 6 }, (_, i) => (
            <Link href='/company' key={i} legacyBehavior>
              <div className='card relative flex flex-col gap-y-4 justify-between items-center border border-gray-300 rounded-xl'>
                <div className='card-top p-8 flex flex-col items-center gap-y-4'>
                  <div className='card-top__img border border-gray-300 rounded-2xl shadow-2xl bg-white w-max px-10 mx-auto'>
                    <Image alt='logo' src={fpt} width={100} height={100} quality={80} />
                  </div>
                  <h6 className='font-bold text-center'>FPT Software</h6>
                  <div className='tech flex items-center gap-x-2'>
                    <p className='w-max rounded-full bg-slate-300 px-2 py-2'>C++</p>
                    <p className='w-max rounded-full bg-slate-300 px-2 py-2'>C++</p>
                    <p className='w-max rounded-full bg-slate-300 px-2 py-2'>C++</p>
                    <p className='w-max rounded-full bg-slate-300 px-2 py-2'>C++</p>
                    <p className='w-max rounded-full bg-slate-300 px-2 py-2'>C++</p>
                  </div>
                </div>
                <div className='card-bottom p-4 rounded-b-xl border-gray-300 flex w-full bg-[#F7F7F7] justify-between items-center'>
                  <p>Ha Noi</p>
                  <div className='flex gap-x-4 items-center'>
                    <div className='active w-4 h-4 bg-green-600 rounded-full'></div>
                    <p>4 job</p>
                    <FaAngleRight />
                  </div>
                </div>
                <div className='bg absolute left-0 top-0 z-[-100]'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='428' height='182' viewBox='0 0 428 182' fill='none'>
                    <g clipPath='url(#clip0_9429_137224)'>
                      <g opacity='0.35'>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M221.7 36.5582C222.601 34.1743 221.112 31.648 218.377 30.9166C215.638 30.1836 212.687 31.5222 211.787 33.9032C210.887 36.2872 212.376 38.8135 215.111 39.5448C217.849 40.2779 220.801 38.9392 221.7 36.5582Z'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M225.701 36.5578C227.887 30.781 224.276 24.6531 217.635 22.8773C210.998 21.1002 203.841 24.347 201.655 30.1238C199.468 35.9006 203.079 42.0285 209.721 43.8043C216.357 45.5814 223.515 42.3345 225.701 36.5578Z'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M229.704 36.56C233.174 27.3858 227.439 17.6592 216.9 14.8393C206.36 12.0194 194.999 17.1716 191.529 26.3457C188.059 35.5199 193.794 45.2465 204.333 48.0664C214.873 50.8863 226.234 45.7341 229.704 36.56Z'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M233.706 36.5638C238.459 23.9951 230.605 10.6686 216.164 6.80291C201.723 2.93724 186.156 9.99766 181.401 22.5646C176.648 35.1333 184.502 48.4598 198.943 52.3255C213.384 56.1912 228.951 49.1307 233.706 36.5638Z'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M237.711 36.5628C243.75 20.5984 233.769 3.67151 215.428 -1.23531C197.084 -6.1438 177.314 2.82192 171.274 18.7863C165.235 34.7507 175.215 51.6776 193.557 56.5844C211.898 61.4912 231.671 52.5272 237.711 36.5628Z'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M241.716 36.5662C249.038 17.2073 236.938 -3.31956 214.696 -9.27212C192.453 -15.2247 168.474 -4.35239 161.152 15.0065C153.831 34.3654 165.93 54.8922 188.173 60.8447C210.415 66.7973 234.395 55.925 241.716 36.5662Z'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M245.716 36.5645C254.324 13.8098 240.098 -10.3173 213.954 -17.3157C187.809 -24.311 159.625 -11.5335 151.02 11.2228C142.411 33.9774 156.638 58.1046 182.781 65.1029C208.927 72.0983 237.11 59.3207 245.716 36.5645Z'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M249.717 36.566C259.607 10.4169 243.264 -17.3131 213.215 -25.3514C183.168 -33.3925 150.779 -18.7067 140.887 7.44536C130.996 33.5945 147.342 61.3216 177.388 69.3627C207.435 77.4038 239.824 62.718 249.717 36.566Z'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M253.723 36.5662C264.898 7.01969 246.43 -24.3091 212.483 -33.3913C178.533 -42.4753 141.941 -25.8841 130.766 3.66237C119.591 33.2089 138.056 64.5359 172.005 73.6199C205.951 82.7051 242.548 66.1127 253.723 36.5662Z'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M257.727 36.569C270.187 3.62965 249.597 -31.3007 211.749 -41.4287C173.901 -51.5567 133.098 -33.0561 120.641 -0.115129C108.181 32.8242 128.77 67.7545 166.618 77.8826C204.467 88.0106 245.265 69.5112 257.727 36.569Z'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          d='M261.728 36.5699C275.471 0.233171 252.761 -38.2942 211.012 -49.4679C169.262 -60.6417 124.253 -40.2329 110.511 -3.89905C96.7673 32.4377 119.477 70.965 161.227 82.1388C202.977 93.3125 247.981 72.905 261.725 36.5682'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          d='M265.73 36.574C280.76 -3.15557 255.925 -45.2862 210.275 -57.5011C164.622 -69.7177 115.412 -47.4019 100.383 -7.67231C85.3571 32.0589 110.189 74.1879 155.842 86.4045C201.492 98.6194 250.702 76.3081 265.733 36.5757'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M269.737 36.572C286.05 -6.55496 259.094 -52.2826 209.54 -65.5449C159.986 -78.8073 106.571 -54.5832 90.2576 -11.4563C73.9445 31.6707 100.9 77.3983 150.454 90.6607C200.006 103.921 253.422 79.7019 269.737 36.572Z'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M273.734 36.5734C291.33 -9.94802 262.252 -59.2773 208.799 -73.5837C155.345 -87.8871 97.7233 -61.7595 80.1279 -15.238C62.5325 31.2834 91.6103 80.6127 145.063 94.9191C198.515 109.225 256.137 83.0978 273.734 36.5734Z'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          d='M277.742 36.5741C296.624 -13.3431 265.424 -66.2739 208.067 -81.6203C150.711 -96.9695 88.8836 -68.9335 70.0013 -19.0164C51.119 30.9008 82.3206 83.8288 139.676 99.178C197.029 114.526 258.858 86.4942 277.739 36.5724'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          d='M281.742 36.5763C301.908 -16.7383 268.585 -73.2679 207.329 -89.6583C146.07 -106.05 80.039 -76.1091 59.8744 -22.7974C39.7082 30.5172 73.0334 87.0438 134.29 103.439C195.544 119.832 261.58 89.8896 281.745 36.5779'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          d='M285.746 36.5757C307.197 -20.1317 271.752 -80.2629 206.595 -97.699C141.435 -115.137 71.1978 -83.2873 49.7492 -26.5782C28.3007 30.1308 63.7433 90.2603 128.903 107.698C194.06 125.134 264.3 93.2864 285.749 36.5774'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          d='M289.747 36.5793C312.483 -23.5255 274.914 -87.2553 205.855 -105.737C136.797 -124.219 62.3513 -90.463 39.6158 -30.3582C16.8803 29.7466 54.4496 93.4764 123.508 111.958C192.564 130.438 267.012 96.6841 289.745 36.5776'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M293.752 36.5805C317.77 -26.9188 278.082 -94.2485 205.12 -113.773C132.159 -133.298 53.5091 -97.6366 29.4914 -34.1373C5.47362 29.362 45.162 96.6918 118.123 116.216C191.082 135.739 269.731 100.078 293.752 36.5805Z'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M297.752 36.5808C323.056 -30.3143 281.241 -101.244 204.381 -121.813C127.519 -142.384 44.6619 -104.811 19.3619 -37.9173C-5.93988 28.9794 35.8722 99.9079 112.732 120.477C189.592 141.045 272.447 103.476 297.752 36.5808Z'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          d='M301.754 36.5825C328.341 -33.707 284.407 -108.237 203.646 -129.852C122.88 -151.465 35.8194 -111.987 9.23709 -41.6987C-17.3499 28.5908 26.5842 103.121 107.348 124.737C188.107 146.35 275.17 106.874 301.757 36.5842'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M305.761 36.5831C333.635 -37.1021 287.576 -115.236 202.913 -137.888C118.249 -160.546 26.9826 -119.16 -0.889589 -45.4772C-28.7605 28.2098 17.2973 106.339 101.962 128.996C186.623 151.652 277.89 110.27 305.761 36.5831Z'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M309.761 36.586C338.918 -40.4938 290.739 -122.227 202.172 -145.927C113.605 -169.627 18.1347 -126.336 -11.0215 -49.2562C-40.1776 27.8235 8.00217 109.554 96.5679 133.257C185.131 156.958 280.604 113.669 309.761 36.586Z'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M313.767 36.5852C344.207 -43.892 293.905 -129.224 201.44 -153.968C108.971 -178.714 9.29519 -133.514 -21.1433 -53.0402C-51.5834 27.4369 -1.27987 112.766 91.1843 137.513C183.65 162.257 283.327 117.062 313.767 36.5852Z'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M317.768 36.5893C349.493 -47.2807 297.069 -136.214 200.701 -162.001C104.329 -187.79 0.44915 -140.685 -31.2732 -56.8135C-62.9956 27.0581 -10.5747 115.99 85.7941 141.777C182.158 167.565 286.044 120.464 317.768 36.5893Z'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M321.774 36.5885C354.783 -50.6788 300.235 -143.211 199.968 -170.042C99.6978 -196.875 -8.39033 -147.864 -41.3979 -60.5991C-74.4072 26.6683 -19.8597 119.201 80.4105 146.033C180.676 172.867 288.767 123.858 321.774 36.5885Z'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          d='M325.771 36.59C360.066 -54.0702 303.396 -150.204 199.228 -178.081C95.0561 -205.959 -17.2376 -155.04 -51.5292 -64.3779C-85.8208 26.284 -29.1542 122.416 75.0174 150.295C179.186 178.172 291.478 127.255 325.774 36.5917'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M329.778 36.59C365.356 -57.4676 306.565 -157.203 198.493 -186.123C90.4185 -215.044 -26.0792 -162.219 -61.6548 -68.1598C-97.2333 25.8978 -38.44 125.63 69.63 154.553C177.697 183.474 294.198 130.651 329.778 36.59Z'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M333.78 36.5922C370.641 -60.8599 309.73 -164.195 197.755 -194.158C85.7795 -224.125 -34.9237 -169.392 -71.7845 -71.9396C-108.645 25.5124 -47.7329 128.845 64.2401 158.81C176.213 188.776 296.918 134.047 333.78 36.5922Z'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M337.784 36.5924C375.931 -64.2554 312.894 -171.191 197.021 -202.198C81.1447 -233.206 -43.767 -176.566 -81.9101 -75.7197C-120.055 25.1299 -57.0188 132.061 58.8527 163.071C174.724 194.08 299.637 137.445 337.784 36.5924Z'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M341.786 36.5942C381.216 -67.6481 316.059 -178.184 196.285 -210.236C76.5075 -242.29 -52.607 -183.74 -92.0353 -79.501C-131.465 24.7413 -66.3072 135.274 53.4686 167.331C173.239 199.385 302.354 140.839 341.786 36.5942Z'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M345.79 36.5971C386.507 -71.041 319.224 -185.177 195.549 -218.271C71.8688 -251.367 -61.4495 -190.912 -102.162 -83.2755C-142.876 24.3642 -75.5969 138.494 48.0819 171.594C171.754 204.686 305.076 144.237 345.79 36.5971Z'
                          stroke='#A6A6A6'
                          strokeWidth='0.5'
                          strokeMiterlimit='10'
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id='clip0_9429_137224'>
                        <rect width='428' height='182' fill='white' transform='matrix(-1 0 0 1 428 0)' />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Section 3 JOBS */}
      <main className='my-10 mx-[90px]'>
        <h2 className='text-center font-bold text-2xl'>111 Việc làm IT cho Developer "Chất"</h2>
        <div className='card-list grid grid-cols-4 gap-3'>
          {Array.from({ length: 8 }, (_, i) => (
            <Link href='/job' key={i} legacyBehavior>
              <div className={`card relative border ${i < 3 ? 'border-red-200 bg-[#FFF4E9]' : ''} p-4 rounded-xl`}>
                <div className='card-head'>
                  <span>Đăng {i} giờ trước</span>
                </div>
                {i < 3 && (
                  <span className='absolute w-14 h-7 bg-blue-500 right-0 top-0 text-center text-white'>New</span>
                )}
                <div className='card-body'>
                  <h3 className='font-bold text-xl'>Senior Front End Developer (ReactJS, Redux, SASS/SCSS)</h3>
                  <div className='company flex items-center gap-x-4'>
                    <Image src={company} alt='company' width={70} height={70} quality={90} />
                    <p>Byteuptech</p>
                  </div>
                  <p className='flex items-center gap-x-4'>
                    <BiDollarCircle />{' '}
                    <Link href='/' legacyBehavior>
                      <a>Đăng nhập để xem mức lương</a>
                    </Link>
                  </p>
                </div>
                <div className='card-bottom'>
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
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}
