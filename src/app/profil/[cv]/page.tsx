import fs from 'fs';
import path from 'path';
import Home from "@/components/home";

export async function generateStaticParams() {
    const dataDirectory = path.join(process.cwd(), 'public', 'data');
    const files = fs.readdirSync(dataDirectory);
    const cvFiles = files.filter(file => file.endsWith('.json'));

    // Générer une page pour chaque fichier JSON
    return cvFiles.map((cvName: string) => ({
        cv: cvName.replace('.json', '')
    }));
}

export default async function CvPage({params}: { params: { cv: string } }) {
    return (
        <Home cvSelected={params.cv} anonymize={false}></Home>
    )
}
