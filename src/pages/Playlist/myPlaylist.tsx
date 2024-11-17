import { PlayListDetails } from '@/api/playlist/type'
import CoverImage from '@/components/CoverImage'
import SvgIcon from '@/components/SvgIcon'
import { useNavigate } from 'react-router-dom'

const MyPlaylist: React.FC<PlayListDetails> = ({ playlists }) => {
  const navigate = useNavigate()
  const navigateToPlaylistDetails = (playlistId: number) => {
    navigate('/playlistDetails', { state: { playlistId } })
  }
  return (
    <div className="col-span-full">
      <div className="flex items-center mb-4">
        <h2 className="text-xl">我的歌单</h2>
        <SvgIcon className="w-6 h-6" name="chevron-right"></SvgIcon>
      </div>
      <div className="grid grid-cols-1 gap-20 sm:grid-cols-4">
        {playlists.map((item) => {
          return (
            <div
              className="w-full h-auto cursor-pointer"
              key={item.id}
              onClick={() => navigateToPlaylistDetails(item.id)}
            >
              <CoverImage
                imgUrl={item.coverImgUrl}
                imgAlt={item.name}
                playCount={item.playCount}
                id={item.id}
                type="playlist"
              />
              <p
                className="hover:underline hover:underline-offset-1 line-clamp-2"
                title={item.name}
              >
                {item.name}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyPlaylist
