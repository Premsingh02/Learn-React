
function handleClick(event) {
    console.log("Hello!");
    console.log(event);
}

function handleMouseOver() {
    console.log("Bye");
}

function handleDblClick() {

}

export default function Button() {
    return (
        <>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ipsa ducimus voluptatem totam quos modi culpa, neque placeat iste deleniti nobis nostrum numquam eveniet cumque! Doloribus, ipsa! Inventore, voluptatibus perferendis.</p>
            <button onDoubleClick={handleDblClick }>Double click me</button>
        </>
    )
}