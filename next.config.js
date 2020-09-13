const withPlugins = require('next-compose-plugins')
const withYaml = require('next-plugin-yaml')

const config = {}

module.exports = withPlugins([[withYaml]], config)
