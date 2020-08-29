<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="index")
     */
    public function index()
    {
        $greeting=[$g=new GreetingController,$g->welcome()];
        return $this->render('home/index.html.twig',[
            'greeting' => $greeting
        ]);
    }

    /** 
     * @Route("/home", name="home")
     */
    public function home()
    {
        return $this->render('home/home.html.twig');
    }
}

class GreetingController{
    public function welcome():string
    {
        return 'Bienvenue sur notre site
';
    }
}
