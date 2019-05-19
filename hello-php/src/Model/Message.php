<?php


namespace App\Model;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity()
 */
class Message
{
    /**
     * @ORM\Id()
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @var int
     */
    public $id;

    /**
     * @ORM\Column()
     * @var string
     */
    public $message;

    /**
     * @ORM\Column()
     * @var string
     */
    public $from;

    /**
     * @ORM\Column(type="json_array")
     * @var array
     */
    public $others = [];

    /**
     * Message constructor.
     * @param string $message
     * @param string|null $from
     * @param array $others
     */
    public function __construct(string $message, ?string $from, array $others)
    {
        $this->message = $message;
        $this->from = $from;
        $this->others = $others;
    }

    public function getText()
    {
        $text = $this->message;
        if ( $this->from) {
            $text = str_replace("{from}", $this->from, $text);
        }

        if ( count($this->others) > 0) {
            $othersText = end($this->others);

            if ( count($this->others) > 1 ) {
                $othersText = implode( ", ", array_slice($this->others, 0, -1)) . " and " . $othersText;
            }
            $text = str_replace( "{others}", $othersText, $text);
        }

        return $text;
    }

    public function __toString()
    {
        return $this->getText();
    }
}