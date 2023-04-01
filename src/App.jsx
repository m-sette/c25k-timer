import { useState } from 'react';
import './App.css';
import SelectForm from './components/SelectForm';
import Timer from './components/Timer';
import c25k from './data/program';

function App() {
    const [program, setProgram] = useState(null);
    const [start, setStart] = useState(true);
    const handleDayPicker = (e) => {
        const option = e.target.value;
        const week = option.split('-')[1];
        const day = option.split('-')[3];
        let steps = [];
        if (week === '5' || week === '6') {
            steps = c25k.find((elem) => elem.week === `${week}.${day}`).steps;
        } else {
            steps = c25k.find((elem) => elem.week === week).steps;
        }
        const selectedProgram = {
            week,
            day,
            steps,
        };
        setProgram(selectedProgram);
    };
    console.log(program);
    return (
        <div className='App'>
            <h1>Couch to 5km</h1>
            {start ? (
                program && (
                    <button onClick={() => setStart(false)}>Start</button>
                )
            ) : (
                <Timer init={program.steps} setStart={setStart} />
            )}
            {program && (
                <h2>
                    Week {program.week}, Day {program.day}
                </h2>
            )}
            {start && (
                <>
                    <SelectForm handleDayPicker={handleDayPicker} />
                    <ul className='program-list'>
                        {program &&
                            program.steps.map((step, index) => {
                                console.log(step);
                                return (
                                    <li key={index}>{`${step.pace} - ${
                                        step.time / 60_000
                                    }min`}</li>
                                );
                            })}
                    </ul>
                </>
            )}
        </div>
    );
}

export default App;
