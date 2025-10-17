import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    const handlePrev = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <nav aria-label="Pagination" className="mt-12 flex justify-center">
            <ul className="flex items-center -space-x-px h-10 text-base">
                <li>
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        aria-label="Página anterior"
                    >
                        <span className="sr-only">Previous</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                    </button>
                </li>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <button
                            onClick={() => onPageChange(number)}
                            aria-current={currentPage === number ? 'page' : undefined}
                            className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 transition-colors ${
                                currentPage === number
                                    ? 'z-10 text-white bg-inverland-blue border-inverland-blue'
                                    : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
                            }`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        aria-label="Siguiente página"
                    >
                        <span className="sr-only">Next</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
