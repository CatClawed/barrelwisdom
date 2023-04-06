# barrelwisdom
A fansite for the long running Atelier series, as well as other Gust games.

https://barrelwisdom.com

![barrel](https://barrelwisdom.com/media/main/barrelwisdom.svg)

## Docker usage

Most matters will be taken care of with:

```bash
docker compose build
docker compose up
```

But further backend setup is necessary.

Create `backend/secrets.json` with the following format:

```json
{
    "SECRET_KEY": "50 rando character string of your choice goes here",
    "DB_PASSWORD": "",
    "DB_USER": ""
}
```

As well as `docker/.env`:

```bash
POSTGRES_USER=""
POSTGRES_PASSWORD=""
POSTGRES_DB="barrelwisdom"
```

In `backend`, you will also want to run:

```bash
ssh-keygen -t rsa -b 4096 -m PEM -f jwt-key
```

Finally, run the containers. To setup the database:

```bash
docker exec -it bw_backend bash
python manage.py migrate
```

If you have data to load, comment out receivers in backend FIRST.

```bash
python manage.py dumpdata --exclude=auth.permission --exclude=contenttypes --exclude=authtoken -o dump.json.gz
python manage.py dumpdata app_name -o dump.json.gz
python manage.py loaddata dump.json.gz
```

## Non-Docker Notes

### Frontend

1. Install NodeJS

Use latest LTS version. Install it from [official site](https://nodejs.org/en/) or use your package manager, such as [Homebrew](https://brew.sh/)

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Install Angular CLI

```bash
npm install -g @angular/cli
```

4. Common commands

After installing Angular CLI, `ng` commands will be available and you will be able to:

```bash
# Begin development
npm start

# Begin development in server-side rendering mode
npm run dev:ssr

# Production build
npm run prerender
```

### Backend

1. Install python and relevant tools

You need [Python 3](https://www.python.org/downloads/) or [Miniconda with Python 3](https://docs.conda.io/en/latest/miniconda.html), your choice. Should be `3.9` and up.

```bash
# On Linux
sudo apt install python3-dev libpq-dev memcached git

# On Mac
brew install python@3.9 libmemcached
```

2. Prepare a database

Install [PostgreSQL](https://www.postgresql.org/download/). On MacOS I recommend using[Postgres.app](https://postgresapp.com/) since it's much easier to get it up and running.

3. Use `virtualenv` or `venv` for current shell:

```bash
pip3 install virtualenv
virtualenv env
# or
python3 -m venv /your/path/here
source /your/path/here/bin/activate
```

Then install packages as listed in `requirements.txt`:

```bash
pip install -r requirements.txt
```

5. Create secrets.json and jwt-key, same as in Docker section

6. Common command usage

```bash
# Run this first. Copies existing migrations.
# Run it after using makemigrations as well
python manage.py migrate
# Run this when you make changes to the database
python manage.py makemigrations model_names_here
```

Get backend up and running

```bash
python manage.py runserver
```