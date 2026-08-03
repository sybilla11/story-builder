import styles from "./Viewport.module.scss";

interface ViewportProps {
  title: string;
  linkindex: number;
  body: string;
  img: string;
  isImage: boolean;
  buttonLeft: boolean;
  buttonLeftTitle: string;
  buttonLeftIndx: number;
  buttonRight: boolean;
  buttonRightTitle: string;
  buttonRightIndx: number;
  buttonOnclick: (index: number) => void;
}

const Viewport = ({
  title,
  linkindex,
  body,
  img,
  isImage,
  buttonLeft,
  buttonLeftTitle,
  buttonLeftIndx,
  buttonRight,
  buttonRightTitle,
  buttonRightIndx,
  buttonOnclick,
}: ViewportProps) => {
  const imgSrc = `${import.meta.env.BASE_URL}${img.replace(/^\//, "")}`;

  return (
    <div className={styles.Frame}>
      <div className={styles.Main}>
        <hr className={styles.TophrLine} />
        <div className={styles.Title}>{title.toUpperCase()}</div>

        {isImage ? (
          <div className={styles.FlexBox}>
            <div className={styles.Body} dangerouslySetInnerHTML={{ __html: body }} />
            <img className={styles.StoryImage} src={imgSrc} alt={`Illustration for "${title}"`} />
          </div>
        ) : (
          <div className={styles.FlexBox}>
            <div className={styles.Body2} dangerouslySetInnerHTML={{ __html: body }} />
          </div>
        )}

        <div className={styles.bottomDiv}>
          {buttonLeft ? (
            <div className={styles.buttonLeft} onClick={() => buttonOnclick(buttonLeftIndx)}>
              {buttonLeftTitle}
            </div>
          ) : null}
          <div className={styles.MiddleDiv} />
          {buttonRight ? (
            <div className={styles.buttonRight} onClick={() => buttonOnclick(buttonRightIndx)}>
              {buttonRightTitle}
            </div>
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
