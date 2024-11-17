export interface SongSearchResult {
  result: Result
  code: number
}

export interface Result {
  songs: Song[]
  hasMore: boolean
  songCount: number
}

export interface Song {
  id: number
  name: string
  artists: Artist[]
  album: Album
  duration: number
  copyrightId: number
  status: number
  alias: string[]
  rtype: number
  ftype: number
  mvid: number
  fee: number
  rUrl: unknown
  mark: number
  transNames?: string[]
}

export interface Artist {
  id: number
  name: string
  picUrl: unknown
  alias: unknown[]
  albumSize: number
  picId: number
  fansGroup: unknown
  img1v1Url: string
  img1v1: number
  trans: unknown
}

export interface Album {
  id: number
  name: string
  artist: Artist
  publishTime: number
  size: number
  copyrightId: number
  status: number
  picId: number
  mark: number
  alia?: string[]
  transNames?: string[]
}
