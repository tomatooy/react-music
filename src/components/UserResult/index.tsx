import { Userprofile } from '../../api/search/userResult'
import React from 'react'
import LazyImg from 'react-lazyimg-component'
const UserResultComponent: React.FC<Userprofile> = (props) => {
  const { nickname, avatarUrl, userId } = props
  return (
    <div>
      <div className="flex items-center hover:bg-gray-100 p-2 user-result rounded-md">
        <LazyImg
          className="rounded-full w-20 h-20"
          src={avatarUrl}
          alt={nickname}
          placeholder={userId}
        />
        <div className="ml-2">
          <p className="text-sm font-semibold">{nickname}</p>
          <p className="text-xs text-gray-500">ID: {userId}</p>
        </div>
      </div>
    </div>
  )
}

export default UserResultComponent
