// Store the links in a variable
const links = [
    //{ url: 'https://app.box.com/s/zwizt89sk82y5rio2f6f422o2oka4e32', text: 'Link -2' },
    { url: 'https://drive.google.com/drive/folders/1QDnGMBc092j5rCwhiecpeAPPAuoOH2RD?usp=drive_link', text: 'Link 1 gsb' },
    { url: 'https://drive.google.com/drive/folders/19oCHiAWF4VIjx-fpIXgKQzXWgfunVUJ_?usp=sharing', text: 'Link 2 gfr' },
    { url: 'https://www.dropbox.com/scl/fo/yz5pv99r5h1dbo63re0es/AIH_A400yYNP8Wouu4u1Y_s?rlkey=elrj71vfhfqo2qmi6sy05fwui&st=gyzs9jbv&dl=0', text: 'Link 2 db orm' },
    { url: 'https://drive.proton.me/urls/G2ZPG3MH74#YzbTVdeInp93', text: 'Link 3 pd b' },
];

// Get the container div
const linkContainer = document.getElementById('linkContainer');

// Dynamically generate the HTML for each link and inject it into the container
links.forEach(link => {
    const boxDiv = document.createElement('div');
    boxDiv.className = 'box';
    boxDiv.innerHTML = `
        <a href="${link.url}">
            <h1><span>${link.text}</span></h1>
        </a>
    `;
    linkContainer.appendChild(boxDiv);
});
