import React from 'react';
import UserTable from './UserTable';
import Link from 'next/link';

interface Props {
    searchParams: { [key: string]: string | string[] | undefined };
}

const UsersPage = async ({ searchParams }: Props) => {
    const rawSortOrder = searchParams?.sortOrder;
    const sortOrder = Array.isArray(rawSortOrder)
        ? rawSortOrder[0]
        : rawSortOrder ?? 'email';

    console.log('sortOrder', sortOrder);

    return (
        <>
            <h1>Users</h1>
            <Link href='/users/new' className='btn'>New User</Link>
            <UserTable sortOrder={sortOrder} />
        </>
    );
};

export default UsersPage;
