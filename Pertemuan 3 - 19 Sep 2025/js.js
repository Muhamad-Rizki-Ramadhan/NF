let produk = [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
    {id: 2, nama: "Mouse", harga: 200000, stok: 10},
    {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];

function tampil() {
    console.log("====================== Daftar Produk =======================");
    produk.forEach((x) => {
        console.log(`ID: ${x.id} | Nama: ${x.nama} | Harga: Rp${x.harga} | Stok: ${x.stok}`);
    });
}

// Fungsi nambah produk baru
function tambah(nama, harga, stok) {
    // nambah id
    let nextid = produk[produk.length - 1].id + 1;
    let baru = {id: nextid, nama: nama, harga: harga, stok: stok};
    produk.push(baru);
    console.log(`${nama} ditambahkan`);
}

// Fungsi untuk menghapus produk berdasarkan id
function hapus(id) {
    let index = produk.findIndex((produk) => produk.id === id);
    if (index !== -1) {
        console.log(`${produk[index].nama} dihapus.`);
        produk.splice(index, 1);
    } 
}

tampil();
tambah("Gamepad", 200000, 5);
tampil();
hapus(4);
tampil();