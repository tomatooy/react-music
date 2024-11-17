import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import lazyLoad from './lazyLoad'
import Layout from '@/components/Layout'
import ErrorBoundary from '@/components/ErrorBoundary'

const Home = lazy(() => import('@/pages/Home'))
const Toplist = lazy(() => import('@/pages/Toplist'))
const Artist = lazy(() => import('@/pages/Artist'))
const Album = lazy(() => import('@/pages/Album'))
const About = lazy(() => import('@/pages/About'))
const PlaylistDetails = lazy(() => import('@/pages/PlaylistDetails'))
const Playlist = lazy(() => import('@/pages/Playlist'))
const AlbumDetails = lazy(() => import('@/pages/AlbumDetails'))
const ArtistDetails = lazy(() => import('@/pages/ArtistDetails'))
const ArtistCategoryDetail = lazy(() => import('@/pages/CategoryDetail'))
const SearchResult = lazy(() => import('@/pages/SearchResult'))
const UserProfile = lazy(() => import('@/pages/UserProfile'))
const playlistCategories = lazy(() => import('@/pages/PlaylistCat'))
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />
      },
      {
        path: 'home',
        element: lazyLoad(Home)
      },
      {
        path: 'toplist',
        element: lazyLoad(Toplist)
      },
      {
        path: 'playlist',
        element: lazyLoad(playlistCategories)
      },
      {
        path: 'artist',
        element: lazyLoad(Artist)
      },
      {
        path: 'album',
        element: lazyLoad(Album)
      },
      {
        path: 'about',
        element: lazyLoad(About)
      },
      {
        path: 'playlistDetails',
        element: lazyLoad(PlaylistDetails)
      },
      {
        path: 'albumDetails',
        element: lazyLoad(AlbumDetails)
      },
      {
        path: 'artistDetails',
        element: lazyLoad(ArtistDetails)
      },
      {
        path: 'myplaylist',
        element: lazyLoad(Playlist)
      },
      {
        path: 'artist/category',
        element: lazyLoad(ArtistCategoryDetail)
      },
      {
        path: 'search',
        element: lazyLoad(SearchResult)
      },
      {
        path: 'userProfile',
        element: lazyLoad(UserProfile)
      }
    ]
  }
]

export default createBrowserRouter(routes, {
  basename: import.meta.env.VITE_BASE_URL
})
