import { FiFolder ,FiExternalLink} from 'react-icons/fi';

export default function ProjectCardTwo() {
    return (
        <div className="flex flex-col bg-light-cgreen text-white">
            <header>
                <div className="flex flex-row justify-between">
                    <FiFolder className="hover:text-cgreen cursor-pointer" size={40}/>
                    <FiExternalLink className="hover:text-cgreen cursor-pointer" size={40}/>
                </div>
                <h3>
                    <a className="hover:text-cgreen cursor-pointer text-lg font-bold">
                        Integrating Algolia Search with WordPress Multisite
                    </a>
                </h3>
                <div  className="text-light-text">
                    <p>
                        Building a custom multisite compatible WordPress plugin to build global search with Algolia
                    </p>
                </div>
            </header>
            <footer>
                <ul className="flex flex-row">
                    <li>Algolia</li>
                    <li className="ml-2">WordPress</li>
                    <li className="ml-2">PHP</li>
                </ul>
            </footer>
        </div>
    )
}