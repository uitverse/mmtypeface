const withPlugins = require('next-compose-plugins')
const withYaml = require('next-plugin-yaml')

const config = {
    env: {
        URL: process.env.URL
    }
}

module.exports = withPlugins([[withYaml]], config)
