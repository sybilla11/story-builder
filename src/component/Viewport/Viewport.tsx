import DOMPurify from "dompurify";
import styles from "./Viewport.module.scss";
import type { StoryButton } from "../../types/story";

interface ViewportProps {
  title: string;
  linkindex: number;
  body: string;
  img: string;
  isImage: boolean;
  buttons: StoryButton[];
  onButtonClick: (linkindex: number) => void;
}

const Viewport = ({ title, linkindex, body, img, isImage, buttons, onButtonClick }: ViewportProps) => {
  const imgSrc = `${import.meta.env.BASE_URL}${img.replace(/^\//, "")}`;
  // Story bodies ship as bundled app data, not user input, but they're still
  // sanitized since they're rendered as raw HTML.
  const sanitizedBody = DOMPurify.sanitize(body);
  // The layout puts the first button on the right and the second on the
  // left (matches the original design's left/right button placement).
  const [rightButton, leftButton] = buttons;

  return (
    <div className={styles.Frame}>
      <div className={styles.Main}>
        <hr className={styles.TophrLine} />
        <div className={styles.Title}>{title.toUpperCase()}</div>

        {isImage ? (
          <div className={styles.FlexBox}>
            <div className={styles.Body} dangerouslySetInnerHTML={{ __html: sanitizedBody }} />
            <img className={styles.StoryImage} src={imgSrc} alt={`Illustration for "${title}"`} />
          </div>
        ) : (
          <div className={styles.FlexBox}>
            <div className={styles.Body2} dangerouslySetInnerHTML={{ __html: sanitizedBody }} />
          </div>
        )}

        <div className={styles.bottomDiv}>
          {leftButton ? (
            <button
              type="button"
              className={styles.buttonLeft}
              onClick={() => onButtonClick(leftButton.linkindex)}
            >
              {leftButton.text}
            </button>
          ) : null}
          <div className={styles.MiddleDiv} />
          {rightButton ? (
            <button
              type="button"
              className={styles.buttonRight}
              onClick={() => onButtonClick(rightButton.linkindex)}
            >
              {rightButton.text}
            </button>
          ) : null}
        </div>
      </div>
      <div className={styles.rightDiv}>
        <div className={styles.Linkindex}>{linkindex}</div>
        <div className={styles.rightBottomDiv} />
      </div>
    </div>
  );
};

export default Viewport;
