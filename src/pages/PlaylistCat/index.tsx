import { useQuery } from 'react-query'
import Loading from '@/components/Loading'
import { usePlaylistCat } from '@/api/playlist'
import Category from './category'

const PlaylistCat: React.FC = () => {
  const { data, isLoading, isError } = useQuery(
    'playlistCategories',
    usePlaylistCat
  )

  if (isLoading) return <Loading />
  if (isError) return <div>Error loading categories</div>
  if (!data?.tags || data.tags.length === 0)
    return <div>No categories found</div>
  return (
    <>
      {data.tags.map((category) => (
        <Category {...category} key={category.id.toString()} />
      ))}
    </>
  )
}

export default PlaylistCat
