help: ## Show this help
	@echo "Targets:"
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/\(.*\):.*##[ \t]*/    \1 ## /' | sort | column -t -s '##'
	@echo

install: ## Installs everything
	npm install
	docker-compose up -d postgres
	make provision
	docker-compose stop

up: ##Starts docker-compose
	docker-compose up --build

upd: ##Starts docker-compose in daemon mode
	docker-compose up -d --build

stop: ##Stops docker-compose
	docker-compose stop

down: ##Destroys all ps containers
	docker-compose down

unit: provision ##Runs unit tests
	docker-compose run --rm app npm test

unit-hot: provision ##Runs unit tests in watch mode
	docker-compose run --rm app npm run test:hot

login-db: ##Logs in to DB
	docker exec -it tdd-practice-db psql -U developer postgres

provision: ##Migrates the DB to the latest schema
	docker-compose run --rm app npm run migrate
