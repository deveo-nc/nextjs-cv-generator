import {CVData} from "@/model/cv";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Experience({cv}: {cv:CVData}) {
    return (
        <section className="experience section relative" id="experience">
            <h2 className="section_title">Experiences</h2>
            <h2 className="environment_title absolute top-0 pt-6 uppercase text-center tracking-[.35rem]">Environment</h2>
            <div className="experience_container grid gap-4">
                {cv.experiences.map((experience, i) => {
                    const isLastItem = i === cv.experiences.length - 1;
                    return (
                        <div key={i} className="experience_content flex">
                            <div className="experience_time pr-2">
                                <span className="experience_rounder"></span>
                                {!isLastItem && <span className="experience_line"></span>}
                            </div>
                            <div className="experience_data grid gap-1 relative w-full">
                                <h3 className="experience_title">{experience.title}</h3>
                                <div className='flex justify-between'>
                                    <span className="experience_company">{experience.company}</span>
                                    <span className="experience_year font-bold">{experience.year}</span>
                                </div>
                                {
                                    experience.environments && (
                                        <div className="environment_container absolute top-5 px-4">
                                            {
                                                typeof experience.environments === 'string' &&
                                                <p>{experience.environments}</p>
                                            }
                                            {
                                                Array.isArray(experience.environments) && experience.environments.map((env, index) => (
                                                    <span key={index} className="flex items-start">
                                                        {env.icon && env.iconPack && <FontAwesomeIcon className="mr-2 mt-1" icon={[env.iconPack, env.icon]}></FontAwesomeIcon>}
                                                        <span>{env.description}</span>
                                                    </span>
                                                ))
                                            }
                                        </div>
                                    )
                                }
                                <p className="experience_description">{experience.description}</p>
                                {(experience.tasks?.length ?? 0) > 0 &&
                                    <ul className="experience_tasks pl-4 list-disc">
                                        {experience.tasks.map((task, index) => {
                                            return (
                                                <li key={index}>{task}</li>
                                            )
                                        })}
                                    </ul>
                                }
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
