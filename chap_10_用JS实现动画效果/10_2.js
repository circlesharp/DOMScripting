window.addEventListener('load', prepareSlidershow)

function moveElement ({ele, finalX, finalY, interval}) {
  if (!ele) return
  if (ele.movement) { clearTimeout(ele.movement) }
  let xPos = ele.style.left ? parseInt(ele.style.left) : 0
  let yPos = ele.style.top ? parseInt(ele.style.top) : 0
  let dist
  if (xPos === finalX & yPos === finalY) return
  if (xPos < finalX) {
    dist = Math.ceil((finalX - xPos) / 10)
    if (dist < 3) xPos = finalX
    xPos += dist
  }
  if (xPos > finalX) {
    dist = Math.ceil((xPos - finalX) / 10)
    if (dist < 3) xPos = finalX
    xPos -= dist
  }
  if (yPos < finalY) {
    dist = Math.ceil((finalY - yPos) / 10)
    yPos += dist
  }
  if (yPos > finalY) {
    dist = Math.ceil((yPos - finalY) / 10)
    yPos -= dist
  }
  ele.style.left = xPos + 'px'
  ele.style.top = yPos + 'px'
  ele.movement = setTimeout(moveElement, interval, { ele, finalX, finalY, interval })
}

function prepareSlidershow () {
  let slideshow = document.createElement('div')
  slideshow.setAttribute('id', 'slideshow')

  let preview = document.createElement('img')
  preview.setAttribute('id', 'preview')
  preview.setAttribute('src', './topics.jpg')
  preview.setAttribute('alt', 'building blocks of web design')
  
  slideshow.appendChild(preview)

  preview.style.position = 'absolute'
  preview.style.left = '0px'
  preview.style.top = '0px'

  let list = document.getElementById('linklist')
  insertAfter(slideshow, list)

  let links = (list && list.getElementsByTagName('a'))
  if (!links) return
  links[0].onmouseover = function () {
    moveElement({
      ele: preview,
      finalX: -125,
      finalY: 0,
      interval: 10
    })
  }
  links[1].onmouseover = function () {
    moveElement({
      ele: preview,
      finalX: -250,
      finalY: 0,
      interval: 10
    })
  }
  links[2].onmouseover = function () {
    moveElement({
      ele: preview,
      finalX: -375,
      finalY: 0,
      interval: 10
    })
  }
}

function insertAfter (newElement, targetElement) {
  let parent = targetElement.parentNode
  if (parent.lastChild === targetElement) {
    parent.appendChild(newElement)
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling)
  }
}
