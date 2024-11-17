export interface UserSearchResult {
  result: Result
  code: number
}

interface Result {
  hasMore: boolean
  userprofileCount: number
  hlWords: string[]
  userprofiles: Userprofile[]
}

export interface Userprofile {
  defaultAvatar: boolean
  province: number
  authStatus: number
  followed: boolean
  avatarUrl: string
  accountStatus: number
  gender: number
  city: number
  birthday: number
  userId: number
  userType: number
  nickname: string
  signature: string
  description: string
  detailDescription: string
  avatarImgId: number
  backgroundImgId: number
  backgroundUrl: string
  authority: number
  mutual: boolean
  expertTags: unknown
  experts: unknown
  djStatus: number
  vipType: number
  remarkName: unknown
  authenticationTypes: number
  avatarDetail?: AvatarDetail
  avatarImgIdStr: string
  backgroundImgIdStr: string
  anchor: boolean
  avatarImgId_str?: string
  alg: string
}

export interface AvatarDetail {
  userType: number
  identityLevel: number
  identityIconUrl: string
}
