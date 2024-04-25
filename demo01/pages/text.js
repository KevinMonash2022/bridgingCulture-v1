// pages/index.js
import React, { useState, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import styles from "../styles/Flipbook.module.css";


const words = [
  { left: "Welcome to aussie pronunciation dictionary", right: "Click the right side of the page to turn the page" },
  { left: "Standard English words on the left side of the page", right: "The English phonetic symbols of aussie are on the right side of the page." },
  { left: "Car", right: "Caa: The end r is not pronounced" },
  { left: "Caramel", right: "Ca-ra-mel" },
  { left: "Cliché", right: "Clee-shay" },
  { left: "Data", right: "Daa-ta" },
  { left: "Daughter", right: "Daugh-ter: The hard t is pronounced and the end r is not pronounced" },
  { left: "Detail", right: "Dee-tail" },
  { left: "Entrepreneur", right: "Ont-re-pre-ner" },
  { left: "Garage", right: "Gaa-rage: Emphasis on the 1st syllable rather than the 2nd" },
  { left: "Good day", right: "G'day" },
  { left: "Hot", right: "Hawt" },
  { left: "Leisure", right: "Ley-jher" },
  { left: "Letter", right: "Le-dder: The end r is not pronounced" },
  { left: "Mobile", right: "Mo-byle" },
  { left: "Niche", right: "Neesh" },
  { left: "Privacy", right: "Pry-vacy" },
  { left: "Salon", right: "Saa-lon" },
  { left: "Today", right: "To-diee" },
  { left: "Tomato", right: "To-mah-to" },
  { left: "Vase", right: "Vaa-se" },
  { left: "Vitamin", right: "Vy-tamin" },
  { left: "Water", right: "Wa-der: The end r is not pronounced" },
  { left: "Yoghurt", right: "Yoh-gurt: Silent h" },
  { left: "mate", right: "mayt" },
  { left: "G'day", right: "gid-day" },
  { left: "Maccas", right: "mac-as" },
  { left: "Tinny", right: "tin-nee" },
  { left: "Bikkie", right: "bik-kee" },
  { left: "Bottle-O", right: "bottle-oh" },
  { left: "Brolly", right: "brol-lee" },
  { left: "Cuppa", right: "cup-pa" },
  { left: "Devo", right: "dev-oh" },
  { left: "Esky", right: "es-kee" },
  { left: "Footy", right: "foot-ee" },
  { left: "Lollies", right: "lol-lees" }
];

export default function Flipbook() {
  const [currentPage, setCurrentPage] = useState(0);
  const bookRef = useRef();

  const handlePrevPage = () => {
    if (bookRef.current) {
      bookRef.current.getPageFlip().flipPrev();
      setCurrentPage(bookRef.current.getPageFlip().getCurrentPageIndex());
    }
  };

  const handleNextPage = () => {
    if (bookRef.current) {
      bookRef.current.getPageFlip().flipNext();
      setCurrentPage(bookRef.current.getPageFlip().getCurrentPageIndex());
    }
  };


  const pages = words.flatMap((word) => [
    { content: word.left, type: 'left' },
    { content: word.right, type: 'right' }
  ]);

  return (
    <div className={styles.flipbook}>
      <HTMLFlipBook
        width={400}
        height={300}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={300}
        maxHeight={1000}
        ref={bookRef}
        onFlip={(e) => setCurrentPage(e.data)}
        className={styles.book}
      >
        {pages.map((page, index) => (
          <div className={styles.page} key={index}>
            <div className={styles.pageContent}>
              {page.content}
            </div>
          </div>
        ))}
      </HTMLFlipBook>
      {/*  */}
    </div>
  );
}