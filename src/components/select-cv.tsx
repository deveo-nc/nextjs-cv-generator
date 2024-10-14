'use client';

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {usePathname, useRouter} from "next/navigation";
import {Checkbox} from "@/components/ui/checkbox";
import {useEffect, useState} from "react";

export default function SelectCV({ cvFiles, selectedCV }: { cvFiles: string[], selectedCV: string }) {
    const router = useRouter();
    const pathname = usePathname();
    const [isAnonymized, setIsAnonymized] = useState(false);
    const [cvName, setCvName] = useState(selectedCV);

    useEffect(() => {
        const isAnonymized = localStorage.getItem('anonymize') === 'enabled';
        setIsAnonymized(isAnonymized);
        const isAnonymeAndWrongUrl = isAnonymized && !pathname.endsWith('/anonyme');
        const isNotAnonymeAndWrongUrl = !isAnonymized && pathname.endsWith('/anonyme');
        if (isAnonymeAndWrongUrl || isNotAnonymeAndWrongUrl) {
            router.push(`/profil/${cvName}${isAnonymized ? '/anonyme' : ''}`);
        }
    }, [cvName, pathname, router]);

    const handleCVChange = (cvName: string) => {
        setCvName(cvName);
        router.push(`/profil/${cvName}${isAnonymized ? '/anonyme' : ''}`);
    };

    const handleAnonymizeChange = (isAnonymized: boolean) => {
        localStorage.setItem('anonymize', isAnonymized ? 'enabled' : 'disabled');
        setIsAnonymized(isAnonymized);
        router.push(`/profil/${cvName}${isAnonymized ? '/anonyme' : ''}`);
    };

    return (
        <div className="no-print flex justify-center items-center mb-3 flex-row">
            <h1 className="mr-1">Choisissez un CV:</h1>
            <Select onValueChange={handleCVChange} defaultValue={selectedCV}>
                <SelectTrigger aria-label='Select CV' className="w-[180px]">
                    <SelectValue aria-label='Select CV' placeholder="Sélectionner un CV"/>
                </SelectTrigger>
                <SelectContent aria-label='Select CV'>
                    {cvFiles.map((file, i) => (
                        <SelectItem aria-label={file.replace('.json', '')} key={i} value={file.replace('.json', '')}>
                            {file.replace('.json', '')}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <div className="items-top flex space-x-2 ml-4">
                <Checkbox aria-label='anonymize CV' onCheckedChange={handleAnonymizeChange} checked={isAnonymized} id="terms1"/>
                <div className="grid gap-1.5 leading-none">
                    <label
                        htmlFor="terms1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Anonymiser le CV
                    </label>
                </div>
            </div>
        </div>
    );
};
