
import { Header } from './components/header'

export default function Home() {
  return (
    <main>
      <Header/>
      <section className='w-screen flex items-center justify-center'>
        <div className=' grid grid-cols-3 grid-rows-3 p-10 pt-20 gap-8'>
          <div className='bg-[#f5f5f5] row-span-1  w-[278px] h-[138px] p-5 rounded-[10px]'>
            <p className='text-lg'>Whats your name</p>
            <p className='text-[#7e7e7e] text-sm'>Really important info</p>
          </div>
          <div className='bg-[#f5f5f5] row-span-1 w-[278px] h-[138px] p-5 rounded-[10px]'>
            <p className='text-lg'>Your Links</p>
            <p className='text-[#7e7e7e] text-sm'>Add contact info like email or portfolio</p>
          </div>
          <div className='bg-[#f5f5f5] row-span-3 h-[482px] p-5 rounded-[10px]'>
            <p className='text-lg'>Your Experience</p>
            <p className='text-[#7e7e7e] text-sm break-normal max-w-[200px]'>Places you´ve worked, roles, longevity, an small description of the role</p>

          </div>
          <div className='bg-[#f5f5f5] w-[278px] h-[138px] p-5 rounded-[10px]'>
            <p className='text-lg'>Introduction</p>
            <p className='text-[#7e7e7e] text-sm'>A brief intro of yourself</p>
          </div>
          <div className='bg-[#f5f5f5] row-span-2  p-5 rounded-[10px]'>
            <p className='text-lg'>Skills</p>
            <p className='text-[#7e7e7e] text-sm'>List your skills!</p>
          </div>
          <div className='bg-[#f5f5f5] w-[278px] h-[138px] p-5 rounded-[10px]'>
            <p className='text-lg'>About </p>
            <p className='text-[#7e7e7e] text-sm'>Who are you</p>
          </div>
        </div>
      </section>
    
       
    </main>
  )
}
