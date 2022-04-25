import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const DemoCarousel = (props) => {

        return (
            <Carousel autoPlay>
                <div id="div-1">
                    <p className="lead">
                        Véritable outil de bien être, il permet à votre corps de retrouver des sensations et à votre mental
                        de s’évader, amélioration de la posture, circulation relancée, réduction du stress et de l’anxiété,
                        détente des muscles endoloris, système immunitaire rebooté et sommeil amélioré.
                    </p>
                    <img src="assets/img/photo_accueil_1.jpg" />
                </div>
                <div>
                    <img src="assets/img/photo_accueil_1.jpg" />
                </div>
            </Carousel>
        );

};

export default DemoCarousel;

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>