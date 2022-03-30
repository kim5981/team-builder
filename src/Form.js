
const Form = (props) => {

    const { update, values, submit } = props;

    const onChange = evt => {
        //name of input
        const name = evt.target.name
        const value = evt.target.value
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className="form-container" onSubmit={ onSubmit }>
            <label> name: 
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
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
                <button>submit</button>
            </div>

        </form>
    )
}

export default Form;

