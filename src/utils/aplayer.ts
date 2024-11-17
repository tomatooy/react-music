import { audio } from '@/components/Aplayer/type'
import { useLyric } from '@/api/lyric'
import { Song } from '@/api/song/type'
import { PersonalizedNewSong } from '@/api/personalized/type'
import { HotSong } from '@/api/artist/type'
import { Song as SearchSong } from '@/api/search/songResult'
import { useSongCover } from '@/api/song'

const getSongUrl = (id: number): string => {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

const getLyric = async (id: number): Promise<string> => {
  const res = await useLyric(id)
  return res.lrc.lyric
}

export const setSong = async (audio: Song | HotSong): Promise<audio> => {
  const lrc = await getLyric(audio.id)
  return {
    name: audio.name,
    artist: audio.ar.map((artist) => artist.name).join('/'),
    url: getSongUrl(audio.id),
    cover: audio.al.picUrl,
    lrc
  }
}

export const setNewSong = async (
  audio: PersonalizedNewSong
): Promise<audio> => {
  const lrc = await getLyric(audio.id)
  return {
    name: audio.name,
    artist: audio.song.artists.map((artist) => artist.name).join('/'),
    url: getSongUrl(audio.id),
    cover: audio.picUrl,
    lrc
  }
}

export const setSongFromSearch = async (audio: SearchSong): Promise<audio> => {
  const lrc = await getLyric(audio.id)
  const coverUrl = await useSongCover(audio.id)
  return {
    name: audio.name,
    artist: audio.artists.map((artist) => artist.name).join('/'),
    url: getSongUrl(audio.id),
    cover: coverUrl,
    lrc
  }
}
