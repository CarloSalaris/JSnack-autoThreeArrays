/* CONSEGNA

- Crea un array composto da 10 automobili.
    Ogni oggetto automobile avrà le seguenti proprietà:
        - marca
        - modello
        - alimentazione (benzina, diesel, gpl, elettrico, metano).

- Dividi le automobili in 3 array separati:
    - primo solo le auto a benzina
    - secondo solo le auto a diesel
    - terzo il resto delle auto.
 
- Stampa separatamente i 3 array.*/

// - Crea un array composto da 10 automobili.
const allAuto = [
    {
        'marca': '',
        'modello': '',
        'alimentazione': 'benzina',

    },
    {
        'marca': '',
        'modello': '',
        'alimentazione': 'diesel',

    },
    {
        'marca': '',
        'modello': '',
        'alimentazione': 'benzina',

    },
    {
        'marca': '',
        'modello': '',
        'alimentazione': 'benzina',

    },
    {
        'marca': '',
        'modello': '',
        'alimentazione': 'diesel',

    },
    {
        'marca': '',
        'modello': '',
        'alimentazione': 'elettrico',

    },
    {
        'marca': '',
        'modello': '',
        'alimentazione': 'elettrico',

    },
    {
        'marca': '',
        'modello': '',
        'alimentazione': 'metano',

    },
    {
        'marca': '',
        'modello': '',
        'alimentazione': 'benzina',

    },
    {
        'marca': '',
        'modello': '',
        'alimentazione': 'gpl',

    },
];

// - Dividi le automobili in 3 array separati:
const autoBenzina = allAuto.filter ((element) => {
        if (element.alimentazione === 'benzina'){
            return true
        }
    });
console.log(autoBenzina);

const autoDiesel = allAuto.filter ((element) => {
    if (element.alimentazione === 'diesel'){
        return true
    }
});
console.log(autoDiesel);

const autoElse = allAuto.filter ((element) => {
    if (element.alimentazione !== 'benzina' && element.alimentazione !== 'diesel'){
        return true
    }
});
console.log(autoElse);