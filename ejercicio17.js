
const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

for(let dato in alien){
    console.log(`La propiedad ${dato} tiene como valor ${alien[dato]}`)
}