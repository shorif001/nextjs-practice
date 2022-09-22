import React from 'react'
import { useRouter } from 'next/router'

const UserId = () => {
  const router = useRouter();
  return (
    // <div>Single User Id {router-variable-name.query.file-name}</div>
    <div>Single User Id {router.query.id}</div>
  )
}

export default UserId