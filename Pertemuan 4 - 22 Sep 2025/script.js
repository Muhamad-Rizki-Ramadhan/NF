class Pembeli {
    constructor(nama, no, kendaraan){
        this.nama = nama;
        this.no = no;
        this.kendaraan = kendaraan;
    }
    sedangsewa(){
        return `${this.nama} dengan Nomor telepon ${this.no} sedang menyewa ${this.kendaraan}`;
    }
}

let datapembeli= [];

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nama = document.getElementById("nama").value;
    const no = document.getElementById("no").value;
    const kendaraan = document.getElementById("kendaraan").value;
    const baru = new Pembeli(nama, no, kendaraan);
    datapembeli.push(baru);

    tampilan();
    document.getElementById("form").reset();

});

function tampilan() {
  const ul = document.getElementById("daftarPembeli");
  ul.innerHTML = "";

  datapembeli.forEach((Pembeli, index) => {
    const li = document.createElement("li");
    li.textContent = Pembeli.sedangsewa();
    ul.appendChild(li);
  });
}