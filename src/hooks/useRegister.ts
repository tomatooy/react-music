import { useCaptchaSent, useCheckExistingPhone } from '@/api/captcha'
import { useRegisterApi } from '@/api/register'
import { useToast } from '@/components/ui/use-toast'
import { useEffect, useState } from 'react'

export const useRegister = () => {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [captcha, setCaptcha] = useState('')
  const [countdown, setCountdown] = useState(0)
  const [nickname, setNickname] = useState('')
  const [countryCode, setCountryCode] = useState('')
  const [phoneVerfied, setPhoneVerfied] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const [rePassword, setRePassword] = useState('')
  const { toast } = useToast()

  const handleGetVerificationCode = async () => {
    if (
      !countryCode ||
      (countryCode === '86' && phone.length !== 11) ||
      (countryCode === '1' && phone.length !== 10)
    ) {
      toast({
        title: 'Phone number format error',
        description: 'Please enter the correct phone number'
      })
      return
    }
    if (!phoneVerfied) {
      const exist = await useCheckExistingPhone(phone, countryCode)
      if (exist === 1) {
        toast({
          title: 'Phone number already exists',
          description: 'Please enter another phone number'
        })
        return
      } else {
        setPhoneVerfied(true)
      }
    }

    const { data, message } = await useCaptchaSent(phone, countryCode)
    if (data) {
      toast({
        title: 'Get verification code',
        description:
          'Verification code has been sent to your phone, please check'
      })
    } else {
      toast({
        title: 'Get verification code',
        description: message
      })
    }
    setCountdown(60)
  }

  const handleRegister = async () => {
    if (password !== rePassword) {
      toast({
        title: 'Password mismatch',
        description: 'Please enter the password again'
      })
      return
    }
    const res = await useRegisterApi(
      phone,
      password,
      countryCode,
      captcha,
      nickname
    )
    if (res.code === 200) {
      toast({
        title: 'Register success',
        description: 'Please login'
      })
    } else {
      toast({
        title: 'Register failed',
        description: res.message
      })
    }
  }

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown(countdown - 1)
      }, 1000)
    }
    return () => {
      clearInterval(timer)
    }
  }, [countdown])

  return {
    phone,
    setPhone,
    password,
    setPassword,
    captcha,
    setCaptcha,
    countdown,
    setCountdown,
    nickname,
    setNickname,
    countryCode,
    setCountryCode,
    phoneVerfied,
    setPhoneVerfied,
    modalShow,
    setModalShow,
    toast,
    handleGetVerificationCode,
    rePassword,
    setRePassword,
    handleRegister
  }
}
