<?php
namespace App\Controller;

use App\Model\Message;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class MessageController
{
    /**
     * @Route("/rest/message/{message}", requirements={"message"="\d+"}, defaults={"message"="1"})
     * @return JsonResponse
     */
    public function hello(Message $message): JsonResponse
    {

        $response = new JsonResponse(
            [
                "message" => $message->getText()
            ]
        );
        $response->headers->add(["Access-Control-Allow-Origin" => "*"]);
        return $response;
    }
}