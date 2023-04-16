import React, { ChangeEvent, FC, memo, MouseEvent, useMemo, useState } from 'react';
import './index.scss';

const PAGINATOR_SIZE = 5;

export const Pagination: FC<IPagination> = memo(props => {
  const { totalCount, pageSize, paginatorSize = PAGINATOR_SIZE, setCurrentPage, setPageSize, currentPage } = props;

  const paginatorCount = Math.ceil(totalCount / paginatorSize);
  const [paginatorNumber, setPaginatorNumber] = useState(1);
  const leftPaginatorPageSize = (paginatorNumber - 1) * paginatorSize + 1;
  const rightPaginatorPageSize = paginatorNumber * paginatorSize;

  const massPages = useMemo(() => {
    const countPages = Math.ceil(totalCount / pageSize);
    const pages: number[] = [];

    for (let i = 1; i <= countPages; i += 1) {
      pages.push(i);
    }

    return pages;
  }, [pageSize, totalCount]);

  const onClickPageHandler = (e: MouseEvent<HTMLButtonElement>): void => {
    setCurrentPage(Number(e.currentTarget.value));
  };

  const onClickNext = (): void => {
    setPaginatorNumber(paginatorNumber + 1);
  };

  const onClickPrev = (): void => {
    setPaginatorNumber(paginatorNumber - 1);
  };

  const onClickPage = (e: ChangeEvent<HTMLSelectElement>) => {
    const clickedValue = Number(e.currentTarget.value);

    if (pageSize !== clickedValue) {
      setPageSize(clickedValue);
      setCurrentPage(1);
    }
  };

  return (
    <div className="pages">
      {paginatorNumber > 1 && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
        <img className="pageArrow" alt="prev" src="/aaccent-shop-test/icons/arrow-left.png" onClick={onClickPrev} />
      )}
      {massPages
        .filter(p => p >= leftPaginatorPageSize && p <= rightPaginatorPageSize)
        .map(p => (
          <button
            key={p}
            value={p}
            type="button"
            onClick={onClickPageHandler}
            className={`page ${currentPage === p ? 'page__active' : ''}`}
          >
            {p}
          </button>
        ))}
      {paginatorNumber < paginatorCount - 1 && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
        <img className="pageArrow" alt="next" src="/aaccent-shop-test/icons/arrow-right.png" onClick={onClickNext} />
      )}
      <select value={pageSize} name="pageSize" id="pageSize" className="pageSize" onChange={onClickPage}>
        <option value="3">3</option>
        <option value="6">6</option>
        <option value="9">9</option>
      </select>
    </div>
  );
});

interface IPagination {
  pageSize: number;
  totalCount: number;
  currentPage: number;
  paginatorSize?: number;
  setPageSize: (pageSize: number) => void;
  setCurrentPage: (currentPage: number) => void;
}
