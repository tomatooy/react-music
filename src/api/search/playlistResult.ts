export interface PlaylistSearchResult {
  result: Result
  code: number
}

export interface Result {
  playlists: Playlist[]
  hasMore: boolean
  hlWords: string[]
  playlistCount: number
  searchQcReminder: unknown
}

export interface Playlist {
  id: number
  name: string
  coverImgUrl: string
  creator: Creator
  subscribed: boolean
  trackCount: number
  userId: number
  playCount: number
  bookCount: number
  specialType: number
  officialTags?: string[]
  action: string
  actionType: string
  recommendText: string
  score?: string
  description?: string
  highQuality: boolean
  track: Track
  alg: string
}

export interface Creator {
  nickname: string
  userId: number
  userType: number
  avatarUrl: string
  authStatus: number
  expertTags: unknown
  experts: unknown
}

export interface Track {
  name: string
  id: number
  position: number
  alias: string[]
  status: number
  fee: number
  copyrightId: number
  disc: string
  no: number
  artists: Artist[]
  album: Album
  starred: boolean
  popularity: number
  score: number
  starredNum: number
  duration: number
  playedNum: number
  dayPlays: number
  hearTime: number
  ringtone?: string
  crbt: unknown
  audition: unknown
  copyFrom: string
  commentThreadId: string
  rtUrl: unknown
  ftype: number
  rtUrls: unknown[]
  copyright: number
  mvid: number
  rtype: number
  rurl: unknown
  hMusic?: HMusic
  mMusic?: MMusic
  lMusic: LMusic
  bMusic: BMusic
  mp3Url: unknown
  transNames?: string[]
}

export interface Artist {
  name: string
  id: number
  picId: number
  img1v1Id: number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  albumSize: number
  alias: unknown[]
  trans: string
  musicSize: number
  topicPerson: number
}

export interface Album {
  name: string
  id: number
  idStr: unknown
  type: string
  size: number
  picId: number
  blurPicUrl: string
  companyId: number
  pic: number
  picUrl: string
  publishTime: number
  description: string
  tags: string
  company?: string
  briefDesc: string
  artist: Artist2
  songs: unknown[]
  alias: string[]
  status: number
  copyrightId: number
  commentThreadId: string
  artists: Artist3[]
  onSale: boolean
  picId_str?: string
  transNames?: string[]
}

export interface Artist2 {
  name: string
  id: number
  picId: number
  img1v1Id: number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  albumSize: number
  alias: unknown[]
  trans: string
  musicSize: number
  topicPerson: number
}

export interface Artist3 {
  name: string
  id: number
  picId: number
  img1v1Id: number
  briefDesc: string
  picUrl: string
  img1v1Url: string
  albumSize: number
  alias: unknown[]
  trans: string
  musicSize: number
  topicPerson: number
}

export interface HMusic {
  name: unknown
  id: number
  size: number
  extension: string
  sr: number
  dfsId: number
  bitrate: number
  playTime: number
  volumeDelta: number
}

export interface MMusic {
  name: unknown
  id: number
  size: number
  extension: string
  sr: number
  dfsId: number
  bitrate: number
  playTime: number
  volumeDelta: number
}

export interface LMusic {
  name: unknown
  id: number
  size: number
  extension: string
  sr: number
  dfsId: number
  bitrate: number
  playTime: number
  volumeDelta: number
}

export interface BMusic {
  name: unknown
  id: number
  size: number
  extension: string
  sr: number
  dfsId: number
  bitrate: number
  playTime: number
  volumeDelta: number
}
