import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import PaginationButton from "./PaginationButton";

type PaginationProps = {
  total: number;
  perPage: number;
  current?: number;
  setCurrent: Function;
};

const Pagination = ({
  total,
  perPage,
  current = 0,
  setCurrent,
}: PaginationProps) => {
  const pages = Math.ceil(total / perPage);
  const prevPage = () => {
    const next = current ? current - 1 : 0;
    goToPage(next);
  };
  const nextPage = () => {
    const next = (current !== pages - 1) ? current + 1 : current;
    goToPage(next);
  };
  const goToPage = (page: number) => {
    setCurrent(page);
  };
  return (
    <div className="flex mt-5 float-right">
      <PaginationButton isNavigationBtn={true} onClick={prevPage}>
        <AiOutlineLeft />
      </PaginationButton>
      {[...Array(pages).keys()].map((page) => (
        <PaginationButton
          key={page}
          isActive={page === current}
          onClick={() => goToPage(page)}
        >
          {page + 1}
        </PaginationButton>
      ))}
      <PaginationButton isNavigationBtn={true} onClick={nextPage}>
        <AiOutlineRight />
      </PaginationButton>
    </div>
  );
};

export default Pagination;
