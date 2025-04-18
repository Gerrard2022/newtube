import CategorySection from "../sections/category-section"

interface homeViewProps {
    categoryId?: string
}


const HomeView = ({ categoryId }: homeViewProps) => {
    return (
        <div className="max-w-[2400px] mx-auto mb-10 px-4 pt-2.5 flex flex-col gap-y-6">
            <CategorySection categoryId={categoryId} />
        </div>
    )
}

export default HomeView