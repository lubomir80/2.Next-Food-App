import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
   await new Promise((resolve) => setTimeout(resolve, 500))
   // throw new Error("Loading meals faild")
   return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
   // throw new Error("Loading meal faild")
   return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}