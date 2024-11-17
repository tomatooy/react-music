import http from '@/utils/request'
import { SearchHot } from './hotResult'
import { SongSearchResult } from './songResult'
import { AlbumSearchResult } from './albumResult'
import { ArtistSearchResult } from './artistResult'
import { UserSearchResult } from './userResult'
import { PlaylistSearchResult } from './playlistResult'
import { CompoundResult } from './compoundResult'

export const useSearchHot = async () => {
  const { result } = await http.get<SearchHot>('/search/hot')
  return result
}

export const useSearchSong = async (keyword: string) => {
  const result = await http.get<SongSearchResult>('search', {
    keywords: keyword,
    type: 1
  })
  return result
}

export const useSearchAlbum = async (keyword: string) => {
  const result = await http.get<AlbumSearchResult>('search', {
    keywords: keyword,
    type: 10
  })
  return result
}

export const useSearchArtist = async (keyword: string) => {
  const result = await http.get<ArtistSearchResult>('search', {
    keywords: keyword,
    type: 100
  })
  return result
}

export const useSearchUser = async (keyword: string) => {
  const result = await http.get<UserSearchResult>('search', {
    keywords: keyword,
    type: 1002
  })
  return result
}

export const useSearchPlaylist = async (keyword: string) => {
  const result = await http.get<PlaylistSearchResult>('search', {
    keywords: keyword,
    type: 1000
  })
  return result
}

export const useSearchSuggest = async (keyword: string) => {
  const result = await http.get<CompoundResult>('search/suggest', {
    keywords: keyword
  })
  return result
}
