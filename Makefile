# Установка зависимостей
install:
	npm ci

# Запуск линтера
lint:
	npm run lint

# Запуск тестов
test:
	npx jest

# Запуск тестов с покрытием (для SonarQube)
test-coverage:
	npx jest --coverage --coverageReporters=lcov

.PHONY: install lint test test-coverage