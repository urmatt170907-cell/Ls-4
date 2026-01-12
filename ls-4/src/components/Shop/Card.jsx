function Card({ item, onDelete }) {
    return (
        <div className="product-card" onClick={() => console.log(item)}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button
                className="delete-btn"
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete(item.id);
                }}
            >
                🗑
            </button>
        </div>
    );
}

export default Card;
