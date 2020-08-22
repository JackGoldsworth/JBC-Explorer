import requests
import speech_recognition as sr

speech = sr.Recognizer()
mic = sr.Microphone()

mic_on = True

while mic_on:
    try:
        with mic as source:
            print("Listening")
            audio = speech.listen(source, phrase_time_limit=5)
            google = speech.recognize_google(audio)
            if str(google).lower() == "speech stop":
                mic_on = False
            requests.post(url="http://localhost:8080/v1/command", data=str(google))
    except sr.UnknownValueError:
        pass
