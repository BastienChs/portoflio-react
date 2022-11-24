import me from '../../../assets/img/bastien_chies.jpg'
import './style.css'
import TextDivider from "../../Shared/TextDivider";

const About = () => {
    return (
    <section className="about" id={"about-section"}>
        <main>
            <h2 className={'w-full text-center'}>About me</h2>
            <div className={"h-screen grid place-items-center bg-about-section"}>
                <div className={'h-full w-full p-2 grid grid-cols-3 gap-4 pl-10 pr-10 xs:pl-0'}>
                    <div className={'flex place-content-center p-2 bg-profile-pic h-full'}>
                            <img src={me} alt="Bastien Chies" className={'self-center rounded-full border border-2 third-color-border shadow-2xl sm:h-80 sm:w-80'}/>
                    </div>
                    <div className={'flex flex-col col-span-2 ml-10 mr-10'}>
                        <TextDivider text={'Who are you'} classes={'w-2/4 self-center'}/>
                        <p className={'answer-about-me text-justify'}>
                            Hello, I'm Bastien! I work as a <span className={'portfolio-keywords font-bold'}>software engineer for five years now</span>, more than just a job, it's a passion to me.
                            I love solving problems and learning how things work, being challenged whether by time,
                            technology or business complexity. I like to keep an eye on the IT innovations and topics,
                            for this I like to use tools such as Medium, Twitter or even Google news. As for my soft skills, I'm <span className={'portfolio-keywords font-bold'}>empathic</span>,
                            I like helping others when they're in need, I'm <span className={'portfolio-keywords font-bold'}>patient</span> and <span className={'portfolio-keywords font-bold'}>organized</span>,
                            I like to work in team and being able to learn from others and I'm very curious.</p>

                        <TextDivider text={'What are you experiences'} classes={'w-2/4 self-center'}/>
                        <p className={'answer-about-me text-justify'}>
                            I worked for four years in real estate company as a <span className={'portfolio-keywords font-bold'}>software engineer</span>. After that I worked for a year in a <span className={'portfolio-keywords font-bold'}>e-commerce</span> company as a <span className={'portfolio-keywords font-bold'}>fullstack developer</span>.
                            I always worked with Microsoft technologies so far because I like the <span className={'portfolio-keywords font-bold'}>Microsoft ecosystem</span>, I've also learned React through Udemy and I'm currently working on a project with React Native.
                            Down below you will find a list of my experiences with the technologies I used.
                        </p>

                        <TextDivider text={'What do you like to do'} classes={'w-2/4 self-center'}/>
                        <p className={'answer-about-me text-justify'}>
                            First things to know, I'm <span className={'portfolio-keywords font-bold'}>huge consumer of music</span>, Spotify is my best friend, I listen to music every day.
                            On my free time, I like to <span className={'portfolio-keywords font-bold'}>read books</span>, I'm really interested by mythology and especially the Norse one.
                            I also like to <span className={'portfolio-keywords font-bold'}>write little stories</span>, a good way for me to express my creativity.
                            I like to <span className={'portfolio-keywords font-bold'}>play video games</span> too and I'm also a huge consumer of Netflix, Amazon Prime Video and Disney+.
                            I also like to <span className={'portfolio-keywords font-bold'}>go out with my friends</span>, I like to go to the movies, to the bar or to the restaurant.
                        </p>

                        <TextDivider text={'Random facts about you'} classes={'w-2/4 self-center'}/>
                        <p className={'answer-about-me text-justify'}>
                            I never took a plane before 2022, this year I took it three times, once for going to Lisboa, one for doing a parachute jump and one for going to the Canada.
                        </p>
                        <button className={'self-center text-sm text-white p-2 w-1/4 rounded bg-emerald-400 shadow-emerald-400 shadow-md hover:bg-emerald-300 hover:shadow-emerald-300 transition duration-300 ease-in-out'}>Downlowd my resume</button>
                    </div>
                </div>
            </div>
        </main>
    </section>
  )
}

export default About