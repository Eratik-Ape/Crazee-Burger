import { css, keyframes } from "styled-components";
import { theme } from './index';

export const fadeInFromRight = keyframes`
  0% {
    position: absolute;
    z-index: -1;
    opacity: 0;
    transform: translateX(100%);
  }
  
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

export const adminAnimation = css`
.admin-appear {
  opacity: 0.1;
  transform: translateY(100%);
  &.admin-appear-active {
    opacity: 1;
    transform: translateY(0%);
    transition: all 500ms;
  }
}
`

export const basketAnimation = css`
    .animation-basket-appear {
    .card {
      transform: translateX(100px);
      opacity: 0%;
    }
  }
  .animation-basket-appear-active {
    .card {
      transform: translateX(0px);
      opacity: 100%;
      transition: ${theme.animations.speed.quick};
    }
  }

  .animation-basket-enter {
    .card {
      transform: translateX(100px);
      opacity: 0%;
    }
  }
  .animation-basket-enter-active {
    .card {
      transform: translateX(0px);
      opacity: 100%;
      transition: ${theme.animations.speed.quick};
    }
  }

  .animation-basket-exit {
    .card {
      transform: translateX(0px);
      opacity: 100%;
    }
  }
  .animation-basket-exit-active {
    .card {
      transform: translateX(-100px);
      opacity: 0%;
      transition: ${theme.animations.speed.quick};
    }
  }
`