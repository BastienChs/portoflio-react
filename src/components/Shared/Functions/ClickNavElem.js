export const onClickNavElem = (e) => {
    e.preventDefault()
    let sectionId = e.target.getAttribute('href')
    document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
    })
}