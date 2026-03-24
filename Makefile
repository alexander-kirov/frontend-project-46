# Запуск линтера
lint:
	npm run lint

# Запуск тестов
test:
	npx jest

# Покрытие тестами
test-coverage:
	npx jest --coverage --coverageReporters=lcov

.PHONY: test-coverage