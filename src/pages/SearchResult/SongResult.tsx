import { useSearchSong } from '@/api/search'
import { SongSearchResult } from '@/api/search/songResult'
import Loading from '@/components/Loading'
import SearchSongItem from '@/components/SearchSongItem'
import { useEffect, useState } from 'react'

interface Props {
  keyword: string
}

const SongResult: React.FC<Props> = (props) => {
  const { keyword } = props
  const [searchResult, setSearchResult] = useState<SongSearchResult | null>(
    null
  )

  useEffect(() => {
    const fetch = async () => {
      const result = await useSearchSong(keyword)
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
      <div>
        <div className="grid grid-cols-12 gap-4 mt-8 mb-1 text-xs font-light">
          <span className="col-span-5">歌曲</span>
          <span className="col-span-3">歌手</span>
          <span className="col-span-3">专辑</span>
          <span className="col-span-1">时长</span>
        </div>
        {searchResult.result.songs.map((song) => {
          return <SearchSongItem song={song} key={song.id} />
        })}
      </div>
    </div>
  )
}

export default SongResult
