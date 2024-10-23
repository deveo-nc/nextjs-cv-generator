import {CVData} from "@/model/cv";

export default function Skill({cv}:{cv:CVData}) {
    return (
        <section className="skills section relative" id="skills">
            <h2 className="section_title">Compétences</h2>
            <h2 className="environment_title absolute top-0 pt-6 uppercase text-center tracking-[.35rem]">Domaine</h2>
            <div className="skills_container pl-0">
                {
                    cv.skills.map((skill, i) => {
                        return (
                            <div key={i} className="flex relative right-separator">
                                <div className="skills_category_left_container absolute px-5">
                                    <div>{skill.category}</div>
                                </div>
                                <div className="skills_category_right_container w-full py-2">
                                    {skill.subCategories?.map((subCategory, j) => {
                                        return (
                                            <div key={j} className="skills_sub_category_container flex">
                                                <div
                                                    className="skills_sub_category font-bold">{subCategory.subCategory}:
                                                </div>
                                                <div className="skills_description">{subCategory.description}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};
