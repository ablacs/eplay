import { useEffect, useState } from 'react'
import { ProductList } from '../../components/ProductList'
import { Game } from '../../pages/Home'

export const Categories = () => {
  const [actionGames, setActionGames] = useState<Game[]>([])
  const [sportsGames, setSportsGames] = useState<Game[]>([])
  const [rpgGames, setRpgGames] = useState<Game[]>([])
  const [fightGames, setFightGames] = useState<Game[]>([])
  const [simulationGames, setSimulationGames] = useState<Game[]>([])
  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setActionGames(res))
    fetch('https://ebac-fake-api.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setSportsGames(res))
    fetch('https://ebac-fake-api.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setRpgGames(res))
    fetch('https://ebac-fake-api.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setFightGames(res))
    fetch('https://ebac-fake-api.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setSimulationGames(res))
  }, [])
  return (
    <>
      <ProductList games={actionGames} title="Ação" background="black" />
      <ProductList games={sportsGames} title="Esportes" background="gray" />
      <ProductList games={rpgGames} title="RPG" background="black" />
      <ProductList games={fightGames} title="Luta" background="gray" />
      <ProductList
        games={simulationGames}
        title="Simulação"
        background="black"
      />
    </>
  )
}
