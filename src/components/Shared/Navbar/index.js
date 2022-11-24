import './style.css'
import sections from '../../../datasources/sections.json'
import {updateList} from "../../../assets/js/scroller";
import {useEffect, useRef, useState} from "react";
const Navbar = () => {

    const navHasBeenSet = useRef(false)
    const [navLinks, setNavLinks] = useState([])

    useEffect(() => {
        if (!navHasBeenSet.current) {
            Object.values(sections).map((section) => {
                return setNavLinks((navLinks) => [...navLinks, section])
            })
        }

        navHasBeenSet.current = true
    }, [navHasBeenSet])

    useEffect(() => {
        if(navLinks.length > 0){
            updateList()
        }
    }, [navLinks])

    const displayTooltip = (e) => {
        let aElement = e.target.querySelector('a');
        if(!aElement) return;
        if(aElement.classList.contains('hidden'))
            aElement.classList.remove('hidden')
        if(!aElement.classList.contains('inline'))
            aElement.classList.add('inline')
    }

    const hideTooltip = (e) => {
        let aElement = e.target.querySelector('a');
        if(!aElement) return;
        if(!aElement.classList.contains('hidden'))
            aElement.classList.add('hidden')
        if(aElement.classList.contains('inline'))
            aElement.classList.remove('inline')
    }

    const onClickNavElem = (e) => {
        e.preventDefault()
        let sectionId = e.target.querySelector('a').getAttribute('href')
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        })
    }

    const displayNavLinks =  navLinks.map((navLink) => {
        return (
            <li key={navLink.order}
                className={'list-none w-4 h-4 mt-3 ml-3 rounded-full border-2 border-emerald-500 cursor-pointer hover:border-emerald-400 hover:bg-emerald-200 transition duration-300 ease-in-out nav-links z-10'}
                onMouseOver={displayTooltip}
                onMouseOut={hideTooltip}
                onClick={onClickNavElem}
            >
                <a href={`#${navLink.anchor}`} data-tooltip={navLink.label} className={'hidden text-xs font-roboto text-gray-200 ml-5 p-1 align-top rounded tooltip-background nav-dot'}>{navLink.label}</a>
            </li>
        )
    })

    return (
        <div className="vertical-navbar fixed h-screen flex flex-col top-1/2">
            {navHasBeenSet && displayNavLinks}
        </div>
    )
}

export default Navbar