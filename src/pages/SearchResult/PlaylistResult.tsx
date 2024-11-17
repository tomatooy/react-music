import { useSearchPlaylist } from '@/api/search'
import AlbumImage from '@/components/AlbumImage'
import Loading from '@/components/Loading'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PlaylistSearchResult } from '@/api/search/playlistResult'
interface Props {
  keyword: string
}

const AlbumResult: React.FC<Props> = (props) => {
  const { keyword } = props
  const [searchResult, setSearchResult] = useState<PlaylistSearchResult | null>(
    null
  )
  const navigate = useNavigate()

  const navigateToAlbumDetails = (id: number) => {
    navigate('/playlistDetails', { state: { playlistId: id } })
  }

  useEffect(() => {
    const fetch = async () => {
      const result = await useSearchPlaylist(keyword)
      if (result) {
        setSearchResult(result)
      }
    }
    setSearchResult(null)
    fetch()
  }, [keyword])

  if (!searchResult) {
    return <Loading />
  }

  return (
    <div className="col-span-full">
      <div className="grid grid-cols-4 gap-5">
        {searchResult.result.playlists.map((playlist) => {
          return (
            <div
              className="w-full h-auto cursor-pointer"
              key={playlist.id}
              onClick={() => navigateToAlbumDetails(playlist.id)}
            >
              <AlbumImage
                imgUrl={playlist.coverImgUrl}
                imgAlt={playlist.name}
                songCount={playlist.trackCount}
                id={playlist.id}
                type="album"
              />
              <span
                className="hover:underline hover:underline-offset-1"
                title={playlist.name}
              >
                {playlist.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AlbumResult
