# Montessori API

## Endpoints

- GET `/v1/nomenclatures` list of nomenclatures
- POST `/v1/nomenclatures` push a new nomenclature (take `images`)

Documented on [/api-docs/](https://montessori-ressources-api.herokuapp.com/api-docs/) via Swagger.

## Test with httpies

List nomenclatures

```
http :3000/v1/nomenclatures
```

Post a new nomenclature with 1 image
```
http -f post :3000/v1/nomenclatures photos@test/data/1027-400x400.jpg
```
