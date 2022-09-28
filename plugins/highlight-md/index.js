const visit = require('unist-util-visit')
const toString = require('mdast-util-to-string')

const plugin = ({ markdownAST }) => {
  visit(markdownAST, 'paragraph', node => {
    const highlight = /==(.*)==/g

    if (toString(node).match(highlight)) {
      const html = toString(node).replace(
        highlight,
        `<mark className="">$1</mark>`
      )
      node.type = 'html'
      node.children = undefined
      node.value = `<p>${html}</p>`
    }
  })

  return markdownAST
}

module.exports = plugin
