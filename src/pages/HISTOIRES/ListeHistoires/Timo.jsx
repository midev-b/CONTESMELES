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
    console.log(currentIndex);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => prev - 1);
    setIsNextClicked(false);
    console.log(currentIndex);
  };

  const flipPage = (nextOrPrev) => {
    console.log(currentIndex);
    if (nextOrPrev === "next") {
      handleNext();
    } else {
      handlePrevious();
    }
  };

  return (
    <div className={styles.container}>
      {text.map((el, i) => (
        <div
          className={`${styles.imageText} ${
            isNextClicked && (i === currentIndex || i < currentIndex)
              ? styles.flip
              : styles.notFlip
          }`}
          key={i}
        >
          <div className={`${styles.page1} ${!el.image1 && styles.backgrd}`}>
            <p dangerouslySetInnerHTML={stringToHTML(el.text1)}></p>
            {el.image1 && <img src={el.image1} alt="Left Image" />}
            <button onClick={() => flipPage("next")}>Next</button>
          </div>

          <div className={`${styles.page2} ${!el.image2 && styles.backgrd}`}>
            {el.text2 && (
              <p dangerouslySetInnerHTML={stringToHTML(el.text2)}></p>
            )}
            {el.image2 && <img src={el.image2} alt="Right Image" />}
            <button onClick={() => flipPage("previous")}>Previous</button>
          </div>
        </div>
      ))}
    </div>
  );
}
