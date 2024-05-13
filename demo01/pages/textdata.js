import { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';
import QuizModal from '../components/QuizModal';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

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
        <div className="">
            <Header />
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    {"G'Day Mate!"}
                    <br /><br />
                    {"Dive Into different Aussie Slangs"}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    {"Explore the quirks of Australian English and master the lingo like a true local"}
                </p>

            </div>
            <div className="p-4 mt-6">
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
                        className="bg-red-300 text-white px-6 py-3 rounded hover:bg-red-400"
                    >
                        Test Your Knowledge
                    </button>
                </div>
                <QuizModal isOpen={isQuizOpen} setIsOpen={setIsQuizOpen} data={data} />
            </div>

            {/* Flow */}
            <div className=" justify-between mx-16 text-4xl text-center my-16 flex -x-8">
                <Link
                    href="/"
                    className="transition-transform duration-300 px-1 text-2xl inline-block py-1 w-full sm:w-fit rounded-full bg-[#EF7B7B] text-white hover:-translate-x-4"
                >
                    <div className="flex items-center">
                        <Image src="/pics/left.svg" alt='back' height={50} width={50} className="invert" />
                        <span className="block rounded-full px-5 py-2 ">
                            Home
                        </span>
                    </div>

                </Link>
                <Link
                    href="/learn"
                    className="transition-transform duration-300 px-1 text-2xl inline-block py-1 w-full sm:w-fit rounded-full bg-[#EF7B7B] text-white hover:translate-x-4"
                >
                    <div className="flex items-center">
                        <span className="block rounded-full px-5 py-2 ">
                            Australian accent
                        </span>
                        <Image src="/pics/right.svg" alt='next' height={50} width={50} className="invert" />
                    </div>
                </Link>
            </div>

            <Footer />
        </div>
    );
}

export default AussieSlangPage;

