window.addEventListener('load', displayAbbreviations)
window.addEventListener('load', displayCitations)
window.addEventListener('load', displayAccesskeys)

function displayAbbreviations () {
  let abbreviations = document.getElementsByTagName('abbr')
  if (!abbreviations) return

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

  let header = document.createElement('h2')
  let headerText = document.createTextNode('abbreviations')
  header.appendChild(headerText)

  document.body.appendChild(header)
  document.body.appendChild(dlist)
}

function displayCitations () {
  let quotes = document.getElementsByTagName('blockquote')
  if (!quotes) return

  for (let i = 0; i < quotes.length; i++) {
    let url = quotes[i].getAttribute('cite')
    if (!url) continue
    
    let quoteElements = quotes[i].getElementsByTagName('*')
    if (quoteElements.length < 1) continue
    let lastEle = quoteElements[quoteElements.length - 1]

    let link = document.createElement('a')
    let linkText = document.createTextNode('source')
    link.appendChild(linkText)
    link.setAttribute('href', url)
    link.setAttribute('accesskey', '1')

    let superScript = document.createElement('sup')
    superScript.appendChild(link)
    lastEle.appendChild(superScript)
  }
}

function displayAccesskeys () {
  let links = document.getElementsByTagName('a')
  let akeys = []
  for (let i = 0; i < links.length; i++) {
    let currentLink = links[i]
    let key = currentLink.getAttribute('accesskey')
    if (!key) continue
    let text = currentLink.lastChild.nodeValue
    akeys[key] = text
  }

  let list = document.createElement('ul')
  for (key in akeys) {
    let text = akeys[key]
    let str = key + ': ' + text
    let item = document.createElement('li')
    let itemText = document.createTextNode(str)
    item.appendChild(itemText)
    list.appendChild(item)
  }

  let header = document.createElement('h3')
  header.innerText = 'Accesskeys'
  document.body.appendChild(header)
  document.body.appendChild(list)
}
