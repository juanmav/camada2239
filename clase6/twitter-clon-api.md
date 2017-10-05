# Twitter clon Api

Esto es la documentacion del twitter clon api.

## Tecnologias ulizadas

1. NodeJs
1. Express
1. MondgoDb
1. **Git** (esto no se ve en el curso)

## Endpoints

### Users (./users)

#### LIST (./users/)[GET]

+ request 
    + params
    + header
    + body
+ response (200)
    + ```
            [
                {
                    "_id": "21389asdhad9asdasdzxc"
                    "name" : "Juan",
                    "lastname": "Rodriguez"
                },
                {
                    "_id": "21389123dhad9asdasdzxc"
                    "name" : "Pedro",
                    "lastname": "Rojas"
                }                
            ]

        ```

#### Obtener uno (./users/:id)[GET]

+ request 
    + params
        + id - id del usuario 
    + header
        + x-access-token - credeneciales
    + body
+ response (200)
    ```
    {
        _id: "123456578743424rfsdfghgh"
        "name" : "Juan",
        "lastname": "Rodriguez"
    }
    ```

#### Crear uno (./users/)[POST]

+ request 
    + params
    + header
        + x-access-token - credeneciales
    + body
        ```
            {
                "name" : "Juan",
                "lastname": "Rodriguez"
            }
       ```    
    
+ response (201)
    + body
            ```
                {
                    "_id": "21389asdhad9asdasdzxc"
                    "name" : "Juan",
                    "lastname": "Rodriguez"
                }
           ```    
    


#### Modificar uno (./users/:id)[PUT]
+ request 
    + params
       + id - id del usuario
    + header
        + x-access-token - credeneciales
    + body
        ```
            {
                "_id": "21389asdhad9asdasdzxc"
                "name" : "Juan",
                "lastname": "Rodriguez"
            }
       ```    
    
+ response (204)


#### Borrar uno (./users/:id)[DELETE]

+ request 
    + params
       + id - id del usuario
    + header
        + x-access-token - credeneciales
    + body
+ response (204)
