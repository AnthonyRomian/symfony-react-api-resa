<?php

namespace App\Controller;

use App\Entity\Reservation;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;


class ResaDateListController
{
    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function __invoke(Request $request): JsonResponse
    {

        $listeResa = $this->entityManager->getRepository(Reservation::class)->findAll();
        $ListeDateResa = [];

        for ($i = 0; $i < sizeof($listeResa); $i++) {
            $ListeDateResa[] = $listeResa[$i]->getDateRdv();
        }
        return new JsonResponse($ListeDateResa);
    }


}