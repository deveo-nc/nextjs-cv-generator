import {CVData} from "@/model/cv";
import styles from "./skill.module.css";

export default function Skill({cv}:{cv:CVData}) {
    return (
        <section className="skills section relative" id="skills">
            <h2 className="section_title">Compétences</h2>
            <h2 className="sidebar_title">Domaine</h2>
            <div className="pl-0">
                {
                    cv.skills.map((skill, i) => {
                        return (
                            <div key={i} className={`${styles['right-separator']} flex relative`}>
                                <div className={styles.skills_category_left_container}>
                                    <div>{skill.category}</div>
                                </div>
                                <div className={styles.skills_category_right_container}>
                                    {skill.subCategories?.map((subCategory, j) => {
                                        return (
                                            <div key={j} className={styles.skills_sub_category_container}>
                                                <div
                                                    className={styles.skills_sub_category}>{subCategory.subCategory}:
                                                </div>
                                                <div className={styles.skills_description}>{subCategory.description}</div>
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
