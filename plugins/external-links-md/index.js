const externalLinks = require('remark-external-links')

module.exports = (
  { markdownAST, options = {} },
  options = {
    target: '_blank',
    rel: ['nofollow', 'noopener', 'noreferrer'],
  }
) => {
  const transformer = externalLinks(options)

  transformer(markdownAST, options)
}
