export default function SectionWrapper(props) {
    const { children, header, title, id } = props;
    return (
        <section className="min-h-screen flex flex-col gap-10 text-white" id={id}>
            <div className="flex flex-col gap-4 py-10 justify-center items-center bg-slate-800">
                <p className="text-sm sm:text-base lg:text-lg">{header}</p>
                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    {title[0]}{" "}
                    <span className="uppercase text-blue-600 font-bold">{title[1]}</span>{" "}
                    {title[2]}
                </h1>
            </div>
            <div className="flex flex-col w-full max-w-[1000px] mx-auto gap-5">
                {children}
            </div>
        </section>
    );
}
