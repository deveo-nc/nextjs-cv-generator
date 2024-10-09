import SelectCV from "@/components/select-cv";
import HeaderCV from "@/components/header";
import Template from "@/components/template";
import path from "path";
import fs from "fs";
import {CVData} from "@/model/cv";

export default function Home({cvSelected}: {cvSelected: string|undefined}) {
    const dataDirectory = path.join(process.cwd(), 'public', 'data');
    const files = fs.readdirSync(dataDirectory);
    const cvFiles = files.filter(file => file.endsWith('.json')).map(file => file.replace('.json', ''));

    if (cvFiles.length === 0) {
        return (
            <>
                <div>Aucun CV présent sur le serveur</div>
            </>
        );
    }

    const selectedCV = cvSelected ?? cvFiles[0];
    const filePath = path.join(dataDirectory, `${selectedCV}.json`);

    if (!fs.existsSync(filePath)) {
        return <div>Le CV n&#39;existe pas</div>;
    }

    const cvData: CVData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    if (!cvData) {
        return (
            <>
                <div>Aucun CV sélectionné</div>
            </>
        );
    }
    return (
        <>
            <SelectCV cvFiles={files} selectedCV={selectedCV}></SelectCV>
            <HeaderCV cv={cvData}></HeaderCV>
            <main className="l-main bd-container">
                <Template cv={cvData}></Template>
            </main>

            <a href="#" className="scrolltop" id="scroll-top">
                <i className="fa-solid fa-arrow-up scrolltop_icon"></i>
            </a>
        </>
    );
}
