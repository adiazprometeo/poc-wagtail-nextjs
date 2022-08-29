"""gunicorn WSGI server configuration."""
from multiprocessing import cpu_count
from os import getenv

# Variables
workers_per_core_str = getenv("WORKERS_PER_CORE", "1")
max_workers_str = getenv("MAX_WORKERS")
use_max_workers = None
if max_workers_str:
    use_max_workers = int(max_workers_str)
web_concurrency_str = getenv("WEB_CONCURRENCY", None)

host = getenv("HOST", "0.0.0.0")
port = getenv("PORT", "9099")
bind_env = getenv("BIND", None)
use_loglevel = getenv("LOG_LEVEL", "info")
if bind_env:
    use_bind = bind_env
else:
    use_bind = f"{host}:{port}"

cores = cpu_count()
workers_per_core = float(workers_per_core_str)
default_web_concurrency = workers_per_core * cores
if web_concurrency_str:
    web_concurrency = int(web_concurrency_str)
    assert web_concurrency > 0
else:
    web_concurrency = max(int(default_web_concurrency), 2)
    if use_max_workers:
        web_concurrency = min(web_concurrency, use_max_workers)
accesslog_var = getenv("ACCESS_LOG", "-")
use_accesslog = accesslog_var or None
errorlog_var = getenv("ERROR_LOG", "-")
use_errorlog = errorlog_var or None
graceful_timeout_str = getenv("GRACEFUL_TIMEOUT", "120")
timeout_str = getenv("TIMEOUT", "120")
keepalive_str = getenv("KEEP_ALIVE", "5")

# Gunicorn config variables
command = '/usr/local/bin/gunicorn'
pythonpath = '/usr/src/app'
loglevel = use_loglevel
workers = web_concurrency
bind = use_bind
errorlog = use_errorlog
worker_tmp_dir = "/dev/shm"
accesslog = use_accesslog
graceful_timeout = int(graceful_timeout_str)
timeout = int(timeout_str)
keepalive = int(keepalive_str)
worker_class = 'gevent'
