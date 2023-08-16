import React from 'react'
import styles from './Tag.module.scss'
import fotos from '../Galeria/fotos.json'

// recebendo como props do componente Galeria {tags, filtraFotos, setItens}
export default function Tags({tags, filtraFotos, setItens}) {
  return (
    <div className={styles.tags}>
        <p>Filtre por tags:</p>

        <ul className={styles.tags__lista}>
          {/* <li>Estrelas</li>
            <li>Galáxias</li>
            <li>Lua</li>
            <li>Planetas</li> 
            ao inves de ter todas essa <li> </li>
          */}

          {/* vamos percorrer pelo array de tags e para cada tag vai me retornar a <li></li> aonde vai ter uma key que vai ser a propria tag e o contéudo da li vai ser a tag */}
          {tags.map((tag) => {
            return (
              <li 
                key={tag}
                // quando clicar no li vamos fazer a filtragem
                onClick={() => filtraFotos(tag)}
              >
                {tag}
              </li>
            )
          })}
          {/* volte para o componente <Galeria /> */}

          {/* precisamos de uma tag para poder exibir todas as fotos do estado inical
          quando clicar no li: Todas vamos fazer a filtragem para exibir todas as fotos*/}
          <li onClick={() => setItens(fotos)}>
            Todas
          </li>
            
        </ul>
    </div>
  )
}
