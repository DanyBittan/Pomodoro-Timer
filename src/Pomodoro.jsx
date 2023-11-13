import { useEffect, useState } from "react";

export default function Pomodoro() {
  const [mins, changeMins] = useState(10);
  const [secs, changeSecs] = useState(0);
  const [isRunning, setRunner] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (secs > 0) {
          changeSecs((seconds) => seconds - 1);
        } else if (mins > 0) {
          changeMins((minutes) => minutes - 1);
          changeSecs(59);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [mins, secs, isRunning]);

  return (
    <>
      <div className="bold text-3xl text-gray-200 bg-gray-950 min-h-screen flex flex-col justify-center items-center font-start2">
        <h1 className="mb-8 text-4xl text-center">Pomodoro Timer</h1>
        <h2 className="text-lg mb-6 text-center">Max time of 60 minutes</h2>
        <div className="flex flex-col">
          <section className="w-auto flex justify-between mb-4">
            <div>
              <button
                className="bg-slate-900 pl-3 pr-2 pt-3 rounded-lg text-2xl"
                onClick={() => mins <= 50 && changeMins(mins + 10)}
              >
                ^
              </button>
              <button
                className="bg-slate-900 pl-3 pr-2 pt-3 ml-2 rounded-lg text-2xl"
                onClick={() => mins <= 59 && changeMins(mins + 1)}
              >
                ^
              </button>
            </div>
            <div>
              <button
                className="bg-slate-900 pl-3 pr-2 pt-3 mr-2 rounded-lg text-2xl"
                onClick={() => secs <= 50 && changeSecs(secs + 10)}
              >
                ^
              </button>
              <button
                className="bg-slate-900 pl-3 pr-2 pt-3 mr-1 rounded-lg text-2xl"
                onClick={() => secs <= 58 && changeSecs(secs + 1)}
              >
                ^
              </button>
            </div>
          </section>
          <div className="bold text-5xl text-gray-200 tracking-wide ">
            {mins < 10 ? "0" + mins : mins}:{secs < 10 ? "0" + secs : secs}
          </div>
          <section className="w-auto flex justify-between mt-3 mb-2">
            <div>
              <button
                className="bg-slate-900 rounded-lg text-2xl"
                onClick={() => mins > 9 && changeMins(mins - 10)}
              >
                <span className="grid rotate-180 pt-2.5 pl-2.5 pr-2.5">^</span>
              </button>
              <button
                className="bg-slate-900 ml-2 rounded-lg text-2xl"
                onClick={() => mins > 0 && changeMins(mins - 1)}
              >
                <span className="grid rotate-180 pt-2.5 pl-2.5 pr-2.5">^</span>
              </button>
            </div>
            <div>
              <button
                className="bg-slate-900 mr-2 rounded-lg text-2xl"
                onClick={() => secs > 9 && changeSecs(secs - 10)}
              >
                <span className="grid rotate-180 pt-2.5 pl-2.5 pr-2.5">^</span>
              </button>
              <button
                className="bg-slate-900   mr-1 rounded-lg text-2xl text-center"
                onClick={() => secs > 0 && changeSecs(secs - 1)}
              >
                <span className="grid rotate-180 pt-2.5 pl-2.5 pr-2.5">^</span>
              </button>
            </div>
          </section>
        </div>

        <button
          className="bg-slate-800 px-4 py-2 mt-6 rounded-xl text-2xl"
          onClick={() => setRunner(!isRunning)}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
      </div>
    </>
  );
}
