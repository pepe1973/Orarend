let feltolt = document.querySelector('#feltolt');
let orarend = [];

feltolt.addEventListener('click', (event) => {
    event.preventDefault();

    let nap = document.querySelector('#nap').value;
    let oraszam = document.querySelector('#oraszam').value;
    let tantargy = document.querySelector('#tantargy').value;
    let tanar = document.querySelector('#tanar').value;
    let terem = document.querySelector('#terem').value;

    let elem = { nap, oraszam, tantargy, tanar, terem };
    orarend.push(elem);
    console.log(orarend);

    kitolt(orarend);
});

function kitolt(tomb) {
    let tds = document.querySelectorAll('td');

    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i].nap === 'Hétfő') {
            let oraszam = Number(tomb[i].oraszam);
            let szoveg = `<p>${tomb[i].tantargy}</p>`;
            szoveg += `<p>${tomb[i].tanar}</p>`;
            szoveg += `<p>${tomb[i].terem}</p>`;
            tds[(oraszam - 1) * 6 + 1].innerHTML = szoveg;
            szinez(tomb[i].tantargy, tds[(oraszam - 1) * 6 + 1]);
        } else if (tomb[i].nap === 'Kedd') {
            let oraszam = Number(tomb[i].oraszam);
            let szoveg = `<p>${tomb[i].tantargy}</p>`;
            szoveg += `<p>${tomb[i].tanar}</p>`;
            szoveg += `<p>${tomb[i].terem}</p>`;
            tds[(oraszam - 1) * 6 + 2].innerHTML = szoveg;
            szinez(tomb[i].tantargy, tds[(oraszam - 1) * 6 + 2]);
        } else if (tomb[i].nap === 'Szerda') {
            let oraszam = Number(tomb[i].oraszam);
            let szoveg = `<p>${tomb[i].tantargy}</p>`;
            szoveg += `<p>${tomb[i].tanar}</p>`;
            szoveg += `<p>${tomb[i].terem}</p>`;
            tds[(oraszam - 1) * 6 + 3].innerHTML = szoveg;
            szinez(tomb[i].tantargy, tds[(oraszam - 1) * 6 + 3]);
        } else if (tomb[i].nap === 'Csütörtök') {
            let oraszam = Number(tomb[i].oraszam);
            let szoveg = `<p>${tomb[i].tantargy}</p>`;
            szoveg += `<p>${tomb[i].tanar}</p>`;
            szoveg += `<p>${tomb[i].terem}</p>`;
            tds[(oraszam - 1) * 6 + 4].innerHTML = szoveg;
            szinez(tomb[i].tantargy, tds[(oraszam - 1) * 6 + 4]);
        } else if (tomb[i].nap === 'Péntek') {
            let oraszam = Number(tomb[i].oraszam);
            let szoveg = `<p>${tomb[i].tantargy}</p>`;
            szoveg += `<p>${tomb[i].tanar}</p>`;
            szoveg += `<p>${tomb[i].terem}</p>`;
            tds[(oraszam - 1) * 6 + 5].innerHTML = szoveg;
            szinez(tomb[i].tantargy, tds[(oraszam - 1) * 6 + 5]);
        }
    }
}

function szinez(ora, elem) {
    if (ora === 'Matematika') {
        elem.style.backgroundColor = 'brown';
        elem.style.color = 'whitesmoke';
    } else if (ora === 'Magyar nyelv és irodalom') {
        elem.style.backgroundColor = 'red';
        elem.style.color = 'whitesmoke';
    } else if (ora === 'Történelem') {
        elem.style.backgroundColor = 'mediumseagreen';
        elem.style.color = 'whitesmoke';
    } else if (ora === 'Angol') {
        elem.style.backgroundColor = 'blue';
        elem.style.color = 'whitesmoke';
    } else if (ora === 'Testnevelés') {
        elem.style.backgroundColor = 'yellow';
        elem.style.color = 'black';
    }
}
