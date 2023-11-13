import Block from '../../utils/Block';
import template from './editBtn.hbs';

interface ButtonProps {
  label?: string;
  type?: 'submit' | 'button',
  class?: string;
  onClick?: () => void;
  events?: {
    click: () => void;
  };
}

export class editBtn extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super({ type: 'button', ...props });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}