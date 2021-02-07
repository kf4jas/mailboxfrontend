VERSION := 0.1.0

clean:
	-rm -rf dist
	-rm -rf env

patch:
	git aftermerge patch || exit 1

minor:
	git aftermerge minor || exit 1

major:
	git aftermerge major || exit 1


fmt:
	poetry run black .  || exit 1

lint:
	poetry run flake8 . || exit 1

test: clean fmt lint
	poetry run pytest || exit 1

build: test
	poetry build

deploytest: build
	python3 -m venv env
	./env/bin/pip install wheel
	./env/bin/pip install dist/${appname}-\$(VERSION).tar.gz
	-echo "source ./env/bin/activate"

serve: 
	poetry run python manage.py runserver

# Not setup yet
#deploy: build
#       poetry publish -r focus

