import './style.css'
import {onClickNavElem} from '../Functions/ClickNavElem'
import sections from '../../../datasources/sections.json'
import {useEffect, useRef, useState} from "react";
import {updateList} from "../../../assets/js/scroller";
const Header = () => {

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

    const displayNavLinks =  navLinks.map((navLink, index) => {
        return (
            <li key={index} className="header__menu__item" onClick={onClickNavElem}>
                <a href={`#${navLink.anchor}`}>{navLink.label}</a>
            </li>
        )
    })

    return (
        <div className="header absolute h-10 w-full flex border-b-2 shadow border-emerald-500">
            <div className="header__logo self-center w-1/6">
                <h2 className={'ml-2 font-roboto text-2xl text-emerald-500'}><a href={'#hero-section'}>Bastien Chies.</a></h2>
            </div>
            <div className="header__menu w-5/6 place-self-center">
                <ul className="lg:flex md:flex xs:hidden gap-4 mr-2 float-right text-white font-roboto">
                    {navHasBeenSet && displayNavLinks}
                </ul>
            </div>
        </div>

    )
}
export default Header