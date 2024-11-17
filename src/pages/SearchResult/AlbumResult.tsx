import { useSearchAlbum } from '@/api/search'
import { AlbumSearchResult } from '@/api/search/albumResult'
import AlbumImage from '@/components/AlbumImage'
import Loading from '@/components/Loading'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTimeStampToDate } from '@/utils/number'
interface Props {
  keyword: string
}

const AlbumResult: React.FC<Props> = (props) => {
  const { keyword } = props
  const [searchResult, setSearchResult] = useState<AlbumSearchResult | null>(
    null
  )
  const navigate = useNavigate()

  const navigateToAlbumDetails = (id: number) => {
    navigate('/albumDetails', { state: { albumId: id } })
  }

  useEffect(() => {
    const fetch = async () => {
      const result = await useSearchAlbum(keyword)
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
        {searchResult.result.albums.map((album) => {
          return (
            <div
              className="w-full h-auto cursor-pointer"
              key={album.id}
              onClick={() => navigateToAlbumDetails(album.id)}
            >
              <AlbumImage
                imgUrl={album.picUrl}
                imgAlt={album.name}
                songCount={album.size}
                id={album.id}
                type="album"
              />
              <span
                className="hover:underline hover:underline-offset-1"
                title={album.name}
              >
                {album.name}
              </span>
              <span className="ml-5">{album.artist.name}</span>
              <span className="float-right">
                {useTimeStampToDate(album.publishTime)}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AlbumResult
