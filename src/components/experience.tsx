import {CVData} from "@/model/cv";

export default function Experience({cv}: {cv:CVData}) {
    return (
        <section className="experience section" id="experience">
            <h2 className="section-title">Experiences</h2>
            <div className="experience_container bd-grid">
                {cv.experiences.map((experience, i) => {
                    const isLastItem = i === cv.experiences.length - 1;
                    return (
                        <div key={i} className="experience_content">
                            <div className="experience_time">
                                <span className="experience_rounder"></span>
                                {!isLastItem && <span className="experience_line"></span>}
                            </div>
                            <div className="experience_data bd-grid" style={{position: "relative"}}>
                                <h3 className="experience_title">{experience.title}</h3>
                                <span className="experience_company">{experience.company}</span>
                                <span className="experience_year">{experience.year}</span>
                                <div className="environment_container">
                                    <h2>Environment</h2>
                                    <p>{experience.environment}</p>
                                </div>
                                <p className="experience_description" >{experience.description}</p>
                                {(experience.tasks?.length ?? 0) > 0 &&
                                    <ul className="experience_tasks">
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
