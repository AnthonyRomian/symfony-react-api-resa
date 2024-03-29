<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\MassageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=MassageRepository::class)
 * @ApiResource (subresourceOperations={
 *          "api_reservation_massages_get_subresource"={
 *              "normalization_context"={"groups"={"massages_subresource"}}
 *      }
 *     }
 *     )
 */
class Massage
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups(  {"reservation_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups(  {"reservation_read"})
     */
    private $nom;

    /**
     * @ORM\Column(type="string", length=800)
     * @Groups(  {"reservation_read"})
     */
    private $description;

    /**
     * @ORM\Column(type="integer")
     * @Groups(  {"reservation_read"})
     */
    private $prix;

    /**
     * @ORM\Column(type="integer")
     * @Groups(  {"reservation_read"})
     */
    private $duree;



    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     * @Groups( {"reservation_read"})
     */
    private $img;

    /**
     * @ORM\OneToMany(targetEntity=Reservation::class, mappedBy="massage")
     */
    private $reservations;

    public function __construct()
    {
        $this->reservations = new ArrayCollection();
    }

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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPrix(): ?int
    {
        return $this->prix;
    }

    public function setPrix(int $prix): self
    {
        $this->prix = $prix;

        return $this;
    }

    public function getDuree(): ?int
    {
        return $this->duree;
    }

    public function setDuree(int $duree): self
    {
        $this->duree = $duree;

        return $this;
    }

    public function getImg(): ?string
    {
        return $this->img;
    }

    public function setImg(?string $img): self
    {
        $this->img = $img;

        return $this;
    }

    /**
     * @return Collection<int, Reservation>
     */
    public function getReservations(): Collection
    {
        return $this->reservations;
    }

    public function addReservation(Reservation $reservation): self
    {
        if (!$this->reservations->contains($reservation)) {
            $this->reservations[] = $reservation;
            $reservation->setMassage($this);
        }

        return $this;
    }

    public function removeReservation(Reservation $reservation): self
    {
        if ($this->reservations->removeElement($reservation)) {
            // set the owning side to null (unless already changed)
            if ($reservation->getMassage() === $this) {
                $reservation->setMassage(null);
            }
        }

        return $this;
    }
}
