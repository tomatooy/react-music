import { useSearchUser } from '@/api/search'
import Loading from '@/components/Loading'
import { useEffect, useState } from 'react'
import { UserSearchResult } from '@/api/search/userResult'
import UserResultComponent from '@/components/UserResult'
import { useNavigate } from 'react-router-dom'

interface Props {
  keyword: string
}

const ArtistResult: React.FC<Props> = (props) => {
  const navigate = useNavigate()
  const handleClick = (uid: number) => {
    navigate(`/userProfile`, { state: { uid } })
  }
  const { keyword } = props
  const [searchResult, setSearchResult] = useState<UserSearchResult | null>(
    null
  )

  useEffect(() => {
    const fetch = async () => {
      const result = await useSearchUser(keyword)
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
    <div className="col-span-full mt-10">
      <div className="grid grid-cols-5 gap-5">
        {searchResult.result.userprofiles.map((user, key) => {
          return (
            <div key={key} onClick={() => handleClick(user.userId)}>
              <UserResultComponent {...user} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ArtistResult
