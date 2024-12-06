import './moved-ads.styles.scss'
const MovedAds = ({ title }) => {
    return (
        <div className='moved-ads-container'>
            <div className="moved-ads-content">
                <h4 className='moved-ads-text'>
                    {title}
                </h4>
            </div>
        </div>
    )
}

export default MovedAds;
