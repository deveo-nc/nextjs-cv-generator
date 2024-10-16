'use client';

import {CVData} from "@/model/cv";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faEnvelope, faLocation, faMoon, faPhone, faSun} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import usePrintStyles from "@/hooks/Print";
import NextConfig from '@/../next.config.mjs';

export default function Contact({cv, anonymize}: { cv: CVData, anonymize: boolean }) {
    const PAGE_HEIGHT = 1122;
    usePrintStyles();
    const [icon, setIcon] = useState(faSun);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [maskProps, setMaskProps] = useState({
        left: '-70px',
        top: '0px'
    });
    // const [baseUrl, setBaseUrl] = useState(undefined);
    useEffect(() => {
        setMaskProps({
            left: '-90px',
            top: '15px'
        })
        console.log('href: ', window.location.href, ' pathname', window.location.pathname, ' host', window.location.host, ' hostname', window.location.hostname, ' origin', window.location.origin)
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
        <section className="relative" id="home">
            <div className="section grid gap-6">
                <div className="text-center grid gap-2">
                    <div className="profil_img_container home_img"
                         style={{position: 'relative', display: 'inline-block'}}>
                        <Image src={ NextConfig.basePath + '/assets/profil_mask.svg'}
                               className="absolute left-0 top-0"
                               alt="icon mask" id="home-mask"
                               width={150} height={150} style={{
                            left: maskProps.left,
                            top: maskProps.top
                        }}></Image>
                        <div className="hexagon relative overflow-hidden">
                            <Image src={NextConfig.basePath + '/pictures/' + cv.profil_path} className="hover:scale-110"
                                   alt="Icon picture" id="home-img"
                                   width={150} height={150}></Image>
                        </div>
                    </div>
                    <h1 className="home_title">
                        <span className="firstname">{cv.firstname}</span>
                        <b><span className="lastname"> {cv.lastname}</span></b>
                    </h1>
                    <h2 className="home_profession">{cv.profession}</h2>
                </div>
                {!anonymize &&
                    <div className="home_address gap-3 grid">
                        <h2 className="section_title">Contact</h2>
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
                }
            </div>

            <button onClick={() => handleExportPDF()} className="generate-pdf no-print hover:animate-bounce
            inline-block absolute left-0 top-8 cursor-pointer text-xl"
                    title="Generate PDF"
                    id="resume-button">
                <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
            </button>
            <button onClick={() => handleChangeTheme()} className="no-print hover:animate-bounce
             right-0 text-xl absolute top-8 flex cursor-pointer"
                    title="Theme"
                    id="theme-button">
                <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            </button>
        </section>
    );
};
