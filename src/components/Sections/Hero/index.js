import ProgrammerPana from '../../../assets/img/Programmer-pana.svg'
import './style.css'
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="hero" id={"hero-section"}>
            <main>
                <div className={"h-screen grid place-items-center bg-hero-section"}>
                    <div className={"main-div-hero-section rounded h-1/2 w-1/2"}>
                        <div className={"grid grid-cols-2 items-center"}>
                            <div className={'first-part'}>
                                <p className={'text-gray-500 font-roboto text-left text-2xl'}>Hi, i'm</p>
                                <h1 className={'text-left font-oswald text-6xl portfolio-keywords mt-2'}>Bastien Chies</h1>
                                <p className={'text-gray-500 font-roboto text-left text-2xl mt-2'}>I'm a fullstack developer</p>
                                <p className={'text-gray-500 font-roboto text-left text-2xl mt-2'}>I'm passionate about <span className={'portfolio-keywords'}>music</span></p>
                                    <div className={'resume-buttons mt-2 font-roboto'}>
                                        <button className={'text-white p-2 w-1/3 rounded bg-emerald-400 shadow-emerald-400 shadow-md hover:bg-emerald-300 hover:shadow-emerald-300 transition duration-300 ease-in-out'}>My work</button>
                                        <button className={'text-white ml-2 p-2 w-1/3 rounded bg-emerald-400 shadow-emerald-400 shadow-md hover:bg-emerald-300 hover:shadow-emerald-300 transition duration-300 ease-in-out'}>Contact me</button>
                                    </div>
                            </div>
                            <div className={'second-part border border-2 rounded-full third-color-border overflow-hidden'}>
                                <img src={ProgrammerPana} alt="Programmer-pana" className={'programmer-pana-image'}/>
                            </div>
                        </div>
                        <div className={'flex justify-center social-networks'}>
                            <IconContext.Provider value={{size:'1.5em', className: 'social-network-icon hover:animate-pulse' }}>
                                <button className={'bg-transparent border-white border-2 rounded rounded-full p-4 m-4 text-white hover:animate-pulse transition duration-300 ease-in-out'}><FaLinkedin className={'h-full'}/></button>
                                <button className={'bg-transparent border-white border-2 rounded rounded-full p-4 m-4 text-white hover:animate-pulse transition duration-300 ease-in-out'}><FaGithub/></button>
                                <button className={'bg-transparent border-white border-2 rounded rounded-full p-4 m-4 text-white hover:animate-pulse transition duration-300 ease-in-out'}><FaTwitter/></button>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Hero