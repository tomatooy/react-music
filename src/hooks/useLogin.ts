import { useEffect, useState } from 'react'
import {
  useLoginCellphone,
  useLoginQrCheck,
  useLoginQrCreate,
  useLoginQrKey,
  useLoginStatus,
  useLogout
} from '@/api/login'
import { useCaptchaSent, useCaptchaVerify } from '@/api/captcha'
import { UserProfile } from '@/api/login/type'
import { useToast } from '@/components/ui/use-toast'

export const useLogin = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [profile, setProfile] = useState({} as UserProfile)
  const loginStatus = async () => {
    const cookie = localStorage.getItem('cookie')
    if (cookie) {
      const { profile } = await useLoginStatus(cookie)
      localStorage.setItem('profile', JSON.stringify(profile))
      setIsLogin(true)
      setProfile(profile)
    }
  }
  useEffect(() => {
    loginStatus()
  }, [])
  const handleLogoutClick = async () => {
    const { code } = await useLogout()
    if (code == 200) {
      localStorage.removeItem('cookie')
      localStorage.removeItem('profile')
      setIsLogin(false)
      setProfile({} as UserProfile)
    }
  }

  const [isModalOpen, setIsModalOpen] = useState(false)
  const { toast } = useToast()
  const [countdown, setCountdown] = useState(0)
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

  const [phone, setPhone] = useState('')
  const [countryCode, setCountryCode] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const handleGetVerificationCode = async () => {
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
  const verifyLogin = async () => {
    const { data } = await useCaptchaVerify(phone, verificationCode)
    if (data) {
      try {
        const { code, cookie } = await useLoginCellphone(
          phone,
          countryCode,
          verificationCode
        )
        if (code == 200) {
          const { profile } = await useLoginStatus(cookie)
          setIsLogin(true)
          setProfile(profile)
          localStorage.setItem('profile', JSON.stringify(profile))
          localStorage.setItem('cookie', cookie)
          toast({
            title: '登录',
            description: '授权登录成功'
          })
          setIsModalOpen(false)
        }
      } catch {
        toast({
          title: '登录',
          description: '登录出错，请尝试二维码登录'
        })
      }
    } else {
      toast({
        title: '登录',
        description: '验证码错误'
      })
    }
  }

  const [qrImg, setQrImg] = useState('')

  useEffect(() => {
    let timer: NodeJS.Timeout
    const qrLogin = async () => {
      const { unikey } = await useLoginQrKey()
      const { qrimg } = await useLoginQrCreate(unikey)
      setQrImg(qrimg)
      timer = setInterval(async () => {
        const { code, cookie } = await useLoginQrCheck(unikey)
        if (code === 800) {
          toast({
            title: '登录',
            description: '二维码已过期，请重新获取'
          })
          clearInterval(timer)
        }
        if (code === 803) {
          const { profile } = await useLoginStatus(cookie)
          setIsLogin(true)
          setProfile(profile)
          localStorage.setItem('profile', JSON.stringify(profile))
          localStorage.setItem('cookie', cookie)
          toast({
            title: '登录',
            description: '授权登录成功'
          })
          setIsModalOpen(false)
          clearInterval(timer)
        }
      }, 3000)
    }
    if (isModalOpen) qrLogin()

    return () => {
      clearInterval(timer)
    }
  }, [isModalOpen])

  return {
    isLogin,
    profile,
    handleLogoutClick,
    countdown,
    phone,
    verificationCode,
    qrImg,
    isModalOpen,
    handleGetVerificationCode,
    setPhone,
    setVerificationCode,
    setIsModalOpen,
    verifyLogin,
    countryCode,
    setCountryCode
  }
}
