const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const baseUrl = 'http://localhost:3000'; // URL de base de ton site statique

const cvs = [
    '/profil/abdelkrim_rais/anonyme',
    '/profil/david_brouste/anonyme',
    '/profil/abdelkrim_rais',
    '/profil/david_brouste'
];

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    for (const cv of cvs) {
        const url = `${baseUrl}${cv}`;
        await page.goto(url, { waitUntil: 'networkidle0' });
        const pdfPath = path.join(__dirname, 'public/assets', `${cv.replace('/profil/', '').replace('/', '_')}.pdf`);

        // Création du PDF
        await page.pdf({ path: pdfPath, format: 'A4', printBackground: true});

        console.log(`PDF exporté : ${pdfPath}`);
    }

    await browser.close();
})();
