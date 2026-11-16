Benign probe for CodeRabbit's review sandbox (authorized VDP testing on a repository we own).
Each tool config runs a small script that reports non-secret facts (uid, hostname, env var NAMES, two HTTP status codes) as a lint message tagged CRPROBE-91234.
Remove this branch after the test.
