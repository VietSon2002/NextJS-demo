'use client'
import React, { use } from 'react'
import { useRouter } from 'next/navigation'

const NewUserPage = () => {
    const router = useRouter();
    return (
        <button className='btn btn-primary' onClick={() => router.push('/users')}>Create</button>
    )
}

export default NewUserPage
