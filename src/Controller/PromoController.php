<?php

namespace App\Controller;

use App\Entity\Promo;
use Symfony\Component\HttpFoundation\Request;

class PromoController
{
    public function __invoke(Request $request)
    {

        $promo = $request->attributes->get('data');
        if ($promo instanceof Promo){
            $file = $request->files->get('img');
            $promo->setFile($request->files->get('img'));
            $promo->setUpdatedAt(new \DateTime());

            return $promo;
        }

    }


}