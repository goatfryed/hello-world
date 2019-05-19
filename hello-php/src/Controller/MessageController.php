<?php
namespace App\Controller;

use App\Model\Message;
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
                "message" => (new Message(
                    "Hello World from {from} with {others}",
                    "json",
                    ["symfony", "php", "nginx", "docker"])
                )->getText()
            ]
        );
    }
}