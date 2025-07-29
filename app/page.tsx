import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { auth } from '../auth';
import changli from '../public/images/changli_wuthering_waves.jpg';

export default async function Home() {
  const session = await auth();

  return (
    <main>
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-4 text-red-500">Users Page</h1>
        {session?.user ? (
          <p>Xin chào, <strong>{session.user.name}</strong></p>
        ) : (
          <p>Bạn chưa đăng nhập.</p>
        )}
      </div>
      {/* local img
      <Image src={changli} alt="changli" /> */}
      {/* clound img */}
      <div className="w-screen h-screen overflow-hidden relative">
        <div
          className="absolute inset-0 origin-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/56/b2/66/56b2660f633818981f35937f32f62900.jpg')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            width: '100vh', // hoán đổi
            height: '100vw',
            top: '50%',
            left: '50%',
            transformOrigin: 'center',
            transform: 'translate(-50%, -50%) rotate(90deg)',
          }}
        ></div>
      </div>
    </main>
  );
}