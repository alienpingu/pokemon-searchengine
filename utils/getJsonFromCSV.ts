import csv from 'csvtojson';

const path = 'public/pokemon.csv';

export default async function getJsonFromCSV() {
        var data = await csv().fromFile(path);
        return data;
}