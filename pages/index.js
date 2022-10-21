import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {
  FiGithub,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiCodepen
} from 'react-icons/fi';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import picAvatar from '../public/267964.jpg';
import ProjectCardOne from '../components/ProjectCardOne';
import ProjectCardTwo from '../components/ProjectCardTwo';

export default function Home() {
  const [isClickedMenu, setIsClickedMenu] = useState(false);
  const [tabIndex, setTabIndex] = useState(1);
  const handleButtonClick = () => {
    setIsClickedMenu(!isClickedMenu);
  }
  return (
    <div>
      <header className="flex flex-row justify-between fixed w-full backdrop-blur z-50">
        <div className="text-xl text-cgreen flex justify-center items-center">Website</div>
        <div className="hidden md:flex w-1/2">
          <nav className="w-1/2 flex">
            <ol className="hidden sm:flex sm:justify-between items-center h-20">
              <li className="ml-2 before:content-['01.'] before:text-cgreen text-light-text cursor-pointer hover:text-cgreen font-mono">About</li>
              <li className="ml-2 before:content-['02.'] before:text-cgreen text-light-text cursor-pointer hover:text-cgreen font-mono">Experince</li>
              <li className="ml-2 before:content-['03.'] before:text-cgreen text-light-text cursor-pointer hover:text-cgreen font-mono">Work</li>
              <li className="ml-2 before:content-['04.'] before:text-cgreen text-light-text cursor-pointer hover:text-cgreen font-mono">Contect</li>
            </ol>
            <div className="hidden sm:flex sm:justify-between h-20 items-center ml-2">
             <button className="text-cgreen bg-transparent border border-cgreen rounded-lg cursor-pointer py-2 px-4 mr-auto ml-auto">
                  Resume
                </button>
            </div>
          </nav>
        </div>
        <div
          className={`${isClickedMenu?'h-screen':''} md:hidden flex flex-col right-0`}>
          <div
            className="flex flex-row justify-end cursor-pointer"
          >
            <AiOutlineMenu
              onClick={handleButtonClick}
              className="float-right text-cgreen"
              size={40}
            />
          </div>
          <aside className={`${isClickedMenu?'flex h-screen':'hidden'} z-20 w-80 bg-light-cgreen justify-center`}>
              <nav className="flex flex-col justify-center w-3/4  font-mono">
                <ol>
                  <li className="before:content-['01.'] before:text-green-400 before:text-4xl before:text-center flex flex-col">
                    <a className="text-4xl text-center text-white" href='#'>About</a>
                  </li>
                <li className="before:content-['02.'] before:text-green-400 before:text-4xl before:text-center flex flex-col">
                  <a className="text-4xl text-center text-white" href='#'>Experince</a>
                </li>
                  <li
                    className="before:content-['03.'] before:text-green-400 before:text-4xl before:text-center flex flex-col"
                  >
                  <a className="text-4xl text-center text-white" href='#'>Work</a></li>
                <li className="before:content-['04.'] before:text-green-400 before:text-4xl before:text-center flex flex-col">
                  <a className="text-4xl text-center text-white" href='content'>Contact</a>
                </li>
                </ol>
                <button className="text-cgreen bg-transparent border border-cgreen rounded-lg cursor-pointer py-3 px-7 mt-20 mb-0 mr-auto ml-auto">
                  Say Hello
                </button>
          </nav>
          </aside>
        </div>
      </header>
      <div className="hidden">
        <nav>
          <ol>
            <li><FiGithub/></li>
            <li><FiInstagram/></li>
            <li><FiTwitter/></li>
            <li><FiLinkedin/></li>
            <li><FiCodepen/></li>
          </ol>
        </nav>
      </div>
      <div className="hidden sm:flex">
        <nav>
          <ol>
            <li>Email Contact</li>
          </ol>
        </nav>
      </div>
      <div id="content">
        <main className="flex flex-col py-20 w-full bg-navy justify-between">
          <section className="flex flex-col w-1/2 self-center">
            <div>
              <h1 className="text-cgreen text-2xl">Hi my name is</h1>
            </div>
            <div>
              <h2 className="text-light-text text-4xl">
                Ali Mamoudi
              </h2>
            </div>
            <div>
              <h3 className="text-light-text text-4xl">
                I build things for the web.
              </h3>
            </div>
            <div>
              <p  className="text-light-text text-xl max-w-xl">
                I&apos;m a software engineer secializing in building(and occasionally designing) exceptional digital experiences.
                Currently,I&apos;m focuced on building accessible,human-centered products at company.
              </p>
            </div>
            <div className="text-cgreen border text-xl border-cgreen w-52 h-12 flex justify-center mt-2">
              <a className="self-center">
                Check out my resume
              </a>
            </div>
          </section>
          <section id="about"
            className="flex flex-col w-1/2 self-center mt-20"
          >
            <h2 className="flex items-center h-8 text-cgreen
               before:content-['01.'] before:text-cgreen sm:text-xl
               after:content-[''] after:block after:h-px after:bg-slate-800
                after:ml-10 after:my-12 after:w-2/4
               ">
                About me
              </h2>
            <div className="flex flex-col xl:flex-row">
              <div>
                <div className="text-light-text">
                  <p className="pb-8 text-xl max-w-xl">
                    Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                  </p>
                  <p className="pb-8 text-xl max-w-xl">
                    Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
                  </p>
                  <p className="pb-8 text-xl max-w-xl">
                    I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
                  </p>
                  <p className="pb-8 text-xl max-w-xl">
                    Here are a few technologies I’ve been working with recently:
                  </p>
                </div>
                <ul className="grid grid-cols-2 pl-8 max-w-sm text-light-text font-mono text-lg">
                  <li className="before:content-['▹'] before:text-cgreen">JavaScript</li>
                  <li className="before:content-['▹'] before:text-cgreen">React</li>
                  <li className="before:content-['▹'] before:text-cgreen">TypeScript</li>
                  <li className="before:content-['▹'] before:text-cgreen">Django</li>
                  <li className="before:content-['▹'] before:text-cgreen">C++</li>
                  <li className="before:content-['▹'] before:text-cgreen">C#</li>
                </ul>
              </div>
              <div className="relative xl:h-fit flex justify-center  z-40 mt-5">
                <div className="bg-cgreen hover:bg-white relative rounded-md cursor-pointer after:rounded-md after: after:-z-10 after:top-2 after:left-2 after:border-2 hover:after:bg-transparent after:border-cgreen after:w-full after:h-full after:block after:content-[''] after:absolute
                  before:content-[''] before:absolute before:w-full before:rounded-md before:h-full hover:before:bg-transparent before:bg-cgreen before:mix-blend-screen before:top-0 before:left-0">
                  <div className="hover:filter-none grayscale mix-blend-multiply rounded-md relative w-52 h-52">
                    <picture>
                      <Image
                        layout='fill'
                        className="max-w-full max-h-full rounded-md"
                        src={picAvatar} alt="#" />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="jobs" className="flex flex-col w-1/2 self-center mt-20">
              <h2 className="flex items-center h-8 text-cgreen
               before:content-['02.'] before:text-cgreen sm:text-xl
               after:content-[''] after:block after:h-px after:bg-slate-800
                after:ml-10 after:my-12 after:w-1/2
               ">
                Where I Worked
              </h2>
            <div className="md:flex">
              <div className="mb-4 text-light-text">
                <ul className="flex md:flex-col overflow-auto -mb-px text-sm font-medium text-center" id="jobTab" role={'tablist'}>
                  <li className={`mr-2 ${tabIndex===1?'md:border-l-2 md:border-l-cgreen md:border-b-0 border-b-2 border-b-cgreen text-cgreen':'border-transparent'}`} role={'presentation'}>
                    <button onClick={() => setTabIndex(1)} className={`inline-block p-4 rounded-t-lg `} id="profile-tab" type="button" aria-controls='dashboard' aria-selected='false' role={'tab'}>Upstatement</button>
                  </li>
                  <li className={`mr-2 ${tabIndex===2?'md:border-l-2 md:border-l-cgreen md:border-b-0 border-b-2 border-b-cgreen text-cgreen':'border-transparent'}`} role={'presentation'}>
                    <button onClick={()=>setTabIndex(2)} className={`inline-block p-4 rounded-t-lg`} id="setting-tab" aria-controls='setting' aria-selected='false' type={'button'} role={'tab'}>Scout</button>
                  </li>
                   <li className={`mr-2 ${tabIndex===3?'md:border-l-2 md:border-l-cgreen md:border-b-0 border-b-2 border-b-cgreen text-cgreen':'border-transparent'}`} role={'presentation'}>
                    <button onClick={()=>setTabIndex(3)} className={`inline-block p-4 rounded-t-lg`} id="contact-tab" aria-controls='contact' aria-selected='true' type={'button'} role={'tab'}>Apple</button>
                  </li>
                   <li className={`mr-2 ${tabIndex===4?'md:border-l-2 md:border-l-cgreen md:border-b-0 border-b-2 border-b-cgreen text-cgreen':'border-transparent'}`} role={'presentation'}>
                    <button onClick={()=>setTabIndex(4)} className={`inline-block p-4 rounded-t-lg`} id="profile-tab" aria-controls='profile' aria-selected='false' type={'button'} role={'tab'}>Scout</button>
                  </li>
                </ul>
              </div>
              <div id='TabContent'>
                <div className={`${tabIndex===1?'':'hidden'} p-4 text-light-text rounded-lg`} id='profile' aria-labelledby='profile-tab' role={'tabpanel'}>
                  <h3>
                    <span>Enginner</span>
                    <span>
                      &nbsp;@&nbsp;
                      <a href='#'>
                        Upstatement
                      </a>
                    </span>
                  </h3>
                  <div>
                    <ul className="list-none relative">
                      <li className="before:content-['▹'] before:text-cgreen">
                          Write modern, performant, maintainable code for a diverse array of client and internal projects
                      </li>
                       <li className="before:content-['▹'] before:text-cgreen">
                          Write modern, performant, maintainable code for a diverse array of client and internal projects
                      </li>
                      <li className="before:content-['▹'] before:text-cgreen">
                          Write modern, performant, maintainable code for a diverse array of client and internal projects
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={`${tabIndex===2?'':'hidden'} p-4 text-light-text rounded-lg`} id='profile' aria-labelledby='profile-tab' role={'tabpanel'}>
                  <h3>
                    <span>Enginner</span>
                    <span>
                      &nbsp;@&nbsp;
                      <a href='#'>
                        Upstatement
                      </a>
                    </span>
                  </h3>
                  <div>
                    <ul className="list-none relative">
                      <li className="before:content-['▹'] before:text-cgreen">
                          Write modern, performant, maintainable code for a diverse array of client and internal projects
                      </li>
                       <li className="before:content-['▹'] before:text-cgreen">
                          Write modern, performant, maintainable code for a diverse array of client and internal projects
                      </li>
                      <li className="before:content-['▹'] before:text-cgreen">
                          Write modern, performant, maintainable code for a diverse array of client and internal projects
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={`${tabIndex===3?'':'hidden'} p-4 text-light-text rounded-lg`} id='profile' aria-labelledby='profile-tab' role={'tabpanel'}>
                  <h3>
                    <span>Enginner</span>
                    <span>
                      &nbsp;@&nbsp;
                      <a href='#'>
                        Upstatement
                      </a>
                    </span>
                  </h3>
                  <div>
                    <ul className="list-none relative">
                      <li className="before:content-['▹'] before:text-cgreen">
                          Write modern, performant, maintainable code for a diverse array of client and internal projects
                      </li>
                       <li className="before:content-['▹'] before:text-cgreen">
                          Write modern, performant, maintainable code for a diverse array of client and internal projects
                      </li>
                      <li className="before:content-['▹'] before:text-cgreen">
                          Write modern, performant, maintainable code for a diverse array of client and internal projects
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={`${tabIndex===4?'':'hidden'} p-4 text-light-text rounded-lg`} id='profile' aria-labelledby='profile-tab' role={'tabpanel'}>
                  <h3>
                    <span>Enginner</span>
                    <span>
                      &nbsp;@&nbsp;
                      <a href='#'>
                        Upstatement
                      </a>
                    </span>
                  </h3>
                  <p>May 2018 -Present</p>
                  <div>
                    <ul className="list-none relative">
                      <li className="before:content-['▹'] before:text-cgreen">
                          Write modern, performant, maintainable code for a diverse array of client and internal projects
                      </li>
                       <li className="before:content-['▹'] before:text-cgreen">
                          Write modern, performant, maintainable code for a diverse array of client and internal projects
                      </li>
                      <li className="before:content-['▹'] before:text-cgreen">
                          Write modern, performant, maintainable code for a diverse array of client and internal projects
                      </li>
                    </ul>
                  </div>
                </div>
                
              </div>
              <div></div>
            </div>
          </section>
          <section  id="last-projects" className="flex flex-col w-1/2 self-center mt-20">
            <ProjectCardOne/>
          </section>
          <section id="noteworthy-projects" className="flex justify-center flex-col w-1/2 mt-20 self-center">
            <h2 className="text-2xl text-white self-center">Other Noteworthy Projects</h2>
            <a className="text-lg text-cgreen cursor-pointer hover:underline self-center">view the archive</a>
            <ul className="lg:grid-cols-2 grid grid-cols-1 w-3/4 gap-3 self-center">
              <li>
                <ProjectCardTwo/>
              </li>
              <li>
                <ProjectCardTwo/>
              </li>
              <li>
                <ProjectCardTwo/>
              </li>
              <li>
                <ProjectCardTwo/>
              </li>
            </ul>
            <button className="text-cgreen bg-transparent border border-cgreen rounded-lg cursor-pointer py-5 px-7 mt-20 mb-0 mr-auto ml-auto">
              Show More
            </button>
          </section>
          <section id='contact' className="flex flex-col w-1/2 justify-center self-center mt-20">
            <h2 className="self-center text-xl relative text-cgreen before:content-['04.'] before:text-cgreen before:mr-3">What&apos;s Next?</h2>
            <h2 className="self-center text-3xl font-bold text-white mt-3">Get In Touch</h2>
            <p className="lg:max-w-lg self-center mx-2 text-light-text mt-3">
              Although I&apos;m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>
            <button className="text-cgreen bg-transparent border border-cgreen rounded-lg cursor-pointer py-5 px-7 mt-20 mb-0 mr-auto ml-auto">
              Say Hello
            </button>
          </section>
        </main>
        <footer className="bg-navy text-light-text">
          <div className="flex flex-row justify-center">
            <ul className="flex flex-row xl:w-2/5 lg:w-1/2 w-3/4 justify-between">
              <li className="hover:text-cgreen cursor-pointer"><FiGithub size={30}/></li>
              <li className="hover:text-cgreen cursor-pointer"><FiInstagram size={30}/></li>
              <li className="hover:text-cgreen cursor-pointer"><FiTwitter size={30}/></li>
              <li className="hover:text-cgreen cursor-pointer"><FiLinkedin size={30}/></li>
              <li className="hover:text-cgreen cursor-pointer"><FiCodepen size={30}/></li>
            </ul>
          </div>
          <div className="flex flex-row justify-center mt-3">
            <a className="font-mono hover:text-cgreen cursor-pointer">Designed & Built by Brittany Chiang</a>
          </div>
        </footer>
      </div>
    </div>
  
  )
}
