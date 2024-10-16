import {CVData} from "@/model/cv";

export default function Profil({cv}: {cv: CVData}) {
    return (
        <section className="profile section" id="profile">
            <h2 className="section_title">Profil</h2>
            <p className="profile_description">{cv.profile}</p>
        </section>
    );
};
