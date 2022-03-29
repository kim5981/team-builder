
const Form = (props) => {

    const { update, values, submit } = props;

    const onChange = evt => {
        const name = evt.target.name
        const value = evt.target.value
        update(name, value);
    }

    return (
        <form className="form-container">
            <label> name: 
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                />
            </label>

            <label>email: 
                <input
                    name="email"
                    type="email"
                    placeholder="email"
                />
            </label>

            <label> role:
                <select name="role" onChange={ onChange }>
                    <option value="select">Select Role</option>
                    <option value="ux">User Experience</option>
                    <option value="emotional-support">Emotional Support</option>
                    <option value="qa">Quality Assurance</option>
                </select>
            </label>
        </form>
    )
}

export default Form;

