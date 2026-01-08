function Card({ item, onDelete }) {
    return (
        <div onClick={() => console.log(item)}>
            <img src={item.image} alt={item.title} width="150" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <button
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
