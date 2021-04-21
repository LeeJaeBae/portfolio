port from docker 3347 for db

- docker run -p 3347:5432 --name baeb -e POSTGRES_PASSWORD=# -d -v baeb:/var/lib/postgresql/data postgres