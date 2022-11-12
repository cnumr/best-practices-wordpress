const visit = require('unist-util-visit')

// https://github.com/johno/egghead-lessons/blob/master/remark-plugin/index.js
// https://www.gatsbyjs.com/tutorial/remark-plugin-tutorial/#understanding-the-abstract-syntax-tree
// https://github.com/syntax-tree/mdast#html

module.exports = ({ markdownAST }, pluginOptions) => {
  console.log('pluginOptions', pluginOptions)
  const className = pluginOptions.className || 'mark-default'
  visit(markdownAST, 'paragraph', node => {
    const highlight = /==(.*)==/g
    const { children, type, position } = node

    if (children) {
      children.map(tree => {
        visit(tree, 'text', element => {
          if (element.value.match(highlight)) {
            element.value = element.value.replace(
              highlight,
              `<mark className="${className}">$1</mark>`
            )
            element.type = 'html'
          }
        })
      })
    }
  })

  return markdownAST
}
