import { initLiveStatus } from './liveStatus.js';
import { initMusicPlayer } from './musicPlayer.js';
import { initChat } from './chat.js';
import { initUIEffects } from './uiEffects.js';
import { initProgramSchedule } from './programSchedule.js';
import { initMobileMode } from './mobileMode.js';

document.addEventListener("DOMContentLoaded", () => {
    initLiveStatus();
    initMusicPlayer();
    initChat();
    initUIEffects();
    initProgramSchedule();
    initMobileMode();
});
