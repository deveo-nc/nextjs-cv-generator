import {CVData} from "@/model/cv";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Skill from "@/components/skill";
import Interest from "@/components/interest";
import Language from "@/components/language";
import Contact from "@/components/contact";

export default function Template({cv}: {
    cv: CVData
}) {
    return (
        <div className="resume" id="area-cv">
            <div className="resume_left">
                <Contact cv={cv}></Contact>
                {/*<Profil cv={cv}></Profil>*/}
                {/*<Social cv={cv}></Social>*/}
                <Language cv={cv}></Language>
            </div>

            <div className="resume_right mt-12">
                <Education cv={cv}></Education>
                <Skill cv={cv}></Skill>
                <Experience cv={cv}></Experience>
                <Interest cv={cv}></Interest>
            </div>
        </div>
    );
}
