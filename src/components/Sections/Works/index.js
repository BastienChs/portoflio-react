import works from '../../../datasources/works.json'
import {useEffect, useRef, useState} from "react";

const Works = () => {

    const worksHaveBeenLoaded = useRef(false)
    const [worksList, setWorksList] = useState([])

    useEffect(() => {
        if (!worksHaveBeenLoaded.current) {
            worksHaveBeenLoaded.current = true
            setWorksList(works);
        }
    },[])

    const worksListToDisplay = worksList.sort((a,b) =>b.project_date.localeCompare(a.project_date)).map((work, index) => {
        const {project_name, project_description, project_image, project_tags, project_date, project_github_link} = work
        return(
            <div key={index} className="flex flex-col h-full rounded overflow-hidden shadow-lg m-2">
                <div className={"w-full h-36 lg:h-72 object-cover relative bg-red-400"}>
                    <img className="object-cover h-full w-full" src={process.env.PUBLIC_URL + project_image} alt={project_name}/>
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{project_name}</div>
                    <p className={"text-gray-500 text-sm mb-2"}>{project_date}</p>
                    <p className="text-gray-700 text-base">
                        {project_description}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {
                        project_tags.map((tag, index) => {
                            return(
                                <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                            )
                        })
                    }
                </div>
                <div className={'mt-auto w-full p-5 text-center'}>
                    <a href={project_github_link} target={'_blank'} rel={'noreferrer'}
                       className={'text-sm text-white p-2 w-full rounded bg-emerald-400 shadow-emerald-400 shadow-md hover:bg-emerald-300 hover:shadow-emerald-300 transition duration-300 ease-in-out'}>Access to source</a>
                </div>
            </div>
        )
    });

    return (
        <section className="works min-h-screen" id={"works-section"}>
            <main>
                <h2 className={'w-full text-center'}>My works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 p-2 pl-10 pr-10 w-full">
                    {worksListToDisplay}
                </div>
            </main>
        </section>
    )
}
export default Works