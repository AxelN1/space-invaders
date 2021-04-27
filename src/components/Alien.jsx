import React from 'react';
import './style/Alien.css';
import ImgAlien from '../img/alien2.png'


class Alien extends React.Component {

    render() {

        return (
            // balise image qui renvoie l'image de la source ImgAlien
            <img className='alienComing' src={ImgAlien}

            // Création de props style qui renvoi gridColumnStart et gridRowStart qui sont appelés dans Spaceship.jsx
                style={{
                    gridColumnStart: this.props.gridPositionColumn,
                    gridRowStart: this.props.gridPositionRow
                }}>
            </img>
        )
    }
}

export default Alien;