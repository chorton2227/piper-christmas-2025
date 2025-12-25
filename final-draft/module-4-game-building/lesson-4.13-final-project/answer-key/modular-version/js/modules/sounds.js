// ===== SOUND MODULE =====
// Generates poker game sounds using Web Audio API (no mp3 files needed)
const SoundModule = (function() {
    'use strict';
    
    let audioContext;
    let masterVolume = 0.3;
    
    /**
     * Initialize audio context
     */
    function init() {
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn('Web Audio API not supported');
        }
    }
    
    /**
     * Play card shuffle sound
     */
    function shuffle() {
        if (!audioContext) return;
        
        const duration = 0.3;
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = 200 + Math.random() * 100;
                oscillator.type = 'square';
                
                gainNode.gain.setValueAtTime(masterVolume * 0.1, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + duration);
            }, i * 50);
        }
    }
    
    /**
     * Play card deal sound
     */
    function deal() {
        if (!audioContext) return;
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 400;
        oscillator.type = 'sine';
        
        const duration = 0.05;
        gainNode.gain.setValueAtTime(masterVolume * 0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    }
    
    /**
     * Play chip bet sound
     */
    function bet() {
        if (!audioContext) return;
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 300;
        oscillator.type = 'triangle';
        
        const duration = 0.15;
        gainNode.gain.setValueAtTime(masterVolume * 0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    }
    
    /**
     * Play raise sound (higher pitch than bet)
     */
    function raise() {
        if (!audioContext) return;
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(500, audioContext.currentTime + 0.1);
        oscillator.type = 'triangle';
        
        const duration = 0.2;
        gainNode.gain.setValueAtTime(masterVolume * 0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    }
    
    /**
     * Play fold sound
     */
    function fold() {
        if (!audioContext) return;
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(150, audioContext.currentTime + 0.1);
        oscillator.type = 'sine';
        
        const duration = 0.15;
        gainNode.gain.setValueAtTime(masterVolume * 0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    }
    
    /**
     * Play all-in sound (dramatic)
     */
    function allin() {
        if (!audioContext) return;
        
        // Play multiple tones for dramatic effect
        [0, 0.1, 0.2].forEach((delay, i) => {
            setTimeout(() => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = 400 + (i * 100);
                oscillator.type = 'sawtooth';
                
                const duration = 0.2;
                gainNode.gain.setValueAtTime(masterVolume * 0.4, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + duration);
            }, delay * 1000);
        });
    }
    
    /**
     * Play win sound (positive)
     */
    function win() {
        if (!audioContext) return;
        
        // Play ascending arpeggio
        [0, 100, 200, 300].forEach((delay, i) => {
            setTimeout(() => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                const frequencies = [523.25, 659.25, 783.99, 1046.50]; // C, E, G, C
                oscillator.frequency.value = frequencies[i];
                oscillator.type = 'sine';
                
                const duration = 0.3;
                gainNode.gain.setValueAtTime(masterVolume * 0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + duration);
            }, delay);
        });
    }
    
    /**
     * Play collect chips sound
     */
    function collect() {
        if (!audioContext) return;
        
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = 350 + (i * 50);
                oscillator.type = 'triangle';
                
                const duration = 0.1;
                gainNode.gain.setValueAtTime(masterVolume * 0.2, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + duration);
            }, i * 80);
        }
    }
    
    /**
     * Play button click sound
     */
    function click() {
        if (!audioContext) return;
        
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        const duration = 0.03;
        gainNode.gain.setValueAtTime(masterVolume * 0.15, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    }
    
    // Public API
    return {
        init: init,
        shuffle: shuffle,
        deal: deal,
        bet: bet,
        raise: raise,
        fold: fold,
        allin: allin,
        win: win,
        collect: collect,
        click: click
    };
})();
