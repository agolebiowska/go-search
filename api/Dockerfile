FROM golang:1.13.3

RUN adduser --disabled-password --gecos '' api
USER api

WORKDIR /go/src/app/api
COPY . .

CMD [ "go", "run", "main.go" ]