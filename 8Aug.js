let count = 0

while (count < 5) {
    console.log("nomor rumah" + count);
    count ++;
}

const kota = ['Bandung', 'Yogya', 'Jakarta']

for (let z = 0; z < kota.length; z++){
    let element = kota[z]
    console.log(element)
}

const data = {
    nama: 'Annisa',
    Asal: 'Bandung',
}
data.nama = 'Putri'

for (let key in data) {
    console.log(key + ": " + data[key]);
  }

console.log(data)

for (let x = 0; x <= 20; x++){
    if (x % 2 != 0) {
    console.log(x) }
}