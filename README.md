# barrelwisdom
A fansite for the long running Atelier series, as well as other Gust games.

https://barrelwisdom.com

![barrel](https://barrelwisdom.com/media/main/barrelwisdom.svg)

To see how this is deployed and updated in a real world environment, see the [deployment repo](https://github.com/CatClawed/barrelwisdom_deployment/).

## Docker usage

Docker is strongly suggested. If you do not wish to use docker, I recommend looking at the dockerfiles to see what commands they run.

Create `docker/.env` with the following format:

```bash
SECRET_KEY=50 rando character string of your choice goes here
DB_PASSWORD=
DB_USER=
DEBUG=1
```

DEBUG must be set to 0 in production environments.

In `backend`, you will also want to run:

```bash
ssh-keygen -t rsa -b 4096 -m PEM -f jwt-key
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

### Update Postgres

Overall process: back up whole database, delete docker volume, then can start fresh.

Or, y'know, just make a db dump with django and let that do the work.

```bash
docker exec -it postgres psql -U [username] < dumpfile
docker cp dumpfile postgres:/home
# within new postgres container
psql -U [username] barrelwisdom < home/dumpfile
```

### Build frontend

Be sure backend is running, as prerendering requires DB access.

```bash
docker exec -it frontend bash
ng build
```

For the final docker image:

```bash
docker build -t frontend_prod -f Dockerfile.prod .
docker tag frontend_prod barrelwisdom/frontend:tag
```

### Other Commands

Angular commands

```bash
# Begin development
npm start

# Begin development in server-side rendering mode
npm run dev:ssr
```

Django model changes.

```bash
python manage.py makemigrations names_here
python manage.py migrate
```