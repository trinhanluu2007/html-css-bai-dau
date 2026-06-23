console.log('Luu Tri Nhan - Lap trinh vien')

const elById = document.getElementById('id-1')
console.log('elById: ', elById)
elById.style.color = 'purple'
elById.style.fontSize = '24px'

const elByClass = document.getElementsByClassName('class-1')
console.log('elByClass: ', elByClass)
elByClass[0].style.color = 'crimson'

const groupEls = document.getElementsByClassName('group-class')
console.log('groupEls', groupEls)
groupEls[0].style.color = 'green'
groupEls[1].style.color = 'pink'
groupEls[2].style.color = 'cyan'