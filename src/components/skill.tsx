import {CVData} from "@/model/cv";
import SkillBar from "@/components/skill-bar";

export default function Skill({cv}:{cv:CVData}) {
    return (
        <section className="skills section" id="skills">
            <h2 className="section_title">Compétences</h2>
            <div className="skills_container pl-0">
                <div className="skills_content grid grid-cols-2 gap-x-5 gap-y-4">
                    {cv.skills.map((skill, i) => {
                        return (
                            <div key={i} className="skills_name hover:scale-110 flex justify-between items-center h-2">
                                <span style={{width: '140px'}}>{skill.name}</span>
                                <SkillBar skill={skill}></SkillBar>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
