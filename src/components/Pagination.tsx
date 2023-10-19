import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAppContext } from "../AppContext";

interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
    totalItems,
    itemsPerPage,
}) => {
    const { pageNumber = "1" } = useParams<{ pageNumber: string }>();
    const currentPage = parseInt(pageNumber, 10) || 1;

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const generatePageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <li
                    className={`page-item ${i === currentPage ? "active" : ""}`}
                    key={i}
                >
                    <Link className="page-link" to={`/page/${i}`}>
                        {i}
                    </Link>
                </li>
            );
        }
        return pages;
    };

    console.log(generatePageNumbers())
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li
                    className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                    }`}
                >
                    <Link className="page-link" to={`/page/${currentPage - 1}`}>
                        Previous
                    </Link>
                </li>
                <div>{generatePageNumbers()}</div>
                <li
                    className={`page-item ${
                        currentPage === totalPages ? "disabled" : ""
                    }`}
                >
                    <Link className="page-link" to={`/page/${currentPage + 1}`}>
                        Next
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
