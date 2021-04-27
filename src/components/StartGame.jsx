import React from 'react';


class StartGame extends React.Component {
    
    render() {
        
        return (
            <div id='firstMenu'>
            <h1>Space Invaders </h1>
            <section>Déplacez vous de droite à gauche en tirant sur les extraterrestres avant qu'ils ne descendent sur vous .</section>
            
             toBegin() {
               this.setState({
                 beginning: false,
                //   Au départ displayAlien est un array vide. 
                //   Grâce à la méthode fill on lui ajoute 10 éléments de valeurs true à partir de l'index 0
                 displayAlien: (new Array(10)).fill(true, 0)
               })
             }
            </div>
                
        )
    }
}

export default StartGame;