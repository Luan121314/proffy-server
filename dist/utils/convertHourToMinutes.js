"use strict";Object.defineProperty(exports, "__esModule", {value: true});const converHoursToMinutes=(time)=>{

    const [hours , minutes]= time.split(':').map(Number);
    const timeInMinutes = (hours*60)+ minutes;

    return timeInMinutes;
}

exports. default = converHoursToMinutes;