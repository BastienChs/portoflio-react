import './style.css'
import contact from '../../../assets/img/Get in touch-amico.svg'
const Contact = () => {
    return(
        <section className="pl-10 pr-10 contact" id={"contact-section"}>
            <main>
                <h2 className={'w-full text-left text-3xl font-bold font-opensans underline uppercase text-gray-500 opacity-30 mt-6'}>04. Contact me</h2>
                <div className={"lg:h-screen md:h-screen xs:h-full grid place-items-center bg-contact-section"}>
                    <div className={'contact-container rounded'}>
                        <p className={'lg:text-2xl md:text-2xl xs:text-md text-center font-opensans font-bold'}>You can reach me by using the following options:</p>
                        <ul>
                            <li> Email: <a href="mailto:bastien.chies@gmail.com" className={'transition ease-in-out duration-300 hover:text-emerald-500'}>bastien.chies@gmail.com</a></li>
                            <li> Phone: <a href="tel:+336 21 67 14 38" className={'transition ease-in-out duration-300 hover:text-emerald-500'}>+336 21 67 14 38</a></li>
                            <li> Phone: <a href="tel:+1 438 304-6039" className={'transition ease-in-out duration-300 hover:text-emerald-500'}>+1 (438) 304-6039</a></li>
                            <li> LinkedIn: <a href="https://www.linkedin.com/in/bastien-chies" target={'_blank'} rel={'noreferrer'} className={'transition ease-in-out duration-300 hover:text-emerald-500'}>https://www.linkedin.com/in/bastien-chies</a></li>
                        </ul>
                        <img src={contact} alt={'Get in touch amico'}/>
                    </div>
                </div>
            </main>
        </section>
    )
}
//<a href="https://storyset.com/technology">Technology illustrations by Storyset</a>
export default Contact