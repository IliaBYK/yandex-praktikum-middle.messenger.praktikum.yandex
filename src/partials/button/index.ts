import Block from '../../utils/Block';
import template from './button.hbs';

interface ButtonProps {
  content?: boolean;
  label?: string;
  type?: 'submit' | 'button',
  href?: string;
  class?: string;
  onClick?: (e?: Event) => void;
  events?: {
    click: (e?: Event) => void;
  };
}

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super({ type: 'button', ...props });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}