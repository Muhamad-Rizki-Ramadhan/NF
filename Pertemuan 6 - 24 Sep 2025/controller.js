function tampil() {
    console.log("=================== Daftar =====================");
    data.map((item, index) => {
        console.log(
            `${index + 1}. Nama: ${item.nama}, Umur: ${item.umur}, Alamat: ${item.alamat}, Email: ${item.email}`
        );
    });
}

function tambah() {
    data.push(
        { nama: "Maya", umur: 21, alamat: "Bogor", email: "maya@mail.com" },
        { nama: "Rian", umur: 22, alamat: "Depok", email: "rian@mail.com" }
    );
    console.log("\nData ditambahkan\n");
    tampil();
}

// 3. Menghapus data berdasarkan index
function hapus(index) {
    if (index >= 0 && index < data.length) {
        let hapus = data.splice(index, 1);
        console.log(`\nData ${hapus[0].nama} dihapus`);
    }
    tampil();
}

console.log(">>> Awal Data");
tampil();

console.log("\n>>> Tambah Data");
tambah();

console.log("\n>>> Hapus Data (hapus index ke-2 / data ke-3)");
hapus(2);
