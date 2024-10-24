import {CVData} from "@/model/cv";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "./interest.module.css";

export default function Interest({cv}: {cv: CVData}) {
    return (
        <section className="interests section" id="interests">
            <h2 className="section_title">Centre d&#39;intérêts</h2>
            <div className="mt-4 grid grid-cols-3 gap-6">
                {cv.interests.map((interest, i) => {
                    return (
                        <div key={i} className="hover:animate-bounce flex flex-col content-center">
                            <FontAwesomeIcon className={styles.interests_icon} icon={[interest.iconPack, interest.icon]}>
                            </FontAwesomeIcon>
                            <span className="text-center">{interest.title}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
