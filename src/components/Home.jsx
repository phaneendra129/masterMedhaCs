import {React,lazy} from 'react'

const Header = lazy(()=> import('./Header'))
const WhoWeAre = lazy(()=> import('./WhoWeAre'))
const OurServices = lazy(()=> import('./OurServices'))
const OurFocusSegments = lazy(()=> import('./OurFocusSegments'))
const Milestones = lazy(()=> import('./Milestones'))
const Footer = lazy(()=> import('./Footer'))

const Home = () => {
  return (
    <div>     
     {/* Header */}
      <header className="text-center py-14 bg-white/80 backdrop-blur-md shadow-md animate-fade-down">
      <Header />
      </header>

      {/* About Section */}
     <WhoWeAre />

      {/* Services Section */}
      <OurServices />

      {/* Focus Segments */}
      <OurFocusSegments />

      {/* Milestones */}
      <Milestones />

      {/* Contact Us Section */}
      {/* <ContacUs /> */}

      {/* Footer */}
      <Footer />
      </div>
  )
}

export default Home