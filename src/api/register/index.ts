import http from '@/utils/request'
import { Result } from './type'

export const useRegisterApi = async (
  phone: string,
  password: string,
  countrycode: string,
  captcha: string,
  nickname: string
) => {
  const res = await http.get<Result>('/register/cellphone', {
    phone,
    password,
    countrycode,
    captcha,
    nickname
  })
  return res
}
