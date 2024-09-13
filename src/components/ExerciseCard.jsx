import { useEffect, useState } from "react";

export default function ExerciseCard(props) {
    const { exercise, index } = props;
    const { name, tempo, reps, muscles, description, type, rest } = exercise;

    useEffect(() => {
        console.log(exercise);
    }, []);

    const [repcount, setRepcount] = useState(0);

    return (
        <div className="flex flex-col gap-4 p-4 bg-slate-900 w-[95%] mx-auto box-border text-slate-300 rounded">
            <div className="flex flex-col justify-between items-center sm:flex-row">
                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-slate-600">
                    0{index + 1}
                </h1>
                <h2 className="font-bold text-2xl capitalize">
                    {name.replaceAll("_", " ")}
                </h2>
                <p>{type}</p>
            </div>

            <div>
                <h2 className=" opacity-50">Targeted Muscle Groups:</h2>
                <h2 className="capitalize">{muscles.join(", ")}</h2>
            </div>

            <div className="">{description.replaceAll("___", "")}</div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {
                    ["reps", "tempo", "rest"].map((value, index) => {
                        return (
                            <section className="border-blue-600 p-2 border-2 rounded select-none" key={index}>
                                <p className="capitalize opacity-50">{value}</p>
                                <p className="text-center text-2xl">{
                                    (value === "tempo") ? exercise[value].split(" ").join(", ") : exercise[value]
                                }</p>
                            </section>
                        )
                    })
                }
                <section
                    onClick={() => {
                        setRepcount(repcount + 1);
                    }}
                    className="border-blue-600 border-2 p-2 cursor-pointer select-none rounded"
                >
                    <p className="opacity-50">Completed</p>
                    <p className="text-center text-2xl">{Math.floor(repcount % (Number.parseInt(reps) + 1))}/{reps}</p>
                </section>
            </div>
        </div>
    );
}
