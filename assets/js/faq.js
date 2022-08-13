const toggleFaqBtns = document.querySelectorAll('.toggle-faq__btn')


toggleFaqBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.parentElement.classList.toggle('toggleFaq')
    })
})