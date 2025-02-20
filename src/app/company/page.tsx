import Link from 'next/link'
import React from 'react'
import { BiDollarCircle } from 'react-icons/bi'
import { FaFacebookF, FaFlagUsa, FaInternetExplorer } from 'react-icons/fa'
import { FiMapPin } from 'react-icons/fi'
import { LuDot } from 'react-icons/lu'
import { PiBuildingOfficeLight } from 'react-icons/pi'
import company from '../../shared/assets/images/company.png'
import Image from 'next/image'

export default function Company() {
  return (
    <div className='py-10 px-[90px] bg-[#F7F7F7]'>
      <main className='grid grid-cols-12 gap-x-4'>
        <div className='left col-span-8'>
          {/* Tab Navigation */}
          <div className='navigation mb-4 bg-white p-4 flex items-center gap-x-4'>
            <p className='border-b-2 border-red-400 cursor-pointer'>Giới Thiệu</p>
            <p className='cursor-pointer'>
              Đánh Giá <span className='px-2 py-1 border border-red-200 rounded-xl'>123</span>
            </p>
          </div>
          {/* Info Company */}
          <div className='info mb-4 bg-white p-4'>
            <h3 className='py-2 border-b-2 border-gray-300'>Thông tin chung</h3>

            <div className='info-company grid grid-cols-3 gap-x-4 mt-4'>
              <div className='col'>
                <div className='item'>
                  <p className='text-sm text-gray-500'>Mô hình công ty</p>
                  <p>Sản phẩm</p>
                </div>
                <div className='item'>
                  <p className='text-sm text-gray-500'>Quốc gia</p>
                  <p className='flex items-center gap-x-2'>
                    <FaFlagUsa />
                    <span>USA</span>
                  </p>
                </div>
              </div>
              <div className='col'>
                <div className='item'>
                  <p className='text-sm text-gray-500'>Lĩnh vực công ty</p>
                  <p>Ngân Hàng</p>
                </div>
                <div className='item'>
                  <p className='text-sm text-gray-500'>Thời gian làm việc</p>
                  <p className=''>Thứ 2 - Thứ 6</p>
                </div>
              </div>
              <div className='col'>
                <div className='item'>
                  <p className='text-sm text-gray-500'>Mô hình công ty</p>
                  <p>1000+ nhân viên</p>
                </div>
              </div>
            </div>
          </div>
          {/* About Company */}
          <div className='navigation mb-4 bg-white p-4'>
            <h3 className='py-2 border-b-2 border-gray-300'>Giới thiệu công ty</h3>
            <p>Ngân hàng TMCP Quân Đội (MB)</p>
            <p className='font-bold'>Về chúng tôi</p>
            <p>
              Với tầm nhìn "Trở thành Doanh nghiệp số, Tập đoàn tài chính dẫn đầu" cùng mục tiêu "Top 3 thị trường về
              hiệu quả, hướng đến Top đầu châu Á”, MB đã và đang tiếp tục xây dựng, phát triển trong và ngoài nước, nhằm
              đáp ứng yêu cầu chuyển dịch số, mục tiêu tăng trưởng kinh doanh và nâng cao năng lực cạnh tranh.{' '}
            </p>
            <p>
              Sở hữu đội ngũ hơn 10.000 nhân sự, trong đó có hơn 1000 MBITers - chiếm 10% tổng nhân sự toàn Ngân hàng -
              nằm trong top đầu các ngân hàng tại Việt Nam về tỉ lệ nhân sự thuộc nhóm Công nghệ và Đổi mới, MB đang
              không ngừng đầu tư mạnh mẽ cho hệ thống, con người và kinh doanh nền tảng nhằm đem đến những trải nghiệm
              xuất sắc nhất cho khách hàng, xây dựng môi trường làm việc hạnh phúc, bền vững cho người MB.
            </p>
            <p className='font-bold'>Về chúng tôi</p>
            <p>
              Việt Nam đang sở hữu 07 ứng dụng có trên 10 triệu người sử dụng (Theo số liệu của Bộ Thông tin và Truyền
              thông năm 2023), MB là Ngân hàng duy nhất nằm trong danh sách đầy tự hào này. Tính đến hết năm 2024, MB
              chính thức chinh phục cột mốc 30 triệu khách hàng, tương đương 30% dân số Việt Nam, và đã cùng người dùng
              thực hiện 6,5 tỷ giao dịch trên kênh Số - giữ vững vị trí Top 1 quy mô NAPAS (Công ty Cổ phần Thanh toán
              Quốc gia Việt Nam). Trong đó, riêng ứng dụng App MBBank ghi nhận tần suất đỉnh chạm ngưỡng 20 triệu giao
              dịch/ngày, cùng hệ thống ổn định, an toàn, bảo mật.
            </p>
            <p className='font-bold'>Môi trường làm việc bền vững, hạnh phúc</p>
            <p>
              Năm 2024 ghi dấu cột mốc MB30 về văn hoá và con người với 02 giải thưởng danh giá: “Sustainable Workplace
              Awards – Doanh nghiệp có môi trường làm việc bền vững” do HR Asia Awards (Tạp chí nhân sự uy tín hàng đầu
              Châu Á) và “Happiness At Work – Doanh nghiệp có Nguồn nhân lực Hạnh phúc” do Anphabe (Tổ chức tư vấn tiên
              phong về giải pháp Thương hiệu Nhà tuyển dụng và Môi trường làm việc) trao tặng.
            </p>
            <p className='py-2 border-b-2 border-gray-300'>
              Đặc biệt, MB đã chính thức được vinh danh trong hạng mục “Vietnam Best IT Companies 2025” do chính các ứng
              viên của ITviec bình chọn. Và chúng tôi vẫn đang liên tục tìm kiếm những nhân tố xuất sắc, sáng tạo, đồng
              thời cam kết mang đến những giá trị, trải nghiệm tốt nhất cho nhân viên khi gia nhập tổ chức của mình.
            </p>

            <div className='flex gap-x-2 items-center py-4'>
              <p className='flex gap-x-2 items-center'>
                <FaInternetExplorer />
                <Link href='/'>Website công ty</Link>
              </p>
              <p className='flex gap-x-2 items-center'>
                <FaFacebookF />
                <Link href='/'>Fanpage Facebook</Link>
              </p>
            </div>
          </div>
          {/* Skills Company */}
          <div className='navigation mb-4 bg-white p-4'>
            <h3 className='py-2 border-b-2 border-gray-300'>Chuyên môn của chúng tôi</h3>

            <p>Our Key Skills</p>
            <div className='list-skills flex gap-x-2 items-center'>
              <p className='border border-gray-200 rounded-xl py-1 px-2'>Java</p>
              <p className='border border-gray-200 rounded-xl py-1 px-2'>Javascript</p>
              <p className='border border-gray-200 rounded-xl py-1 px-2'>Typescript</p>
              <p className='border border-gray-200 rounded-xl py-1 px-2'>Springboot</p>
              <p className='border border-gray-200 rounded-xl py-1 px-2'>.Net</p>
              <p className='border border-gray-200 rounded-xl py-1 px-2'>Python</p>
            </div>
            <p>
              <span className='font-bold'>Mobile</span>: React Native (Javascript), Flutter (Dart), Mini App
            </p>
            <p>
              <span className='font-bold'>Web</span>: AngularJs, ReactJs, Micro FrontEnd, HTML/Javascript/CSS
            </p>
            <p>
              <span className='font-bold'>Back-end</span>: SpringBoot (Java), Golang, Hasura, GraphQL, MongoDB, Oracle,
              Microservice
            </p>
            <p>
              <span className='font-bold'>System & Cloud</span>: AWS, Google Cloud, Viettel Cloud, Kubernetes, Microsoft
              Azure, Multi DC
            </p>
          </div>
          {/* Why Schose Company */}
          <div className='navigation mb-4 bg-white p-4'>
            <h3 className='py-2 border-b-2 border-gray-300'>Tại sao bạn sẽ yêu thích làm việc tại đây?</h3>
            <p className='flex items-center'>
              <LuDot className='text-red-600 text-[30px]' />
              <span>Mức lương cạnh tranh, hấp dẫn</span>
            </p>
            <p className='flex items-center'>
              <LuDot className='text-red-600 text-[30px]' />
              <span>Môi trường làm việc chuyên nghiệp, thân thiện</span>
            </p>
            <p className='flex items-center'>
              <LuDot className='text-red-600 text-[30px]' />
              <span>Được làm việc với các hệ thống hiện đại, tiên tiến</span>
            </p>

            <div className='div'>
              <h4 className='font-bold'>Trải nghiệm Thu nhập hấp dẫn với gói đãi ngộ toàn diện: </h4>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>
                  Thưởng thành tích tháng 13; Thưởng thành tích theo kết quả công việc 06 tháng, 1 năm ; Thưởng các dịp
                  lễ tết trong năm ; Thưởng theo danh hiệu cá nhân và tập thể…{' '}
                </span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>Du lịch nghỉ dưỡng hàng năm</span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>Khám sức khỏe định kì</span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>Gói bảo hiểm sức khỏe cá nhân và người thân (MIC)</span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>Quà tặng và ngày nghỉ sinh nhật hưởng nguyên lương </span>
              </p>
            </div>

            <div className='div'>
              <h4 className='font-bold'>Cơ hội nghề nghiệp và phát triển bản thân: </h4>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>
                  Được thử sức với các nền tảng công nghệ mới, tham gia vào những dự án chuyển đổi lớn của ngân hàng
                </span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>
                  Có cơ hội học hỏi từ các Chuyên gia, Lãnh đạo nội bộ hàng đầu tại MB trong lĩnh vực IT, Tài chính ngân
                  hàng
                </span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>
                  Được trải nghiệm các phương pháp học tập mới và phát triển năng lực theo lộ trình công danh.{' '}
                </span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>
                  Hưởng các chính sách hỗ trợ, khuyến khích học tập, nâng cao trình độ và phát triển bản thân (chứng chỉ
                  nghề quốc tế...){' '}
                </span>
              </p>
            </div>
            <div className='div'>
              <h4 className='font-bold'>Môi trường làm việc lý tưởng với: </h4>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>Những người cộng sự thân thiện và tài năng</span>
              </p>
              <p className='flex items-center'>
                <LuDot className='text-red-600 text-[30px]' />
                <span>Cơ sở vật chất, không gian làm việc xanh và hiện đại.</span>
              </p>
            </div>
          </div>
          {/* Address Company */}
          <div className='navigation mb-4 bg-white p-4'>
            <h3 className='py-2 border-b-2 border-gray-300'>Địa điểm</h3>
          </div>
        </div>

        <div className='right col-span-4 h-max p-4 bg-white'>
          <h3>8 việc làm đang tuyển dụng</h3>
          {Array.from({ length: 8 }, (_, i) => (
            <Link href='/job' key={i} legacyBehavior>
              <div
                className={`card relative cursor-pointer mb-4 border ${
                  i < 3 ? 'border-red-200 bg-[#FFF4E9]' : ''
                } p-4 rounded-xl`}
              >
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
    </div>
  )
}
