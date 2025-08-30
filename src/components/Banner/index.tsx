import { useEffect, useState } from 'react'
import { Imagem, Titulo, Precos } from './styles'
import { Tag } from '../Tag'
import { Button } from '../button'
import { Game } from '../../pages/Home'
import { PriceFomatter } from '../ProductList'

export const Banner = () => {
  const [game, setGame] = useState<Game>()
  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])
  if (!game) {
    return <h3>Carregando ...</h3>
  }
  return (
    <Imagem style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game?.name}</Titulo>
          <Precos>
            De <span>{PriceFomatter(game.prices.old)} </span> <br />
            por apenas {PriceFomatter(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/products/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}
