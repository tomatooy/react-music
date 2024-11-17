import { useLocation } from 'react-router-dom'
import Header from './Header'
import Playlist from './Playlist'
import { useUserDetails } from '@/hooks/useUserDetails'
import Loading from '@/components/Loading'

const UserProfile = () => {
  const location = useLocation()
  const { uid } = location.state as { uid: number }
  const { userDetailResult, userPlaylistResult } = useUserDetails(uid)
  if (!userDetailResult || !userPlaylistResult) {
    return <Loading />
  }
  return (
    <>
      <Header {...userDetailResult} />
      <Playlist playlist={userPlaylistResult} />
    </>
  )
}

export default UserProfile
