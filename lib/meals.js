import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // throw new Error('Loading meals failed');
  return db.prepare('SELECT * FROM meals').all();

  // eğer tüm verileri almak istiyorsak all() kullanırız
  // eğer 1 veri almak istiyorsak get() kullanırız
  // veri ekliyorsak ya da değiştiriyorsak run() metodu kullanırız
}
