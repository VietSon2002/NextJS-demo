import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { auth } from '../auth';

export default async function Home() {
  const session = await auth();

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Users Page</h1>
      {session?.user ? (
        <p>Xin chào, <strong>{session.user.name}</strong></p>
      ) : (
        <p>Bạn chưa đăng nhập.</p>
      )}
    </div>
  );
}