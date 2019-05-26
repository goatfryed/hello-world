<?php


namespace App\Model;


use App\Model\Supporter;

class SupporterInfo
{

    private $supportedBy= [];

    /**
     * @return array
     */
    public function getSupportedBy(): array
    {
        return $this->supportedBy;
    }

    /**
     * @param array $supportedBy
     */
    public function setSupportedBy(array $supportedBy): void
    {
        $this->supportedBy = $supportedBy;
    }

    public function getOneliner(): string
    {


        if ( count($this->supportedBy) == 0) {
            return "none";
        } else {
            $supportedBy = array_map(function(Supporter $supporter){return $supporter->getName();}, $this->supportedBy);
            $supporterText = end($supportedBy);

            if ( count($this->supportedBy) > 1 ) {
                $supporterText = implode( ", ", array_slice($supportedBy, 0, -1)) . " and " . $supporterText;
            }
            return $supporterText;
        }
    }
}