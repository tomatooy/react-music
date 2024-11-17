import { Artist } from './albumResult'
import { Playlist } from './playlistResult'
import { Album, Song } from './songResult'

export interface CompoundResult {
  result: Data
  code: number
}

export interface Data {
  albums: Album[]
  artists: Artist[]
  songs: Song[]
  playlists: Playlist[]
  order: string[]
}
