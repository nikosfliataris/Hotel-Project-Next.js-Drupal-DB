import Link from "next/link";
import styles from "./Pagination.module.scss";
import Pagination from "react-bootstrap/Pagination";
function Paginations({
  lastPage,
  currentPage,
  pathname,
  getParamsLink,
  PaginatedData,
  scrollToSection,
}) {
  return (
    <div className={`${styles.CustomePagination} row-12`}>
      <Pagination>
        {/* pagination */}
        {lastPage > 1 && (
          <div className={styles.paginationList}>
            {/* prev page */}
            {currentPage != 0 && (
              <Pagination.First
                href={`${pathname}${getParamsLink(currentPage - 1)}${
                  scrollToSection ? scrollToSection : ""
                }`}
                onClick={() => {
                  currentPage - 1;
                  PaginatedData();
                }}
              />
            )}

            {/* first page */}
            {currentPage > 0 && (
              <Pagination.Item
                href={`${pathname}${getParamsLink(0)}${
                  scrollToSection ? scrollToSection : ""
                }`}
                onClick={() => {
                  currentPage = 0;
                  PaginatedData();
                }}
              >
                1
              </Pagination.Item>
            )}

            {currentPage >= 1 && lastPage - currentPage >= 1 ? (
              <Pagination.Ellipsis />
            ) : (
              ""
            )}

            {/* current page */}
            <Pagination.Item active>{currentPage + 1}</Pagination.Item>

            {lastPage - currentPage > 2 && <Pagination.Ellipsis />}

            {/* last page */}
            {currentPage + 1 < lastPage && (
              <Pagination.Item
                href={`${pathname}${getParamsLink(lastPage - 1)}${
                  scrollToSection ? scrollToSection : ""
                }`}
                onClick={() => {
                  // setPageIndex(lastPage - 1);
                  lastPage - 1;
                  PaginatedData();
                }}
              >
                {lastPage}
              </Pagination.Item>
            )}

            {/* next page */}
            {currentPage + 1 < lastPage && (
              <Pagination.Last
                href={`${pathname}${getParamsLink(currentPage + 1)}${
                  scrollToSection ? scrollToSection : ""
                }`}
                onClick={() => {
                  currentPage + 1;
                  PaginatedData();
                }}
              />
            )}
          </div>
        )}
        {/* end of pagination */}
      </Pagination>
    </div>
  );
}

export default Paginations;
