import { useEffect, useState } from 'react'

export const useLoginStatus = () => {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    const cookie = localStorage.getItem('cookie')
    if (cookie && profile) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [])
  const profile = localStorage.getItem('profile')
  return { isLogin, profile: profile ? JSON.parse(profile) : null }
}
