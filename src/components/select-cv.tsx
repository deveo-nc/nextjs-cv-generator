'use client';

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useRouter} from "next/navigation";

export default function SelectCV({ cvFiles, selectedCV }: { cvFiles: string[], selectedCV: string }) {
    const router = useRouter();
    const handleCVChange = (cvJson: string) => {
        router.push(`/?json=${cvJson}`);
    };

    return (
        <div className="select_container no-print">
            <h1>Choisissez un CV</h1>
            <Select onValueChange={handleCVChange} defaultValue={selectedCV}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sélectionner un CV"/>
                </SelectTrigger>
                <SelectContent>
                    {cvFiles.map(file => (
                        <SelectItem key={file} value={file}>
                            {file.replace('.json', '')}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};
