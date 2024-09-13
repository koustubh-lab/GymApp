export default function Button(props) {
    const { text, func, className } = props
    return (
        <button className={"bg-slate-900 p-3 px-14 mx-auto rounded shadow-xl border-blue-950 border-2 transition-all duration-500 hover:bg-slate-800 button-shadow " + (className ? className : "")} onClick={() => {
            if (func) {
                func()
            }
        }}>
            {text}
        </button>
    )
}
