# Probe of Concepts

## Objectives
1. Understand **Docker** and use **DockerCompose** to do development
2. Create blog models to work with **Wagtail**
3. Learn how to write serializer for Django models
4. Build a REST API for **Wagtail CMS**
5. Use the factory package to help create test data
6. Test the REST API and generate test coverage report
7. Create **Next.js** project with create-next-app
8. Learn React Function Component, and React hooks
9. Understand how **Next.js** page route works
10. Make **Wagtail** preview work with the **Next.js**
11. Build comment system based on *django-contrib-comments* which support *GenericRelations*
12. Use `Tribute.js` to add Mention and Emoji support to the comment form
13. Learn to use SWR to build lazy load comment list
14. Test React component using *Jest* and *@testing-library* family of packages
15. Deploy the **Next.js** to the **Netlify**
16. Deploy the backend API to **DigitalOcean**

## Tech
- [Python](https://docs.python.org/3/whatsnew/3.10.html) 3.10.4
- [Django](https://devdocs.io/django~4.1/) 4.1
- [Wagtail](https://docs.wagtail.org/en/stable/) 3.0.1
- [Node](https://nodejs.org/docs/latest-v14.x/api/) 14.17.6
- [Next.js]() 11
- [Bootstrap]() 5
- [React Function Component](https://www.knowledgehut.com/blog/web-development/react-functional-components), [React Hooks](https://fettblog.eu/typescript-react/hooks/)
- [SWR](https://swr.vercel.app/)
- [Tribute.js](https://www.npmjs.com/package/tributejs)
- [Jest](https://jestjs.io/docs/getting-started)

## Setup `Wagtail` Project
### Objectives
1. Create a **Django** project and update the project setting file.

2. Import **Wagtail CMS** and make it work with your Django project.

### Create `Django` Project
```bash
# Create Conda enviroment
$> conda create -n poc-wagtail-nextjs-venv python=3.10

# Activate Conda enviroment
$> conda activate poc-wagtail-nextjs-venv

# Install Django dependencies
$(poc-wagtail-nextjs-venv)> pip install "django==3.2.15"

# Create folder wagtail-server
$(poc-wagtail-nextjs-venv)> mkdir -p wagtail-server && cd wagtail-server

# Create project
$(poc-wagtail-nextjs-venv)> django-admin startproject server .
```
> **NOTES**
```bash
# Deactivate Conda enviroment
$ (poc-wagtail-nextjs-venv)> conda deactivate

# Remove Conda enviroment
$> conda env remove -n poc-wagtail-nextjs-venv

# Verify that the new environment was installed correctly
$> conda env list
```

### `Django` split settings

```bash
# Install dependencies
$> pip install django-split-settings python-decouple structlog dj-database-url nplusone django-querycount ipython bcrypt psycopg2-binary
```


### Install and configure `Wagtail`
```bash
# Install wagtail
$> pip install wagtail
```

```bash
# Migrate db.sqlite3 
$(poc-wagtail-nextjs-venv)> python manage.py migrate

# Create super user root
$> python manage.py createsuperuser --username root --email root@example.com

# Run server
$(poc-wagtail-nextjs-venv)> python manage.py runserver 9099
```