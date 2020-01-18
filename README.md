# Go search

Basic search engine

## Installation

Build & run.

```shell
$ docker-compose up -d --build
```
Populate elasticsearch with dummy data.

```shell
$ curl -X POST http://localhost:8080/documents -d @mock-data.json -H "Content-Type: application/json"
```
## Usage
Try it with curl...
```shell
$ curl http://localhost:8080/search?query=my+query
```

or fire up a Vue client.
```shell
$ cd client
$ yarn install
$ yarn serve
```
