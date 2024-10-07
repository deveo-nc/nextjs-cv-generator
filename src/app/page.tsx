import path from "path";
import * as fs from "fs";
import Template from "@/components/template";
import {CVData} from "@/model/cv";
import HeaderCV from "@/components/header";
import SelectCV from "@/components/select-cv";

export default function RootPage({searchParams}: {
    searchParams: {
        json: string
    }
}) {

    const dataDirectory = path.join(process.cwd(), 'public', 'data');
    const files = fs.readdirSync(dataDirectory);
    const cvFiles = files.filter(file => file.endsWith('.json'));

    if (cvFiles.length === 0) {
        return (
            <>
                <div>Aucun CV présent sur le serveur</div>
            </>
        );
    }

    const selectedCV = searchParams.json || cvFiles[0];

    const filePath = path.join(process.cwd(), 'public', 'data', selectedCV);
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
            <SelectCV cvFiles={cvFiles} selectedCV={selectedCV}></SelectCV>
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
