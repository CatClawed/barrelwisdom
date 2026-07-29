This branch is to help me kill V2 of the site.

## Docker usage

Docker is strongly suggested. If you do not wish to use docker, I recommend looking at the dockerfiles to see what commands they run.

Create `docker/.env` with the following format:

```bash
SECRET_KEY=50 rando character string of your choice goes here
POSTGRES_PASSWORD=
POSTGRES_USER=
POSTGRES_DB=barrelwisdom
DEBUG=1
UID=1000
GID=1000
```


With that setup done, you can run:

```bash
docker compose build
docker compose up
```

To setup the database:

```bash
docker exec -it backend bash
python manage.py migrate
```

If you have data to load/dump:

```bash
python manage.py dumpdata --exclude=auth.permission --exclude=contenttypes --exclude=authtoken -o dump.json.gz
python manage.py dumpdata app_name -o dump.json.gz
python manage.py loaddata dump.json.gz
```

### Other Commands


Django model changes.

```bash
python manage.py makemigrations names_here
python manage.py migrate
```