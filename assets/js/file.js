const toggleFaqBtns = document.querySelectorAll('.toggle-file__btn')


toggleFaqBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.parentElement.classList.toggle('toggleFile')
    })
});