import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '../ui/input'
import { Label } from '@radix-ui/react-dropdown-menu'
import { Button } from '../ui/button'
import SelectCountryCode from './selectCountryCode'
import Register from './register'

interface Props {
  countdown: number
  phone: string
  verificationCode: string
  qrImg: string
  handleGetVerificationCode: () => void
  setPhone: React.Dispatch<React.SetStateAction<string>>
  setVerificationCode: React.Dispatch<React.SetStateAction<string>>
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  verifyLogin: () => void
  countryCode: string
  setCountryCode: React.Dispatch<React.SetStateAction<string>>
}

const Login: React.FC<Props> = (props) => {
  const {
    countdown,
    phone,
    verificationCode,
    qrImg,
    handleGetVerificationCode,
    setPhone,
    setVerificationCode,
    verifyLogin,
    countryCode,
    setCountryCode
  } = props

  return (
    <>
      <div className="h-1/2">
        <Tabs defaultValue="captcha" className="w-full">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="captcha">Phone Login</TabsTrigger>
              <TabsTrigger value="loginQr">QR Login</TabsTrigger>
              <TabsTrigger value="register">Register Now</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="captcha" className="h-full">
            <div className="space-y-4">
              <Label>Phone Number</Label>
              <div className="flex justify-between">
                <SelectCountryCode
                  countryCode={countryCode}
                  setCountryCode={setCountryCode}
                />
                <Input
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 w-64 ml-1"
                />
              </div>
            </div>
            <div className="space-y-4 mt-4">
              <Label>Captcha</Label>
              <Input
                id="verificationCode"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Button
                variant="secondary"
                disabled={countdown > 0}
                onClick={handleGetVerificationCode}
              >
                {countdown > 0 ? `Resend(${countdown}s)` : 'Send Captcha'}
              </Button>
              <Button onClick={verifyLogin}>Login</Button>
            </div>
          </TabsContent>
          <TabsContent value="loginQr" className="h-full">
            <div className="flex justify-center my-6">
              <img src={qrImg} alt="QR" />
            </div>
          </TabsContent>
          <TabsContent value="register" className="h-full">
            <Register />
          </TabsContent>
        </Tabs>
      </div>
      <span className="text-xs font-light">
        For safty purposes, only Phone and QR code login are supported
      </span>
    </>
  )
}
export default Login
