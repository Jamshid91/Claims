const toggleFaqBtns = document.querySelectorAll('.toggle-team__btn')


toggleFaqBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.parentElement.classList.toggle('toggleTeam')
    })
});