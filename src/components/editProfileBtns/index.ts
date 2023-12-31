import template from './editProfileBtns.hbs'
import Block from '../../utils/Block'
import { Button } from '../button'
import { Link } from '../link'

interface EditProfileBtnsProps {
  editing?: boolean
  auth?: boolean
  signin?: boolean
}

export class EditProfileBtns extends Block<EditProfileBtnsProps> {
  init (): void {
    this.children.changeDataBtn = new Button({
      class: 'auth__button edit__submit-btn_password edit__submit-btn',
      label: 'Cохранить',
      type: 'submit'
    })

    this.children.buttonSub = new Button({
      class: 'auth__button auth__button_margin',
      label: this.props.signin ? 'Зарегистрироваться' : 'Войти',
      type: 'submit'
    })

    this.children.buttonLink = new Link({
      class: 'auth__button_reg button',
      label: this.props.signin ? 'Войти' : 'Зарегистрироваться',
      to: this.props.signin ? '/sign-up' : '/'
    })
  }

  render (): DocumentFragment {
    return this.compile(template, this.props)
  }
}
