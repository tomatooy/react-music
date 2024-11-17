import { CompoundResult } from '@/api/search/compoundResult'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'

interface SearchSuggestProps {
  suggest: CompoundResult | null
}

const SearchSuggest: React.FC<SearchSuggestProps> = ({ suggest }) => {
  const navigate = useNavigate()

  const handleOnClickSuggest = (keyword: string, type: string) => {
    switch (type) {
      case 'songs':
        navigate('/search', { state: { keyword } })
        break
      case 'albums':
        navigate('/albumDetails', { state: { albumId: keyword } })
        break
      case 'artists':
        navigate('/artistDetails', { state: { artistId: keyword } })
        break
      default:
        break
    }
  }

  if (!suggest) null

  return (
    <div className="relative w-full">
      {suggest?.result.songs && (
        <div>
          <div className="px-3 py-2">
            <h3 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Song
            </h3>
            {suggest.result.songs.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleOnClickSuggest(item.name, 'songs')}
                className="px-4 py-2 cursor-pointer"
                variant="ghost"
              >
                {item.name}
              </Button>
            ))}
          </div>
        </div>
      )}
      {suggest?.result.albums && (
        <div>
          <div className="px-3 py-2">
            <h3 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Album
            </h3>
            {suggest.result.albums.map((item) => (
              <Button
                key={item.id}
                onClick={() =>
                  handleOnClickSuggest(item.id.toString(), 'albums')
                }
                className="px-4 py-2 cursor-pointer"
                variant="ghost"
              >
                {item.name}
              </Button>
            ))}
          </div>
        </div>
      )}
      {suggest?.result.artists && (
        <div>
          <div className="px-3 py-2">
            <h3 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Artist
            </h3>
            {suggest.result.artists.map((item) => (
              <Button
                key={item.id}
                onClick={() =>
                  handleOnClickSuggest(item.id.toString(), 'artists')
                }
                className="px-4 py-2 cursor-pointer"
                variant="ghost"
              >
                {item.name}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchSuggest
