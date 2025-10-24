document.getElementById('year').textContent = new Date().getFullYear();

function openModal() {
    const m = document.getElementById('modal');
    m.style.display = 'flex';
    m.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    const m = document.getElementById('modal');
    m.style.display = 'none';
    m.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// show upload option if custom design
const colorSelect = document.getElementById('color');
colorSelect.addEventListener('change', () => {
    const upl = document.getElementById('uploadField');
    upl.style.display = colorSelect.value.includes('personnalis') ? 'block' : 'none';
});

function handleOrder(e) {
    e.preventDefault();
    // quick client-side validation & fake checkout
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const qty = document.getElementById('qty').value;
    if (!model || !color) { alert('Veuillez remplir tous les champs'); return; }


    closeModal();
    alert('Commande enregistrée — merci ! Nous vous contactons sous 24h pour confirmation.');

}

// sticky CTA show on mobile only when scroll past hero
const sticky = document.querySelector('.sticky-cta');
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const y = window.scrollY || window.pageYOffset;
    if (window.innerWidth <= 640 && y > 200) sticky.style.display = 'flex';
    else sticky.style.display = 'none';
});
