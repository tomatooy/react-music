import http from '@/utils/request'
import {
  PlayListDetailInfo,
  PlayListTrackAll,
  PlayListDetails,
  TagResult
} from './type'

// 获取歌单所有歌曲
export const usePlayListTrackAll = async (
  id: number,
  limit?: number,
  offset?: number
) => {
  const { songs } = await http.get<PlayListTrackAll>('/playlist/track/all', {
    id: id,
    limit: limit,
    offset: offset
  })
  return songs
}

// 获取歌单详情
export const usePlayListDetail = async (id: number, s: number = 8) => {
  const { playlist } = await http.get<PlayListDetailInfo>('/playlist/detail', {
    id: id,
    s: s
  })
  return playlist
}

export const getCurrentUserPlaylist = async (uid: string) => {
  const playlist = await http.get<PlayListDetails>(`/user/playlist`, {
    uid: uid
  })
  return playlist
}

export const usePlaylistCat = async () => {
  const tagRes = await http.get<TagResult>(`playlist/hot`)
  return tagRes
}
export const useTopPlaylist = async ({
  order = 'hot',
  cat = '全部',
  limit = 50,
  offset = 0
}: {
  order?: 'new' | 'hot'
  cat?: string
  limit?: number
  offset?: number
} = {}) => {
  const { playlists } = await http.get<PlayListDetails>('/top/playlist', {
    order,
    cat,
    limit,
    offset
  })
  return playlists
}
