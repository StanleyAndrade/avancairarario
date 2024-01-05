//Importing CSS
import '../css/cursos.css'
import '../css/responsive.css'

//Importin React and React Router Dom
import React from 'react'
import { Link } from 'react-router-dom'
import ResetPDF from '../pdf/Reset.pdf'

const Reset = () => {

    //Aulas
    function aula1 () {
        var nomeAula1 = `Lição 1 <br/> Reconhecendo a Cristo como Senhor`
        var varAula1 = `<iframe width="560" height="315" src="https://www.youtube.com/embed/fuh3jtveqD4?si=1oVPbPYH3tYsPuPZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>`
        var btnLer = `<button id='btn-inside' onClick={aula1}>Ler Online</button>`
        var btnQuestionario = `<button id='btn-inside' onClick={aula1}>Fazer Questionário</button><br/>`

        document.getElementById('mostrarNome').innerHTML = nomeAula1
        document.getElementById("mostrarVideo").innerHTML = varAula1
        document.getElementById('mostrarBtnLer').innerHTML = btnLer
        document.getElementById('mostrarBtnQuestionario').innerHTML = btnQuestionario
    }

    // function aula2 () {
    //     var varAula2 = `<iframe width="560" height="315" src="https://www.youtube.com/embed/_xtmwkQtx6w?si=wob4bSq7fvzHLO0S" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>`
    //     var nomeAula2 = `Lição 2 <br/> Conhecendo Jesus Cristo`
    //     document.getElementById("mostrarVideo").innerHTML = varAula2
    //     document.getElementById('mostrarNome').innerHTML = nomeAula2
    // }


    return(
        <div className='father'>
            <div className='titulo'>
                <h3 className='projeto'>PROJETO</h3>
                <h1 className='avancai'>AVANÇAI</h1>
                <h2 className='modulo'>RESET</h2><br/>
                <a href={ResetPDF} download="Reset.pdf"><button id='btn-inside'>Baixar Apostila</button></a>
                <a href=''><button id='btn-inside'>Fazer Questionário</button><br/></a>
            </div>

            <div className='div-principal'>
                <div className='subdiv1'>
                    <h3 id='mostrarNome'></h3>
                    <span id='mostrarVideo'></span>
                    <div id='botoes-video'>
                        <span id='mostrarBtnApostila'></span>
                        <span id='mostrarBtnLer'></span>
                        <span id='mostrarBtnQuestionario'></span>
                    </div>

                    

                </div>

                <div className='subdiv2'>
                    <button className='btn-aula' onClick={aula1}>Aula 1</button><br/>
                    <button className='btn-aula' onClick={null}>Aula 2</button><br/>
                    <button className='btn-aula' onClick={null}>Aula 3</button><br/>
                    <button className='btn-aula' onClick={null}>Aula 4</button><br/>
                    <button className='btn-aula' onClick={null}>Aula 5</button><br/>
                    <button className='btn-aula' onClick={null}>Aula 6</button><br/>
                    <button className='btn-aula' onClick={null}>Aula 7</button><br/>
                    <button className='btn-aula' onClick={null}>Aula 8</button><br/>
                    <button className='btn-aula' onClick={null}>Aula 9</button><br/>
                    <button className='btn-aula' onClick={null}>Aula 10</button><br/>
                    <button className='btn-aula' onClick={null}>Aula 11</button><br/>

                </div>
            </div>
            
            
        </div>
    )
} 

{/* <div className="videos">
                <h3>Aula 1 Reconhecendo a Cristo como Senhor</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/fuh3jtveqD4?si=1oVPbPYH3tYsPuPZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                
                <iframe width="560" height="315" src="https://www.youtube.com/embed/_xtmwkQtx6w?si=wob4bSq7fvzHLO0S" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/thLa8h6v5pI?si=sfeiM59AyJ9vTAAj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ARZyyOPEGAQ?si=pnOBMeIpOlpMJWhR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ENu07d8zIZA?si=qQewKnMmX8U7oZUB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/mzPPMX60c4g?si=g4Dbbn4OMfXjMVQD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6BoZ8MQh_P8?si=7yWKmlks8-geWSuI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/x3fofsEiiyw?si=FIftDDd3vgLngjsP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/1w0_5drOyKM?si=kWgpvMpfRa1hFkIh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/sWrRxP7sbJs?si=8nwuY1mRfT26HpM2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/SmMQYAbraRM?si=IdkvVMcVSe_17qsO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            </div> */}

export default Reset 