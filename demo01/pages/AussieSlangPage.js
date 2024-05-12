import React, { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';
import QuizModal from '../components/QuizModal';
import Header from '../components/Header';
import Footer from '../components/Footer';

export async function getServerSideProps({ query, req }) {
    const letter = query.letter || '';
    const search = query.search || '';
    const page = parseInt(query.page) || 1;
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers.host;
    const baseUrl = `${protocol}://${host}`;
    const res = await fetch(`${baseUrl}/api/aussieSlang?letter=${letter}&page=${page}&pageSize=40&search=${search}`);
    const { data, total } = await res.json();

    return {
        props: { data, letter, search, total, page },
    };
}

function AussieSlangPage({ data, letter, search, total, page }) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    const [selectedLetter, setSelectedLetter] = useState(letter);
    const [searchTerm, setSearchTerm] = useState(search);
    const [isQuizOpen, setIsQuizOpen] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);
    const totalPages = Math.ceil(total / 40);

    useEffect(() => {
        setHasMounted(true);
    }, []);

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

    if (!hasMounted) return null;

    return (
        <>
            <Header />
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
                    <button type="submit" className="bg-red-300 text-white px-4 py-2 rounded">
                        Search
                    </button>
                </form>
                <div className="mb-4 flex flex-wrap">
                    {alphabet.map((char) => (
                        <button
                            key={char}
                            onClick={() => handleFilterClick(char)}
                            className={`mr-2 mb-2 px-4 py-2 rounded ${selectedLetter === char ? 'bg-red-300 text-white' : 'bg-gray-200 text-black'
                                }`}
                        >
                            {char}
                        </button>
                    ))}
                    <button
                        onClick={() => handleFilterClick('all')}
                        className={`mr-2 mb-2 px-4 py-2 rounded ${selectedLetter === 'all' ? 'bg-red-300 text-white' : 'bg-gray-200 text-black'
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
                <div className="mt-8 flex justify-center">
                    <button
                        onClick={() => setIsQuizOpen(true)}
                        className="bg-red-300 text-white px-6 py-3 rounded hover:bg-blue-600"
                    >
                        Test Your Knowledge
                    </button>
                </div>
                <QuizModal isOpen={isQuizOpen} setIsOpen={setIsQuizOpen} data={data} />
            </div>
            <Footer />
        </>
    );
}

export default AussieSlangPage;
