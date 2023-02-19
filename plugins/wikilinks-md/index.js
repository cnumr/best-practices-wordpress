const fs = require('fs')
const visit = require('unist-util-visit')
const toString = require('mdast-util-to-string')
const slugify = require('slugify')

const plugin = ({ markdownAST }, options = {}) => {
  const { sourceFolder = '' } = options

  const slugifyTitle = title => `/${slugify(title, { lower: true })}`

  visit(markdownAST, 'paragraph', node => {
    const wikiLink = /!?\[\[([a-zA-Z-'À-ÿ|# ]+)\]\]/g
    const stringifyNode = toString(node)
    const list = stringifyNode.match(wikiLink)

    if (list && list.length > 0) {
      let url = ''
      let html = stringifyNode

      list.forEach(link => {
        let title = link.replace(/!?\[|\]/g, '')

        if (title.match(/\|/)) {
          ;[url, title] = title.split('|')
          url = slugifyTitle(url)
        } else {
          url = slugifyTitle(title)
        }

        const filePath = `${sourceFolder}/${url}.md`

        if (fs.existsSync(filePath)) {
          const content = fs
            .readFileSync(filePath, 'utf8')
            .replace(/^---[\s\S]+?---/, '')

          const tooltipLink = `
            <span class="tooltip" title="">${title}
            <span class="bottom">
            <span>${content}</span>
            <i></i>
            </span>
            </span>
            `
          html = html.replace(link, tooltipLink)
        }
      })

      node.type = 'html'
      node.children = undefined
      node.value = html
    }
  })

  return markdownAST
}

module.exports = plugin
