<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\PromoRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use App\Controller\PromoController;

/**
 * @ORM\Entity(repositoryClass=PromoRepository::class)
 * @ApiResource(
 *     normalizationContext={
 *     "groups"={"promo_read"}
 *     },
 *     collectionOperations= {"GET", "POST"},
 *     itemOperations={
 *         "GET",  "DELETE",
 *         "image"={
 *              "method"="POST",
 *              "path"="/promos/{id}/image",
 *             "controller"=PromoController::class,
 *              "deserialize"=false,
 *             "openapi_context"={
 *                 "requestBody"={
 *                     "content"={
 *                          "multipart/form-data"={
 *                              "schema"={
 *                                  "type"="object",
 *                                  "properties"={
 *                                      "file"={
 *                                          "type"="string",
 *                                          "format"="binary"
 *                                      },
 *                                  },
 *                              },
 *
 *                          },
 *                      },
 *
 *                 },
 *
 *             },
 *         },
 *
 *     },
 * )
 * @Vich\Uploadable()
 *
 */
class Promo
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups ({"promo_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups ({"promo_read"})
     */
    private $nom;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups ({"promo_read"})
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups ({"promo_read"})
     */
    private $filePath;

    /**
     * @var File|null
     * @Vich\UploadableField (mapping="promo_image" , fileNameProperty="filePath")
     */
    private $file;

    /**
     * @return mixed
     */
    public function getFile()
    {
        return $this->file;
    }

    /**
     * @param mixed $file
     */
    public function setFile($file): void
    {
        $this->file = $file;
    }

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

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

    public function getFilePath(): ?string
    {
        return $this->filePath;
    }

    public function setFilePath(?string $filePath): self
    {
        $this->filePath = $filePath;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }
}
