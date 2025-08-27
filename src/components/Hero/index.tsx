import banner from '../../assets/images/fundo_hogwarts.png'
import { Button } from '../button'
import { Tag } from '../Tag'
import { Banner, Infos } from './styles'
export const Hero = () => {
  return (
    <Banner style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <div>
          <Tag>RPG</Tag>
          <Tag>PS5</Tag>
        </div>
        <Infos>
          <h2>Hogwarts Legacy</h2>
          <p>
            <span>De R$ 250,00</span> por R$ 190,00
          </p>
          <Button
            type="button"
            title="Adicionar ao carrinho"
            variable="primary"
          >
            Adicionar ao carrinho
          </Button>
        </Infos>
      </div>
    </Banner>
  )
}
