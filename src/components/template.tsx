import {CVData} from "@/model/cv";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Skill from "@/components/skill";
import Interest from "@/components/interest";
import Language from "@/components/language";
import Contact from "@/components/contact";

export default function Template({cv, anonymize}: {
    cv: CVData,
    anonymize: boolean
}) {
    return (
        <div className="resume overflow-hidden grid" id="area-cv">
            <div className="resume_left px-5 py-0">
                <Contact cv={cv} anonymize={anonymize}></Contact>
                <Language cv={cv}></Language>
            </div>

            <div className="resume_right px-5 py-0 mt-12">
                <Education cv={cv}></Education>
                <Skill cv={cv}></Skill>
                <Experience cv={cv}></Experience>
                <Interest cv={cv}></Interest>
            </div>
        </div>
    );
}
