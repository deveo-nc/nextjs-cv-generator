'use client';
import {useEffect, useState} from "react";
import {Skill} from '@/model/cv';

export default function SkillBar({skill}: {skill: Skill}) {
    const [width, setWidth] = useState<string>('0%'); // Start at 0%

    useEffect(() => {
        setWidth(skill.level);
    }, [skill.level]);

    return (
        <div className="skills_box h-3 inline-block rounded-lg overflow-hidden">
            <span className="skills_progress h-3 block rounded transition-[width] duration-300" style={{
                width: width
            }}></span>
        </div>
    );
};
