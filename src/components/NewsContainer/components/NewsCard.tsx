import styles from './NewsCard.module.css'

interface NewsCardProps {
    photo: string,
    title: string,
    text: string,
    onClick: ()=> void
}

export const NewsCard = ({photo, title, text, onClick}: NewsCardProps) => {
    return (
        <div className={styles.card} role='presentation' onClick={onClick}>
            <img src={photo} alt="" width={'100%'} height={'150px'}/>
             <h2>{title}</h2>
             <p>{text}</p>
        </div>
    )
}