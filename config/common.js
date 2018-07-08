const path = require('path')
module.exports = {
  alias: {
    'Pages': path.resolve(__dirname, '../src/pages'),
    'Components': path.resolve(__dirname, '../src/components'),
    'Lib': path.resolve(__dirname, '../src/lib'),
    'Consts': path.resolve(__dirname, '../src/consts'),
    'HOC': path.resolve(__dirname, '../src/components/hocs')
  }
}