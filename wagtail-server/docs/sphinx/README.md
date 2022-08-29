# Plantilla para documentar proyectos utilizando Sphinx

## Requerimientos

| Application    | Command                                                | Version |
| -------------- | ------------------------------------------------------ | ------- |
| docker         | docker --version                                       | 19.03.5 |
| docker-compose | docker-compose --version                               | 1.25.4  |

## Uso

- ​Iniciar la documentación

```shell
​$> docker-compose up -d --build
```

- Detener la documentación

```shell
​$> docker-compose down -v
```

## Tecnologías

- [Docker](https://www.docker.com/) - Se utiliza para la creación y el intercambio de aplicaciones en contenedores.
- [Sphinx](https://www.sphinx-doc.org/en/master/) - Sphinx es una herramienta que facilita la creación de documentación inteligente y hermosa.

## Contribuyendo

Por favor, lea [Contribuyendo](docs/about/contributing.md) para obtener detalles sobre nuestro código de conducta y el proceso para enviarnos solicitudes de extracción.

## Control de versiones

Usamos [SemVer](http://semver.org/) para el control de versiones.

## Autor

- **Alexei Diaz**

## Licencia

Este proyecto tiene la licencia del MIT; consulte [Licencia](./license.md) para obtener más detalles.
