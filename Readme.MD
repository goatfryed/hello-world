# Hello Real World

Let's write a small and simple "Hello World" Website.

Of course, we want to track our progress. So we start with a nice and simple
~~~
git init hello-world && cd ./hello-world
~~~

Maybe some [.gitignore](.gitignore) for IDE files and stuff.

## Hello HTML
Now for a [html page](index.html)

## Docker network
Of course, real websites are hosted on real servers, so we want to use a development server.
To spin up a server environment, we're using docker. Alternative could be vagrant [docker vs vagrant](https://stackoverflow.com/questions/16647069/should-i-use-vagrant-or-docker-for-creating-an-isolated-environment)
But we'll probably end up hosting in a docker container anyway.

As the web server itself, we're using nginx. Alternative we could use apache, but it's 2019.

Update your hosts file to map the servername to your docker ip.

Also, we're mapping only the [public directory](public) to the webserver. what does it need else?