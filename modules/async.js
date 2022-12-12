const soupText = document.getElementById('soupText')
const soupBtn = document.getElementById('soupBtn')





const free = () => soupText.innerText = ('Free')
const soup = () => soupText.innerText = ('Soup')
const emoji = () => soupText.innerText = ('🍜')
// setTimeout(free ,2000)
// setTimeout(soup ,4000)

soupBtn.onclick = ()  => setTimeout(free ,2000),setTimeout(soup,5000),setTimeout(emoji,7000)