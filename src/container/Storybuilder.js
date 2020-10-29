import React, { Component } from "react";
import Viewport from "../component/Viewport/Viewport";
import styles from "../component/Viewport/Viewport.module.css";
import axios from 'axios'

class StoryBuilder extends Component {
  state = {
    loaded: false,
    isFirst: true,
    isEmpty: false,
    items: [],
    item: null,
    error: null,
    linkindex: 0,
  };
  buttonOnclickHandler = (indx) => {
    let item = this.state.items[indx];
    this.setState({
      linkindex: indx + 1,
      item: item,
    });
  };
  componentDidMount() {
    axios
      .get("data/story.json")
      .then((response) => {
        console.log(response.data);
        if(response.data.length ===0){
          this.setState({
            isLoaded: true,
            isEmpty: true,
          });
        }else{
          this.setState({
            isLoaded: true,
            items: response.data.frames,
            linkindex: 1,
            item: response.data.frames[0],
          });
        }
      })
      .catch((error) => {
        console.log(error);
          this.setState({
            isLoaded: true,
            error:'error'
          });
      });
  }
    // fetch("data/empty.json")
    // //fetch("data/story.json")
    //   .then((res) => {
    //   console.log('res', res)
    //   return res.json();
    //   }
    //   )
    //   .then(
    //     (result) => {
    //       console.log('result: '+result.length);
    //       //checking empty json file. use (/data/empty.json) to test this scenario
    //       if (result.length === 0) {
    //         this.setState({
    //           isLoaded: true,
    //           isEmpty: true,
    //         });
    //       } else if (result.frames.length > 0) {
    //         this.setState({
    //           isLoaded: true,
    //           items: result.frames,
    //           linkindex: 1,
    //           item: result.frames[0],
    //         });
    //       }
    //     },
    //     (error) => {
    //       console.log(error);
    //       this.setState({
    //         isLoaded: true,
    //         error:'error'
    //       });
    //     }
    //   );
  
  render() {
    const { error, isLoaded, item, isEmpty } = this.state;

    if (error) {
      console.log(error);
      //error scenario
      return <div> Error: {error.message}</div>;
    } else if (!isLoaded) {
      console.log('isLoaded');
      //dislay intil content loaded
      return (
        <div className={styles.loadingFrame}>
          <div className={styles.loading}>LOADING</div>
        </div>
      );
    } else if (isEmpty) {
      console.log('is empty');
      //if Ajax call return empty json.
      return (
        <div className={styles.loadingFrame}>
          <div className={styles.loading}>No Content</div>
        </div>
      );
    } else {
      // happy path
      //console.log('item: '+item);
      const styleMain = {
        backgroundColor: item.colors.bg,
        textColors: item.colors.text,
      };
     // console.log("item: " + item);
      return (
        <div style={styleMain}>
          {/* View port component which has static elements of code */}
          <Viewport
            title={item.title}
            linkindex={this.state.linkindex}
            text={this.state.item.title}
            body={this.state.item.body}
            img={this.state.item.img !== undefined ? this.state.item.img : ""}
            styleMain={styleMain}
            buttonLeft={this.state.item.buttons.length > 1}
            buttonRight={this.state.item.buttons.length >= 1}
            buttonRightTitle={
              this.state.item.buttons.length >= 1
                ? this.state.item.buttons[0].text
                : ""
            }
            buttonRightIndx={
              this.state.item.buttons.length >= 1
                ? this.state.item.buttons[0].linkindex
                : ""
            }
            buttonLeftTitle={
              this.state.item.buttons.length > 1
                ? this.state.item.buttons[1].text
                : ""
            }
            buttonLeftIndx={
              this.state.item.buttons.length > 1
                ? this.state.item.buttons[1].linkindex
                : ""
            }
            buttonOnclick={this.buttonOnclickHandler}
            isImage={this.state.item.img !== undefined}
          />
        </div>
      );
    }
  }
}

export default StoryBuilder;
