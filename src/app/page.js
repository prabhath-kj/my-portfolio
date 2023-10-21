import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'
import HeroAvatar from '@/components/HeroAvatar'
import Navbar from '@/components/Navbar'


export default function Home() {
  return (
   <main className='flex min-h-screen 
   flex-col '>
    <Navbar/>
    <div className='container px-12 mt-20'>
    <HeroAvatar/>
    <AboutSection/>
    <Footer/>
    </div>
  </main>
  )
}
