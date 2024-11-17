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
        title: '手机号格式错误',
        description: '请输入正确的手机号'
      })
      return
    }
    if (!phoneVerfied) {
      const exist = await useCheckExistingPhone(phone, countryCode)
      if (exist === 1) {
        toast({
          title: '手机号已存在',
          description: '请重新输入手机号'
        })
        return
      } else {
        setPhoneVerfied(true)
      }
    }

    const { data, message } = await useCaptchaSent(phone, countryCode)
    if (data) {
      toast({
        title: '获取验证码',
        description: '已发送验证码到手机请查收'
      })
    } else {
      toast({
        title: '获取验证码',
        description: message
      })
    }
    setCountdown(60)
  }

  const handleRegister = async () => {
    if (password !== rePassword) {
      toast({
        title: '密码不一致',
        description: '请重新输入密码'
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
        title: '注册成功',
        description: '请登录'
      })
    } else {
      toast({
        title: '注册失败',
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
