import getRandomColor from "../util/color"

function ColorChanger() {
    return (
        <>
            <label htmlFor="colorbutton">Button to test out event handlers! </label>
            <button id="colorbutton" onClick={changeColor}> change color</button>
        </>
    )

}

function changeColor() {
    console.log("Changing color")
    let randomColor = getRandomColor()
    document.body.style.backgroundColor = randomColor
}

export default ColorChanger