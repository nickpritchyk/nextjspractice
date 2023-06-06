import Image from 'next/image'
import People from '../components/People'
import Details from '../components/Details'

export default function Home() {

  return (
    <div className='w-full h-screen border-8 border-black flex flex-col items-center justify-center p-4'>
      <h1 className='absolute top-12 text-[28px]'> First Next.js Page </h1>
      <div>
      </div>
      <div className='absolute right-24'>
        <People />
      </div>
      <div className='absolute left-24'>
        <Details />
      </div>
    </div>
  )
  }
