// Social Links Interface
import {IconName} from "@fortawesome/free-solid-svg-icons";

interface SocialLink {
    href: string;
    description: string;
    icon: IconName;
    iconPack: 'fas'|'fab';
}

// Skill Interface
export interface Skill {
    name: string;
    level: string;
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
    profil_path: string;
    profession: string;
    location: string;
    email: string;
    phoneWithIndicator: string;
    phone: string;
    social: SocialLink[];
    profile: string;
    skills: Skill[];
    languages: Language[];
    experiences: Experience[];
    educations: Education[];
    interests: Interest[];
}
