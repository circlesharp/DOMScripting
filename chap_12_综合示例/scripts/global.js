window.addEventListener('load', highlightPage)
window.addEventListener('load', prepareSlideshow)
window.addEventListener('load', prepareInternalNav)
window.addEventListener('load', preparePlaceholder)
window.addEventListener('load', prepareGallery)
window.addEventListener('load', displayAbbreviations)
window.addEventListener('load', stripeTables)
window.addEventListener('load', highlightRows)


function insertAfter (newElement, targetElement) {
  let parent = targetElement.parentNode
  if (parent.lastChild === targetElement) {
    parent.appendChild(newElement)
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling)
  }
}

function addClass (ele, value) {
  if (!ele.className) {
    ele.className = value
  } else {
    ele.className += ` ${value}`
  }
}

function highlightPage () {
  let headers = document.getElementsByTagName('header')
  if (headers.length === 0) return false
  let navs = headers[0].getElementsByTagName('nav')
  if (navs.length === 0) return false
  let links = navs[0].getElementsByTagName('a')
  let linkurl, linktext
  for (let i = 0; i < links.length; i++) {
    linkurl = links[i].getAttribute('href').split('/')[1]
    if (window.location.href.indexOf(linkurl) !== -1) {
      links[i].className = 'here'
      linktext = links[i].lastChild.nodeValue.toLowerCase()
      document.body.setAttribute('id', linktext) // 秒呀！钩子~
    }
  }
}

function moveElement ({ele, finalX = 0, finalY = 0, interval = 10}) {
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

function prepareSlideshow () {
  let intro = document.getElementById('intro')
  if (!intro) return false
  let slideshow = document.createElement('div')
  slideshow.setAttribute('id', 'slideshow')

  let frame = document.createElement('img')
  frame.setAttribute('src', './images/frame.gif')
  frame.setAttribute('alt', '')
  frame.setAttribute('id', 'frame')
  slideshow.appendChild(frame)

  let preview = document.createElement('img')
  preview.setAttribute('src', './images/slideshow.gif')
  preview.setAttribute('alt', 'a glimpse of what awaits you')
  preview.setAttribute('id', 'preview')
  slideshow.appendChild(preview)
  insertAfter(slideshow, intro)

  let links = document.getElementsByTagName('a')
  // let links = intro.getElementsByTagName('a')
  let destination
  for (i in links) {
    links[i].nodeType === 1 && links[i].addEventListener('mouseover', function () {
      destination = this.getAttribute('href').toLowerCase()
      if (destination.indexOf('index.html') !== -1) {
        moveElement({ ele: preview, finalX: 0, interval: 5 })
      }
      if (destination.indexOf('about.html') !== -1) {
        moveElement({ ele: preview, finalX: -150, interval: 5 })
      }
      if (destination.indexOf('photos.html') !== -1) {
        moveElement({ ele: preview, finalX: -300, interval: 5 })
      }
      if (destination.indexOf('live.html') !== -1) {
        moveElement({ ele: preview, finalX: -450, interval: 5 })
      }
      if (destination.indexOf('contact.html') !== -1) {
        moveElement({ ele: preview, finalX: -600, interval: 5 })
      }
    })
  }
}

function showSection (id) {
  let sections = document.getElementsByTagName('section')
  for (i in sections) {
    if (sections[i].nodeType !== 1) return false
    if (sections[i].getAttribute('id') != id) {
      sections[i].style.display = 'none'
    } else {
      sections[i].style.display = 'block'
    }
  }
}

function prepareInternalNav () {
  let articles = document.getElementsByTagName('article')
  if (articles.length === 0) return false
  let navs = articles[0].getElementsByTagName('nav')
  if (navs.length === 0) return false
  let nav = navs[0]
  let links = nav.getElementsByTagName('a')

  for (let i = 0; i < links.length; i++) {
    let sectionId = links[i].getAttribute('href').split('#')[1]
    let idSection = document.getElementById(sectionId)
    if (!idSection) continue
    idSection.style.display = 'none'
    links[i].destination = sectionId
    links[i].addEventListener('click', function () {
      showSection(this.destination)
      return false
    })
  }
}

function showPic (whichPic) {
  let placeholder = document.getElementById('placeholder')
  if (!placeholder) return true
  let source = whichPic.getAttribute('href')
  source && placeholder.setAttribute('src', source)
  let description = document.getElementById('description')
  if (!description) return false
  let text = whichPic.getAttribute('title')
  if (description.firstChild.nodeType === 3) {
    description.firstChild.nodeValue = text
  }
  return false
}

function preparePlaceholder () {
  let placeholder = document.createElement('img')
  placeholder.setAttribute('id', 'placeholder')
  placeholder.setAttribute('src', './images/placeholder.gif')
  placeholder.setAttribute('alt', 'My Image Gallery')
  placeholder.className = 'placeholder'
  
  let description = document.createElement('h3')
  let descText = document.createTextNode('Choose an image.')
  description.setAttribute('id', 'description')
  description.appendChild(descText)

  let gallery = document.getElementById('imagegallery')
  if (!gallery) return false
  insertAfter(description, gallery)
  insertAfter(placeholder, description)
}

function prepareGallery () {
  let gallery = document.getElementById('imagegallery')
  if (!gallery) return false
  let links = gallery.getElementsByTagName('a')
  for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      return showPic(this)
    }
  }
}

function stripeTables () {
  let tables = document.getElementsByTagName('table')
  let rows = []
  for (let i = 0; i < tables.length; i++) {
    rows = tables[i].getElementsByTagName('tr')
    for (let j = 0; j < rows.length; j++) {
      if (j % 2) addClass(rows[j], 'odd')
    }
  }
}

function highlightRows () {
  let rows = document.getElementsByTagName('tr')
  for (let i = 0; i < rows.length; i++) {
    let currentRow = rows[i]
    currentRow.oldClassName = currentRow.className
    currentRow.addEventListener('mouseover', function () {
      addClass(this, 'highlight')
    })
    currentRow.addEventListener('mouseout', function () {
      currentRow.className = currentRow.oldClassName
    })
  }
}

function displayAbbreviations () {
  let abbreviations = document.getElementsByTagName('abbr')
  if (abbreviations.length < 1) return false

  let defs = []
  for (let i = 0; i < abbreviations.length; i++) {
    let currentAbbr = abbreviations[i]
    let definition = currentAbbr.getAttribute('title')
    let key = currentAbbr.lastChild.nodeValue
    defs[key] = definition // ?? 数组也可以这样？ console.log(defs instanceof Array)
  }

  let dlist = document.createElement('dl')
  for (key in defs) {
    let dtitil = document.createElement('dt')
    let ddesc = document.createElement('dd')
    let dtitil_text = document.createTextNode(key)
    let ddesc_text = document.createTextNode(defs[key])

    dtitil.appendChild(dtitil_text)
    ddesc.appendChild(ddesc_text)
    dlist.appendChild(dtitil)
    dlist.appendChild(ddesc)
  }

  if (dlist.childNodes.length < 1) return false
  let header = document.createElement('h3')
  let headerText = document.createTextNode('Abbreviations')
  header.appendChild(headerText)
  let articles = document.getElementsByTagName('article')
  if (!articles) return false
  let container = articles[0]

  container.appendChild(header)
  container.appendChild(dlist)
}
