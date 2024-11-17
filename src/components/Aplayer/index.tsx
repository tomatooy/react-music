import { useEffect } from 'react'
import useAplayerStore from '@/stores/aplayer'
import './index.css'
import 'aplayer/dist/APlayer.min.css'

const Aplayer: React.FC = () => {
  const { ap, initializeAplayer } = useAplayerStore()

  useEffect(() => {
    initializeAplayer()

    return () => {
      ap?.destroy()
    }
  }, [])

  return <div className="playMusic text-black"></div>
}

export default Aplayer
