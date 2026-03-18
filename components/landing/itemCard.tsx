export const ItemCard = () => {
    return <div className="rounded-md bg-white dark:bg-black dark:bg-grid-white/[0.05] p-4 flex flex-col items-start justify-start gap-2">
        <img src="/assets/landing/landing-item-1.png" alt="item" className="w-full rounded-md" />
        <h3 className="text-lg font-semibold text-black dark:text-white">Premium Quality Fish</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Freshly caught and delivered to your doorstep.</p>

    </div>
}