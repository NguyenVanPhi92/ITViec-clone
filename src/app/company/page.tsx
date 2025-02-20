import React from 'react'
import { FaFlagUsa } from 'react-icons/fa'

export default function Company() {
  return (
    <div className='py-10 px-[90px] bg-[#F7F7F7]'>
      <main className='grid grid-cols-12 gap-x-4'>
        <div className='left col-span-8'>
          {/* Tab Navigation */}
          <div className='navigation mb-4 bg-white p-4 flex items-center gap-x-4'>
            <p className='border-b-2 border-red-400'>Gioi thieu</p>
            <p>
              Danh Gia <span className='px-2 py-1 border border-red-200 rounded-xl'>123</span>
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
          <div className='navigation mb-4 bg-white p-4 flex items-center gap-x-4'>
            <h3 className='py-2 border-b-2 border-gray-300'>Giới thiệu công ty</h3>
          </div>

          {/* Skills Company */}
          <div className='navigation mb-4 bg-white p-4 flex items-center gap-x-4'>
            <h3 className='py-2 border-b-2 border-gray-300'>Chuyên môn của chúng tôi</h3>
          </div>
          {/* Why Schose Company */}
          <div className='navigation mb-4 bg-white p-4 flex items-center gap-x-4'>
            <h3 className='py-2 border-b-2 border-gray-300'>Tại sao bạn sẽ yêu thích làm việc tại đây?</h3>
          </div>
          {/* Address Company */}
          <div className='navigation mb-4 bg-white p-4 flex items-center gap-x-4'>
            <h3 className='py-2 border-b-2 border-gray-300'>Địa điểm</h3>
          </div>
        </div>
        <div className='right col-span-4 p-4 bg-white'>
          <h3>8 việc làm đang tuyển dụng</h3>
        </div>
      </main>
    </div>
  )
}
