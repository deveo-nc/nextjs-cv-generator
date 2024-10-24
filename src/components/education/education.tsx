import {CVData} from "@/model/cv";
import styles from "./education.module.css";

export default function Education({cv}: { cv: CVData }) {
    return (
        <section className="section min-h-[260px] mt-6" id="education">
            <h2 className="section_title">Formation</h2>
            <div className="grid gap-6">
                {cv.educations.map((education, i) => {
                    const isLastItem = i === cv.educations.length - 1; // Vérifie si c'est le dernier élément
                    return (
                        <div key={i} className="flex">
                            <div className="pr-2">
                                <span className="separator_rounder"></span>
                                {!isLastItem && <span className={styles.separator_line}></span>}
                            </div>
                            <div className="grid gap-1 w-full">
                                <h3 className={styles.education_title}>{education.title}</h3>
                                <div className="flex justify-between">
                                    <span className={styles.education_studies}>{education.studies}</span>
                                    <span className={styles.education_year}>{education.year}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
