import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Inbox | The clean Todo-list</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
      </Head>
      <section className="flex justify-between pl-[9rem] pr-[9rem] pt-[13rem]">
        <div>
          <h1 className="text-[#5fbff9] text-9xl font-['Kenia']">Inbox</h1>
          <h2 className="text-[#ffefd3] text-4xl">The Simple Todo-list</h2>
          <Link href='/Signup'>
            <button className="bg-[#da3737] p-3 mt-2 rounded-lg text-2xl mb-2 hover:bg-[#9c2828] transition-all">Try Demo</button>
          </Link> <br />
          <a href="#about" className="text-lg mr-3 hover:text-[1.3rem] transition-all hover:opacity-40">About Us</a> 
          <a href="#features" className="mr-3 text-lg hover:text-[1.3rem] transition-all hover:opacity-40">Features</a>
        </div>
        <img src="/home-1.svg" alt="home-1" className="h-[20rem]"/>
      </section>
      <section className="pl-[9rem] pr-[9rem] pt-[9rem] bg-[#ffefd3] text-[#0d1821] pb-[6rem]" id='about'>
        <h1 className="text-7xl font-['Kenia'] text-[#3b42a4] mr-5">About Us</h1> <br />
        <p className='mt-5 text-lg'>Hello, I am Youssef Michael from the inbox team, more accurately the inbox team. I created the app for people who value simplicity and straight to the point UI. This app is intentionally not complex to help you acheive your tasks in a much silkier way. If you want more information about me visit <a href="https://youssefmichael.vercel.app" className="text-lg hover:text-[1.3rem] transition-all hover:opacity-40">my website</a>. Thank you! :)</p>
      </section>
      <section className="flex justify-between pl-[9rem] pr-[9rem] pt-[9rem] pb-5" id="features">
        <span>
        <h1 className="text-7xl font-['Kenia'] text-[#5fbff9] mr-5 ">Features</h1>
        <div className="mt-20">
          <h1 className="text-4xl text-[#ffefd3] mr-5">Handle Your Tasks <br/>Easily</h1>
          <p className='text-lg'>
            Capture your tasks in a simple <br/>environment with no interruptions. 
          </p>
        </div>
        <div className="mt-32">
          <h1 className="text-4xl text-[#ffefd3] mr-5">Never Get Lost <br/>in the Chaos</h1>
          <p className='text-lg'>
            Have a straight to the point <br/>user experience with a clean UI. 
          </p>
        </div>
        <div className="mt-32">
          <h1 className="text-4xl text-[#ffefd3] mr-5">Never Feel Like Planning <br/>is a Struggle</h1>
          <p className='text-lg'>
            Have a minimalistic plannig <br/>approach with no extras.
          </p>
        </div>
        </span>
        <span className='mt-20'>
          <img src="" alt="" />
        </span>
      </section>
      <section className="pl-[9rem] pr-[9rem] mt-56 text-center mb-56">
        <h1 className="text-7xl font-['Kenia'] text-[#5fbff9] mr-5">Try Inbox today</h1>
        <p className="text-2xl mt-5">And start having a productive and planned life</p>
        <Link href='/Signup'>
            <button className="bg-[#da3737] p-3 mt-2 rounded-lg text-2xl mb-2 hover:bg-[#9c2828] transition-all">Try Demo</button>
          </Link>
      </section>
      <footer className='text-center'>
        ©2022 Designed and Coded by <a href="https://youssefmichael.vercel.app" className="text-lg hover:text-[1.3rem] transition-all hover:opacity-40">Youssef Michael</a>
      </footer>
    </>
  )
}
