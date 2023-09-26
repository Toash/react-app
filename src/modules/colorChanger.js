import getRandomColor from "../util/color"

function ColorChanger() {
    return (
        <div className="d-flex justify-content-center">
            <div className="border border-primary p-3 m-3">
                <label htmlFor="colorbutton">Button to test out event handlers! </label>
                <button id="colorbutton" onClick={changeColor}> change color</button>
            </div>
        </div>
    )

}

function changeColor() {
    console.log("Changing color")
    let randomColor = getRandomColor()
    document.body.style.backgroundColor = randomColor
}

export default ColorChanger