/************************************* 
 * Raven_S Progressive Matrices Test *
 *************************************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'Raven_s progressive matrices';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instrRoutineBegin());
flowScheduler.add(instrRoutineEachFrame());
flowScheduler.add(instrRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var instrClock;
var instr_text;
var cont_text;
var instr_resp;
var trialClock;
var RPM_image;
var RPM_key_resp;
var thanksClock;
var thx_text;
var thx_cont;
var thx_key;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text',
    text: 'During this task, you will see designs with a part left out.\n\nDecide which of the pieces below will complete the design.\n\nPress the number key for your choice.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  cont_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'cont_text',
    text: 'Press SPACE to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  instr_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  RPM_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'RPM_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [1, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  RPM_key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  thx_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'thx_text',
    text: 'Good work!\n\nYou have completed this task.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  thx_cont = new visual.TextStim({
    win: psychoJS.window,
    name: 'thx_cont',
    text: 'Press SPACE to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  thx_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _instr_resp_allKeys;
var instrComponents;
function instrRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instr'-------
    t = 0;
    instrClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instr_resp.keys = undefined;
    instr_resp.rt = undefined;
    _instr_resp_allKeys = [];
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(instr_text);
    instrComponents.push(cont_text);
    instrComponents.push(instr_resp);
    
    instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function instrRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instr'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text* updates
    if (t >= 0.0 && instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text.tStart = t;  // (not accounting for frame time here)
      instr_text.frameNStart = frameN;  // exact frame index
      
      instr_text.setAutoDraw(true);
    }

    
    // *cont_text* updates
    if (t >= 0.0 && cont_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cont_text.tStart = t;  // (not accounting for frame time here)
      cont_text.frameNStart = frameN;  // exact frame index
      
      cont_text.setAutoDraw(true);
    }

    
    // *instr_resp* updates
    if (t >= 0.0 && instr_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_resp.tStart = t;  // (not accounting for frame time here)
      instr_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_resp.clearEvents(); });
    }

    if (instr_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_resp.getKeys({keyList: ['space'], waitRelease: false});
      _instr_resp_allKeys = _instr_resp_allKeys.concat(theseKeys);
      if (_instr_resp_allKeys.length > 0) {
        instr_resp.keys = _instr_resp_allKeys[_instr_resp_allKeys.length - 1].name;  // just the last key pressed
        instr_resp.rt = _instr_resp_allKeys[_instr_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instrComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instr'-------
    instrComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'RPM_items.xlsx',
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials.forEach(function() {
    const snapshot = trials.getSnapshot();

    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trialRoutineBegin(snapshot));
    thisScheduler.add(trialRoutineEachFrame(snapshot));
    thisScheduler.add(trialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var _RPM_key_resp_allKeys;
var trialComponents;
function trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    RPM_image.setImage(image_file);
    RPM_key_resp.keys = undefined;
    RPM_key_resp.rt = undefined;
    _RPM_key_resp_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(RPM_image);
    trialComponents.push(RPM_key_resp);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *RPM_image* updates
    if (t >= 0.0 && RPM_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RPM_image.tStart = t;  // (not accounting for frame time here)
      RPM_image.frameNStart = frameN;  // exact frame index
      
      RPM_image.setAutoDraw(true);
    }

    
    // *RPM_key_resp* updates
    if (t >= 0.0 && RPM_key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RPM_key_resp.tStart = t;  // (not accounting for frame time here)
      RPM_key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { RPM_key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { RPM_key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { RPM_key_resp.clearEvents(); });
    }

    if (RPM_key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = RPM_key_resp.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8'], waitRelease: false});
      _RPM_key_resp_allKeys = _RPM_key_resp_allKeys.concat(theseKeys);
      if (_RPM_key_resp_allKeys.length > 0) {
        RPM_key_resp.keys = _RPM_key_resp_allKeys[_RPM_key_resp_allKeys.length - 1].name;  // just the last key pressed
        RPM_key_resp.rt = _RPM_key_resp_allKeys[_RPM_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (RPM_key_resp.keys == correct) {
            RPM_key_resp.corr = 1;
        } else {
            RPM_key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (RPM_key_resp.keys === undefined) {
      if (['None','none',undefined].includes(correct)) {
         RPM_key_resp.corr = 1;  // correct non-response
      } else {
         RPM_key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('RPM_key_resp.keys', RPM_key_resp.keys);
    psychoJS.experiment.addData('RPM_key_resp.corr', RPM_key_resp.corr);
    if (typeof RPM_key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('RPM_key_resp.rt', RPM_key_resp.rt);
        routineTimer.reset();
        }
    
    RPM_key_resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _thx_key_allKeys;
var thanksComponents;
function thanksRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'thanks'-------
    t = 0;
    thanksClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    thx_key.keys = undefined;
    thx_key.rt = undefined;
    _thx_key_allKeys = [];
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(thx_text);
    thanksComponents.push(thx_cont);
    thanksComponents.push(thx_key);
    
    thanksComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function thanksRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'thanks'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thx_text* updates
    if (t >= 0.0 && thx_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thx_text.tStart = t;  // (not accounting for frame time here)
      thx_text.frameNStart = frameN;  // exact frame index
      
      thx_text.setAutoDraw(true);
    }

    
    // *thx_cont* updates
    if (t >= 0.0 && thx_cont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thx_cont.tStart = t;  // (not accounting for frame time here)
      thx_cont.frameNStart = frameN;  // exact frame index
      
      thx_cont.setAutoDraw(true);
    }

    
    // *thx_key* updates
    if (t >= 0.0 && thx_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thx_key.tStart = t;  // (not accounting for frame time here)
      thx_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { thx_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { thx_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { thx_key.clearEvents(); });
    }

    if (thx_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = thx_key.getKeys({keyList: ['space'], waitRelease: false});
      _thx_key_allKeys = _thx_key_allKeys.concat(theseKeys);
      if (_thx_key_allKeys.length > 0) {
        thx_key.keys = _thx_key_allKeys[_thx_key_allKeys.length - 1].name;  // just the last key pressed
        thx_key.rt = _thx_key_allKeys[_thx_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    thanksComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'thanks'-------
    thanksComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "thanks" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
