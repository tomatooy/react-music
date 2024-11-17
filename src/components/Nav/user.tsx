import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { ModeToggle } from '../mode-toggle'
import Login from './login'
import { Button } from '../ui/button'
import { useLogin } from '@/hooks/useLogin'

const User: React.FC = () => {
  const {
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
  } = useLogin()

  return (
    <>
      <div className="flex items-center space-x-3 sm:space-x-6 pr-4">
        {!isLogin && (
          <div className="flex items-center">
            <Avatar className="w-6 h-6 rounded-full object-cover cursor-pointer">
              <AvatarImage src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/notion_12.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger
                className="ml-4 cursor-pointer text-xs font-light"
                onClick={() => setIsModalOpen(true)}
              >
                Login
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Login</DialogTitle>
                </DialogHeader>
                <Login
                  countdown={countdown}
                  phone={phone}
                  verificationCode={verificationCode}
                  qrImg={qrImg}
                  handleGetVerificationCode={handleGetVerificationCode}
                  setPhone={setPhone}
                  setVerificationCode={setVerificationCode}
                  setIsModalOpen={setIsModalOpen}
                  verifyLogin={verifyLogin}
                  countryCode={countryCode}
                  setCountryCode={setCountryCode}
                />
              </DialogContent>
            </Dialog>
          </div>
        )}
        {isLogin && (
          <div className="flex items-center">
            <Avatar className="w-6 h-6 rounded-full object-cover cursor-pointer">
              <AvatarImage src={profile.avatarUrl} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Dialog>
              <DialogTrigger className="ml-4 cursor-pointer text-xs font-light">
                Log out
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Log out</DialogTitle>
                </DialogHeader>
                <DialogDescription>Are you sure?</DialogDescription>
                <DialogTrigger>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <Button variant="secondary">Cancel</Button>
                    <Button onClick={handleLogoutClick}>Log out</Button>
                  </div>
                </DialogTrigger>
              </DialogContent>
            </Dialog>
          </div>
        )}
        <ModeToggle />
      </div>
    </>
  )
}

export default User
