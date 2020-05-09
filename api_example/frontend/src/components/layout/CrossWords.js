import React, { Component } from 'react';
import Crossword from '@jaredreisinger/react-crossword';
import './CrossWords.css'

const data = {
    across: {
        1: {
            clue: '(Gir.) Corrida clandestina de carros',
            answer: 'PEGA',
            row: 0,
            col: 0,
        },
        5: {
            clue: 'Determinada porção',
            answer: 'COTA',
            row: 0,
            col: 5,
        },
        9: {
            clue: 'Incitar à revolta',
            answer: 'AGITAR',
            row: 1,
            col: 0,
        },
        11: {
            clue: 'Até certo ponto',
            answer: 'ALGO',
            row: 1,
            col: 7,
        },
        13: {
            clue: 'Dispositivo sonoro de alerta dos carros',
            answer: 'BUZINA',
            row: 2,
            col: 0,
        },
        14: {
            clue: 'A atriz carioca Leandra',
            answer: 'LEAL',
            row: 2,
            col: 7,
        },
        15: {
            clue: 'A sexta nota musical',
            answer: 'LA',
            row: 3,
            col: 0,
        },
        16: {
            clue: '(Gir.) Tiro de arma de fogo',
            answer: 'TECO',
            row: 3,
            col: 3,
        },
        17: {
            clue: '52 em algarismos romanos',
            answer: 'LII',
            row: 3,
            col: 8,
        },
        18: {
            clue: 'Planta muito cultivada em cercados',
            answer: 'BUXO',
            row: 4,
            col: 2,
        },
        19: {
            clue: 'Carro',
            answer: 'Auto',
            row: 4,
            col: 7,
        },
        20: {
            clue: 'Confecção de palmilhas ortopédicas',
            answer: 'PODOLOGIA',
            row: 5,
            col: 1,
        },
        22: {
            clue: 'Neném',
            answer: 'BEBE',
            row: 6,
            col: 0,
        },
        23: {
            clue: 'A personagem Karenina de Tolstoi',
            answer: 'ANNA',
            row: 6,
            col: 5,
        },
        25: {
            clue: 'A árvore cujo tronco inspirou José de Alencar',
            answer: 'IPE',
            row: 7,
            col: 0,
        },
        26: {
            clue: 'Gordura ou banha',
            answer: 'UNTO',
            row: 7,
            col: 4,
        },
        27: {
            clue: 'A roda do afiador de facas',
            answer: 'MO',
            row: 7,
            col: 9,
        },
        28: {
            clue: 'Onze menos cinco',
            answer: 'SEIS',
            row: 8,
            col: 0,
        },
        30: {
            clue: 'Desnudar',
            answer: 'Despir',
            row: 8,
            col: 5,
        },
        32: {
            clue: 'Em música, que não tem qualidades dissonantes',
            answer: 'PURO',
            row: 9,
            col: 0,
        },
        33: {
            clue: 'Copiar',
            answer: 'IMITAR',
            row: 9,
            col: 5,
        },
        34: {
            clue: '(Mala sem) Pessoa inconveniente',
            answer: 'ALÇA',
            row: 10,
            col: 2,
        },
        32: {
            clue: 'Picante',
            answer: 'ACRE',
            row: 10,
            col: 7,
        },
    },
    down: {
        1: {
            clue: 'O poeta chileno Neruda (1904-1974)',
            answer: 'PABLO',
            row: 0,
            col: 0,
        },
        2: {
            clue: 'A fêmea do cavalo',
            answer: 'EGUA',
            row: 0,
            col: 1,
        },
        3: {
            clue: 'Um material usado por professores',
            answer: 'GIZ',
            row: 0,
            col: 2,
        },
        4: {
            clue: 'Norma de proceder',
            answer: 'ATITUDE',
            row: 0,
            col: 3,
        },
        5: {
            clue: 'Região paulistana com graves problemas sociais',
            answer: 'CRACOLANDIA',
            row: 0,
            col: 5,
        },
        6: {
            clue: 'IGUAL',
            answer: 'TAL',
            row: 0,
            col: 7,
        },
        7: {
            clue: 'Exclamação de alegria, de júbilo',
            answer: 'ALELUIA',
            row: 0,
            col: 8,
        },
        8: {
            clue: '(Abrev.) Paralisia infantil',
            answer: 'POLIO',
            row: 0,
            col: 10,
        },
        10: {
            clue: '(Inform.) Documento que acompanha um e-mail',
            answer: 'ANEXO',
            row: 1,
            col: 4,
        },
        12: {
            clue: 'O instrumento de sopro que pode ser de foles',
            answer: 'GAITA',
            row: 1,
            col: 9,
        },
        18: {
            clue: 'Besteira, tolice',
            answer: 'BOBEIRA',
            row: 4,
            col: 2,
        },
        19: {
            clue: '(Patol.) Incapacidade de reconhecer os objetos comuns e familiares',
            answer: 'AGNOSIA',
            row: 4,
            col: 7,
        },
        20: {
            clue: 'O músico baiano Gomes',
            answer: 'PEPEU',
            row: 5,
            col: 1,
        },
        21: {
            clue: 'Um dia recém-findo',
            answer: 'ONTEM',
            row: 5,
            col: 6,
        },
        22: {
            clue: 'A peça do xadrez que anda na diagonal',
            answer: 'BISPO',
            row: 6,
            col: 0,
        },
        24: {
            clue: 'A parte mais alta do castelo',
            answer: 'TORRE',
            row: 6,
            col: 10,
        },
        27: {
            clue: 'Emitir (o gato) a sua voz',
            answer: 'MIAR',
            row: 7,
            col: 9,
        },
        29: {
            clue: 'Astro central do nosso sistema planetário',
            answer: 'SOL',
            row: 8,
            col: 3,
        },
        31: {
            clue: 'As consoantes de apático',
            answer: 'PTC',
            row: 8,
            col: 8,
        },
    },
}


export class CrossWords extends Component {


    render() {
        return (
            <div style={{
                width: '100%'

            }}>
                <Crossword
                    data={data}
                    // columnBreakpoint="9999px" # when to break the grid/clues
                    // gridBackground="#acf"
                    // cellBackground="#ffe"
                    // cellBorder="#fca"
                    // textColor="#fff"
                    // numberColor="#9f9"
                    // focusBackground="#f00"
                    // highlightBackground="#f99"
                    onCorrect={(a, b, c) => {
                        try {
                            console.log(a, b, c);
                            const direction = a;
                            const number = b;
                            const answer = c;
                            data[a][b].clue = data[a][b].clue + "✅";
                            alert(data[a][b].clue);
                        } catch (error) {
                            console.log(error)
                        }
                    }}


                    onLoadedCorrect={(a, b, c) => {
                        console.log(a, b, c);
                    }}

                />
            </div>
        )
    }
}

export default CrossWords;



// // Example by dreamer01
// // import React from "react";
// // import Crossword from "@jaredreisinger/react-crossword";

// // import { initialData } from "../utils/crossword";

// function Crosswords() {
//     const [data, setData] = React.useState(initialData);

//     const onCorrect = (...values) => {
//         try {
//             const [direction, number, answer] = values;
//             const newData = { ...data };
//             newData[direction][number].clue = newData[direction][number].clue + " ✅";
//             setData(newData);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <Crossword
//             data={data}
//             onCorrect={onCorrect}
//             onLoadedCorrect={(a, b, c) => {
//                 console.log(a, b, c);
//             }}
//         />
//     );
// }

// export default Crosswords;