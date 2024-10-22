const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const cvFolder = path.join(__dirname, 'public', 'data');

(async () => {
    const baseUrl = 'https://deveo-nc.github.io/nextjs-cv-generator';

    const jsonFiles = fs.readdirSync(cvFolder).filter(file => file.endsWith('.json'));

    if (jsonFiles.length === 0) {
        console.log('Aucun fichier JSON trouvé.');
        return;
    }

    const cvs = jsonFiles.map((jsonName) => jsonName.replace('.json', ''));

    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    for (const cv of cvs) {
        let url = `${baseUrl}/profil/${cv}`;
        console.log(url);
        await page.goto(url, { waitUntil: 'networkidle0' });
        let pdfPath = path.join(__dirname, 'public/assets', `${cv.replace('/profil/', '').replace('/', '_')}.pdf`);

        // Création du PDF
        await page.pdf({ path: pdfPath, format: 'A4', printBackground: true });
        console.log(`PDF exporté : ${pdfPath}`);

        url += '/anonyme';
        console.log(url);
        await page.goto(url, { waitUntil: 'networkidle0' });
        pdfPath = path.join(__dirname, 'public/assets', `${cv.replace('/profil/', '').replace('/', '_')}.pdf`);

        // Création du PDF
        await page.pdf({ path: pdfPath, format: 'A4', printBackground: true });
        console.log(`PDF exporté : ${pdfPath}`);
    }

    await browser.close();
})();
