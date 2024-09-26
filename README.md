# Client Gateway

El gateway es el punto de comunicacion entre nuestros clientes y nuestros servicios.
Es el encargado de recibir las peticiones, enviarlas a los servicios correspondientes y devolver la respuesta al cliente

## Development

	1.	Clone the repository
	2.	Install dependencies
	3.	Create a .env file based on the env.template
	4.	Tener levantado los microservicios que se van a consumir
	5.	Run `npm run start:dev`

  ## Nats
   docker run -d --name=nats-2 --link nats-main -p 4222:4222 -p 8222:8222 nats:latest