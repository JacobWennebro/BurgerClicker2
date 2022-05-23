import React, { Component } from 'react'

export default class LevelBar extends Component<{xp: number, level: number}> {
    private level = this.props.level;
    
    constructor(props: any) {
        super(props);
        

    }

    render() {
        return (
            <div data-xp={this.props.xp} className="level-bar">
                <div style={{width: (((Math.round(this.props.xp)/(100*this.props.level)) / this.props.level)*100)+"%"}} className="level-bar__progress">
                    <span>Level {this.props.level}</span>
                </div>
            </div>
        )
    }
}
