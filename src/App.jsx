import { useState } from "react";
import Generator from "./components/Generator";
import Hero from "./components/Hero";
import Workout from "./components/Workout";
import { generateWorkout } from "./utils/functions";

export default function App() {

    const [goal, setGoal] = useState("strength_power");
    const [poison, setPoison] = useState("individual");
    const [muscles, setMuscles] = useState([]);
    const [workoutPlan, setWorkoutPlan] = useState(null)

    function getPlan() {
        if (muscles.length < 1) {
            return
        }
        let newWorkout = generateWorkout({ poison, goal, muscles })
        setWorkoutPlan(newWorkout)
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-slate-800 to-slate-700 pb-5">
            <Hero />
            <Generator
                goal={goal}
                setGoal={setGoal}
                poison={poison}
                setPoison={setPoison}
                muscles={muscles}
                setMuscles={setMuscles}
                getPlan={getPlan}
            />
            {workoutPlan && <Workout workoutPlan={workoutPlan} />}
        </div >
    )
}
