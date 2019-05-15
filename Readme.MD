# Hello Real World

Let's write a small and simple "Hello World" Website.

Of course, we want to track our progress. So we start with a nice and simple
~~~
git init hello-world && cd ./hello-world
~~~

Maybe some [.gitignore](.gitignore) for IDE files and stuff.

## Hello HTML
Now for a [html page](public/index.html)

## Docker network
Of course, real websites are hosted on real servers, so we want to use a development server.
To spin up a server environment, we're using docker. Alternative could be vagrant [docker vs vagrant](https://stackoverflow.com/questions/16647069/should-i-use-vagrant-or-docker-for-creating-an-isolated-environment)
But we'll probably end up hosting in a docker container anyway.

As the web server itself, we're using nginx. Alternative we could use apache, but it's 2019.

Update your hosts file to map the servername to your docker ip. We're using http://hello.world.test/

Also, we're mapping only the [public directory](public) to the webserver. what does it need else?

## PHP
In the real world, often static pages are not enough. In our case, we want to server files from a server written in php.

Add php to the docker stack.

Adjust [site config](develop/nginx/sites/hello-web.conf). For nice config defaults check out this [Spoiler](https://symfony.com/doc/current/setup/web_server_configuration.html)

Checkout
* http://hello.world.test/
* http://hello.world.test/index.html
* http://hello.world.test/index.php
* http://hello.world.test/someother/stuff

