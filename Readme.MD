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

Adjust [site config](develop/nginx/sites/hello-php.conf). For nice config defaults check out this [Spoiler](https://symfony.com/doc/current/setup/web_server_configuration.html)

Copy [index.html](public/index.html) to [index.php](public/index.php). Now we're running php... and it does nothing.

Checkout
* http://hello.world.test/
* http://hello.world.test/index.html
* http://hello.world.test/index.php
* http://hello.world.test/someother/stuff

## Composer
Use aaaaall the dependencies. We use [composer](https://getcomposer.org/) for php dependency management and kick start
~~~
composer create-project symfony/skeleton hello-php 4.2.8.3
mv -vn ./public/* ./hello-php/public/
cd hello-php
composer req annotations
~~~

## Writing our Controller
[MessageController](hello-php/src/Controller/MessageController.php)

## Enter the frontend