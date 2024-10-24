import {CVData} from "@/model/cv";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "./language.module.css";

export default function Language({cv}: { cv: CVData }) {
    return (
        <section className="languages section" id="languages">
            <h2 className="section_title">Langues</h2>
            <div>
                <ul className="p-0 gap-1 grid list-none">
                    {cv.languages.map((lang, i) => {
                        return (
                            <li key={i} className="flex justify-between">
                                <span className={styles.languages_text}>{lang.description}</span>
                                <span className={styles.languages_stars}>
                   <FontAwesomeIcon className={lang.level < 1 ? styles.languages_stars_checked : ""}
                                    icon={["fas", "star"]}></FontAwesomeIcon>
                   <FontAwesomeIcon className={lang.level < 2 ? styles.languages_stars_checked : ""}
                                    icon={["fas", "star"]}></FontAwesomeIcon>
                   <FontAwesomeIcon className={lang.level < 3 ? styles.languages_stars_checked : ""}
                                    icon={["fas", "star"]}></FontAwesomeIcon>
                   <FontAwesomeIcon className={lang.level < 4 ? styles.languages_stars_checked : ""}
                                    icon={["fas", "star"]}></FontAwesomeIcon>
                   <FontAwesomeIcon className={lang.level < 5 ? styles.languages_stars_checked : ""}
                                    icon={["fas", "star"]}></FontAwesomeIcon>
               </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};
