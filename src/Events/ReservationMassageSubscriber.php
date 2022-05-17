<?php


namespace App\Events;


use ApiPlatform\Core\EventListener\EventPriorities;
use App\Entity\Reservation;
use App\Service\MailerService;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;



class ReservationMassageSubscriber implements EventSubscriberInterface
{
    /**
     * @var EntityManagerInterface
     */
    private $manager;
    private $mailer;

    public function __construct(MailerService $mailer, EntityManagerInterface $manager)
    {
        $this->mailer = $mailer;
        $this->manager = $manager;

    }


        public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::VIEW => [
                ['setDateResar', EventPriorities::POST_VALIDATE],
                ['setCompteur', EventPriorities::POST_VALIDATE],
                ['sendMailToAdmin', EventPriorities::PRE_WRITE],
                ['sendMailToCustomer', EventPriorities::PRE_WRITE]
                ]
        ];
    }

    /**
     *
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function setDateResar(ViewEvent $event): void
    {
        $reservation = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if ($reservation instanceof Reservation && Request::METHOD_POST === $method)
        {
            date_default_timezone_set('Europe/Paris');
            $date_resa = DateTime::createFromFormat('y-m-d h:i:s',date('y-m-d h:i:s'));
            $dateResa = $reservation->setDateResa($date_resa);

            new Response();
        }
        //TODO test integration google calendar


    }

    /**
     *
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function setCompteur(ViewEvent $event ): void
    {
        $reservation = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if ($reservation instanceof Reservation && Request::METHOD_POST === $method)
        {
            $mail = $reservation->getEmail();
            $nom = $reservation->getNom();
            $prenom = $reservation->getPrenom();
            $dateRdv = $reservation->getDateRdv();
            $dateResa = $reservation->getDateResa();
            $massage = $reservation->getMassage()->getNom();

            $list = $this->manager->getRepository(Reservation::class)->findBy(array("nom" => $nom, "prenom" => $prenom));
            $compteur = sizeof($list);
            if ($compteur == 0) {
                $reservation->setNbrePassage(1);
            } else {
                $reservation->setNbrePassage($compteur+1);
            }
            new Response();
        }
        //TODO test integration google calendar


    }

    /**
     *
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function sendMailToAdmin(ViewEvent $event): void
    {
        $reservation = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if ($reservation instanceof Reservation && Request::METHOD_POST === $method)
        {
            $nom = $reservation->getNom();
            $prenom = $reservation->getPrenom();
            $dateRdv = $reservation->getDateRdv();
            $dateResa = $reservation->getDateResa();
            $massage = $reservation->getMassage()->getNom();
            $tel = $reservation->getTel();
            $email = $reservation->getEmail();
            $parameters= [
                "nom" => $nom,
                "prenom" => $prenom,
                "dateRdv" => $dateRdv,
                "dateResa" => $dateResa,
                "massage" => $massage,
                "tel" => $tel,
                "mail" => $email
            ];

            $this->mailer->send("Relach & Vous - Une réservation à été faite", "aromian1@gmail.com","aromian1@gmail.com", "/contact/contactAdmin.html.twig",$parameters);

            new Response();
        }
        //TODO test integration google calendar


    }

    /**
     *
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function sendMailToCustomer(ViewEvent $event): void
    {
        $reservation = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if ($reservation instanceof Reservation && Request::METHOD_POST === $method)
        {
            $mail = $reservation->getEmail();
            $nom = $reservation->getNom();
            $prenom = $reservation->getPrenom();
            $dateRdv = $reservation->getDateRdv();
            $massage = $reservation->getMassage()->getNom();
            $parameters= [
                "nom" => $nom,
                "prenom" => $prenom,
                "dateRdv" => $dateRdv,
                "massage" => $massage
            ];

            $this->mailer->send("Relach & Vous - Confirmation de rendez vous", "aromian1@gmail.com",$mail, "/contact/contactClient.html.twig",$parameters);


            new Response();
        }

        //TODO test integration google calendar



    }
}