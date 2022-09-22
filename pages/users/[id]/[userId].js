import React from 'react'
import { useRouter } from 'next/router'

const UserIdComp = () => {
  const router = useRouter();
  return (
    <div>New User id{router.query.userId}</div>
  )
}

export default UserIdComp