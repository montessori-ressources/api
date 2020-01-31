# Montessori API

## Endpoints

- GET `/nomenclatures` list of nomenclatures
- POST `/nomenclatures` push a new nomenclature (take `images`)

Documented on [/api-docs/](https://montessori-ressources-api.herokuapp.com/api-docs/) via Swagger.

## Test with httpies

```
http :3000/nomenclatures
```

```
http -f post :3000/nomenclatures photos@test/data/1027-400x400.jpg
```
