<?php


namespace App\Events;
use Amp\Http\Client\Request;
use ApiPlatform\Core\EventListener\DeserializeListener as DecoratedListener;
use ApiPlatform\Core\EventListener\EventPriorities;
use ApiPlatform\Core\Serializer\SerializerContextBuilderInterface;
use ApiPlatform\Core\Util\RequestAttributesExtractor;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;


class DeserializeListener
{

    /*/
    private $decorated;

    private $contextBuilder;

    public function __construct(DecoratedListener $decorated, SerializerContextBuilderInterface $contextBuilder)
    {
        $this->decorated = $decorated;
        $this->contextBuilder = $contextBuilder;
    }

    public static function getSubscribedEvents()
    {
        // TODO: Implement getSubscribedEvents() method.
        return [
            KernelEvents::VIEW => ['onKernelRequest', EventPriorities::PRE_WRITE]
        ];
    }

    public function onKernelRequest(RequestEvent $event){

        $request = $event->getRequest(); //POST ? GET ? PUT ?

        if ($request->isMethodCacheable() && $request->getMethod() === "DELETE"){
            return;
        }

        if ($request->getContentType() === 'multipart'){

        } else {
            $this->decorated->onKernelRequest($event);
        }
    }

    private function denormalizeFormRequest(Request $request): void
    {

        $attributes = RequestAttributesExtractor::extractAttributes($request);
        if (empty($attributes)){
            return;
        }
        $context = $this->contextBuilder->createFromRequest($request, false, $attributes);
        dd($context, $request->getAttributes());
    }*/

}