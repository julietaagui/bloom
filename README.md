``Documentación del Proyecto Bloom``

*Descripción General*
Bloom es una tienda online que permite a los usuarios navegar productos, registrarse/iniciar sesión para comprar o vender productos. El proyecto está construido con React y utiliza Context API para manejar autenticación y carrito de compras. Se aplican buenas prácticas de accesibilidad y SEO usando React Helmet.

## Características
- Inicio con listado de productos y ofertas  
- Login y rutas protegidas para vender y carrito  
- CRUD de productos con modal  
- Carrito de compras con cantidad y pago simulado  
- SEO optimizado con React Helmet  
- Accesibilidad mejorada con ARIA  

```
Tecnologías Utilizadas
- React
- React Router DOM
- React Context API (para auth y carrito)
- React Helmet (para SEO)
- Bootstrap 5 (para estilos)
- MockAPI (backend simulado para productos)
- React Icons (iconos)
```

```
/src
  /api
    productsApi.js          # Funciones para consumir la API de productos
  /components               #Componentes
    Banner.jsx
    Category.jsx
    Footer.jsx
    ModalDelete.jsx
    ModalPayment.jsx
    Nav.jsx
    Product.jsx
    ProductModal.jsx
    ProtectedRoute.jsx      # protege rutas que requieren autenticación (vender, carrito) 
  /hook                     # Contexto para autenticación y carrito de compras
    authContext.jsx     
    cartContext.jsx        
  /pages                    # Vistas de las paginas
    AboutUs.jsx
    CartPage.jsx
    LoginPage.jsx
    OffersPage.jsx
    ProductPage.jsx
    Sale.jsx
  App.jsx
  index.jsx
```

## COMO CLONAR EL PROYECTO
- Clonar el repositorio
- Ejecutar npm install para instalar dependencias
- Ejecutar npm run dev para levantar la app en modo desarrollo
- Abrir http://localhost:3000 en el navegador


```
COMO INICIAR SESION
USUARIO: admin
CONTRASEÑA: 1234
```


## FUNCIONALIDADES PRINCIPALES

## AUTENTICACION
Login con usuario y contraseña hardcodeados (admin/1234) para demo.
Estado de usuario guardado en localStorage para mantener sesión al recargar.
ProtectedRoute para proteger rutas que requieren autenticación (vender, carrito, ofertas).
Estado de usuario guardado en localStorage para mantener sesión al recargar.

## GESTION DE PORDUCTOS
Obtención y eliminación de productos desde MockAPI.
Modal para agregar/editar productos, con persistencia en la API.
Los productos creados localmente se agregan a la lista y también pueden eliminarse.

## CARRITO DE COMPRAS
Agregar, eliminar y modificar cantidades de productos en el carrito.
Modal de pago simulado que limpia el carrito al completar el pago.
Total calculado dinámicamente.

## SEO Y ACCESIBILIDAD
React Helmet para modificar <title> y <meta> de cada página para mejorar SEO.
Etiquetas aria-label en botones e íconos para accesibilidad.

