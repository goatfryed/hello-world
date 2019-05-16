# Hello Real World
Kudos to Anton Okolelov and his [hello (real) world in php 2017](https://kukuruku.co/post/hello-real-world-in-php-in-2017/)
and everyone that had the idea as well before. Here's my take on it.

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
Let's go a few steps back to static web, then add some javascript.


## Hello, World( Wide Web) (<- the most fitting place)
Next, we download the hole internet and store it in a hell called node_modules.

We want to use react to render our page with javascript. to write sweet react code, we want to use the jsx syntax.
Therefore, we need a transpiler that transpiles jsx to plain js. We also need a build tool.
Seems, like webpack is still the hottest kid on the blog. But we'll add symfony utility layer on top, to make it cleaner.

Note that we won't use the -D option, since we build the source and everything is dev-requirement anyway
~~~
npm add @babel/core@^7.0 \
  @babel/preset-react@^7.0 \
  @symfony/webpack-encore@^0.27 \
  core-js@3 \
  react-dom@^16.8 \
  react@^16.8 \
  webpack-notifier@^1.6 \
  webpack@^4
~~~

Luckily, it's 2019, so it's only half the internet anymore.
~~~
added 879 packages from 479 contributors and audited 15726 packages in 54.277s
~~~

Then we add some [webpack config](hello-js/webpack.config.js), move the javascript out of the public root to generate back to there again.
~~~
cd hello-js && npm run dev
~~~

## Render static site from javascript
Because
* versioning against browser caching
* smaller javascript chunks without worrying about including the chunks
* reasons

~~~
npm add html-webpack-plugin@^3.2
~~~

## CSS
Okay, enough of the ugliness. We want to beautify our website with some need styling and responsiveness.
Of course, writing real css is for some crazy, insane devil-gods. So we skip this part and add just some
[look-good-classes](https://bulma.io/documentation/overview/start/). Responsiveness included.

## Typescript
Writing PHP sucks. Writing javascript sucks. Writing css sucks. You know what sucks to? You guessed it.

~~~
npm add @typescript@^3.4 ts-loader@^5.3 @types/react @types/react-dom
~~~
Writing shell commands is probably the only thing, that's never gonna suck.