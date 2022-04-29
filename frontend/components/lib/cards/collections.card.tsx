
interface ICollectionsCard {
    title: string,
    description: string,
    imageUrl: string,
}


const CollectionsCard = ({ title, description, imageUrl }: ICollectionsCard) => {
    return (
        <div className="collections_card">
            <div className="content">
                <div
                    className="image"
                    style={{
                        backgroundImage: `url('${imageUrl}')`
                    }} />
                <h2 className="f-size-h3 f-weight-800 f-font-general">
                    {title}
                </h2>
                <p className="f-size-p4 f-weight-400">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default CollectionsCard;