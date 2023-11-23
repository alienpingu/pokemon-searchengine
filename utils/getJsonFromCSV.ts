import csv from 'csvtojson';
import path from 'path'
const filePath = 'public/pokemon.csv';

export default async function getJsonFromCSV() {
        var data = await csv().fromFile(path.resolve(filePath));
        return data;
}