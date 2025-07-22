'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    const { status, data: session } = useSession();
    if (status === 'loading') return null;

    return (
        <div className='flex bg-slate-200 p-5 space-x-3'>
            <Link href='/' className='mr-5'>Next.js</Link>
            <Link href='/users'>Users</Link>

            {status === 'authenticated' && (
                <>
                    <div>{session.user?.name}</div>
                    <button onClick={() => signOut()} className="mr-3">
                        Logout
                    </button>
                </>
            )}

            {status === 'unauthenticated' && (
                <button onClick={() => signIn('google')}>Login</button>
            )}
        </div>
    );
};

export default NavBar;
