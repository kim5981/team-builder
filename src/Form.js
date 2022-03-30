import React from "react";
const Form = (props) => {

    const { update, values, submit } = props;

    const onChange = evt => {
        //name of input
        const { name, value } = evt.target
        update( name, value );
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className="form-container" onSubmit={ onSubmit }>
            <div className="input-wrapper">
                <label> name: 
                    <input
                        name="name"
                        type="text"
                        placeholder="name"
                        value={ values.name }
                        onChange={ onChange }
                    />
                </label>

                <label>email: 
                    <input
                        name="email"
                        type="email"
                        placeholder="email"
                        value={ values.email }
                        onChange={ onChange }
                    />
                </label>

                <label> role:
                    <select value={ values.role } name="role" onChange={ onChange }>
                        <option value="select">select role</option>
                        <option value="dev">coffee-driven dev</option>
                        <option value="emotional-support">emotional support</option>
                        <option value="qa">quality assurance</option>
                    </select>
                </label>

                <div className="submit">
                    <input type="submit" value="submit"/>
                </div>
            </div>
        </form>
    )
}

export default Form;

