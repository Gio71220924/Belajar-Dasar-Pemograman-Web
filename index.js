// Ambil elemen dropdown dan button
const dropdownButton = document.getElementById('dropdowntombol'); // ID disesuaikan
const dropdownMenu = document.getElementById('dropdown');

// Fungsi untuk toggle dropdown menu
function toggleDropdown() {
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
}

// Tambahkan event listener pada button
dropdownButton.addEventListener('click', function(event) {
    event.stopPropagation(); // Mencegah penutupan dropdown saat klik tombol
    toggleDropdown();
});

// Tutup dropdown menu ketika klik di luar dropdown
window.addEventListener('click', function(event) {
    if (!event.target.matches('#dropdowntombol')) { // ID disesuaikan
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        }
    }
});
