import React from "react";
import styles from "./Viewport.module.scss";

const Viewport = (props) => {
  return (
    <div className={styles.Frame}>
     <div class="leaf">
     <div>  <img src="http://www.pngmart.com/files/1/Fall-Autumn-Leaves-Transparent-PNG.png" height="75px" width="75px"></img></div>
     <div><img src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png" height="75px" width="75px"></img></div></div>
      <div className={styles.Main}>
        <hr className={styles.TophrLine} align="left" />
        <div className={styles.Title}>{props.title.toUpperCase()}</div>

        {props.isImage ? (
          <div className={styles.FlexBox}>
            <div
              className={styles.Body}
              dangerouslySetInnerHTML={{ __html: props.body }}
            ></div>
            <img className={styles.StoryImage} src={process.env.PUBLIC_URL+props.img} alt="My story" />
          </div>
        ) : (
          <div className={styles.FlexBox}>
            <div
              className={styles.Body2}
              dangerouslySetInnerHTML={{ __html: props.body }}
            ></div>
          </div>
        )}

        <div className={styles.bottomDiv}>
          {props.buttonLeft ? (
            <div
              className={styles.buttonLeft}
              onClick={() => props.buttonOnclick(props.buttonLeftIndx)}
            >
              {props.buttonLeftTitle}
            </div>
          ) : null}
          <div className={styles.MiddleDiv}></div>
          {props.buttonRight ? (
            <div
              className={styles.buttonRight}
              onClick={() => props.buttonOnclick(props.buttonRightIndx)}
            >
              {props.buttonRightTitle}
            </div>
          ) : null}
        </div>
      </div>
      <div className={styles.rightDiv}>
        <div className={styles.Linkindex}> {props.linkindex}</div>
        <div className={styles.rightBottomDiv}></div>
      </div>
    </div>
  );
};

export default Viewport;
