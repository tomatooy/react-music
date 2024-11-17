import { useFeatureAlbum } from '@/api/album'
import { Album as AlbumType } from '@/api/album/type'
import AlbumImage from '@/components/AlbumImage'
import Loading from '@/components/Loading'
import SvgIcon from '@/components/SvgIcon'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FeatureAlbum: React.FC = () => {
  const [albumData, setAlbumData] = useState<AlbumType[] | null>(null)
  useEffect(() => {
    const fetch = async () => {
      const data = await useFeatureAlbum()
      setAlbumData(data.albums)
    }
    fetch()
  }, [])
  const navigate = useNavigate()
  const navigateToAlbumDetails = (albumId: number) => {
    navigate('/albumDetails', { state: { albumId } })
  }

  if (!albumData) {
    return <Loading />
  }

  return (
    <div className="col-span-full">
      <div className="flex items-center mb-4">
        <h2 className="text-xl">New Feature Albums</h2>
        <SvgIcon className="w-6 h-6" name="chevron-right"></SvgIcon>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-6">
        {albumData.map((item) => {
          return (
            <div
              className="w-full h-auto cursor-pointer"
              key={item.id}
              onClick={() => navigateToAlbumDetails(item.id)}
            >
              <AlbumImage
                imgUrl={item.picUrl}
                imgAlt={item.name}
                songCount={item.size}
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

export default FeatureAlbum
