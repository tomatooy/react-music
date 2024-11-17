import http from '@/utils/request'
import { PlayListDetails } from '../playlist/type'
import { UserDetails } from './type'

export const useUserPlaylist = async (
  uid: number,
  limit: number = 10,
  offset: number = 0
) => {
  const { playlist } = await http.get<PlayListDetails>('user/playlist', {
    uid: uid,
    limit: limit,
    offset: offset
  })
  return playlist
}

export const useUserDetail = async (uid: number) => {
  const detailResult = await http.get<UserDetails>('user/detail', {
    uid: uid
  })
  return detailResult
}
