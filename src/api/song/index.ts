import http from '@/utils/request'
import { Result, SongUrl } from './type'

// 获取音乐 url
export async function useSongUrl(id: number) {
  const { data } = await http.get<SongUrl>('/song/url', { id: id })
  return data
}

export async function useSongCover(id: number) {
  const data = await http.get<Result>('/song/detail', { ids: id })
  return data.songs[0].al.picUrl
}
