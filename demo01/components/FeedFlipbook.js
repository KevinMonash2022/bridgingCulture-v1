import React, { useState, useRef } from "react";
import HTMLFlipBook from 'react-pageflip'
import styles from "../styles/Flipbook.module.css";


const words = [

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


const searchableTitles = new Set([
  "Car", "Caramel", "Cliché", "Data", "Daughter", "Detail", "Entrepreneur", "Garage", "Good day",
  "Hot", "Leisure", "Letter", "Mobile", "Niche", "Privacy", "Salon", "Today", "Tomato",
  "Vase", "Vitamin", "Water", "Yoghurt", "mate", "G'day", "Maccas", "Tinny", "Bikkie",
  "Bottle-O", "Brolly", "Cuppa", "Devo", "Esky", "Footy", "Lollies"
]);

export default function Flipbook() {
  const [searchTerm, setSearchTerm] = useState('');
  const bookRef = useRef();

  const handleSearch = () => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();
    const searchIndex = words.findIndex(entry =>
      entry.left.toLowerCase() === normalizedSearchTerm && searchableTitles.has(entry.left)
    );

    if (searchIndex !== -1 && bookRef.current) {
      bookRef.current.pageFlip().flip(searchIndex, 'top');
    } else {
      alert("Term not found.");
    }
  };


  return (
    <div className="">
      <div className="flex justify-center items-center">
        <div className="mt-4 mb-5 items-center rounded-2xl p-2 w-5/6 border-red-300 border-2 ">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder=" Search for any word within the book. "
            className="w-96 mr-64 p-2"
          />
          <button className="ml-96 text-xl text-white rounded-3xl bg-red-300 p-2 hover:scale-110 transition-transform duration-200 ease-out" onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="flex flex-col mb-20">
        <div className={styles.flipbook}>


          <HTMLFlipBook
            width={400}
            height={300}
            size="stretch"
            minWidth={315}
            maxWidth={640}
            minHeight={300}
            maxHeight={1000}
            ref={bookRef}
            className={styles.book}
          >
            {words.map((word, index) => (
              <div className={styles.page} key={`page-${index}`}>
                <div className={styles.pageContent}>
                  <p>{word.left}</p>  {/* Removed "Left:" */}
                  <p>{word.right}</p> {/* Removed "Right:" */}
                </div>
              </div>
            ))}
          </HTMLFlipBook>
        </div>
      </div>
    </div>
    // <div className="flex flex-col">
    //   <div className="mb-5 rounded-2xl p-2 w-1/4 bg-slate-100">
    //     <input
    //       type="text"
    //       value={searchTerm}
    //       onChange={(e) => setSearchTerm(e.target.value)}
    //       placeholder="Search the book..."
    //     />
    //     <button className="ml-5" onClick={handleSearch}>Search</button>
    //   </div>
    //   <div className={styles.flipbook}>




  )
}