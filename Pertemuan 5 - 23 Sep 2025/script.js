let produk = [
  { id: 1, nama: "Mouse Gaming", harga: 150000, stok: 12 },
  { id: 2, nama: "Keyboard Mechanical", harga: 450000, stok: 7 },
  { id: 3, nama: "Kabel USB-C", harga: 50000, stok: 40 },
  { id: 4, nama: "Headset", harga: 250000, stok: 10 },
  { id: 5, nama: "Laptop Sleeve", harga: 120000, stok: 20 }
];

let idnext = Math.max(...produk.map(p => p.id)) + 1;

const formproduk = document.getElementById('form');
const inputNama = document.getElementById('nama');
const inputHarga = document.getElementById('harga');
const inputStok = document.getElementById('stok');
const produkcontainer = document.getElementById('produk');
const btnshow = document.getElementById('show');

function table({ id, nama, harga, stok }) {
  return `
    <tr>
      <td>${id}</td>
      <td>${nama}</td>
      <td>Rp ${harga.toLocaleString()}</td>
      <td>${stok}</td>
      <td><button class="btn-delete" data-id="${id}">Hapus</button></td>
    </tr>
  `;
}

function tampil(list) {
  if (list.length === 0) {
    produkcontainer.innerHTML = "Tidak ada produk";
    return;
  }
  const baris = list.map(table).join('');
  produkcontainer.innerHTML = `
    <table border="1" cellpadding="5" cellspacing="0">
      <tr>
        <th>ID</th>
        <th>Nama</th>
        <th>Harga</th>
        <th>Stok</th>
        <th>Aksi</th>
      </tr>
      ${baris}
    </table>
  `;

  document.querySelectorAll('.btn-delete').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = Number(e.target.dataset.id);
      hapus(id);
    });
  });
}

function tambah(...baru) {
  const pertambahan = baru.map(barang => ({
    id: idnext++,
    ...barang
  }));
  produk = [...produk, ...pertambahan];
}

function hapus(id) {
  produk = produk.filter(p => p.id !== id);
}

formproduk.addEventListener('submit', (e) => {
  e.preventDefault();
  const nama = inputNama.value;
  const harga = Number(inputHarga.value);
  const stok = Number(inputStok.value);

  tambah({ nama, harga, stok });
  formproduk.reset();
});

btnshow.addEventListener('click', () => {
  tampil(produk);
});
