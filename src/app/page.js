import Image from 'next/image'

export default function Home () {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-red-950'>
      <h1 className='text-5xl mb-20'>
      Maggie's Homework
      </h1>
      <div>
        <button className='mx-5 bg-red-100 px-5 py-3 rounded-lg text-lg' type='button'><a href='/homework01v2'>homework1</a></button>
        <button className='mx-5 bg-red-100 px-5 py-3 rounded-lg text-lg' type='button'><a href='/homework02v2'>homework2</a></button>
      </div>
    </div>
  )
}
