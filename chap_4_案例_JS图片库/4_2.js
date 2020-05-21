function showPic (whichPic) {
  let placeholder = document.getElementById('placeholder')
  let description = document.getElementById('description')

  let source = whichPic.getAttribute('href')
  let text = whichPic.getAttribute('title')

  placeholder.setAttribute('src', source) // 可以用 placeholder.src = source 替代
  description.firstChild.nodeValue = text

  // console.log('description.nodeValue:', description.nodeValue)
  // console.log('description.childNodes[0].nodeValue:', description.childNodes[0].nodeValue)
}