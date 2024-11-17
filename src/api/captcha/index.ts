import http from '@/utils/request'
import { CaptchaSent, CheckPhoneResult } from './type'

// 发送验证码
export const useCaptchaSent = async (phone: string, ctcode: string) => {
  const data = await http.get<CaptchaSent>('/captcha/sent', {
    phone,
    ctcode
  })
  return data
}

// 验证验证码
export const useCaptchaVerify = async (phone: string, captcha: string) => {
  const data = await http.get<CaptchaSent>('/captcha/verify', {
    phone,
    ctcode: '1',
    captcha
  })
  return data
}

export const useCheckExistingPhone = async (
  phone: string,
  countrycode: string
) => {
  const data = await http.get<CheckPhoneResult>('/cellphone/existence/check', {
    phone,
    countrycode
  })
  return data.exist
}
