import { useTopPlaylistHighquality } from '@/api/top'
import { TopPlaylistHighquality } from '@/api/top/type'
import Loading from '@/components/Loading'
import { useEffect, useState } from 'react'
import TopList from './topList'

const Toplist: React.FC = () => {
  const [topListData, setTopList] = useState<TopPlaylistHighquality | null>(
    null
  )
  useEffect(() => {
    const fetchTopList = async () => {
      try {
        const data = await useTopPlaylistHighquality()
        setTopList(data)
      } catch (error) {
        throw new Error('Data fetching failed')
      }
    }
    fetchTopList()
  }, [])
  if (!topListData) {
    return <Loading />
  }

  return (
    <>
      <TopList toplist={topListData} />
    </>
  )
}

export default Toplist
