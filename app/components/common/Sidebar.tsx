import Image from "next/image";

// components/Sidebar.js
const Sidebar = () => {
  return (
    <aside className='bg-gray-800 text-white w-64 h-screen flex flex-col'>
      <div className='p-4 text-xl font-bold'>
        <Image src='/assets/img/logo.png' width={110} height={110} alt="logo" />
      </div>
      <nav className='flex-1'>
        <ul className='p-4'>
          <li className='py-2'>
            Menu Item 1
          </li>
          <li className='py-2'>Menu Item 2</li>
          <li className='py-2'>Menu Item 3</li>
        </ul>
      </nav>
      <div className='p-4'>Footer</div>
    </aside>
  )
}

export default Sidebar
