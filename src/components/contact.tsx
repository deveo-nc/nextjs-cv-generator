'use client';

import {CVData} from "@/model/cv";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faEnvelope, faLocation, faMoon, faPhone, faSun} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import usePrintStyles from "@/hooks/Print";

export default function Contact({cv}: { cv: CVData }) {
    const PAGE_HEIGHT = 1122;
    usePrintStyles();
    const [icon, setIcon] = useState(faSun);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [maskProps, setMaskProps] = useState({
        left: '-70px',
        top: '0px'
    });

    useEffect(() => {
        setMaskProps({
            left: '-90px',
            top: '15px'
        })
    }, []);

    useEffect(() => {
        const darkMode = localStorage.getItem("dark-mode") === 'enabled';
        if (darkMode) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    }, [isDarkMode]);

    const addScaleCV = () => {
        document.body.classList.add('print');
        const areaCv = document.getElementById('area-cv');
        console.log('area offsetHeight', areaCv?.offsetHeight);
        if (!areaCv) return;

        const cvHeight = areaCv.offsetHeight ?? 1123;
        const newHeight = Math.ceil(cvHeight / PAGE_HEIGHT) * PAGE_HEIGHT; // Arrondir au multiple supérieur de PAGE_HEIGHT
        areaCv.style.height = `${newHeight}px`; // Appliquer la nouvelle hauteur
    };

    const removeScaleCV = () => {
        document.body.classList.remove('print');
        const areaCv = document.getElementById('area-cv');
        if (areaCv) {
            areaCv.style.height = ``;
        }
    }

    const enableDarkMode = () => {
        console.log('enableDarkMode');
        document.body.classList.add('dark-theme');
        setIcon(faMoon);
        setIsDarkMode(true);
        localStorage.setItem("dark-mode", "enabled");
    };

    const disableDarkMode = () => {
        console.log('disableDarkMode');
        document.body.classList.remove('dark-theme');
        setIcon(faSun);
        setIsDarkMode(false);
        localStorage.setItem("dark-mode", "disabled");
    }

    const handleExportPDF = async () => {
        console.log("Export PDF")
        addScaleCV();
        const areaCV = document.getElementById('area-cv');
        // @ts-expect-error en attendant de remplacer par une lib react
        const html2pdf = (await import("html2pdf.js/dist/html2pdf.js")).default;
        html2pdf(areaCV, {
            margin: 0,
            filename: 'myResumeCV.pdf',
            image: {type: 'jpeg', quality: 0.98},
            html2canvas: {scale: 4, useCORS: true},
            jsPDF: {format: 'a4', orientation: 'portrait'},
            pagebreak: {mode: 'css', avoid: '.experience_content'}
        });
        setTimeout(removeScaleCV, 1000);
    };

    const handleChangeTheme = () => {
        console.log('change theme');
        const darkMode = localStorage.getItem("dark-mode");
        if (darkMode === "disabled") {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    };

    return (
        <section className="home" id="home">
            <div className="home_container section bd-grid">
                <div className="home_data bd-grid">
                    <div className="profil_img_container home_img"
                         style={{position: 'relative', display: 'inline-block'}}>
                        <Image src={process.env.NEXT_PUBLIC_BASE_PATH + '/assets/profil_mask.svg'} alt="icon mask" id="home-mask"
                               width={220} height={220} style={{
                            left: maskProps.left,
                            top: maskProps.top
                        }}></Image>
                        <div className="hexagon">
                            <Image src={process.env.NEXT_PUBLIC_BASE_PATH + '/pictures/' + cv.profil_path} alt="Icon picture" id="home-img"
                                   width={220} height={220}></Image>
                        </div>
                    </div>
                    <h1 className="home_title">
                        <span className="firstname">{cv.firstname}</span>
                        <b><span className="lastname"> {cv.lastname}</span></b>
                    </h1>
                    <h3 className="home_profession">{cv.profession}</h3>
                </div>
                <div className="home_address bd-grid">
                    <h2 className="section-title">Contact</h2>
                    <span className="home_information">
                        <FontAwesomeIcon className="home_icon" icon={faLocation}>
                        </FontAwesomeIcon>{cv.location}
                    </span>
                    <span className="home_information">
                        <a href={'mailto:' + cv.email} className="home_link">
                            <FontAwesomeIcon className="home_icon" icon={faEnvelope}>
                            </FontAwesomeIcon>{cv.email}
                        </a>
                    </span>
                    <span className="home_information">
                        <a href={'tel:' + cv.phoneWithIndicator} className="home_link">
                            <FontAwesomeIcon className="home_icon" icon={faPhone}>
                            </FontAwesomeIcon>{cv.phone}
                        </a>
                    </span>
                </div>
            </div>

            <button onClick={() => handleExportPDF()} className="generate-pdf no-print hover:animate-bounce" title="Generate PDF"
                    id="resume-button">
                <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
            </button>
            <button onClick={() => handleChangeTheme()} className="change-theme no-print hover:animate-bounce" title="Theme"
                    id="theme-button">
                <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            </button>
        </section>
    );
};
