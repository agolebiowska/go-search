# go-search

 Basic search engine

### Setup

> requires go & dep

```shell
$ cd api
$ dep ensure
```

> build and run services

```shell
$ docker-compose up -d --build
```

> populate elasticsearch with dummy data

```shell
$ curl -X POST http://localhost:8080/documents -d @mock-data.json -H "Content-Type: application/json"
```

> try it with curl
```shell
$ curl http://localhost:8080/search?query=my+query
```

> or fire up a vue client
```shell
$ cd client
$ yarn install
$ yarn serve
```
