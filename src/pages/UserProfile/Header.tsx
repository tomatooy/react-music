import { UserDetails } from '@/api/user/type'
import SvgIcon from '@/components/SvgIcon'

const Header: React.FC<UserDetails> = (Props) => {
  const {
    avatarUrl,
    nickname,
    signature,
    createTime,
    followeds,
    follows,
    playlistCount
  } = Props.profile
  return (
    <>
      <div className="flex items-center">
        <h2 className="text-xl">Profile</h2>
        <SvgIcon className="w-6 h-6" name="chevron-right"></SvgIcon>
      </div>
      <div className="grid grid-cols-7 gap-5 col-span-full">
        <img src={avatarUrl} alt={nickname} className="rounded-full" />
        <div className="col-span-6">
          <h2 className="text-3xl font-bold my-2">{nickname}</h2>
          {}
          <p>{signature ? signature : 'Signature: none'}</p>
          <span>
            <span>User Since: {new Date(createTime).getFullYear()}</span>
          </span>
          <div>
            <span>Follower: {followeds} </span>
            <span>Follows: {follows} </span>
            <span>Playlist: {playlistCount}</span>
          </div>
          <span className="svg-button bg-primary text-white mr-2 my-2">
            <SvgIcon name="plus" className="w-5 h-5 mr-1" />
            <span>关注</span>
          </span>
        </div>
      </div>
    </>
  )
}
export default Header
