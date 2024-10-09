'use client';

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useRouter} from "next/navigation";

export default function SelectCV({ cvFiles, selectedCV }: { cvFiles: string[], selectedCV: string }) {
    const router = useRouter();
    const handleCVChange = (cvName: string) => {
        router.push(`/${cvName}`);
    };

    return (
        <div className="select_container no-print">
            <h1>Choisissez un CV</h1>
            <Select onValueChange={handleCVChange} defaultValue={selectedCV}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sélectionner un CV"/>
                </SelectTrigger>
                <SelectContent>
                    {cvFiles.map((file, i) => (
                        <SelectItem key={i} value={file.replace('.json', '')}>
                            {file.replace('.json', '')}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};
