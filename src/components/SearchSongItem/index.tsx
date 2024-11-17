import SvgIcon from '../SvgIcon'
import useAplayerStore from '@/stores/aplayer'
import { useNavigate } from 'react-router-dom'
import { useFormatDuring } from '@/utils/number'
import { Song } from '@/api/search/songResult'
import { setSongFromSearch } from '@/utils/aplayer'

interface Props {
  song: Song
}

const SearchSongItem: React.FC<Props> = (prpos) => {
  const { song } = prpos

  const { ap, setAudio } = useAplayerStore()
  const playSong = async (song: Song) => {
    const audio = await setSongFromSearch(song)
    setAudio(audio)
    ap?.list.switch(ap?.list.audios.length - 1)
    ap?.play()
  }
  const addSong = async (song: Song) => {
    const audio = await setSongFromSearch(song)
    setAudio(audio)
  }

  const navigate = useNavigate()
  const navigateToArtistDetails = (artistId: number) => {
    navigate('/artistDetails', { state: { artistId } })
  }
  const navigateToAlbumDetails = (albumId: number) => {
    navigate('/albumDetails', { state: { albumId } })
  }

  return (
    <div className="songs-item" key={song.id}>
      <div className={`flex col-span-5`}>
        <span>{song.name}</span>
        <div className="songs-icon">
          <SvgIcon
            name="play-circle"
            className="svg-icon mr-1"
            onClick={() => playSong(song)}
          />
          <SvgIcon
            name="plus-circle"
            className="svg-icon"
            onClick={() => addSong(song)}
          />
        </div>
      </div>
      <span className="col-span-3">
        <>
          <span
            className="cursor-pointer hover:text-primary"
            key={song.artists[0].id}
            onClick={() => navigateToArtistDetails(song.artists[0].id)}
          >
            {song.artists[0].name}
          </span>
        </>
      </span>
      <span
        className="col-span-3 cursor-pointer hover:text-primary"
        onClick={() => navigateToAlbumDetails(song.album.id)}
      >
        {song.album.name}
      </span>
      <span className="col-span-1">
        {useFormatDuring(song.duration / 1000)}
      </span>
    </div>
  )
}

export default SearchSongItem
