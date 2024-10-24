import {useEffect} from "react";

const usePrintStyles = () => {
    const PAGE_HEIGHT = 1122;
    useEffect(() => {
        const handleBeforePrint = () => {
            document.body.classList.add('print');
            const areaCv = document.getElementById('area-cv');
            console.log('area offsetHeight', areaCv?.offsetHeight);
            if (!areaCv) {
                return;
            }
            console.log('area offsetHeight', areaCv?.offsetHeight);
            const cvHeight = areaCv.offsetHeight ?? PAGE_HEIGHT;
            const newHeight = Math.ceil(cvHeight / 1000) * PAGE_HEIGHT; // Arrondir au multiple supérieur de PAGE_HEIGHT
            console.log('cvHeight', cvHeight)
            console.log('newHeight', newHeight)
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
