import React, { Component } from 'react';
import styles from './directory.module.scss';
import STORY_HALLOWEEN from './themes/halloween.data'; 
import STORY_CHRISTMAS from './themes/christmas.data'; 
import STORY_EASTER from './themes/easter.data'; 
import Select from 'react-select';
class Directory extends Component {
    constructor(){
        super();

        this.state = {
            sections: [
                {
                    label:'halloween',
                    value:STORY_HALLOWEEN
                },
                {
                    label:'christmas',
                    value:STORY_CHRISTMAS
                },
                {
                    label:'easter',
                    value:STORY_EASTER
                }
            ]
        }
    }
    render() {
        return (
            <div className={styles.select_dropdown}>
               <Select options={this.state.sections} /> 
            </div>
        );
    }
}

export default Directory;