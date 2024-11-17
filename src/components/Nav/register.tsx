import { useRegister } from '@/hooks/useRegister'
import SelectCountryCode from './selectCountryCode'
import { Label } from '@radix-ui/react-dropdown-menu'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
const Register: React.FC = () => {
  const {
    phone,
    setPhone,
    password,
    setPassword,
    captcha,
    setCaptcha,
    countdown,
    nickname,
    setNickname,
    countryCode,
    setCountryCode,
    phoneVerfied,
    handleGetVerificationCode,
    rePassword,
    setRePassword
  } = useRegister()
  return (
    <>
      <Label>Phone Number</Label>
      <div className="flex justify-between mt-1 mb-1">
        <SelectCountryCode
          countryCode={countryCode}
          setCountryCode={setCountryCode}
          disabled={phoneVerfied}
        />
        <Input
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="flex-1 w-64 ml-1"
          disabled={phoneVerfied}
        />
      </div>

      {phoneVerfied && (
        <>
          <Label>Nick Name</Label>
          <Input
            id="nickname"
            className="mb-1"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <Label>Verification Code</Label>
          <Input
            id="verificationCode"
            className="mb-1"
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value)}
          />
          <Label>Password</Label>
          <Input
            id="password"
            className="mb-1"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Label>Confirm Password</Label>
          <Input
            id="confirmPassword"
            className="mb-1"
            type="password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
        </>
      )}
      <div className="grid grid-cols-2 gap-5 mt-2">
        <Button
          variant="secondary"
          onClick={handleGetVerificationCode}
          disabled={countdown > 0}
        >
          {countdown > 0 ? `Resend (${countdown})` : 'Send Verification Code'}
        </Button>
        <Button disabled={!phoneVerfied}>Register</Button>
      </div>
    </>
  )
}

export default Register
