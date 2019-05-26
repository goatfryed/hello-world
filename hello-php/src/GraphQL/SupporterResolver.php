<?php


namespace App\GraphQL;


use App\Model\Supporter;
use App\Model\SupporterInfo;
use GraphQL\Type\Definition\ResolveInfo;
use Overblog\GraphQLBundle\Definition\Argument;

class SupporterResolver
{
    public function resolveMessageSupporterInfo(
        $value,
        Argument $args,
        \ArrayObject $context,
        ResolveInfo $info
    ) {
        $supporterInfo = new SupporterInfo();
        $supporterInfo->setSupportedBy([
            new Supporter("graphql", "api schema"),
            new Supporter("symfony", "framework"),
            new Supporter("postgres", "database"),
            new Supporter("php", "programming language"),
            new Supporter("nginx", "server"),
            new Supporter("docker", "infrastructure"),
        ]);
        return $supporterInfo;
    }
}