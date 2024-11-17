import { getCurrentUserPlaylist } from '@/api/playlist'
import { PlayListDetails } from '@/api/playlist/type'
import { useEffect, useState } from 'react'
import MyPlaylist from './myPlaylist'
import Loading from '@/components/Loading'
import { useLoginStatus } from '@/hooks/useLoginStatus'

const Playlist: React.FC = () => {
  const [playlistData, setPlaylistData] = useState<PlayListDetails | null>(null)
  const loginStatus = useLoginStatus()
  useEffect(() => {
    const fetch = async () => {
      if (localStorage) {
        const profile = localStorage.getItem('profile') || undefined
        if (profile) {
          const data = await getCurrentUserPlaylist(JSON.parse(profile).userId)
          setPlaylistData(data)
        }
      }
    }
    fetch()
  }, [])

  if (!loginStatus) {
    return <>Pleas login to view my playlist</>
  }
  if (!playlistData) {
    return <Loading />
  }

  return (
    <>
      <MyPlaylist playlist={playlistData.playlist} />
    </>
  )
}

export default Playlist
