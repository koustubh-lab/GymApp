import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard";

export default function Workout({ workoutPlan }) {
    return (
        <SectionWrapper id={"workout"} title={"The Danger Zone".split(" ")} header={"Welcome to"}>
            {workoutPlan.map((exercise, exerciseIndex) => {
                return (
                    <ExerciseCard exercise={exercise} key={exerciseIndex} index={exerciseIndex} />
                )
            })}
        </SectionWrapper>
    )
}
