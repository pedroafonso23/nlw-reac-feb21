import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { LevelUpModal } from "../components/LevelUpModal";
import { ChallangesContext } from "./ChallangesContext";

interface CountDownContexData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountDown: () => void;
    resetCountDown: () => void;
}

interface CountDownProviderProps {
    children: ReactNode;
}

export const CountDownContext = createContext({} as CountDownContexData);

let countDownTimeout:NodeJS.Timeout;

export function CountDownProvider({ children }: CountDownProviderProps) {
    const { startNewChallange } = useContext(ChallangesContext)

    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountDown() {
        setIsActive(true);
    }

    function resetCountDown() {
        clearTimeout(countDownTimeout);
        setIsActive(false);
        setHasFinished(false);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countDownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0) {
            startNewChallange();
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, time])

    return (
        <CountDownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountDown,
            resetCountDown,
        }}>
            {children}
        </CountDownContext.Provider>
    )
}