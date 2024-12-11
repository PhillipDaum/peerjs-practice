import "./Form.css";

function Form ( { handleChange, handleSubmit, playerData } ) {
    // when this submits I want it to go to the object, the value of the checked one

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
            <fieldset>
                    <legend>Choose a hero: </legend>
                    <div className="radio">
                        <input type="radio" id="warrior" value="warrior" name="hero" onChange={handleChange} />
                        <label htmlFor="warrior" className="warrior">Warrior</label>
                    </div>
                    <div className="radio">
                        <input type="radio" id="cleric" value="cleric" name="hero" onChange={handleChange}/>
                        <label htmlFor="cleric" className="cleric">Cleric</label>
                    </div>
                    <div className="radio">
                        <input type="radio" id="bladewitch" value="bladewitch" name="hero" onChange={handleChange}/>
                        <label htmlFor="bladewitch" className="bladewitch">Bladewitch</label>
                    </div>
                    <div className="radio">
                        <input type="radio" id="assassin" value="assassin" name="hero" onChange={handleChange}/>
                        <label htmlFor="assassin" className="assassin">Assassin</label>
                    </div>
                </fieldset>
                <button type="submit" className="submit-button" id="submit-button">submit</button>
            </form>
        </div>

    )
}

export default Form;