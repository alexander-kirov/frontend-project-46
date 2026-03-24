# Установка зависимостей
install:
	npm ci

# Запуск линтера
lint:
	npx eslint .

# Запуск тестов
test:
	npx jest

# Запуск тестов с покрытием
test-coverage:
	npx jest --coverage --coverageReporters=lcov

.PHONY: install lint test test-coverage