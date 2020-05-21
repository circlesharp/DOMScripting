let defaultPic = 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2454919280,4176373113&fm=26&gp=0.jpg'

window.addEventListener('load', prepareGallery)

function showPic (whichPic) {
  let placeholder = document.getElementById('placeholder')
  let description = document.getElementById('description')
  let source = whichPic.getAttribute('href')
  let text = whichPic.getAttribute('title')

  placeholder && source && placeholder.setAttribute('src', source)
  description && (description.firstChild.nodeValue = text ? text : '未命名')

  return true
}

function prepareGallery () {
  let gallery = document.getElementById('imageGallery')
  let links = gallery.getElementsByTagName('a')
  for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      return !showPic(this)
    }
    // links[i].onkeypress = links[i].onclick // 不需要坑爹的 onkeypress
  }
}

function preparePlaceholder () {
  let placeholder = document.createElement('img')
  placeholder.setAttribute('id', 'placeholder')
  placeholder.setAttribute('src', defaultPic)
  placeholder.setAttribute('alt', 'My Image Gallery')
  placeholder.setAttribute('style', 'width: 512px; height: 320px;')
  
  let description = document.createElement('p')
  let descText = document.createTextNode('Choose an image.')
  description.setAttribute('id', 'description')
  description.appendChild(descText)

  let gallery = document.getElementById('imageGallery')
  insertAfter(placeholder, gallery)
  insertAfter(description, placeholder)
}

// 妙呀
function insertAfter (newElement, targetElement) {
  let parent = targetElement.parentNode
  if (parent.lastChild === targetElement) {
    parent.appendChild(newElement)
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling)
  }
}
