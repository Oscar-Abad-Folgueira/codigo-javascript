/**
 * @snippet       JavaScript Snippet: Encontrar un objeto en un array de objetos
 * @author        Oscar Abad Folgueira
 * @author_url    https://www.oscarabadfolgueira.com
 */

// usuarios es un array que contiene 3 objetos
let users = [{
    id: 0,
    username: 'oabadfol',
    email: 'oabadfol@oabadfol.com',
    nombre: 'Óscar'
},
{
    id: 1,
    username: 'amparisima',
    email: 'amparisima@amparisima.com',
    nombre: 'Amparo'
},
{
    id: 2,
    username: 'ramonsuarez',
    email: 'ramonsuarez@ramonsuarez.com',
    nombre: 'Ramón'
}
];

// Utilizamos el médoto find() de los arrays para buscar un objeto cuyo nombre sea el que buscamos
let user = users.find(elemento => elemento.nombre === 'Amparo');

// Nos devuelve el objeto completo
console.log(user);