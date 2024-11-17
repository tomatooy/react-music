import { useCategoryArtist } from '@/api/artist'
import { Artist } from '@/api/artist/type'
import ArtistImage from '@/components/ArtistImage'
import Loading from '@/components/Loading'
import SvgIcon from '@/components/SvgIcon'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ArtistCategoryDetail: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const navigateToArtistDetails = (artistId: number) => {
    navigate('/artistDetails', { state: { artistId } })
  }
  const { type, area, category } = location.state
  const [artistData, setArtistData] = useState<Artist[] | null>(null)
  useEffect(() => {
    const fetch = async (type: number, area: number) => {
      const data = await useCategoryArtist(type, area)
      setArtistData(data.artists)
    }
    fetch(type, area)
  }, [])

  if (!artistData) {
    return <Loading />
  }

  return (
    <div className="col-span-full">
      <div className="flex items-center mb-4">
        <h2 className="text-xl">Top {category} Artist</h2>
        <SvgIcon className="w-6 h-6" name="chevron-right"></SvgIcon>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-5">
        {artistData.map((item) => {
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

export default ArtistCategoryDetail
