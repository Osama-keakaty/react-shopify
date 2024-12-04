import './form-input.styles.scss'

const FormInput = ({ errors, touched, label, attributes }) => {
    return (
        
        <div className="form-input-group">
        {
            label &&
            <label className="form-input-label">{label}</label>
        }
            <input
                className={`form-input ${touched && errors ? 'input-error' : ""}`}
                {...attributes}
                spellCheck={false}
            />

            {errors && touched && <div className="error">{errors}</div>}
        </div>
        // </div>
    )
}
export default FormInput;