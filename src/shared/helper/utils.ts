import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Khai Báo Các Method Until Dùng Chung
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Xóa đi ký tự `/` đầu tiên của path
export const normalizePath = (path: string) => {
  return path.startsWith('/') ? path.slice(1) : path
}
