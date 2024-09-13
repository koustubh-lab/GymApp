import { useEffect, useState } from "react";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import SectionWrapper from "./SectionWrapper";
import Button from "./Button";

const Header = (props) => {
    const { index, title, description } = props;
    return (
        <div className="flex flex-col gap-5 items-center">
            <div className="flex gap-5 justify-center items-center">
                <p className="text-4xl font-bold sm:text-5xl md:text-6xl text-slate-500">
                    {index}
                </p>
                <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
                    {title}
                </h2>
            </div>
            <p className="text-sm sm:text-lg">{description}</p>
        </div>
    );
};

export default function Generator({ poison, setPoison, goal, setGoal, muscles, setMuscles, getPlan }) {
    const [showModal, setShowModal] = useState(false);
    const [caret, setCaret] = useState("0deg");

    useEffect(() => {
        if (showModal) {
            setCaret("180deg");
        } else {
            setCaret("0deg");
        }
    }, [showModal]);

    useEffect(() => {
        if (muscles.length === 3) {
            setShowModal(false)
        }
    }, [muscles]);

    useEffect(() => {
        setMuscles([]);
    }, [poison]);

    function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(
                muscles.filter((muscle) => {
                    return muscle !== muscleGroup;
                })
            );
            return;
        }

        if (poison !== "individual") {
            setMuscles([muscleGroup]);
            setShowModal(!showModal);
            return;
        } else {
            if (muscles.length < 3) {
                setMuscles([...muscles, muscleGroup]);
            } else {
                setShowModal(false)
            }
        }
    }

    return (
        <SectionWrapper
            header={"Generate your workout"}
            title={["It's", "Huge", "o'Clock"]}
            id={"generate"}
        >
            <Header
                index={"01"}
                title={"Pick your poison"}
                description={"Select the workout you wish to enjoy"}
            />
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 p-4">
                {Object.keys(WORKOUTS).map((workoutName, workoutIndex) => {
                    return (
                        <button
                            onClick={() => {
                                setPoison(workoutName);
                            }}
                            key={workoutIndex}
                            className={
                                " border-2 px-6 py-3 rounded transition-all capitalize duration-300 hover:border-blue-800 " +
                                (`${workoutName}` === poison
                                    ? "bg-slate-800 border-blue-800"
                                    : "bg-slate-900 border-slate-900")
                            }
                        >
                            {workoutName.replaceAll("_", " ")}
                        </button>
                    );
                })}
            </div>

            <Header
                index={"02"}
                title={"Lock on targets"}
                description={"Select the muscles judged for annihilation"}
            />
            <div className="bg-slate-900 rounded relative select-none">
                <div
                    className="flex items-center justify-center h-full py-4 cursor-pointer"
                    onClick={(e) => {
                        setShowModal(!showModal)
                        e.target.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                            inline: "nearest",
                        })
                    }}
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.target.click();
                        }
                    }}
                >
                    <p className="capitalize">{muscles.length !== 0 ? muscles.join(" & ") : "Select muscle group (1-3)"}</p>
                    <i
                        className="fa-solid fa-caret-down absolute right-5 text-lg transition-rotate duration-500"
                        style={{ transform: `rotate(${caret})` }}
                    ></i>
                </div>
                {showModal && (
                    <div className="absolute right-0 top-full w-1/2 p-1 mt-1 rounded grid grid-cols-1 custom-modal max-h-60 overflow-auto bg-slate-900">
                        {(poison === "individual"
                            ? WORKOUTS[poison]
                            : Object.keys(WORKOUTS[poison])
                        ).map((muscle, muscleIndex) => {
                            return (
                                <button
                                    key={muscleIndex}
                                    className={`py-3 custom-modal-button transition-color duration-200 ${muscles.includes(muscle)
                                        ? "text-blue-600"
                                        : "text-white"
                                        }`}
                                    onClick={() => {
                                        updateMuscles(muscle);
                                    }}
                                >
                                    <p>{muscle}</p>
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>

            <Header
                index={"03"}
                title={"Become Juggernaut"}
                description={"Select your ultimate objective"}
            />
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 p-4">
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        <button
                            onClick={(e) => {
                                setGoal(scheme);
                                e.target.scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                    inline: "nearest",
                                })
                            }}
                            key={schemeIndex}
                            className={`border-2 px-6 py-3 rounded transition-all duration-300 hover:border-blue-800 capitalize ${scheme === goal
                                ? "bg-slate-800 border-blue-800"
                                : "bg-slate-900 border-slate-900"
                                }`}
                        >
                            {scheme.replaceAll("_", " ")}
                        </button>
                    );
                })}
            </div>

            <Button text={"Generate Workout Plan"} className="mt-[50px] mb-[50px]" func={() => { getPlan(), window.location.href = "#workout" }} />
        </SectionWrapper>
    );
}
