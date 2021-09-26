# barrelwisdom
the web remake, in the flesh

## Prerequisites

- NodeJS (should be the latest LTS version). Install it from [official site](https://nodejs.org/en/) or use your package manager, such as [Homebrew](https://brew.sh/)
- [Python 3](https://www.python.org/downloads/) or [Miniconda with Python 3](https://docs.conda.io/en/latest/miniconda.html), your choice. Should be `3.7.3` and up.

## Preparation

1. Install `virtualenv` for development:

```bash
pip3 install virtualenv
```

2. Activate `virtualenv` for current shell:

```powershell
virtualenv env
```

```
source bin/activate
deactivate
python manage.py makemigrations blog
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
python manage.py startapp blog
  add to installed apps
ng serve --host 0.0.0.0 --liveReload=true --proxy-config proxy.conf.json
ng serve 
npm install 
  get dependencies
manage.py shell < scripts/myscript.py
export NODE_OPTIONS="--max-old-space-size=5120"
npm run dev:ssr
ng build --configuration production && ng run frontend:server
ng build && ng run frontend:server
```
