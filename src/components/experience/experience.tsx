import {CVData} from "@/model/cv";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "./experience.module.css";

export default function Experience({cv}: {cv:CVData}) {
    return (
        <section className={`section relative`} id="experience">
            <h2 className="section_title">Experiences</h2>
            <h2 className="sidebar_title">Environment</h2>
            <div className="grid gap-4">
                {cv.experiences.map((experience, i) => {
                    const isLastItem = i === cv.experiences.length - 1;
                    return (
                        <div key={i} className={`${styles.experience_content} flex`}>
                            <div className="pr-2">
                                <span className="separator_rounder"></span>
                                {!isLastItem && <span className={styles.separator_line}></span>}
                            </div>
                            <div className="grid gap-1 relative w-full">
                                <h3 className={`${styles.experience_title}`}>{experience.title}</h3>
                                <div className='flex justify-between'>
                                    <span className={`${styles.experience_company}`}>{experience.company}</span>
                                    <span className={`${styles.experience_year}`}>{experience.year}</span>
                                </div>
                                {
                                    experience.environments && (
                                        <div className={styles.environment_container}>
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
                                <p className={styles.experience_description}>{experience.description}</p>
                                {(experience.tasks?.length ?? 0) > 0 &&
                                    <ul className={styles.experience_tasks}>
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
