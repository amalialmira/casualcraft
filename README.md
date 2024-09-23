
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15477515&assignment_repo_type=AssignmentRepo)
# P2-Challenge-2 (Client Side)

> Link Deployment
- Public: https://casual-craft.web.app
- CMS: https://staff-casualcraft.web.app

## Login Information For CMS


### Admin


    email: jane.smith@example.com,
    password: 2Efgh
    


### Staff


    email: john.doe@example.com,
    password: 1Abcd,


## Endpoint List


### Public
- Homepage:

    ```
    /pub/products
    ```

- Detail Page:

    ```
    /pub/products/:id
    ```

### CMS
- Login:

    ```
    /login
    ```

- Add new user:

    (Login & authorization required)
    ```
    /add-user
    ```

- Homepage:

    ```
    /
    ```

- Category List:

    ```
    /categories
    ```

- Add new product:

    (Login & authorization required)
    ```
    /add-product
    ```

- Edit product:

    (Login & authorization required)
    ```
    /edit-product/:id
    ```

- Edit Image:

    (Login & authorization required)
    ```
    /edit-image/:id
    ```

