<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MessageController
{
    /**
     * @Route("/")
     * @return Response
     */
    public function hello()
    {
        return new Response(<<<HTML
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>Hello World!</title>
                    <link rel="icon" type="image/png" href="favicon.png">
                </head>
                <body>
                    Hello World from symfony, html, php, nginx &amp; docker!
                </body>
            </html>
        HTML);
    }
}