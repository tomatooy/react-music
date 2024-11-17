export interface UserProfile {
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
  avatarDetail: AvatarDetail
  avatarImgIdStr: string
  backgroundImgIdStr: string
  anchor: boolean
  avatarImgId_str: string
  alg: string
}

export interface AvatarDetail {
  userType: number
  identityLevel: number
  identityIconUrl: string
}

export interface UserDetails {
  level: number
  listenSongs: number
  userPoint: UserPoint
  mobileSign: boolean
  pcSign: boolean
  profile: Profile
  peopleCanSeeMyPlayRecord: boolean
  bindings: Binding[]
  adValid: boolean
  code: number
  newUser: boolean
  recallUser: boolean
  createTime: number
  createDays: number
  profileVillageInfo: ProfileVillageInfo
}

export interface UserPoint {
  userId: number
  balance: number
  updateTime: number
  version: number
  status: number
  blockBalance: number
}

export interface Profile {
  privacyItemUnlimit: PrivacyItemUnlimit
  avatarDetail: unknown
  createTime: number
  vipType: number
  mutual: boolean
  remarkName: string
  province: number
  followed: boolean
  city: number
  birthday: number
  gender: number
  nickname: string
  backgroundImgId: number
  backgroundUrl: string
  userType: number
  defaultAvatar: boolean
  avatarUrl: string
  detailDescription: string
  accountStatus: number
  avatarImgId: number
  djStatus: number
  authStatus: number
  experts: Experts
  expertTags: unknown
  avatarImgIdStr: string
  backgroundImgIdStr: string
  description: string
  userId: number
  signature: string
  authority: number
  followeds: number
  follows: number
  blacklist: boolean
  eventCount: number
  allSubscribedCount: number
  playlistBeSubscribedCount: number
  followTime: unknown
  followMe: boolean
  artistIdentity: string[]
  cCount: number
  inBlacklist: boolean
  sDJPCount: number
  playlistCount: number
  sCount: number
  newFollows: number
}

export interface PrivacyItemUnlimit {
  area: boolean
  college: boolean
  gender: boolean
  age: boolean
  villageAge: boolean
}

export interface Experts {}

export interface Binding {
  expiresIn: number
  refreshTime: number
  bindingTime: number
  tokenJsonStr: unknown
  url: string
  expired: boolean
  userId: number
  id: number
  type: number
}

export interface ProfileVillageInfo {
  title: string
  imageUrl: string
  targetUrl: string
}
