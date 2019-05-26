<?php


namespace App\GraphQL;


use Overblog\GraphQLBundle\Resolver\ResolverMap;

class GraphQLResolverMap extends ResolverMap
{
    /**
     * @var SupporterResolver
     */
    private $messageResolver;

    /**
     * GraphQLResolverMap constructor.
     * @param SupporterResolver $supporterResolver
     */
    public function __construct(SupporterResolver $supporterResolver)
    {
        $this->messageResolver = $supporterResolver;
    }

    public function map()
    {
        return [
            "Query" => [
               "getMessageSupporter" => [$this->messageResolver, "resolveMessageSupporterInfo"]
            ],
        ];
    }
}