const toggleFaqBtns = document.querySelectorAll('.toggle-types__btn')


toggleFaqBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.parentElement.classList.toggle('toggleType')
    })
});