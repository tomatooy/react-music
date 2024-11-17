import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { useLocation } from 'react-router-dom'
import SongResult from './SongResult'
import AlbumResult from './AlbumResult'
import ArtistResult from './ArtistResult'
import PlaylistResult from './PlaylistResult'
import UserResult from './UserResult'

const Search: React.FC = () => {
  const location = useLocation()
  const { keyword } = location.state
  console.log(keyword)
  return (
    <>
      <div className="col-span-full">
        <Tabs defaultValue="songs" className="w-full">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="songs">Songs</TabsTrigger>
              <TabsTrigger value="albums">Albums</TabsTrigger>
              <TabsTrigger value="artists">Artists</TabsTrigger>
              <TabsTrigger value="playlists">Playlists</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="songs" className="h-full">
            <SongResult keyword={keyword} />
          </TabsContent>
          <TabsContent value="albums" className="h-full">
            <AlbumResult keyword={keyword} />
          </TabsContent>
          <TabsContent value="artists" className="h-full">
            <ArtistResult keyword={keyword} />
          </TabsContent>
          <TabsContent value="playlists" className="h-full">
            <PlaylistResult keyword={keyword} />
          </TabsContent>
          <TabsContent value="users" className="h-full">
            <UserResult keyword={keyword} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

export default Search
