let isHidden = true;
document.querySelector('#button-section').addEventListener('click', function () {
    isHidden = !isHidden;
    if (!isHidden) {
        document.querySelector('#d-5').classList.add('showMore')
        document.querySelector('#d-6').classList.add('showMore')
        document.querySelector('#d-7').classList.add('showMore')
        document.querySelector('#d-8').classList.add('showMore')
    } else {
        document.querySelector('#d-5').classList.remove('showMore')
        document.querySelector('#d-6').classList.remove('showMore')
        document.querySelector('#d-7').classList.remove('showMore')
        document.querySelector('#d-8').classList.remove('showMore')
    }
    if (!isHidden) {
        document.querySelector('.text-button').innerText = 'Hide';
        document.querySelector('#arrow').classList.remove('arrow-down')
        document.querySelector('#arrow').classList.add('arrow-up')
    } else {
        document.querySelector('.text-button').innerText = 'Load more'
        document.querySelector('#arrow').classList.remove('arrow-up')
        document.querySelector('#arrow').classList.add('arrow-down')
    }

});