import http from '@/utils/request'
import { AlbumInfo, AlbumNewest } from './type'

export const useAlbumNewest = async () => {
  const data = await http.get<AlbumNewest>('/album/new')
  return data
}

export const useAlbum = async (id: number) => {
  const data = await http.get<AlbumInfo>('album', { id: id })

  return data
}

export const useFeatureAlbum = async () => {
  const data = await http.get<AlbumNewest>('/album/newest')
  return data
}
