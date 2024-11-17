export interface ArtistSearchResult {
  result: Result
  code: number
}

interface Result {
  hasMore: boolean
  artistCount: number
  hlWords: string[]
  artists: Artist[]
  searchQcReminder: unknown
}

interface Artist {
  id: number
  name: string
  picUrl: string
  alias: string[]
  albumSize: number
  picId: number
  fansGroup: unknown
  img1v1Url: string
  img1v1: number
  transNames?: string[]
  mvSize: number
  followed: boolean
  alg: string
  trans?: string
  accountId?: number
  identityIconUrl?: string
  alia?: string[]
}
