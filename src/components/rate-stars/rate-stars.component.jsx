
import './rate-stars.styles.scss';
import { Rate } from 'antd';
const RateStars = () => {
    return (
        <div className='rate-stars-container'>
            <Rate defaultValue={3} tooltips={['So bad','Bad','Normal','Good','Perfect']} />
        </div>
    )

}
export default RateStars;