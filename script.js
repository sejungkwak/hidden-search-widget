document.querySelector('.fa-search').addEventListener('click', () => {
    document.querySelector('.input-box').classList.toggle('active');
    if (document.querySelector('input').classList.contains('active')) {
        document.querySelector('input').setAttribute('placeholder', 'Search...');
    } else {
        document.querySelector('input').setAttribute('placeholder', '');
    }
})