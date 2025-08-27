import { Section } from '../Section'
import img from '../../assets/images/Hogwarts_gallery.png'
import zelda from '../../assets/images/zelda.png'
import { Action, Item, Items, Modal, ModalContent } from './styles'
import play from '../../assets/icons/botao-play.png'
import zoom from '../../assets/icons/mais-zoom.png'
import spiderman from '../../assets/images/banner-homem-aranha.png'
import close from '../../assets/icons/close.svg'
import { useState } from 'react'

interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: img
  },
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/9bZkp7q19f0?si=idT1OcN2fKIAaIdL'
  }
]

type Props = {
  defaultCover: string
  name: string
}
interface ModalState extends GalleryItem {
  IsVisible: boolean
}
export const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    IsVisible: false,
    type: 'image',
    url: ''
  })
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }
  const CloseModal = () => {
    setModal({
      IsVisible: false,
      type: 'image',
      url: ''
    })
  }
  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  IsVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img src={getMediaIcon(media)} alt="" />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal
        className={modal.IsVisible ? 'visible' : ''}
        onClick={() => CloseModal()}
      >
        <ModalContent className="container">
          <header>
            <h4>{name} </h4>
            <img src={close} alt="" onClick={() => CloseModal()} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe src={modal.url} style={{ border: 'none' }} />
          )}
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}
