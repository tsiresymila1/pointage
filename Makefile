SERVICE_NAME := pointage
start-init:
	docker-compose up --build --force-recreate --renew-anon-volumes

compilation-and-run:
	npm run build
	npm run start

start:
	docker-compose up --build

stop:
	@ echo "> Stop development environment"
	@ docker-compose down
	@ echo "> ----- Complete -----"
