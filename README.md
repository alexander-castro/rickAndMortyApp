# Rick and Morty App

Proyecto para la gestión de personajes favoritos del programa de televisión Rick and Morty (prueba técnica Suazo.co)
Next U V6

## Recursos

Prototipos: https://www.figma.com/file/6GN6h4XsZuC6z1zDv5Yhxa/Inicio?node-id=1%3A12
API REST: https://rickandmortyapi.com/documentation/#rest

## Stack

NodeJs: 14.17.1
Npm: 6.14.13
Vuejs(vue@next): 3.1.5
@vue/cli: 4.5.13
quasar: 2.0.0
axios: 0.21.1
vue-jest: 5.0.0-0
testing-library/vue: 5.8.2
jest: 27.0.6
vuex: 4.0.2
vue-router: 4.0.11

## Dev Tools

Visual Studio Code con: Vetur, StandarJs
Google Chrome

## Proceso

Para la aplicación de Rick and Morty me base en la metodología de trabajo de MVP (Minimum Viable Product) colocándome en el papel del usuario y priorizando las funciones más esenciales de la aplicación primero, es decir ver las tarjetas de los personajes, al inicio hice la parte grafica de los componentes y use datos predeterminamos, luego agregue el consumo de servicios y la lógica de los componentes. Me pareció importante mostrar los detalles de un personaje para ello dividí el componente en cinco secciones. Luego pase a hacer los filtros por pestaña y el de búsqueda, por último, agregue soporte para marcar personajes favoritos. Finalmente hice algunos ajustes a las tarjetas de personajes para mejorar su visualización.

## Tecnologías

Use la ultima versión de Vue, para facilitar el desarrollo de componentes use la librería de UI Quasar es de las pocas con soporte para Vue3 y tiene una gran comunidad, es la primera vez que la uso, pero me pareció interesante y fácil de implementar y me ahorro tiempo al no tener que diseñar componentes base como tarjetas y paneles de pestañas. Para el consumo de servicios REST use Axios. Para pruebas unitarias Jest (conozco el concepto, pero siendo honesto se me hace difícil usar TDD (Test-Driven Development) y sé que es algo que quiero y tengo que mejorar). Para el manejo del almacenamiento use Vuex (es la primera vez que lo uso, pero lo intente implementar lo mejor posible basado en la documentación). Por último, use vue-router para gestionar la URL del personaje.

## Despliegue

Para el despliegue use GitLab configurando el servicio de Continuous integration (CI) and continuous delivery (CD) y GitLab Pages como servidor de recursos estáticos.
Puede ser accedido en: https://alexandercr12.gitlab.io/rick-and-morty/#/
