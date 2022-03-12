# barrelwisdom
A fansite for the long running Atelier series, as well as other Gust games.

https://barrelwisdom.com

![barrel](https://barrelwisdom.com/media/main/barrelwisdom.svg)

## Prerequisites

- NodeJS (should be the latest LTS version). Install it from [official site](https://nodejs.org/en/) or use your package manager, such as [Homebrew](https://brew.sh/)
- [Python 3](https://www.python.org/downloads/) or [Miniconda with Python 3](https://docs.conda.io/en/latest/miniconda.html), your choice. Should be `3.8` and up.

## Backend development

1. Install python and relevant tools

```bash
# On Linux
sudo apt install python3-dev libpq-dev memcached git

# On Mac
brew install python@3.9 libmemcached
```

2. Install `virtualenv` for development:

```bash
pip3 install virtualenv
```

3. Prepare a database

Django supports many kinds of databases. Let's take PostgreSQL as an example:

- Install [PostgreSQL](https://www.postgresql.org/download/). On MacOS I recommend to use [Postgres.app](https://postgresapp.com/) since it's much easier to get it up and running. For some Linux distro, you may have to build Postgres from source.

4. Activate `virtualenv` for current shell:

```powershell
virtualenv env
```

Then install packages as listed in `requirements.txt`:

```
pip install -r requirements.txt
```

5. Common command usage

First, `cd` into `backend` folder:

- Database migrations. Check `manage.py` file for for info:

```bash
python manage.py makemigrations blog
python manage.py migrate
```

- Get backend up and running

```bash
python manage.py runserver 0.0.0.0:8000
python manage.py startapp blog
```

## Frontend development

```
cd frontend
```

1. Prepare

First, get NodeJS as instructed above. It's also recommended to use [yarn](https://classic.yarnpkg.com/lang/en/) as package management.

2. Install dependencies

```
npm install
```

or

```
yarn install
```

3. Install Angular CLI

```bash
npm install -g @angular/cli
```

4. On low end machines, you may have to use:

```bash
export NODE_OPTIONS="--max-old-space-size=5120"
```

if you are using Powershell:

```powershell
$Env:NODE_OPTIONS = "--max-old-space-size=5120>"
```

5. Common commands

After installing Angular CLI, `ng` commands will be available and you will be able to:

- Begin development

```
ng start
```


- Begin development in server-side rendering mode

```
npm run dev:ssr
```

- For production build

```
npm run prerender
```

## Comment module

Commento is used for commenting on the site. I'd very much like to remove it sometime.