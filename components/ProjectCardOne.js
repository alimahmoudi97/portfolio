import Image from "next/image";
import ImageBG from '../public/267964.jpg';
import { FiGithub,FiExternalLink } from 'react-icons/fi';

export default function ProjectCardOne() {
    return (
        <li className="grid  grid-cols-12 gap-3 items-center w-11/12 rounded-lg my-2 mx-auto">
            <div className="bg-transparent mx-2 sm:col-start-5 sm:col-end-12 col-span-full row-span-full text-left flex flex-col justify-center h-full z-10">
                <div className="sm:text-right sm:bg-light-cgreen rounded-md max-w-xl">
                    <p className="text-cgreen">Featured Project</p>
                    <h3 className="text-xl md:text-3xl">
                        <a className="text-white hover:text-cgreen cursor-pointer">
                            Build a Spotify Connected App
                        </a>
                    </h3>
                    <div className="mt-8 text-light-text">
                        <p>
                            Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.
                        </p>
                        <p className="mt-2 text-light-text">
                            Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app. By the end of the course, you’ll have an app deployed to the internet you can add to your portfolio.
                        </p>
                    </div>
                    <ul className="flex flex-row sm:justify-end flex-wrap mt-2 text-white">
                        <li className="ml-2">React</li>
                        <li className="ml-2">Express</li>
                        <li className="ml-2">Spotify API</li>
                        <li className="ml-2">Styled Components</li>
                    </ul>
                    <ul className="sm:justify-end mt-2 text-white flex flex-row flex-wrap">
                        <li className="cursor-pointer"><FiGithub size={30}/></li>
                        <li className="ml-4 cursor-pointer"><FiExternalLink size={30}/></li>
                    </ul>
                    <div className="flex flex-row sm:justify-end items-center">
                        <a className="text-cgreen border cursor-pointer border-cgreen rounded-md m-4 px-4 py-2 hover:bg-green-tint">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
            <div className="md:col-start-1 md:col-end-6 col-span-full w-full h-full row-span-full mx-2 opacity-50 cursor-pointer relative">
                <Image
                    layout="fill"
                    className="max-w-full max-h-full rounded-lg"
                    src={ImageBG}
                    alt=""
                />
            </div>
        </li>
    )
}