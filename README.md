# Montessori API

## Develop on this project

```
docker run --name mongo -p27017:27017 -d mongo # for a quick mongo via docker
yarn install
yarn develop
```

## Endpoints

Documented on [/api-docs/](https://montessori-ressources-api.herokuapp.com/api-docs/)
via Swagger.

## Test with httpies

List nomenclatures

```
http :3000/v1/nomenclatures
```

Post a new nomenclature with 2 images

```
http -f post :3000/v1/nomenclatures photos@test/data/1027-400x400.jpg photos@test/data/977-400x400.jpg
```
