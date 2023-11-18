// components/Navbar.js
import Image from 'next/image'
import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <nav className='bg-white shadow-sm' >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 justify-end'>
          <div className='hidden sm:ml-6 sm:flex sm:items-center'>
            <div className='relative ml-3' >
              <div>
                <button
                  className='flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2'
                  id='headlessui-menu-button-:R1ida:'
                  type='button'
                  aria-haspopup='menu'
                  aria-expanded='false'
                >
                  <span className='sr-only'>Open user menu</span>
                  <Image
                    alt='placeholder avatar'
                    src='/assets/img/logo.png'
                    loading='lazy'
                    width='32'
                    height='32'
                    decoding='async'
                    data-nimg='1'
                    className='h-8 w-8 rounded-full'
                    style={{ color: 'transparent' }}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className='-mr-2 flex items-center sm:hidden'>
            <button
              className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2'
              id='headlessui-disclosure-button-:Rqda:'
              type='button'
              aria-expanded='false'
              
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                aria-hidden='true'
                className='block h-6 w-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
