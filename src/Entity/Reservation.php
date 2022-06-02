<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ReservationRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=ReservationRepository::class)
 * @ApiResource(
 *     normalizationContext={
 *     "groups"={"reservation_read"}
 *     },
 *     subresourceOperations={
 *          "massages_get_subresource"={"path"="/reservations/{id}/massages"}
 *     },
 *     collectionOperations= {"GET","POST","dateRdvListe"={
 *     "method"="GET",
 *     "path"="/reservations/dateRdvListe",
 *     "controller"="App\Controller\ResaDateListController",
 *     "swagger_context"={
 *      "summary"="Recupere une liste de date de rendez vous",
 *      "description"="Recupere une liste de date de rendez vous"
 *          }
 *     }},
 *     itemOperations= {"GET", "PUT", "DELETE"
 *     }
 * )
 */
class Reservation
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"reservation_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"reservation_read"})
     * @Assert\NotBlank(message="Le nom du client est obligatoire")
     * @Assert\Length(
     *     min=3, minMessage="Le nom doit faire entre 3 et 255 carateres",
     *     max=255, maxMessage="Le nom doit faire entre 3 et 255 carateres")
     *
     */
    private $nom;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"reservation_read"})
     * @Assert\NotBlank(message="Le prénom du client est obligatoire")
     * @Assert\Length(
     *     min=3, minMessage="Le prenom doit faire entre 3 et 255 carateres",
     *     max=255, maxMessage="Le prenom doit faire entre 3 et 255 carateres")
     *
     */
    private $prenom;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"reservation_read"})
     * @Assert\NotBlank(message="L'email du client est obligatoire")
     * @Assert\Email(message="Le format de l'adresse email doit etre valide")
     *
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"reservation_read"})
     * @Assert\Length(
     *     min=10, minMessage="Le N° de téléphone doit faire entre 10 et 16 carateres",
     *     max=15, maxMessage="Le N° de téléphone doit faire entre 10 et 16 carateres")
     * @Assert\NotBlank(message="Le N° de téléphone du client est obligatoire")
     *
     */
    private $tel;

    /**
     * @ORM\Column(type="integer", length=255, nullable=true)
     * @Groups({"reservation_read"})
     */
    private $nbrePassage;

    /**
     * @ORM\Column(type="datetime")
     *
     *
     */
    private $dateResa;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"reservation_read"})
     * @Assert\GreaterThanOrEqual("+48 hours",
     * message="Reservez 48h à l'avance - Contactez nous par téléphone")
     * @Assert\NotBlank(message="La date de reservation est obligatoire")
     *
     */
    private $dateRdv;

    /**
     * @ORM\ManyToOne(targetEntity=Massage::class, inversedBy="reservations")
     * @Groups({"reservation_read"})
     * @Assert\NotBlank(message="La selection du message est obligatoire")
     * @ORM\JoinColumn(nullable=false)
     */
    private $massage;

//@ORM\OneToMany(targetEntity=Massage::class, cascade={"persist", "remove"})
//* @Groups({"reservation_read"})
//     * @ORM\JoinColumn(onDelete="SET NULL")


//    private $massage;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getTel(): ?string
    {
        return $this->tel;
    }

    public function setTel(string $tel): self
    {
        $this->tel = $tel;

        return $this;
    }

    public function getNbrePassage(): ?int
    {
        return $this->nbrePassage;
    }

    public function setNbrePassage(?int $nbrePassage): self
    {
        $this->nbrePassage = $nbrePassage;

        return $this;
    }

    public function getDateResa(): ?\DateTimeInterface
    {
        return $this->dateResa;
    }

    public function setDateResa(\DateTimeInterface $dateResa): self
    {
        $this->dateResa = $dateResa;

        return $this;
    }


    public function getDateRdv(): ?\DateTimeInterface
    {
        return $this->dateRdv;
    }


    public function setDateRdv(\DateTimeInterface $dateRdv): void
    {
        $this->dateRdv = $dateRdv;
    }

    public function getMassage(): ?Massage
    {
        return $this->massage;
    }

    public function setMassage(?Massage $massage): self
    {
        $this->massage = $massage;

        return $this;
    }
}
