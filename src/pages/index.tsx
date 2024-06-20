import React from 'react'
import Header from '../widgets/Header'
import  Hero  from '../widgets/Hero'
import Solution from '../widgets/Solution'
import HowitWork from '../widgets/HowitWork'
import Clients from '../widgets/Clients'
import Contact from '../widgets/Contact'
import Footer from '../widgets/Footer'

export const Index = () => {
  return (
    <div className='container mx-auto p-4'>
      <Header />
      <main className='mt-20'>
        <Hero />
        <section className='md:p-20'>
          <Solution />
        </section>
        <section className='mt-20'>
          <HowitWork />
        </section>
        <section className='mt-20 md:w-3/5 mx-auto'>
          <Clients />
        </section>
        <section className='mt-20'>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
