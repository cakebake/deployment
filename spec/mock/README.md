Docker SFTP/FTP/FTPS Server
===========================

Users are uid=1000 gid=1000 (configure in docker-compose.yml)

### SFTP access

-	**Host:** `localhost`
-	**Port:** `2222`
-	**User:** `user`
-	**Pass:** `password`
-	**Key:** `./sftpserver/ssh_client_rsa_key`

### FTP/FTPS access

-	**Host:** `localhost`
-	**Mode:** `passive`
-	**Port:** `2121`
-	**User:** `user`
-	**Pass:** `password`

> login with or without ssl/tls

Config
------

```
vim ./docker-compose.yml
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
docker exec -ti ftpserver /bin/sh
docker exec -ti sftpserver /bin/sh
```

Stop
----

```
docker-compose down
```

> To stop all containers AND kill all volumes `docker-compose down --volumes`
