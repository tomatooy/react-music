import './index.css'
import loadingImgUrl from '@/assets/img/loading.png'
import LazyImg from 'react-lazyimg-component'

interface props {
  imgUrl: string
  imgAlt: string
  playCount?: number
  id: number
  type: string
}

const ArtistImage: React.FC<props> = (props) => {
  const { imgUrl, imgAlt } = props

  return (
    <div className="cover-image">
      <LazyImg
        src={imgUrl}
        alt={imgAlt}
        placeholder={loadingImgUrl}
        className="rounded-md"
      />
    </div>
  )
}
export default ArtistImage
