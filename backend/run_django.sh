python manage.py migrate
if [ -f "/db_updates/dump.json.gz" ]; then
    python manage.py loaddata dump.json.gz
    mv dump.json.gz dump.json.gz.bak
fi
gunicorn --workers 3 Database.wsgi:application