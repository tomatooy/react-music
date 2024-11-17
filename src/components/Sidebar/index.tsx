import { useNavigate, useLocation } from 'react-router-dom'
import { Button } from '../ui/button'
import { useLoginStatus } from '@/hooks/useLoginStatus'

const Sidebar: React.FC = () => {
  const { isLogin, profile } = useLoginStatus()
  const sidebarItems = [
    { title: 'Recommend', link: '/home' },
    { title: 'Popular Playlist', link: '/toplist' },
    { title: 'Playlist Category', link: '/playlist' },
    { title: 'Artists', link: '/artist' },
    { title: 'Album', link: '/album' },
    { title: 'About', link: '/about' }
  ]

  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="sidebar">
      <div className="px-3 py-2">
        <h1 className="mb-2 px-4 text-xl font-semibold tracking-tight">
          Discover
        </h1>
        <div className="space-y-1">
          {sidebarItems.map((item) => {
            return (
              <Button
                variant={item.link == location.pathname ? 'default' : 'ghost'}
                className="w-full justify-start"
                key={item.link}
                onClick={() => navigate(item.link)}
              >
                {item.title}
              </Button>
            )
          })}
        </div>
        {isLogin && (
          <div className="mt-4">
            <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">
              User
            </h2>
            <div className="space-y-1">
              <Button
                variant={
                  '/myplaylist' == location.pathname ? 'default' : 'ghost'
                }
                className="w-full justify-start"
                key="/myplaylist"
                onClick={() => navigate('/myplaylist')}
              >
                My Playlist
              </Button>
              <Button
                variant={'/profile' == location.pathname ? 'default' : 'ghost'}
                className="w-full justify-start"
                key="/profile"
                onClick={() =>
                  navigate('/userProfile', { state: { uid: profile.userId } })
                }
              >
                Profile
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Sidebar
