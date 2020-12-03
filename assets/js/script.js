const wrapper = document.getElementById('wrapper')
const btn = document.getElementById('toggle')

btn.addEventListener('click', () => {
    wrapper.classList.toggle('wide-nav')
})
