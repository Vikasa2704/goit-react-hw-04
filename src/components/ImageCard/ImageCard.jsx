import css from './ImageCard.module.css';


const ImageCard = ({alt_description, urls, updateModalStateData}) => {
    return (
        <div className={css.cardWrapper} onClick={() => updateModalStateData(urls.regular, alt_description)}
		>
            <img className = {css.ImageCard}
            src={urls.small} 
            alt={alt_description} />
            <p className={css.cardDescription}>{alt_description}</p>
        </div>

    );
};

export default ImageCard