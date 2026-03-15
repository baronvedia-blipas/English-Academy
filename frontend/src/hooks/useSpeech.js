import { useState, useCallback, useEffect } from 'react';

export function useSpeech() {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [voices, setVoices] = useState([]);

    useEffect(() => {
        const updateVoices = () => {
            setVoices(window.speechSynthesis.getVoices());
        };

        // Some browsers need this event to load voices
        window.speechSynthesis.onvoiceschanged = updateVoices;
        updateVoices();

        return () => {
            window.speechSynthesis.onvoiceschanged = null;
        };
    }, []);

    const speak = useCallback((text, rate = 1) => {
        if (!('speechSynthesis' in window)) {
            console.warn('Text-to-speech not supported.');
            return;
        }

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);

        // Try to find a US English voice
        const usVoice = voices.find(v => v.lang === 'en-US' && v.name.includes('Google'))
            || voices.find(v => v.lang === 'en-US')
            || voices.find(v => v.lang.startsWith('en'));

        if (usVoice) {
            utterance.voice = usVoice;
        }

        utterance.lang = 'en-US';
        utterance.rate = rate; // 1 normal, 0.7 slower

        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);

        window.speechSynthesis.speak(utterance);
    }, [voices]);

    const listen = useCallback((onResult) => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            console.warn('Speech recognition not supported.');
            return null;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onstart = () => {
            setIsListening(true);
            setTranscript('');
        };

        recognition.onresult = (event) => {
            const speechResult = event.results[0][0].transcript;
            setTranscript(speechResult);
            if (onResult) onResult(speechResult);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error', event.error);
            setIsListening(false);
        };

        recognition.start();
        return recognition;
    }, []);

    const stopListening = useCallback((recognition) => {
        if (recognition) {
            recognition.stop();
        }
    }, []);

    return {
        speak,
        isSpeaking,
        listen,
        stopListening,
        isListening,
        transcript
    };
}
