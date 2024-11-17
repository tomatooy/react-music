import { PlayListDetail } from '@/api/playlist/type'
import AlbumImage from '@/components/AlbumImage'
import SvgIcon from '@/components/SvgIcon'
import { useNavigate } from 'react-router-dom'

interface PlaylistProps {
  playlist: PlayListDetail[]
}

const Playlist: React.FC<PlaylistProps> = ({ playlist }) => {
  const navigate = useNavigate()
  const navigateToPlaylistDetails = (id: number) => {
    navigate('/playlistDetails', { state: { playlistId: id } })
  }
  return (
    <div className="col-span-full">
      <div className="flex items-center mb-3">
        <h2 className="text-xl">Playlist</h2>
        <SvgIcon className="w-6 h-6" name="chevron-right"></SvgIcon>
      </div>
      <div className="grid grid-cols-4 gap-3 w-full ">
        {playlist.map((item) => {
          return (
            <div
              className="w-full h-auto cursor-pointer"
              key={item.id}
              onClick={() => navigateToPlaylistDetails(item.id)}
            >
              <AlbumImage
                imgUrl={item.coverImgUrl}
                imgAlt={item.name}
                songCount={item.trackCount}
                id={item.id}
                type="album"
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
export default Playlist
