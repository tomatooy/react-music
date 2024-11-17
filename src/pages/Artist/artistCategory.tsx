import SvgIcon from '@/components/SvgIcon'
import ArtistType from './artistType'

export interface Areas {
  areaId: number
  area: string
}

const areas: Areas[] = [
  { areaId: 7, area: 'Chinese' },
  { areaId: 96, area: 'English' },
  { areaId: 8, area: 'Japanese' },
  { areaId: 16, area: 'Korean' },
  { areaId: 0, area: 'Others' }
]

// 7华语
// 96欧美
// 8:日本
// 16韩国
// 0:其他
const ArtistCategory: React.FC = () => {
  return (
    <div className="col-span-full">
      <div className="flex items-center mb-4">
        <h2 className="text-xl">Artist By Category</h2>
        <SvgIcon className="w-6 h-6" name="chevron-right"></SvgIcon>
      </div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-1">
        {areas.map((area, key) => {
          return <ArtistType {...area} key={key} />
        })}
      </div>
    </div>
  )
}

export default ArtistCategory
