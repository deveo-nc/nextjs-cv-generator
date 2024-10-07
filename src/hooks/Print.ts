import {useEffect} from "react";

const usePrintStyles = () => {
    const PAGE_HEIGHT = 1122;
    useEffect(() => {
        const handleBeforePrint = () => {
            document.body.classList.add('print');
            const areaCv = document.getElementById('area-cv');
            console.log('area offsetHeight', areaCv?.offsetHeight);
            if (!areaCv) return;

            const cvHeight = areaCv.offsetHeight ?? 1123;
            const newHeight = Math.ceil(cvHeight / PAGE_HEIGHT) * PAGE_HEIGHT; // Arrondir au multiple supérieur de PAGE_HEIGHT
            areaCv.style.height = `${newHeight}px`; // Appliquer la nouvelle hauteur
        };

        const handleAfterPrint = () => {
            document.body.classList.remove('print');
            const areaCv = document.getElementById('area-cv');
            if (areaCv) {
                areaCv.style.height = ``;
            }
        };

        window.addEventListener('beforeprint', handleBeforePrint);
        window.addEventListener('afterprint', handleAfterPrint);

        return () => {
            window.removeEventListener('beforeprint', handleBeforePrint);
            window.removeEventListener('afterprint', handleAfterPrint);
        };
    }, []);
};

export default usePrintStyles;
