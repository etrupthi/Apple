import React from "react";

class Edit extends React.Component {

    render() {
        return (
            <section>
                <h3> Edit </h3>
                <div> <form>
                <label>
                    Name:
                    <input type="text" name="name" /><br></br>                 
                    Alias:
                    <input type="text" name="alias" /><br></br>
                    Team:
                    <input type="text" name="team" /><br></br>
                </label>
                <input type= "submit"></input>
                </form> </div>
                
            </section>

        )
    }
}

export default Edit;