import { ProductList } from '../../components/ProductList'
import { Game } from '../../models/Games'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror desenvolvido pela Capcom. O jogo foi lançado no Japão em 2005 e no mundo todo em 2006.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'RPG',
    description:
      'Diablo IV é um jogo de RPG de fantasia de ação desenvolvido pela Blizzard Entertainment. O jogo foi lançado no Japão em 2012 e no mundo todo em 2013.',
    title: 'Diablo IV',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: diablo
  },
  {
    id: 3,
    category: 'aventura',
    description:
      'Zelda Breath of the wild é um jogo de ação e aventura desenvolvido pela Nintendo. O jogo foi lançado no Japão em 2017 e no mundo todo em 2018.',
    title: 'Zelda Breath of the wild',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  },
  {
    id: 4,
    category: 'ação',
    description:
      'Star Wars Jedi: Survivor é um jogo de ação e aventura desenvolvido pela LucasArts. O jogo foi lançado no Japão em 2018 e no mundo todo em 2019.',
    title: 'Star Wars Jedi: Survivor',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: starWars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror desenvolvido pela Capcom. O jogo foi lançado no Japão em 2005 e no mundo todo em 2006.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 5,
    category: 'ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror desenvolvido pela Capcom. O jogo foi lançado no Japão em 2005 e no mundo todo em 2006.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 5,
    category: 'ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror desenvolvido pela Capcom. O jogo foi lançado no Japão em 2005 e no mundo todo em 2006.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 5,
    category: 'ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror desenvolvido pela Capcom. O jogo foi lançado no Japão em 2005 e no mundo todo em 2006.',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  }
]
export const Categories = () => (
  <>
    <ProductList games={promocoes} title="Ação" background="gray" />
    <ProductList games={emBreve} title="RPG" background="black" />
    <ProductList games={promocoes} title="Aventura" background="gray" />
    <ProductList games={emBreve} title="FPS" background="black" />
  </>
)
