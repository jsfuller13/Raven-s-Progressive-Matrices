#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v3.2.3),
    on November 19, 2019, at 15:28
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '3.2.3'
expName = "Raven's progressive matrices"  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath="C:\\Users\\Jordan\\Documents\\Experiment Building\\7. Raven_s Progressive Matrices\\Raven's progressive matrices_lastrun.py",
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=[1440, 900], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='Built_In_Display', color=[0,0,0], colorSpace='hsv',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "instr"
instrClock = core.Clock()
instr_text = visual.TextStim(win=win, name='instr_text',
    text='During this task, you will see designs with a part left out.\n\nDecide which of the pieces below will complete the design.\n\nPress the number key for your choice.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
cont_text = visual.TextStim(win=win, name='cont_text',
    text='Press SPACE to begin.',
    font='Arial',
    pos=(0, -0.4), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
instr_resp = keyboard.Keyboard()

# Initialize components for Routine "trial"
trialClock = core.Clock()
RPM_image = visual.ImageStim(
    win=win,
    name='RPM_image', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(1,1),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=0.0)
RPM_key_resp = keyboard.Keyboard()
score = 0
wrongAnswer = 0

# Initialize components for Routine "thanks"
thanksClock = core.Clock()
thx_text = visual.TextStim(win=win, name='thx_text',
    text='Good work!\n\nYou have completed this task.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
thx_cont = visual.TextStim(win=win, name='thx_cont',
    text='Press SPACE to continue.',
    font='Arial',
    pos=(0, -0.4), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
thx_key = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "instr"-------
# update component parameters for each repeat
instr_resp.keys = []
instr_resp.rt = []
# keep track of which components have finished
instrComponents = [instr_text, cont_text, instr_resp]
for thisComponent in instrComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instrClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1
continueRoutine = True

# -------Run Routine "instr"-------
while continueRoutine:
    # get current time
    t = instrClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instrClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instr_text* updates
    if instr_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_text.frameNStart = frameN  # exact frame index
        instr_text.tStart = t  # local t and not account for scr refresh
        instr_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_text, 'tStartRefresh')  # time at next scr refresh
        instr_text.setAutoDraw(True)
    
    # *cont_text* updates
    if cont_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        cont_text.frameNStart = frameN  # exact frame index
        cont_text.tStart = t  # local t and not account for scr refresh
        cont_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(cont_text, 'tStartRefresh')  # time at next scr refresh
        cont_text.setAutoDraw(True)
    
    # *instr_resp* updates
    waitOnFlip = False
    if instr_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instr_resp.frameNStart = frameN  # exact frame index
        instr_resp.tStart = t  # local t and not account for scr refresh
        instr_resp.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instr_resp, 'tStartRefresh')  # time at next scr refresh
        instr_resp.status = STARTED
        # keyboard checking is just starting
        win.callOnFlip(instr_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if instr_resp.status == STARTED and not waitOnFlip:
        theseKeys = instr_resp.getKeys(keyList=['space'], waitRelease=False)
        if len(theseKeys):
            theseKeys = theseKeys[0]  # at least one key was pressed
            
            # check for quit:
            if "escape" == theseKeys:
                endExpNow = True
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instrComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instr"-------
for thisComponent in instrComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "instr" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('RPM_items.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "trial"-------
    # update component parameters for each repeat
    RPM_image.setImage(image_file)
    RPM_key_resp.keys = []
    RPM_key_resp.rt = []
    # keep track of which components have finished
    trialComponents = [RPM_image, RPM_key_resp]
    for thisComponent in trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    continueRoutine = True
    
    # -------Run Routine "trial"-------
    while continueRoutine:
        # get current time
        t = trialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *RPM_image* updates
        if RPM_image.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            RPM_image.frameNStart = frameN  # exact frame index
            RPM_image.tStart = t  # local t and not account for scr refresh
            RPM_image.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(RPM_image, 'tStartRefresh')  # time at next scr refresh
            RPM_image.setAutoDraw(True)
        
        # *RPM_key_resp* updates
        waitOnFlip = False
        if RPM_key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            RPM_key_resp.frameNStart = frameN  # exact frame index
            RPM_key_resp.tStart = t  # local t and not account for scr refresh
            RPM_key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(RPM_key_resp, 'tStartRefresh')  # time at next scr refresh
            RPM_key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(RPM_key_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(RPM_key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if RPM_key_resp.status == STARTED and not waitOnFlip:
            theseKeys = RPM_key_resp.getKeys(keyList=['1', '2', '3', '4', '5', '6', '7', '8'], waitRelease=False)
            if len(theseKeys):
                theseKeys = theseKeys[0]  # at least one key was pressed
                
                # check for quit:
                if "escape" == theseKeys:
                    endExpNow = True
                RPM_key_resp.keys = theseKeys.name  # just the last key pressed
                RPM_key_resp.rt = theseKeys.rt
                # was this 'correct'?
                if (RPM_key_resp.keys == str(correct)) or (RPM_key_resp.keys == correct):
                    RPM_key_resp.corr = 1
                else:
                    RPM_key_resp.corr = 0
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trial"-------
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # check responses
    if RPM_key_resp.keys in ['', [], None]:  # No response was made
        RPM_key_resp.keys = None
        # was no response the correct answer?!
        if str(correct).lower() == 'none':
           RPM_key_resp.corr = 1;  # correct non-response
        else:
           RPM_key_resp.corr = 0;  # failed to respond (incorrectly)
    # store data for trials (TrialHandler)
    trials.addData('RPM_key_resp.keys',RPM_key_resp.keys)
    trials.addData('RPM_key_resp.corr', RPM_key_resp.corr)
    if RPM_key_resp.keys != None:  # we had a response
        trials.addData('RPM_key_resp.rt', RPM_key_resp.rt)
    if RPM_key_resp.corr == 1:
        thisExp.addData('score', 1)
        score = score + 1
        wrongAnswer = 0
        
    else:
        thisExp.addData('score', 0)
        wrongAnswer +=1
        if wrongAnswer == 3:
            trials.finished = True
    # the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials'


# ------Prepare to start Routine "thanks"-------
# update component parameters for each repeat
thx_key.keys = []
thx_key.rt = []
# keep track of which components have finished
thanksComponents = [thx_text, thx_cont, thx_key]
for thisComponent in thanksComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
thanksClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1
continueRoutine = True

# -------Run Routine "thanks"-------
while continueRoutine:
    # get current time
    t = thanksClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=thanksClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *thx_text* updates
    if thx_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        thx_text.frameNStart = frameN  # exact frame index
        thx_text.tStart = t  # local t and not account for scr refresh
        thx_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(thx_text, 'tStartRefresh')  # time at next scr refresh
        thx_text.setAutoDraw(True)
    
    # *thx_cont* updates
    if thx_cont.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        thx_cont.frameNStart = frameN  # exact frame index
        thx_cont.tStart = t  # local t and not account for scr refresh
        thx_cont.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(thx_cont, 'tStartRefresh')  # time at next scr refresh
        thx_cont.setAutoDraw(True)
    
    # *thx_key* updates
    waitOnFlip = False
    if thx_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        thx_key.frameNStart = frameN  # exact frame index
        thx_key.tStart = t  # local t and not account for scr refresh
        thx_key.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(thx_key, 'tStartRefresh')  # time at next scr refresh
        thx_key.status = STARTED
        # keyboard checking is just starting
        win.callOnFlip(thx_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if thx_key.status == STARTED and not waitOnFlip:
        theseKeys = thx_key.getKeys(keyList=['space'], waitRelease=False)
        if len(theseKeys):
            theseKeys = theseKeys[0]  # at least one key was pressed
            
            # check for quit:
            if "escape" == theseKeys:
                endExpNow = True
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in thanksComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "thanks"-------
for thisComponent in thanksComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "thanks" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
