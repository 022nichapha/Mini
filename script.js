function showPage(pageId) {
    // ซ่อนทุกหน้า
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.style.display = 'none');

    // แสดงหน้าที่ระบุ
    const target = document.getElementById('page-' + pageId);
    if (target) {
        target.style.display = 'block';
        window.scrollTo(0, 0); // เลื่อนไปด้านบนสุด
    }
}

function showModal() {
    document.getElementById('successModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('successModal').style.display = 'none';
    showPage('home'); // กลับไปหน้าหลักหลังล็อคอิน
}

// ตั้งค่าเริ่มต้นให้แสดงหน้าแรก
window.onload = () => showPage('home');