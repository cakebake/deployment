SFTP/FTP Server
===============

Test server.

### SFTP access

user:password@localhost:2222

### FTP access

...

Build
-----

```
docker-compose build
```

Run
---

```
docker-compose up
```

or

```
docker-compose up -d
```

> Param `-d` runs container in background (detach)

Bash into
---------

```
docker exec -ti mock_sftp_1 /bin/bash
```

> Container name is `mock_sftp_1`. Change it to your container name.

Stop
----

```
docker-compose down
```

> To stop all containers AND kill all volumes `docker-compose down --volumes`
