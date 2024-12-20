import './basic-button.styles.scss'
const BasicButton = ({title , ...attributes})=>{
    return (
        <div className='basic-button-container'>
                    <button {...attributes}>{title}</button>
                </div>
    )
} 
export default BasicButton;