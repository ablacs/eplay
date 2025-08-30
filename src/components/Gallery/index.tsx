import { Section } from '../Section'
import { Action, Item, Items, Modal, ModalContent } from './styles'
import play from '../../assets/icons/botao-play.png'
import zoom from '../../assets/icons/mais-zoom.png'
import close from '../../assets/icons/close.svg'
import { useState } from 'react'
import { GalleryItem } from '../../pages/Home'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}
interface ModalState extends GalleryItem {
  IsVisible: boolean
}
export const Gallery = ({ defaultCover, name, items }: Props) => {
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
          {items.map((media, index) => (
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
