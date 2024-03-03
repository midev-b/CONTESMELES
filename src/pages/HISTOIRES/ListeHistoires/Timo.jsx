import styles from "./Timo.module.css";
import text from "./timo.js";
import { useState } from "react";

function stringToHTML(htmlString) {
  return { __html: htmlString };
}

export function Timo() {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isNextClicked, setIsNextClicked] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
    setIsNextClicked(true);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => prev - 1);
    setIsNextClicked(false);
  };

  const flipPage = (nextOrPrev) => {
    console.log(currentIndex);
    if (nextOrPrev === "next") {
      return handleNext();
    } else {
      return handlePrevious();
    }
  };

  return (
    <div className={styles.container}>
      {text.map((el, i) => {
        if (el.imageLeft === undefined || el.imageRight === undefined) {
          return (
            <div
              className={`${styles.imageText}  ${
                isNextClicked && (i === currentIndex || i < currentIndex)
                  ? styles.flip
                  : styles.notFlip
              }`}
              key={i}
            >
              <div
                className={`${styles.page1} ${styles.backgrd}
                `}
              >
                <p dangerouslySetInnerHTML={stringToHTML(el.text1)}></p>
                <button onClick={() => flipPage("next")}>Next</button>
              </div>
              <div className={`${styles.page2} ${styles.backgrd}`}>
                <p dangerouslySetInnerHTML={stringToHTML(el.text2)}></p>
                <button onClick={() => flipPage("previous")}>Previous</button>
              </div>
            </div>
          );
        } else {
          return (
            <div
              className={`${styles.imageText} ${
                isNextClicked && (i === currentIndex || i < currentIndex)
                  ? styles.flip
                  : styles.notFlip
              }`}
              key={i}
            >
              <div className={`${styles.page1}`}>
                <p dangerouslySetInnerHTML={stringToHTML(el.text1)}></p>
                <img src={el.imageLeft} alt="Left Image" />
                <button onClick={() => flipPage("next")}>Next</button>
              </div>

              <div className={`${styles.page2}`}>
                <p dangerouslySetInnerHTML={stringToHTML(el.text2)}></p>
                <img src={el.imageRight} alt="Right Image" />
                <button onClick={() => flipPage("previous")}>Previous</button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}
