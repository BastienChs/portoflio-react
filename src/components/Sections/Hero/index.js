import ProgrammerPana from '../../../assets/img/Programmer-pana.svg'
import './style.css'
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import TextDivider from "../../Shared/TextDivider";

const Hero = () => {
    return (
        <section className="hero" id={"hero-section"}>
            <main>
                <div className={"lg:h-screen md:h-screen xs:h-max grid place-items-center bg-hero-section"}>
                    <div className={"main-div-hero-section rounded h-1/2 lg:h-1/2 md:h-1/2 xs:h-full w-1/2 lg:w-1/2 md:w-1/2 xs:w-3/4 xs:pt-10"}>
                        <div className={"grid grid-cols-2 items-center"}>
                            <div className={'xs:col-span-2 md:col-auto first-part'}>
                                <p className={'text-gray-500 font-roboto text-left text-2xl sm:col-span-2'}>Hi, i'm</p>
                                <h1 className={'text-left font-oswald text-6xl portfolio-keywords mt-2'}>Bastien Chies</h1>
                                <p className={'text-gray-500 font-roboto text-left text-2xl mt-2'}>I'm a fullstack developer</p>
                                <p className={'text-gray-500 font-roboto text-left text-2xl mt-2'}>I'm passionate about <span className={'portfolio-keywords'}>music</span></p>
                                    <div className={'resume-buttons mt-2 font-roboto'}>
                                        <button className={'text-white p-2 lg:w-1/3 md:w-1/3 xs:w-full xs:text-sm rounded bg-emerald-400 shadow-emerald-400 shadow-md hover:bg-emerald-300 hover:shadow-emerald-300 transition duration-300 ease-in-out'}>My work</button>
                                        <button className={'text-white p-2 md:ml-2 lg:w-1/3 md:w-1/3 w-1/3 xs:w-full xs:text-sm xs:ml-0 xs:mt-2 rounded bg-emerald-400 shadow-emerald-400 shadow-md hover:bg-emerald-300 hover:shadow-emerald-300 transition duration-300 ease-in-out'}>Contact me</button>
                                    </div>
                                <TextDivider text={'Social Networks'} classes={'md:w-3/4 md:flex xs:hidden'}/>
                                <div className={'lg:w-3/4 md:w-3/4 xs:w-full xs:mt-2 social-networks flex justify-around'}>
                                    <IconContext.Provider value={{size:'1.5em', className: 'social-network-icon'}}>
                                        <a href={'https://www.linkedin.com/in/bastien-chies/'} target={'_blank'} rel={'noreferrer'} className={'bg-transparent border-gray-400 border-2 rounded rounded-full p-2 m-2'}><FaLinkedin/></a>
                                        <a href={'https://github.com/BastienChs'} target={'_blank'} rel={'noreferrer'} className={'bg-transparent border-gray-400 border-2 rounded rounded-full p-2 m-2'}><FaGithub/></a>
                                        <a href={'https://twitter.com/ChsBastien'} target={'_blank'} rel={'noreferrer'} className={'bg-transparent border-gray-400 border-2 rounded rounded-full p-2 m-2'}><FaTwitter/></a>
                                    </IconContext.Provider>
                                </div>
                            </div>
                            <div className={'lg:col-auto md:col-auto xs:col-span-2 second-part border border-2 rounded-full third-color-border overflow-hidden'}>
                                <img src={ProgrammerPana} alt="Programmer-pana" className={'programmer-pana-image'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Hero