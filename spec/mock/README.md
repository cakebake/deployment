SFTP/FTP Server
===============

Users are uid=1000 gid=1000 (configure in docker-compose.yml)

### SFTP access

-	**Host:** `localhost`
-	**Port:** `2222`
-	**User:** `user`
-	**Pass:** `password`
-	**Key:** `./sftpserver/ssh_client_rsa_key`

### FTP access

-	**Host:** `localhost`
-	**Mode:** `passive`
-	**Port:** `2121`
-	**User:** `user`
-	**Pass:** `password`

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
docker exec -ti ftpserver /bin/bash
docker exec -ti sftpserver /bin/bash
```

Stop
----

```
docker-compose down
```

> To stop all containers AND kill all volumes `docker-compose down --volumes`
