import { useState } from 'react';

export async function getServerSideProps({ query }) {
    const letter = query.letter || '';
    const search = query.search || '';
    const page = parseInt(query.page) || 1;
    const res = await fetch(`http://localhost:3000/api/aussieSlang?letter=${letter}&page=${page}&pageSize=40&search=${search}`);
    const { data, total } = await res.json();
    return {
        props: { data, letter, search, total, page }, // will be passed to the page component as props
    };
}

function Pagination({ currentPage, totalPages, onPageChange }) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="mt-4 flex justify-center">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                className="mx-1 px-3 py-1 rounded bg-blue-500 text-white disabled:opacity-50"
            >
                &laquo;
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`mx-1 px-3 py-1 rounded ${
                        page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                    }`}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className="mx-1 px-3 py-1 rounded bg-blue-500 text-white disabled:opacity-50"
            >
                &raquo;
            </button>
        </div>
    );
}

function AussieSlangPage({ data, letter, search, total, page }) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    const [selectedLetter, setSelectedLetter] = useState(letter);
    const [searchTerm, setSearchTerm] = useState(search);
    const totalPages = Math.ceil(total / 40);

    const handleFilterClick = (char) => {
        setSelectedLetter(char);
        setSearchTerm('');
        window.location.href = `/textdata?letter=${char}`;
    };

    const handlePageChange = (page) => {
        window.location.href = `/textdata?letter=${selectedLetter}&page=${page}&search=${searchTerm}`;
    };

    const handleSearch = (e) => {
        e.preventDefault();
        window.location.href = `/textdata?search=${searchTerm}`;
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Australian Slangs</h1>
            <form onSubmit={handleSearch} className="mb-4 flex items-center">
                <input
                    type="text"
                    placeholder="Search for a slang..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border rounded px-4 py-2 mr-2 w-full md:w-1/3"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Search
                </button>
            </form>
            <div className="mb-4 flex flex-wrap">
                {alphabet.map((char) => (
                    <button
                        key={char}
                        onClick={() => handleFilterClick(char)}
                        className={`mr-2 mb-2 px-4 py-2 rounded ${
                            selectedLetter === char ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                        }`}
                    >
                        {char}
                    </button>
                ))}
                <button
                    onClick={() => handleFilterClick('all')}
                    className={`mr-2 mb-2 px-4 py-2 rounded ${
                        selectedLetter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                    }`}
                >
                    All
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {data.length > 0 ? (
                    data.map((record, index) => (
                        <div key={index} className="border rounded p-4 bg-white shadow">
                            <p><strong>Slang:</strong> {record.Slang}</p>
                            <p><strong>Description:</strong> {record.Description}</p>
                        </div>
                    ))
                ) : (
                    <div className="col-span-2 text-center">No results found</div>
                )}
            </div>
            <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
}

export default AussieSlangPage;
