import SelectCV from "@/components/select-cv";
import Template from "@/components/template";
import path from "path";
import fs from "fs";
import {CVData} from "@/model/cv";

export default function Home({cvSelected, anonymize}: {cvSelected: string|undefined, anonymize: boolean}) {
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

    if (anonymize) {
        cvData.lastname = '';
        cvData.firstname = '';
        cvData.profil_path = 'john_doe.webp';
    }

    return (
        <>
            <SelectCV cvFiles={files} selectedCV={selectedCV}></SelectCV>
            <main className="l-main bd-container ml-auto mr-auto min-w-[794px] max-w-[794px]">
                <Template cv={cvData} anonymize={anonymize}></Template>
            </main>
        </>
    );
}
