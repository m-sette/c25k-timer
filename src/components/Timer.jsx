import { useRef, useState, useEffect } from 'react';
import { Howl } from 'howler';
import './Timer.css';

const Timer = ({ init, setStart }) => {
    const indexRef = useRef(0);
    const [count, setCount] = useState(init[indexRef.current]);
    const [isRunning, setIsRunning] = useState(true);

    const sound = new Howl({
        src: ['../../public/owl-139676.mp3'],
    });

    const formatTime = (milliseconds) => {
        return new Date(milliseconds).toISOString().slice(14, 19);
    };

    useEffect(() => {
        let id = null;

        if (count.time === 0) {
            sound.play();
            indexRef.current++;
            if (!init[indexRef.current]) {
                return setStart(true);
            }
            setCount(init[indexRef.current]);
            return;
        }
        if (isRunning) {
            id = setInterval(() => {
                setCount((prev) => ({ ...prev, time: prev.time - 1000 }));
            }, 1000);
        }
        return () => clearInterval(id);
    }, [isRunning, count]);

    const timmerToggler = () => {
        setIsRunning((prev) => !prev);
    };
    return (
        <section className='timer'>
            <h2 className='timer_title'>{count.pace}</h2>
            <time className='timer_time'>{formatTime(count.time)}</time>
            <button className='timmer_toggle' onClick={timmerToggler}>
                {' '}
                {isRunning ? 'Pause' : 'Resume'}
            </button>
            <button onClick={() => setStart(true)}>Stop</button>
        </section>
    );
};
export default Timer;
