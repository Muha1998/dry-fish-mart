import { ItemCard } from "./itemCard"

export const ItemsList = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return <div className="grid grid-cols-3 gap-4">
        {items.map((item) => (
            <ItemCard key={item} /> 
        ))}
    </div>
}