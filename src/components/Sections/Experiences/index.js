import experiences from '../../../datasources/experiences.json'
import './style.css'
import {useEffect, useRef, useState} from "react";
import Tag from "../../Shared/Tag";
const Experiences = () => {

    const experiencesHasLoaded = useRef(false)
    const [experiencesList, setExperiencesList] = useState([])

    useEffect(() => {
        if (!experiencesHasLoaded.current) {
            Object.values(experiences).map((experience) => {
                return setExperiencesList((experiencesList) => [...experiencesList, experience])
            })
        }
        experiencesHasLoaded.current = true
    }, [experiencesHasLoaded])

    const displaySkillsInvolved = (skillCategories) => {
        let counter = 0
        let colors = ['bg-emerald-400', 'bg-emerald-500', 'bg-emerald-600', 'bg-emerald-700', 'bg-emerald-800']
        return Object.values(skillCategories).map((skillCategory) => {
            counter++
            return skillCategory.map((skill, index) => {
                return (<Tag key={index} tagLabel={skill} tagBgColor={colors[counter-1]} tagTextColor={'text-white'} tagFontSize={'text-sm'}/>)
            })
        })
    }

    const displayExperiences =  experiencesList.sort((a,b) =>b.start_date.localeCompare(a.start_date)).map((experience, index) => {
        const {company, company_logo, start_date, end_date, job_title, job_location, contract_type, job_description, skills_involved} = experience
        return(
            <div key={index} className={'w-full grid grid-cols-6 p-2 experience-container rounded shadow-lg xs:place-items-center'}>
                <div className={'company-image-container self-center lg:col-auto md:col-auto xs:col-span-6'}>
                    <img src={process.env.PUBLIC_URL + company_logo} alt={company} className={'rounded-full border-2 border-emerald-500'}/>
                </div>
                <div className={'lg:col-span-5 md:col-span-5 xs:col-span-6 font-roboto'}>
                    <h3 className={'text-3xl lg:text-left md:text-left xs:text-center'}>{company}</h3>
                    <h4 className={'text-xl lg:text-left md:text-left xs:text-center'}>{job_title}</h4>
                    <h4 className={'lg:text-left md:text-left xs:text-center'}>{job_location}</h4>
                    <h4 className={'lg:text-left md:text-left xs:text-center'}>{start_date} - {end_date}</h4>
                    <h4 className={'lg:text-left md:text-left xs:text-center'}>{contract_type}</h4>
                    <p className={'text-sm text-gray-500 text-justify mt-2'}>{job_description}</p>
                    <div className={'skills-container mt-2'}>
                        {experiencesHasLoaded && displaySkillsInvolved(skills_involved)}
                    </div>
                </div>
            </div>
        )
    })

    return(
      <section className="experiences min-h-screen" id={"experiences-section"}>
          <main>
              <h2 className={'w-full text-left pl-10 pr-10 text-3xl font-bold font-opensans underline uppercase text-gray-500 opacity-30 mt-6'}>03. My experiences</h2>
              <div className={`grid grid-rows-${experiencesList.length} gap-6 mt-6 p-2 pl-10 pr-10 w-full`}>
                  {displayExperiences}
              </div>
          </main>
      </section>
    )
}
export default Experiences