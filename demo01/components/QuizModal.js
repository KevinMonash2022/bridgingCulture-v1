import { useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomSlangAndOptions(data, optionCount = 3) {
    const currentIndex = getRandomInt(data.length);
    const currentSlang = data[currentIndex];
    const incorrectAnswers = data
        .filter((_, index) => index !== currentIndex)
        .map((item) => item.Description)
        .sort(() => Math.random() - 0.5)
        .slice(0, optionCount - 1);

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
            if (isHardMode && allSlangs.length === 0) {
                fetchAllSlangs().then((data) => {
                    setAllSlangs(data);
                    loadNewQuestion(data);
                });
            } else {
                loadNewQuestion(isHardMode ? allSlangs : data);
            }
        }
    }, [isOpen, isHardMode]);

    const loadNewQuestion = (slangs) => {
        const { currentSlang, options } = getRandomSlangAndOptions(slangs, isHardMode ? 5 : 3);
        setCurrentSlang(currentSlang);
        setOptions(options);
        setIsWrong(false);
    };

    const handleOptionClick = (option) => {
        if (option === currentSlang.Description) {
            setCorrectCount(correctCount + 1);
            loadNewQuestion(isHardMode ? allSlangs : data);
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
                                            className="w-full mt-2 px-4 py-2 rounded bg-red-300 text-white hover:bg-red-400"
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
                                    <p className="mt-2 text-red-300">Mode: Hard - Testing from all slangs</p>
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

export default QuizModal;