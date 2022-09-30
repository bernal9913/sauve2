Feature: primer conjunto de caso de pruebas de la pagina de compras

    Scenario: Crear una compra desde cero
        Given el usuario se encuentra en la pagina de compra
        And busca un articulo llamado blusa
        When agrega una blusa al carrito
        Then el valor del articulo es de 27.00 dolares
        When finaliza la compra de los articulos
        Then el meensaje de orden competada abieta debera de aparecer 