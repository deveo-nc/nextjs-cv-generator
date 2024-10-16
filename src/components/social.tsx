import {CVData} from "@/model/cv";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Social({cv}: { cv: CVData }) {
    return (
        <section className="social section no-print">
            <h2 className="section_title">Social</h2>
            <div className="social_container bd-grid">{cv.social.map((social, i) => {
                return (
                    <a key={i} href={social.href} target="_blank" className="social_link">
                        <FontAwesomeIcon className="social_icon"
                                         icon={[social.iconPack, social.icon]}></FontAwesomeIcon>
                        {social.description}
                    </a>
                );
            })}</div>
        </section>
    );
};
