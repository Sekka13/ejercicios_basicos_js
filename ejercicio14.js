const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];

function repeatCounter(list) {
  
    let contador = {};

    for (i = 0; i < list.length; i++) {
        let word = list[i];

        if (contador[word]) {
            contador[word]++;
        } else {

            contador[word] = 1;
        }
    }
    return contador;

} console.log(repeatCounter(words))