import { Game } from '../../pages/Home'
import { Button } from '../button'
import { PriceFomatter } from '../ProductList'
import { Tag } from '../Tag'
import { Banner, Infos } from './styles'

type Props = {
  game: Game
}
export const Hero = ({ game }: Props) => {
  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2> {game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De{PriceFomatter(game.prices.old)} </span>
            )}
            {game.prices.current && (
              <>Por {PriceFomatter(game.prices.current)}</>
            )}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              title="Adicionar ao carrinho"
              variable="primary"
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}
