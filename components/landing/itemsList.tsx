import { Button } from "../ui/button"
import { ItemCard } from "../ui/item-card"

export const ItemsList = () => {
    const items = [
        {
            id: 1,
            itemName: "item1",
            image: 'https://www.uwphotographyguide.com/wp-content/uploads/2015/10/0689-16022008-181-Amphiprion_melanopus.jpg',
            category: "category1",
            price: 800,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate.',
            status: 'IN-STOCK'
        },
        {
            id: 2,
            itemName: "item1",
            image: 'https://www.uwphotographyguide.com/wp-content/uploads/2015/10/0689-16022008-181-Amphiprion_melanopus.jpg',
            category: "category1",
            price: 800,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate.',
            status: 'PRE-ORDER'
        },
        {
            id: 3,
            itemName: "item1",
            image: 'https://www.uwphotographyguide.com/wp-content/uploads/2015/10/0689-16022008-181-Amphiprion_melanopus.jpg',
            category: "category1",
            price: 800,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate.',
            status: 'IN-STOCK'
        },
        {
            id: 4,
            itemName: "item1",
            image: 'https://www.uwphotographyguide.com/wp-content/uploads/2015/10/0689-16022008-181-Amphiprion_melanopus.jpg',
            category: "category1",
            price: 800,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate.',
            status: 'OUT-OF-STOCK'
        },
        {
            id: 5,
            itemName: "item1",
            image: 'https://www.uwphotographyguide.com/wp-content/uploads/2015/10/0689-16022008-181-Amphiprion_melanopus.jpg',
            category: "category1",
            price: 800,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate.',
            status: 'IN-STOCK'
        },
        {
            id: 6,
            itemName: "item1",
            image: 'https://www.uwphotographyguide.com/wp-content/uploads/2015/10/0689-16022008-181-Amphiprion_melanopus.jpg',
            category: "category1",
            price: 800,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate.',
            status: 'IN-STOCK'
        }
    ]
    return <div className="w-full">
        <ItemCard items={items ?? []} />
        <div className="flex justify-center w-full">
            <Button>Load More</Button>
        </div>
    </div>
}