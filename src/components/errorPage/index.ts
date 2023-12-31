import Block from '../../utils/Block'
import { Button } from '../button/index'
import template from './errorPage.hbs'

interface ErrorProps {
  code: string
  message: string
}

export class ErrorPage extends Block<ErrorProps> {
  constructor (props: ErrorProps) {
    super({ ...props })
  }

  init (): void {
    this.children.buttonBack = new Button({
      class: 'errorPage__link',
      label: 'Назад к чатам',
      events: {
        click: () => { /* render('chats') */ }
      }
    })
  }

  render (): DocumentFragment {
    return this.compile(template, { ...this.props })
  }
}
