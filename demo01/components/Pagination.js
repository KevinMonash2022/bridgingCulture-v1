function Pagination({ currentPage, totalPages, onPageChange }) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="mt-4 flex justify-center">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                className="mx-1 px-3 py-1 rounded bg-red-300 text-white disabled:opacity-50"
            >
                &laquo;
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`mx-1 px-3 py-1 rounded ${page === currentPage ? 'bg-red-300 text-white' : 'bg-gray-200 text-black'
                        }`}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className="mx-1 px-3 py-1 rounded bg-red-300 text-white disabled:opacity-50"
            >
                &raquo;
            </button>
        </div>
    );
}

export default Pagination;
