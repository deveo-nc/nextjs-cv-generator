import {CVData} from "@/model/cv";

export default function Education({cv}: { cv: CVData }) {
    const padNumber = (10 - (cv.educations.length*4));
    return (
        <section className="education section" style={{paddingBottom: padNumber+'rem'}} id="education">
            <h2 className="section_title">Formation</h2>
            <div className="education_container grid gap-6">
                {cv.educations.map((education, i) => {
                    const isLastItem = i === cv.educations.length - 1; // Vérifie si c'est le dernier élément
                    return (
                        <div key={i} className="education_content flex">
                            <div className="education_time pr-2">
                                <span className="education_rounder"></span>
                                {!isLastItem && <span className="education_line"></span>}
                            </div>
                            <div className="education_data grid gap-1">
                                <h3 className="education_title">{education.title}</h3>
                                <span className="education_studies">{education.studies}</span>
                                <span className="education_year">{education.year}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
