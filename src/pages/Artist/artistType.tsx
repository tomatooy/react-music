import ArtistImage from '@/components/ArtistImage'
import { Areas } from './artistCategory'
import { findUrl } from './coverImage'
import { useNavigate } from 'react-router-dom'

const types = [
  { typeId: 1, type: 'Man' },
  { typeId: 2, type: 'Woman' },
  { typeId: 3, type: 'Group' }
]
const ArtistType: React.FC<Areas> = (area) => {
  const navigate = useNavigate()
  const navigateToCategoryDetail = (
    type: number,
    area: number,
    category: string
  ) => {
    navigate('/artist/category', { state: { type, area, category } })
  }
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
      {types.map((type, key) => {
        const url = findUrl(type.typeId, area.areaId)
        return (
          <div
            className="h-auto w-full"
            key={key}
            onClick={() =>
              navigateToCategoryDetail(
                type.typeId,
                area.areaId,
                area.area + ' ' + type.type
              )
            }
          >
            <ArtistImage
              imgUrl={url}
              imgAlt={area.area + ' ' + type.type}
              type="playlist"
              id={0}
            />
            <h2 className="hover:underline hover:underline-offset-1 line-clamp-2 text-lg">
              {area.area} {type.type}
            </h2>
          </div>
        )
      })}
    </div>
  )
}

export default ArtistType
