import React from 'react';
import styled from 'styled-components';

import { ChevronRight } from '../../../Icon';

export const ArrowNavigation = () => {
  return (
    <>
      <Button className="swiper-button-prev">
        <ChevronRight fillColor="white" />
      </Button>
      <Button className="swiper-button-next">
        <ChevronRight fillColor="white" />
      </Button>
    </>
  );
};

const Button = styled.button`
  &.swiper-button-prev,
  &.swiper-button-next {
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    position: absolute;
    width: 48px;
    margin-top: 0;
    top: 0;
    height: 100%;
    border: 0;
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.15));

    svg {
      flex: none;
    }
  }

  &.swiper-button-disabled {
    pointer-events: auto;
    cursor: not-allowed;
  }

  &.swiper-button-prev {
    left: 0;
    transform: rotate(-180deg);
  }

  &.swiper-button-next {
    right: 0;
  }
`;
