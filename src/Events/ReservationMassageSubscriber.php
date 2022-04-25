<?php


namespace App\Events;


use ApiPlatform\Core\EventListener\EventPriorities;
use App\Entity\Reservation;
use App\Service\MailerService;
use DateTime;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;



class ReservationMassageSubscriber implements EventSubscriberInterface
{

    private $mailer;

    public function __construct(MailerService $mailer)
    {
        $this->mailer = $mailer;
    }


        public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::VIEW => [
                ['setDateResa', EventPriorities::POST_VALIDATE]/*,
                ['sendMailToAdmin', EventPriorities::PRE_WRITE]*/,
                ['sendMailToCustomer', EventPriorities::PRE_WRITE]
                ]
        ];
    }

    /**
     *
     * @throws \Symfony\Component\Mailer\Exception\TransportExceptionInterface
     */
    public function setDateResa(ViewEvent $event): void
    {
        $reservation = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if ($reservation instanceof Reservation || Request::METHOD_POST === $method)
        {
            date_default_timezone_set('Europe/Paris');
            //$dateRdv = $reservation->getDateRdv();
            $date_resa = DateTime::createFromFormat('y-m-d h:i:s',date('y-m-d h:i:s'));
            //$date_rdv = DateTime::createFromFormat('y-m-d h:i:s',$dateRdv);

            $dateResa = $reservation->setDateResa($date_resa);
            //$dateRdv = $reservation->setDateRdv($date_rdv);

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

        if ($reservation instanceof Reservation || Request::METHOD_POST === $method)
        {
            $mail = $reservation->getEmail();
            $nom = $reservation->getNom();
            $prenom = $reservation->getPrenom();
            $dateRdv = $reservation->getDateRdv();
            $dateResa = $reservation->getDateResa();
            $massage = $reservation->getMassage()->getNom();
            $parameters= [
                "nom" => $nom,
                "prenom" => $prenom,
                "dateRdv" => $dateRdv,
                "dateResa" => $dateResa,
                "massage" => $massage
            ];

            $this->mailer->send("Relach & Vous - Une réservation à été faite", "aromian1@gmail.com",$mail, "/contact/contactAdmin.html.twig",$parameters);

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

        if ($reservation instanceof Reservation || Request::METHOD_POST === $method)
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