import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export async function getServerSideProps({ query, req }) {
    const letter = query.letter || '';
    const search = query.search || '';
    const page = parseInt(query.page) || 1;


    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers.host;
    const baseUrl = `${protocol}://${host}`;


    const res = await fetch(`${baseUrl}/api/aussieSlang?letter=${letter}&page=${page}&pageSize=40&search=${search}`);
    const { data, total } = await res.json();
    console.log('API Request URL:', `${baseUrl}/api/aussieSlang?letter=${letter}&page=${page}&pageSize=40&search=${search}`);
    console.log('API Response:', data, total);

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
                    className={`mx-1 px-3 py-1 rounded ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
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

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomSlangAndOptions(data) {
    const currentIndex = getRandomInt(data.length);
    const currentSlang = data[currentIndex];
    const incorrectAnswers = data
        .filter((_, index) => index !== currentIndex)
        .map((item) => item.Description)
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);

    const options = [currentSlang.Description, ...incorrectAnswers].sort(() => Math.random() - 0.5);

    return { currentSlang, options };
}

async function fetchAllSlangs() {
    const res = await fetch('/api/allSlangs');
    return await res.json();
}

function QuizModal({ isOpen, setIsOpen, data }) {
    const [currentSlang, setCurrentSlang] = useState(null);
    const [options, setOptions] = useState([]);
    const [correctCount, setCorrectCount] = useState(0);
    const [isWrong, setIsWrong] = useState(false);
    const [isHardMode, setIsHardMode] = useState(false);
    const [allSlangs, setAllSlangs] = useState([]);

    useEffect(() => {
        if (isOpen) {
            loadNewQuestion();
            if (isHardMode && allSlangs.length === 0) {
                fetchAllSlangs().then((data) => setAllSlangs(data));
            }
        }
    }, [isOpen, isHardMode]);

    const loadNewQuestion = () => {
        const dataSource = isHardMode && allSlangs.length > 0 ? allSlangs : data;
        const { currentSlang, options } = getRandomSlangAndOptions(dataSource);
        setCurrentSlang(currentSlang);
        setOptions(options);
        setIsWrong(false);
    };

    const handleOptionClick = (option) => {
        if (option === currentSlang.Description) {
            setCorrectCount(correctCount + 1);
            loadNewQuestion();
        } else {
            setIsWrong(true);
        }
    };

    const toggleMode = () => {
        setIsHardMode(!isHardMode);
        setCorrectCount(0);
    };

    if (!currentSlang) return null;

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    Quiz: Test Your Knowledge
                                </Dialog.Title>
                                <p className="mt-2">
                                    <strong>Slang:</strong> {currentSlang.Slang}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                    What is the meaning of this slang?
                                </p>
                                <div className="mt-4">
                                    {options.map((option, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleOptionClick(option)}
                                            className="w-full mt-2 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                                {isWrong && (
                                    <p className="mt-2 text-red-500">Incorrect! Please try again.</p>
                                )}
                                <p className="mt-4">
                                    <strong>Correct Answers:</strong> {correctCount}
                                </p>
                                {isHardMode && (
                                    <p className="mt-2 text-blue-500">Mode: Hard - Testing from all slangs</p>
                                )}
                                <div className="mt-4">
                                    <button
                                        type="button"
                                        onClick={toggleMode}
                                        className="inline-flex justify-center rounded-md border border-transparent bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600"
                                    >
                                        {isHardMode ? 'Switch to Easy Mode' : 'Switch to Hard Mode'}
                                    </button>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
                                    >
                                        Close
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>

    );
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
                        className={`mr-2 mb-2 px-4 py-2 rounded ${selectedLetter === char ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
                            }`}
                    >
                        {char}
                    </button>
                ))}
                <button
                    onClick={() => handleFilterClick('all')}
                    className={`mr-2 mb-2 px-4 py-2 rounded ${selectedLetter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
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
                    className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
                >
                    Test Your Knowledge
                </button>
            </div>
            <QuizModal isOpen={isQuizOpen} setIsOpen={setIsQuizOpen} data={data} />
        </div>
    );
}

export default AussieSlangPage;