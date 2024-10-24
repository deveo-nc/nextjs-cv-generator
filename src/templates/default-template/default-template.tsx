import {CVData} from "@/model/cv";
import Education from "@/components/education/education";
import Experience from "@/components/experience/experience";
import Skill from "@/components/skill/skill";
import Interest from "@/components/interest/interest";
import Language from "@/components/language/language";
import Contact from "@/components/contact/contact";
import styles from "./default-template.module.css";

export default function DefaultTemplate({cv, anonymize}: {
    cv: CVData,
    anonymize: boolean
}) {
    return (
        <div className={styles.resume} id="area-cv">
            <div className={styles.resume_left}>
                <Contact cv={cv} anonymize={anonymize}></Contact>
                {/*{anonymize && <Language cv={cv}></Language>}*/}
            </div>

            <div className={styles.resume_right}>
                <Education cv={cv}></Education>
                {/*{!anonymize && <Language cv={cv}></Language>}*/}
                <Skill cv={cv}></Skill>
                <Experience cv={cv}></Experience>
                <Language cv={cv}></Language>
                <Interest cv={cv}></Interest>
            </div>
        </div>
    );
}
