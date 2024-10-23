import {IconName} from "@fortawesome/free-solid-svg-icons";

// Skill Interface
export interface Skill {
    category: string;
    subCategories: SubCategory[];
}

export interface SubCategory {
    subCategory: string;
    description: string;
}

// Language Interface
interface Language {
    description: string;
    level: number;
}

// Experience Interface
interface Experience {
    title: string;
    company: string;
    year: string;
    description: string;
    tasks: string[];
    environments: string|Environment[];
}

interface Environment {
    icon: IconName|undefined,
    iconPack: 'fas'|'fab'|undefined,
    description: string
}

// Education Interface
interface Education {
    title: string;
    studies: string;
    year: string;
}

// Interest Interface
interface Interest {
    title: string;
    icon: IconName;
    iconPack: 'fas'|'fab';
}

// Main CV Data Interface
export interface CVData {
    lastname: string;
    firstname: string;
    anonyme_name: string;
    profil_path: string;
    profession: string;
    location: string;
    email: string;
    phoneWithIndicator: string;
    phone: string;
    skills: Skill[];
    languages: Language[];
    experiences: Experience[];
    educations: Education[];
    interests: Interest[];
}
