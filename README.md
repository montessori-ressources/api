# Montessori API

## Develop on this project

You must provide the needed environement variables to access AWS S3 bucket, and 
Google/Facebook authentification scret keys. For that you must copy the existing 
`.env.default` to `.env` and provide the correct information inside the file.

More info [here](https://github.com/orgs/montessori-ressources/teams/core)

Then run:
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
