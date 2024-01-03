import { Link } from 'react-router-dom'
import '../css/cursos.css'
import React from 'react'

const Reset = () => {
    //Código para corrigir os bugs do React no carregamento dos vídeos
    // React.useEffect(() => {
    //     const handleScrool = () => {
    //         // Lógica a ser executada quando houver rolagem
    //         console.log('Página rolada')
    //     }
        
    //     // Adiciona o event listener de rolagem marcando como 'passive'
    //     window.addEventListener('scroll', handleScrool, {passive: true})

    //     // Remove o event listener ao desmontar o componente
    //     return () => {
    //         window.removeEventListener('scroll', handleScrool)
    //     }
    // }, [])

    //Aulas
    function aula1 () {
        var varAula1 = `<iframe width="560" height="315" src="https://www.youtube.com/embed/fuh3jtveqD4?si=1oVPbPYH3tYsPuPZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>`
        var nomeAula1 = "Reconhecendo a Cristo como Senhor"
        document.getElementById("mostrarVideo").innerHTML = varAula1
        document.getElementById('mostrarNome').innerHTML = nomeAula1
    }

    function aula2 () {
        var varAula2 = `<iframe width="560" height="315" src="https://www.youtube.com/embed/_xtmwkQtx6w?si=wob4bSq7fvzHLO0S" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>`
        var nomeAula2 = "Conhecendo Jesus Cristo"
        document.getElementById("mostrarVideo").innerHTML = varAula2
        document.getElementById('mostrarNome').innerHTML = nomeAula2
    }


    return(
        <div>
            <div className='titulo'>
                <h1>RESET</h1>
            </div>

            <div className='div-principal'>
                <div className='subdiv1'>
                    <h3 id='mostrarNome'></h3>
                    <span id='mostrarVideo'></span>
                    

                </div>

                <div className='subdiv2'>
                    <button onClick={aula1}>Aula 1</button><br/>
                    <button onClick={aula2}>Aula 2</button>
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