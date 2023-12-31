import Block from '../../utils/Block'
import template from './tab.hbs'
import { Button } from '../button'
import { Imagine } from '../imagine'
import { addFile, addLocation, addMedia, addUser, deleteUser } from '../../images'

interface TabProps {
  class?: string
  users?: boolean
  addUser: () => void
  deleteUser: () => void
  addFile: () => Promise<void>
  addMedia: () => Promise<void>
  addLocation: () => Promise<void>
}

class Tab extends Block<TabProps> {
  protected init (): void {
    this.children.buttonAdd = new Button({
      label: 'Добавить пользователя',
      class: 'tab__button',
      content: new Imagine({
        class: 'tab__img',
        alt: 'Добавить пользователя',
        src: addUser
      }),
      events: {
        click: () => { this.props.addUser() }
      }
    })

    this.children.buttonDelete = new Button({
      label: 'Удалить пользователя',
      class: 'tab__button',
      content: new Imagine({
        class: 'tab__img',
        alt: 'Удалить пользователя',
        src: deleteUser
      }),
      events: {
        click: async () => { this.props.deleteUser() }
      }
    })

    this.children.addMedia = new Button({
      label: 'Фото или видео',
      class: 'tab__button',
      content: new Imagine({
        class: 'tab__img',
        alt: 'Добавить фото или видео',
        src: addMedia
      }),
      events: {
        click: async () => { await this.props.addMedia() }
      }
    })

    this.children.addFile = new Button({
      label: 'Файл',
      class: 'tab__button',
      content: new Imagine({
        class: 'tab__img',
        alt: 'Добавить файл',
        src: addFile
      }),
      events: {
        click: async () => { await this.props.addFile() }
      }
    })

    this.children.addLocation = new Button({
      label: 'Локация',
      class: 'tab__button',
      content: new Imagine({
        class: 'tab__img',
        alt: 'Добавить локацию',
        src: addLocation
      }),
      events: {
        click: async () => { await this.props.addLocation() }
      }
    })
  }

  render (): DocumentFragment {
    return this.compile(template, this.props)
  }
}

export default Tab
