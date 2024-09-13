import Button from "./Button"

export default function Hero() {

    const func = () => {
        window.location.href = "#generate"
    }

    return (
        <div className="flex flex-col gap-10 items-center justify-center min-h-screen text-white max-w-[1000px] mx-auto">
            <div className="flex flex-col gap-4 items-center justify-center">
                <p className="text-base sm:text-sm md:text-lg lg:text-xl">
                    It&lsquo;s time to get
                </p>
                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-wider">
                    Ginormous
                </h1>
            </div>
            <p className="px-10 break-all text-sm sm:text-sm md:text-lg lg:text-xl font-extralight">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                <span className="text-slate-500 font-bold mx-1">consectetur laborum</span> accusantium voluptates ab ullam dicta
                dolorum corrupti delectus, fugiat recusandae totam cumque
                numquam doloribus labore commodi, nobis repellat sunt. A
                quibusdam repellendus eum mollitia eveniet ea labore iure qui
                <span className="text-slate-500 font-bold mx-1">exercitationem placeat</span> earum culpa, accusantium expedita
                voluptas numquam. Reiciendis, laudantium.
            </p>
            <Button func={func} text={"Accept & Continue"} />
        </div>
    );
}
