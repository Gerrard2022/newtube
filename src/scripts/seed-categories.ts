//TODO: Create a scripted seed category

import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
    "Cars",
    "Music",
    "Coding",
    "Animations",
    "News and Politics",
    "Gaming",
    "AI",
    "Computers",
    "Space"
]

async function main(){
    console.log("Seeding categories");

    try {

        const values = categoryNames.map((name) => ({
            name,
        }))

        await db.insert(categories).values(values)

        console.log("Category seeded successfully!")
        
    } catch (error) {
        console.error("Error seeding categories", error);
        process.exit(1);
    }
}

main();