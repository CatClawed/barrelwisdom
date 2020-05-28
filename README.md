# barrelwisdom
the web remake, in the flesh

source bin/activate
deactivate
python manage.py makemigrations blog
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
python manage.py startapp blog
  add to installed apps
ng serve --host 0.0.0.0