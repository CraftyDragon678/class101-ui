import { range } from 'lodash';
import React from 'react';
import styled, { css } from 'styled-components';

import { ChevronLeft, ChevronRight } from '../../Icon';
import { Button, ButtonColor, IconButton } from '../Button';

export interface PaginationProps {
  totalPageIndex: number;
  currentPageIndex: number;
  onChange?: (pageIndex: number) => void;
}

const Pagination: React.SFC<PaginationProps> = ({ totalPageIndex, currentPageIndex, onChange }) => {
  const handleChange = (pageIndex: number) => () => {
    if (onChange) {
      onChange(pageIndex);
    }
  };

  const handleIncrease = handleChange(currentPageIndex + 1);
  const handleDecrease = handleChange(currentPageIndex - 1);

  const indexList = range(0, totalPageIndex + 1);

  return (
    <PageWrapper>
      <PageIconBtn icon={<ChevronLeft />} onClick={handleDecrease} disabled={currentPageIndex <= 0} />
      {indexList.map((_, i) => (
        <PageBtn
          color={i === currentPageIndex ? ButtonColor.ORANGE : ButtonColor.WHITE}
          size="sm"
          onClick={handleChange(i)}
        >
          {i + 1}
        </PageBtn>
      ))}
      <PageIconBtn icon={<ChevronRight />} onClick={handleIncrease} disabled={currentPageIndex >= totalPageIndex} />
    </PageWrapper>
  );
};

export default Pagination;

const PageWrapper = styled.div``;

const PageMargin = css`
  margin: 5px;
`;

const PageBtn = styled(Button)`
  ${PageMargin};
`;

const PageIconBtn = styled(IconButton)`
  ${PageMargin};
`;
