import {CVData} from "@/model/cv";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Language({cv}: { cv: CVData }) {
    return (
        <section className="languages section" id="languages">
            <h2 className="section_title">Langues</h2>
            <div className="languages_container">
                <ul className="languages_content pl-0 gap-1 grid">
                    {cv.languages.map((lang, i) => {
                        return (
                            <li key={i} className="languages_name flex justify-between mb-1">
                                <span className="languages_text inline-block">{lang.description}</span>
                                <span className="languages_stars">
                   <FontAwesomeIcon className={lang.level < 1 ? "languages_stars_checked" : ""}
                                    icon={["fas", "star"]}></FontAwesomeIcon>
                   <FontAwesomeIcon className={lang.level < 2 ? "languages_stars_checked" : ""}
                                    icon={["fas", "star"]}></FontAwesomeIcon>
                   <FontAwesomeIcon className={lang.level < 3 ? "languages_stars_checked" : ""}
                                    icon={["fas", "star"]}></FontAwesomeIcon>
                   <FontAwesomeIcon className={lang.level < 4 ? "languages_stars_checked" : ""}
                                    icon={["fas", "star"]}></FontAwesomeIcon>
                   <FontAwesomeIcon className={lang.level < 5 ? "languages_stars_checked" : ""}
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
