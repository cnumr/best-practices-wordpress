const fs = require('fs')
const visit = require('unist-util-visit')
const toString = require('mdast-util-to-string')
const slugify = require('slugify')

const plugin = ({ markdownAST }, options = {}) => {
  const { sourceFolder = '' } = options

  const slugifyTitle = title => `/${slugify(title, { lower: true })}`

  visit(markdownAST, 'paragraph', node => {
    const wikiLink = /!?\[\[([a-zA-Z-'À-ÿ|# ]+)\]\]/

    if (toString(node).match(wikiLink)) {
      let url = ''

      let title = toString(node)
        .match(wikiLink)[0]
        .replace(/!?\[|\]/g, '')

      if (title.match(/\|/)) {
        ;[url, title] = title.split('|')
        url = slugifyTitle(url)
      } else {
        slugifyTitle(title)
      }

      const filePath = `${sourceFolder}/${title}.md`

      if (fs.existsSync(filePath)) {
        const content = fs
          .readFileSync(filePath, 'utf8')
          .replace(/^---[\s\S]+?---/, '')

        const tooltipLink = `
        <a class="tooltip" href="${url}" title="">${title}
        <span class="bottom">
        <span>${content}</span>
        <i></i>
        </span>
        </a>
        `
        const html = toString(node).replace(wikiLink, tooltipLink)

        node.type = 'html'
        node.children = undefined
        node.value = html
      }
    }
  })

  return markdownAST
}

module.exports = plugin
