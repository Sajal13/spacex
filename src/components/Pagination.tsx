import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { useAppContext } from "../AppContext";

const Pagination: React.FC = () => {
    const { currentPage, totalItems, itemsPerPage, setCurrentPage } =
        useAppContext();
    const { pageNumber = "1" } = useParams<{ pageNumber: string }>();
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageClick = (page: any) => {
        if (page >= 1) {
            setCurrentPage(page);
        }
        return;
    };

    const generatePageNumbers = () => {
        const pages = [];
        const displayPages = 5;
        for (let i = 1; i <= totalPages; i++) {
            if (
                i === currentPage ||
                (i >= currentPage - displayPages &&
                    i <= currentPage + displayPages)
            ) {
                pages.push(
                    <li
                        key={i}
                        className={
                            i === currentPage ? "page-item active" : "page-item"
                        }
                    >
                        <Link
                            to={`/${i}`}
                            className="page-link"
                            onClick={() => handlePageClick(i)}
                        >
                            {i}
                        </Link>
                    </li>
                );
            }
        }

        if (currentPage + displayPages < totalPages - 1) {
            pages.push(
                <li key="last-page" className="page-item disabled">
                    <span className="page-link">...</span>
                </li>,
                <li key={totalPages} className="page-item">
                    <Link
                        to={`/${totalPages}`}
                        className="page-link"
                        onClick={() => handlePageClick(totalPages)}
                    >
                        {totalPages}
                    </Link>
                </li>
            );
        }

        return pages;
    };

    useEffect(() => {
        setCurrentPage(parseInt(pageNumber));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNumber]);
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination d-flex justify-content-center">
                {currentPage > 1 && (
                    <li className="page-item">
                        <Link
                            to={`/${currentPage - 1}`}
                            className="page-link"
                            onClick={() => handlePageClick(currentPage - 1)}
                        >
                            <BsChevronLeft />
                        </Link>
                    </li>
                )}
                {generatePageNumbers()}
                {currentPage < 13 && totalItems > 1 && (
                    <li className="page-item">
                        <Link
                            to={`/${currentPage + 1}`}
                            className="page-link"
                            onClick={() => handlePageClick(currentPage + 1)}
                        >
                            <BsChevronRight />
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default React.memo(Pagination);
