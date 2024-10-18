import {CVData} from "@/model/cv";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Interest({cv}: {cv: CVData}) {
    return (
        <section className="interests section" id="interests">
            <h2 className="section_title">Centre d&#39;intérêts</h2>
            <div className="interests_container mt-4 grid grid-cols-3 gap-6">
                {cv.interests.map((interest, i) => {
                    return (
                        <div key={i} className="interests_content hover:animate-bounce flex flex-col content-center">
                            <FontAwesomeIcon className="interests_icon" icon={[interest.iconPack, interest.icon]}>
                            </FontAwesomeIcon>
                            <span className="interests_name">{interest.title}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
