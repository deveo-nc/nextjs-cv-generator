import {CVData} from "@/model/cv";
import SkillBar from "@/components/skill-bar";

export default function Skill({cv}:{cv:CVData}) {
    return (
        <section className="skills section" id="skills">
            <h2 className="section-title">Compétences</h2>
            <div className="skills_container">
                <div className="skills_content bd-grid">
                    {cv.skills.map((skill, i) => {
                        return (
                            <div key={i} className="skills_name flex justify-between items-center">
                                <span className="skills_text">{skill.name}</span>
                                <SkillBar skill={skill}></SkillBar>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
