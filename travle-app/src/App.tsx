import { useState } from 'react'
import Search from './components/Search/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <section className='bg-topbackground bg-no-repeat bg-cover min-h-[800px]
      max-w-[1366px]'>
        <header className="flex justify-between px-12 py-6">
        <div className="">
          <img src="./src/assets/logo.png" alt="" />
        </div>
        <nav className='flex gap-6 text-white'>
          <ul>
            <a href="">
              <li>Home</li>
            </a>
          </ul>
          <ul>
            <a href="">
              <li>Stays</li>
            </a>
          </ul>
          <ul>
            <a href="">
              <li>Flights</li>
            </a>
          </ul>
          <ul>
            <a href="">
              <li>Packages</li>
            </a>
          </ul>
          <ul>
            <a href="">
              <li>Sign up</li>
            </a>
          </ul>
        </nav>
        </header>
        <main className='max-w-[1100px] px-28 py-24 mx-0 my-auto'>
          <h1 className=' text-white text-7xl'>The whole world awaits.</h1>
        </main>
        <Search />
      </section>
    </div>
  )
}

export default App
