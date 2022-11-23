import React, { Component } from 'react';
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
import './firebase-utils';

const scheduler = window.scheduler;

export default class Scheduler extends Component{
    componentDidMount(){
        scheduler.skin = 'material';
        scheduler.config.header = [
            'day',
            'week',
            'month',
            'date',
            'prev',
            'today',
            'next'
        ];
        const{ events } = this.props;
        scheduler.init(this.schedulerContainer, new Date (2022, 24, 11));
        scheduler.clearAll();
        scheduler.parse(events);
    }
    render(){
        return (
            <div ref={ (input) => { this.schedulerContainer = input } }
            style={ { width: '100%', height: '100%'} }
            ></div>
        );
    }
}
