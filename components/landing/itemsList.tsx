import { Button } from "../ui/button"
import { ItemCard } from "../ui/item-card"

export const ItemsList = () => {
    const items = [
        {
            itemName: "item1",
            image: 'https://www.uwphotographyguide.com/wp-content/uploads/2015/10/0689-16022008-181-Amphiprion_melanopus.jpg',
            category: "category1",
            price: 800,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate.'
        },
        {
            itemName: "item1",
            image: 'https://www.uwphotographyguide.com/wp-content/uploads/2015/10/0689-16022008-181-Amphiprion_melanopus.jpg',
            category: "category1",
            price: 800,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate.'
        },
        {
            itemName: "item1",
            image: 'https://www.uwphotographyguide.com/wp-content/uploads/2015/10/0689-16022008-181-Amphiprion_melanopus.jpg',
            category: "category1",
            price: 800,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate.'
        },
        {
            itemName: "item1",
            image: 'https://www.uwphotographyguide.com/wp-content/uploads/2015/10/0689-16022008-181-Amphiprion_melanopus.jpg',
            category: "category1",
            price: 800,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate.'
        },
        {
            itemName: "item1",
            image: 'https://www.uwphotographyguide.com/wp-content/uploads/2015/10/0689-16022008-181-Amphiprion_melanopus.jpg',
            category: "category1",
            price: 800,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate.'
        },
        {
            itemName: "item1",
            image: 'https://www.uwphotographyguide.com/wp-content/uploads/2015/10/0689-16022008-181-Amphiprion_melanopus.jpg',
            category: "category1",
            price: 800,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate.'
        }
    ]
    return <div className="w-full">
        <ItemCard items={items ?? []} />
        <div className="flex justify-center w-full">
            <Button>Load More</Button>
        </div>
    </div>
}