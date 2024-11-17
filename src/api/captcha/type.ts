export interface CaptchaSent {
  data?: boolean
  message?: string
}

export interface CheckPhoneResult {
  exist: number
  nickname: string
  hasPassword: boolean
  avatarUrl: string
  hasSnsBinded: unknown
  countryCode: string
  cellphone: string
  code: number
}
