import { Component, OnInit, Input } from '@angular/core';

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum ColorButton {
  HYDROGEN = 'hydrogen',
  CARBON = 'carbon',
  OXYGEN = 'oxygen',
  NITROGEN = 'nitrogen',
  NEUTRAL = 'neutral',
}

export enum ButtonLevel {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  GHOST = 'ghost',
}

@Component({
  selector: 'floax-button',
  templateUrl: './floax-button.component.html',
  styleUrls: ['./floax-button.component.scss'],
})
export class FloaxButtonComponent implements OnInit {
  @Input() color?: string;
  @Input() level?: string;
  @Input() size?: string;
  @Input() iconBefore?: string;
  @Input() iconAfter?: string;
  @Input() callBackFunctionOnClick?: (args?: any) => void;
  @Input() type?: string = 'submit';
  @Input() isDisabled = false;

  colorButton?: ColorButton;
  levelButton?: ButtonLevel;
  sizeButton?: ButtonSize;

  constructor() {}

  ngOnInit(): void {
    switch (this.color) {
      case 'hydrogen':
        this.colorButton = ColorButton.HYDROGEN;
        break;
      case 'carbon':
        this.colorButton = ColorButton.CARBON;
        break;
      case 'oxygen':
        this.colorButton = ColorButton.OXYGEN;
        break;
      case 'nitrogen':
        this.colorButton = ColorButton.NITROGEN;
        break;
      case 'neutral':
        this.colorButton = ColorButton.NEUTRAL;
        break;
      default:
        this.colorButton = ColorButton.HYDROGEN;
    }

    switch (this.level) {
      case ButtonLevel.SECONDARY:
        this.levelButton = ButtonLevel.SECONDARY;
        break;
      case ButtonLevel.GHOST:
        this.levelButton = ButtonLevel.GHOST;
        break;
      default:
        this.levelButton = ButtonLevel.PRIMARY;
    }

    switch (this.size) {
      case ButtonSize.SMALL:
        this.sizeButton = ButtonSize.SMALL;
        break;
      case ButtonSize.MEDIUM:
        this.sizeButton = ButtonSize.MEDIUM;
        break;
      case ButtonSize.LARGE:
        this.sizeButton = ButtonSize.LARGE;
        break;
      default:
        this.sizeButton = ButtonSize.MEDIUM;
    }
  }

  onClick() {
    if (this.callBackFunctionOnClick) this.callBackFunctionOnClick();
  }
}
