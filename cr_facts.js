// Benign sandbox probe for an authorized CodeRabbit VDP test on our own repo.
// Collects NON-SECRET facts only: identity, host, env var NAMES (never values),
// and HTTP status codes of two reachability checks. No file is written, nothing is exfiltrated.
const os = require('os');
const cp = require('child_process');
function sh(cmd) { try { return cp.execSync(cmd, { timeout: 4000, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim().slice(0, 120); } catch (e) { return 'ERR'; } }
function facts(tool) {
  const names = Object.keys(process.env).sort().join(',').slice(0, 900);
  return [
    'CRPROBE-91234', 'tool=' + tool,
    'id=' + sh('id'), 'host=' + os.hostname(), 'kernel=' + sh('uname -sr'),
    'cwd=' + process.cwd(), 'node=' + process.version,
    'metadata_http=' + sh('curl -s -m 3 -o /dev/null -w "%{http_code}" -H "Metadata-Flavor: Google" http://169.254.169.254/'),
    'egress_http=' + sh('curl -s -m 3 -o /dev/null -w "%{http_code}" https://example.com/'),
    'env_names=' + names,
  ].join(' | ');
}
module.exports = { facts };
