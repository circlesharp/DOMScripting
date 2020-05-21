// 获取下一个元素节点
// 用递归改写 ele.nextSibling
function getNextElement (node) {
  let nextElementNode = node.nextSibling
  if (nextElementNode.nodeType === 1) return nextElementNode
  if (nextElementNode.nextSibling) return getNextElement(nextElementNode)
  return null
}

// 追加class
function addClass (ele, value) {
  if (!ele.className) {
    ele.className = value
  } else {
    ele.className += ` ${value}`
  }
}

function styleHeaderSiblings () {
  let headers = document.getElementsByTagName('h1')
  let ele

  for (let i = 0; i < headers.length; i++) {
    ele = getNextElement(headers[i])
    ele.style.fontWeight = 'bold'
    ele.style.fontSize = '1.2em'
  }
}

function stripeTables () {
  let tables = document.getElementsByTagName('table')
  let rows = []
  for (let i = 0; i < tables.length; i++) {
    rows = tables[i].getElementsByTagName('tr')
    for (let j = 0; j < rows.length; j++) {
      if (j % 2) {
        rows[j].style.backgroundColor = '#ececec'
      } else {
        addClass(rows[j], 'tr-even')
      }
    }
  }
}

function highlightRows () {
  let rows = document.getElementsByTagName('tr')
  for (let i = 0; i < rows.length; i++) {
    rows[i].addEventListener('mouseover', function () {
      this.style.color = '#666'
    })
    rows[i].addEventListener('mouseout', function () {
      this.style.color = '#000'
    })
  }
}

window.addEventListener('load', styleHeaderSiblings)
window.addEventListener('load', stripeTables)
window.addEventListener('load', highlightRows)
