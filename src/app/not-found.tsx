import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className='flex justify-center gap-10 mt-4'>
      <div >
        <Image
          className='rounded-4xl'
          src={'/okak.webp'}
          alt={'404'}
          width={600}
          height={600}
        />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='font-bold text-9xl mb-4'>404</h2>
        <p className='font-bold text-6xl mb-12'>Not Found</p>
        <Link className='text-4xl px-5 py-3 bg-amber-50 !text-black rounded-4xl active:scale-90' href="/">Return Home</Link>
      </div>
    </div>
  )
}