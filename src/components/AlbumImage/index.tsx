import SvgIcon from '@/components/SvgIcon'
import './index.css'
import { setSong } from '@/utils/aplayer'
import { usePlayListTrackAll } from '@/api/playlist'
import useAplayerStore from '@/stores/aplayer'
import { SyntheticEvent } from 'react'
import loadingImgUrl from '@/assets/img/loading.png'
import LazyImg from 'react-lazyimg-component'
import { useAlbum } from '@/api/album'

interface props {
  imgUrl: string
  imgAlt: string
  songCount?: number
  id: number
  type: string
}

const AlbumImage: React.FC<props> = (props) => {
  const { imgUrl, imgAlt, songCount, id, type } = props

  const { ap, setAudio } = useAplayerStore()
  const play = async (e: SyntheticEvent, id: number) => {
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
    const audioList =
      type == 'playlist'
        ? await usePlayListTrackAll(id)
        : (await useAlbum(id)).songs
    ap?.list.clear()
    for (const audio of audioList) {
      setAudio(await setSong(audio))
    }
  }

  return (
    <div className="cover-image">
      <LazyImg
        src={imgUrl}
        alt={imgAlt}
        placeholder={loadingImgUrl}
        className="rounded-md"
      />
      <div className="mask flex justify-center items-center">
        <SvgIcon
          className="w-10 text-white play-icon opacity-0 transition-opacity hover:text-primary"
          name="play-circle"
          onClick={(e: SyntheticEvent) => play(e, id)}
        />
      </div>
      {songCount && (
        <div className="play-count">
          <SvgIcon className="w-5 h-5 inline-block mx-1" name="musical-note" />
          <span>{songCount} Songs</span>
        </div>
      )}
    </div>
  )
}
export default AlbumImage
