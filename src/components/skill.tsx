import {CVData} from "@/model/cv";
import SkillBar from "@/components/skill-bar";

export default function Skill({cv}:{cv:CVData}) {
    return (
        <section className="skills section" id="skills">
            <h2 className="section_title">Compétences</h2>
            <div className="skills_container pl-0">
                <div className="skills_content grid grid-cols-2 gap-x-5 gap-y-1">
                    {cv.skills.map((skill, i) => {
                        return (
                            <div key={i} className="skills_name hover:scale-110 mb-1 flex justify-between items-center">
                                <span className="skills_text inline-block">{skill.name}</span>
                                <SkillBar skill={skill}></SkillBar>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
