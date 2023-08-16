import React, { useState } from 'react'
import Tags from '../Tags'
import fotos from './fotos.json'
import styles from './Galeria.module.scss'
import Cards from './Cards'

export default function Galeria() {
  // vamos adicionar a funcionalidade de filter para filtrar por tags
  // vamos utilizar useState para controlar o estado da nossa aplicaçao, quando clicar em uma tag vai poder exibir so as imagens daquela tag
  const [itens, setItens] = useState(fotos) // o estado inicial vai começar com fotos
  // la embaixo passando o estado itens para o componente <Cards />

  // vamos percorrer pelas fotos e extraindo o valor da tag, tag: nome da foto, a tag nao vai se repetir por causa do [...new Set(...)], cada posiçao do array vai ser preenchida por uma tag que é unica
  const tags = [...new Set(fotos.map((valor) => valor.tag))]
  // la embaixo vamos passar a tags para o componente <Tags /> com uma props 

  // criando funçao para fazer a filtragem das tags
  const filtraFotos = (tag) => {
    // filtrando as fotos, para cada foto vai retornar uma foto e essa foto vai ter que ser igual a foto selecionada
    const novasFotos = fotos.filter((foto) => {
      return foto.tag === tag
    })
    
    // setando o estado da aplicaçao com as novas fotos
    setItens(novasFotos)

    // vamos utilizar a funçao filtraFotos la no componente de <Tags />  la embaixo vamos passar filtraFotos para o componente <Tags /> com uma props 
  }


  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>

        <Tags
          tags={tags}
          // agora vamos la no componente de Tags e receber a tags como props

          filtraFotos={filtraFotos}
          // vamos la no componente de Tags e receber filtraFotos como props

          // assim que fizer a filtragem precisamos de uma tag para poder exibir todas as fotos do estado inical
          setItens={setItens}
          // vamos la no componente de Tags e receber setItens como props
        />

        <Cards fotos={itens} styles={styles} />
    </section>
  )
}
