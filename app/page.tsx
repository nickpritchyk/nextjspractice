import Image from 'next/image'
import People from '../components/People';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center p-8'>
      <h1> First Next.js Page </h1>
      <People />
    </div>
  )
  }
