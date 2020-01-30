# Montessori API

## Endpoints

- GET `/nomenclatures` list of nomenclatures
- POST `/nomenclatures/upload` push a new nomenclature (take images)

## Test with httpies

```
http :3000/nomenclatures
```

```
http -f post :3000/nomenclatures/upload photos@test/data/1027-400x400.jpg
```
