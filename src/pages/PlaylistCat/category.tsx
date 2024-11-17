import { useNavigate } from 'react-router-dom'
import CoverImage from '@/components/CoverImage'
import { Tag, TopPlaylist } from '@/api/playlist/type'
import { useEffect, useState } from 'react'
import { useTopPlaylist } from '@/api/playlist'
import { extractBaseUrl } from '@/utils/url'
import SvgIcon from '@/components/SvgIcon'
import Loading from '@/components/Loading'
interface Props extends Tag {
  key: string
}
const Category: React.FC<Props> = ({ name }) => {
  const navigate = useNavigate()

  const navigateToPlaylist = (id: number) => {
    navigate('/playlistDetails', { state: { playlistId: id } })
  }
  const [playlistData, setPlaylistData] = useState<TopPlaylist[] | null>(null)

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await useTopPlaylist({
          order: 'hot',
          cat: name,
          limit: 10
        })
        if (data) {
          setPlaylistData(data)
        }
      } catch (error) {
        console.error('Error fetching playlist details:', error)
      }
    }
    fetch()
  }, [])
  if (!playlistData) {
    return <Loading />
  }
  return (
    <div className="h-auto cursor-pointer col-span-full">
      <div className="flex items-center mb-4">
        <h2 className="text-xl">{name}</h2>
        <SvgIcon className="w-6 h-6" name="chevron-right"></SvgIcon>
      </div>
      {playlistData && (
        <div className="grid gap-6 grid-cols-5 mt-4">
          {playlistData.map((playlist) => (
            <div
              key={playlist.id}
              className="w-full h-auto cursor-pointer"
              onClick={() => navigateToPlaylist(playlist.id)}
            >
              <CoverImage
                imgUrl={extractBaseUrl(playlist.coverImgUrl)}
                imgAlt={playlist.name}
                playCount={playlist.playCount}
                id={playlist.id}
                type="playlist"
              />
              <p
                title={playlist.name}
                className="hover:underline hover:underline-offset-1 line-clamp-2"
              >
                {playlist.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Category
