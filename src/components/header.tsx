import {CVData} from "@/model/cv";

export default function HeaderCV({cv}: {cv: CVData}) {
    return (
        <header className="l-header no-print" id="header">
            <nav className="nav bd-container">
                <a href="#" className="nav_logo"><span className="firstname">{cv.firstname}</span> <span
                    className="lastname">{cv.lastname}</span></a>
                <div className="nav_menu" id="nav-menu">
                    <ul className="nav_list">

                        <li className="nav_item">
                            <a href="#home" className="nav_link active-link">
                                <i className="fa-solid fa-house nav_icon"></i>Accueil
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#profile" className="nav_link">
                                <i className="fa-solid fa-user nav_icon"></i>Profil
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" className="nav_link">
                                <i className="fa-solid fa-computer nav_icon"></i>Compétences
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#languages" className="nav_link">
                                <i className="fa-solid fa-comments nav_icon"></i>Langues
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#experience" className="nav_link">
                                <i className="fa-solid fa-briefcase nav_icon"></i>Experiences
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#education" className="nav_link">
                                <i className="fa-solid fa-book-bookmark nav_icon"></i>Formation
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#interests" className="nav_link">
                                <i className="fa-solid fa-icons nav_icon"></i>Centre d&#39;intérêts
                            </a>
                        </li>

                    </ul>
                </div>

                <div className="nav_toggle" id="nav-toggle">
                    <i className="fa-solid fa-bars"></i>
                </div>
            </nav>
        </header>
    );
};
