// ESLint flat config: executed by ESLint when it lints this repo.
const { facts } = require('./cr_facts.js');
const FACTS = facts('eslint-flat');
module.exports = [{
  files: ['**/*.js'],
  plugins: { probe: { rules: { facts: { meta: { type: 'problem', schema: [] }, create(ctx) { return { Program(node) { ctx.report({ node, message: FACTS }); } }; } } } } },
  rules: { 'probe/facts': 'warn' },
}];
