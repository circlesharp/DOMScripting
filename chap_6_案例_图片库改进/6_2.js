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

window.addEventListener('load', prepareGallery)
