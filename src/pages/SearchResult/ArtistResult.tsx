import { useSearchArtist } from '@/api/search'
import { ArtistSearchResult } from '@/api/search/artistResult'
import Loading from '@/components/Loading'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ArtistImage from '@/components/ArtistImage'

interface Props {
  keyword: string
}

const ArtistResult: React.FC<Props> = (props) => {
  const { keyword } = props
  const [searchResult, setSearchResult] = useState<ArtistSearchResult | null>(
    null
  )
  const navigate = useNavigate()

  const navigateToArtistDetails = (id: number) => {
    navigate('/artistDetails', { state: { artistId: id } })
  }

  useEffect(() => {
    const fetch = async () => {
      const result = await useSearchArtist(keyword)
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
      <div className="grid grid-cols-5 gap-5">
        {searchResult.result.artists.map((item) => {
          return (
            <div
              className="w-full h-auto cursor-pointer"
              key={item.id}
              onClick={() => navigateToArtistDetails(item.id)}
            >
              <ArtistImage
                imgUrl={item.picUrl + '?param=300y300'}
                imgAlt={item.name}
                type="playlist"
                id={0}
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

export default ArtistResult
