import { useEffect, useState } from 'react'
import { PlayListDetail } from '@/api/playlist/type'
import { UserDetails } from '@/api/user/type'
import { useUserPlaylist, useUserDetail as useDetail } from '@/api/user'

export const useUserDetails = (uid: number) => {
  const [userDetailResult, setUserDetailResult] = useState<UserDetails | null>(
    null
  )
  const [userPlaylistResult, setUserPlaylistResult] = useState<
    PlayListDetail[] | null
  >(null)
  useEffect(() => {
    const fetch = async () => {
      const detailData = await useDetail(uid)
      const playlistData = await useUserPlaylist(uid)
      if (detailData) {
        setUserDetailResult(detailData)
      }
      if (playlistData) {
        setUserPlaylistResult(playlistData)
      }
    }
    fetch()
  }, [])

  return { userDetailResult, userPlaylistResult }
}
