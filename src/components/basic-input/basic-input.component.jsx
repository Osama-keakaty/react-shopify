import './basic-input.styles.scss'
const BasicInput = ({ attribute}) => {
    return (
    
            <input className='basic-input-container' {...attribute} spellCheck={false}/>
    )
}

export default BasicInput;