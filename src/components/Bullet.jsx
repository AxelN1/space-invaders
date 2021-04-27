import React from 'react';
import './style/Bullet.css';
import BulletImg from '../img/bullet.png';

class Bullet extends React.Component {

    render() {

        return (
            // balise image qui renvoie l'image de la source BulletImg
            <img
                className='bulletImg'
                src={BulletImg}

            // Création de props style qui renvoi gridColumnStart, gridRowStart et display qui sont appelés dans Spaceship.jsx
                style={{
                    gridColumnStart: this.props.gridPositionColumn, gridRowStart: this.props.gridPositionRow,
                    display: this.props.display
                }} >
            </img>
        )
    }
}

export default Bullet;