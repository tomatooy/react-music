import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

const About: React.FC = () => {
  return (
    <>
      <Card className="w-fit">
        <CardHeader>
          <CardTitle>Devloped by</CardTitle>
          <CardDescription>tomatooy</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-clip">
            An react music application. The website is fully depends on back-end
            APIs provided at{' '}
            <a href="https://gitlab.com/Binaryify/neteasecloudmusicapi">
              https://gitlab.com/Binaryify/neteasecloudmusicapi
            </a>
            . The music player is functional but most songs are not playable due
            to copyrights, please use offical app for music.
          </p>
          <br />
          <p className="text-sm text-clip">
            inspired by{' '}
            <a href="https://music.163.com/" className="underline">
              Netease Cloud Music
            </a>
            ,{' '}
            <a href="https://www.spotify.com/" className="underline">
              Spotify
            </a>
          </p>
        </CardContent>
      </Card>
    </>
  )
}

export default About
