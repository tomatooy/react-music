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
            title: 'Login',
            description: 'Login success'
          })
          setIsModalOpen(false)
        }
      } catch {
        toast({
          title: 'Login',
          description: 'Login error, please try QR code login'
        })
      }
    } else {
      toast({
        title: 'Login',
        description: 'Verification code error'
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
            title: 'Login',
            description: 'QR code expired, please get again'
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
            title: 'Login',
            description: 'Login success'
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
