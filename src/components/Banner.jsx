import React, {useState} from "react";
import img1 from '../imgs/Elemento-imagen-7-830x1024.png'
import img2 from '../imgs/descarga.jfif'
import img3 from '../imgs/descarga (1).jfif'
import img4 from '../imgs/descarga (2).jfif'
import img5 from '../imgs/descarga (3).jfif'


function Banner(){
    const [like, setLike] = useState(0);
    function Increment(){
        setLike(like + 1);
    }
    return (
        <div className="container" style={{display: "flex"}}>
            <section className="section1" style={{width: "40%"}}>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img1} alt="" />
            </section>
            <section className="section2">
                <h2>Enyoi developers</h2>
                <div className="panel" style={{padding: "10px"}}>
                    <p>
                    Nuestro propósito, buscamos romper las barreras de la educación y dar accesos a empleos bien remunerados en el mundo de la tecnología en LATAM, a través de nuestro modelo de educación y empleabilidad. 
                    Por eso, diseñamos un programa de entrenamiento intensivo, por medio  formación práctica en 6 meses o menos.
                    Nuestro programa es 100% virtual, con tutorías en vivo cuando lo necesites y sin costo inicial.
                    </p>
                </div>
                <div style={{display: "flex"}}>
                    <button style={{width: "60px", marginRight: "10px", height: "30px"}} onClick={Increment}>Like</button>
                    <p>{like}❤</p>
                </div>
                
            </section>
        </div>
    )
}

export default Banner;