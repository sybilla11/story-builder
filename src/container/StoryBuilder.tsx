import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { Link, useParams } from "react-router";
import Viewport from "../component/Viewport/Viewport";
import styles from "../component/Viewport/Viewport.module.scss";
import { useStory } from "../hooks/useStory";

const StoryBuilder = () => {
  const { theme } = useParams<{ theme?: string }>();
  const { status, frames, error } = useStory(theme);
  const [frameIndex, setFrameIndex] = useState(0);
  const [linkindex, setLinkindex] = useState(1);

  useEffect(() => {
    setFrameIndex(0);
    setLinkindex(1);
  }, [theme]);

  const handleButtonClick = (targetIndex: number) => {
    setFrameIndex(targetIndex);
    setLinkindex(targetIndex + 1);
  };

  const withHomeLink = (content: ReactNode) => (
    <>
      <Link to="/" className={styles.homeLink}>
        ← Home
      </Link>
      {content}
    </>
  );

  if (status === "error") {
    return withHomeLink(
      <div className={styles.loadingFrame}>
        <div className={styles.loading}>Error: {error}</div>
      </div>,
    );
  }

  if (status === "loading") {
    return withHomeLink(
      <div className={styles.loadingFrame}>
        <div className={styles.loading}>LOADING</div>
      </div>,
    );
  }

  if (status === "empty") {
    return withHomeLink(
      <div className={styles.loadingFrame}>
        <div className={styles.loading}>No Content</div>
      </div>,
    );
  }

  const item = frames[frameIndex];
  const styleMain: CSSProperties = {
    backgroundColor: item.colors.bg,
    color: item.colors.text,
  };

  return withHomeLink(
    <div style={styleMain}>
      <Viewport
        title={item.title}
        linkindex={linkindex}
        body={item.body}
        img={item.img ?? ""}
        isImage={item.img !== undefined}
        buttonLeft={item.buttons.length > 1}
        buttonLeftTitle={item.buttons.length > 1 ? item.buttons[1].text : ""}
        buttonLeftIndx={item.buttons.length > 1 ? item.buttons[1].linkindex : 0}
        buttonRight={item.buttons.length >= 1}
        buttonRightTitle={item.buttons.length >= 1 ? item.buttons[0].text : ""}
        buttonRightIndx={item.buttons.length >= 1 ? item.buttons[0].linkindex : 0}
        buttonOnclick={handleButtonClick}
      />
    </div>,
  );
};

export default StoryBuilder;
