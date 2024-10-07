import {CVData} from "@/model/cv";

export default function Education({cv}: { cv: CVData }) {
    return (
        <section className="education section" id="education">
            <h2 className="section-title">Formation</h2>
            <div className="education_container bd-grid">
                {cv.educations.map((education, i) => {
                    const isLastItem = i === cv.educations.length - 1; // Vérifie si c'est le dernier élément
                    return (
                        <div key={i} className="education_content">
                            <div className="education_time">
                                <span className="education_rounder"></span>
                                {!isLastItem && <span className="education_line"></span>}
                            </div>
                            <div className="education_data bd-grid">
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
