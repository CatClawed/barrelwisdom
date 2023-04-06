python manage.py migrate
if [ -f "db_updates/dump.json.gz" ]; then
    echo "Loading DB dump."
    python manage.py loaddata db_updates/dump.json.gz
    mv db_updates/dump.json.gz db_updates/dump.json.gz.bak
fi
gunicorn --workers 3 -b "0.0.0.0:8000" Database.wsgi:application