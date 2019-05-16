<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class MessageController
{
    /**
     * @Route("/rest/message/")
     * @return JsonResponse
     */
    public function hello(): JsonResponse
    {
        return new JsonResponse(
            [
                "message" => "Hello World from json, symfony, php, nginx, docker!"
            ]
        );
    }
}