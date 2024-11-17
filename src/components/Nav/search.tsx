import SvgIcon from '../SvgIcon'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useSearch } from '@/hooks/useSearch'
import SearchSuggest from './searchSuggest'

const Search: React.FC = () => {
  const {
    open,
    openHotSearch,
    openSuggest,
    hotSearch,
    suggest,
    input,
    handleSearch,
    handleOnClickHotSearch,
    handleInputFocus,
    handleInputBlur,
    setInput
  } = useSearch()

  return (
    <div className="hidden md:flex items-center space-x-2 w-1/2 relative">
      <form
        className="flex items-center flex-auto justify-between"
        onSubmit={(e) => {
          e.preventDefault()
          handleSearch()
        }}
      >
        <Input
          placeholder="Search"
          className="w-full h-auto rounded-full"
          onFocus={() => handleInputFocus()}
          onBlur={() => handleInputBlur()}
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer"
        >
          <SvgIcon
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer"
            name="magnifying-glass"
          />
        </button>
      </form>
      {open && openHotSearch && (
        <div
          className="bg-background p-4 rounded-md absolute top-10 z-20 border w-max"
          onMouseDown={(e) => e.preventDefault()}
        >
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Hot Search
            </h2>
            {!hotSearch && <>Loading...</>}
            <div className="space-y-1">
              {hotSearch &&
                hotSearch.map((item, key) => {
                  return (
                    <Button
                      className="w-full justify-start"
                      key={key}
                      variant="ghost"
                      onClick={() => handleOnClickHotSearch(item.first)}
                    >
                      {item.first}
                    </Button>
                  )
                })}
            </div>
          </div>
        </div>
      )}

      {open && openSuggest && suggest && (
        <div
          className="bg-background p-4 rounded-md absolute top-10 z-20 border"
          onMouseDown={(e) => e.preventDefault()}
        >
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Suggest
            </h2>
            <div className="space-y-1">
              <SearchSuggest suggest={suggest} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
