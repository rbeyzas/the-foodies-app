import fs from 'node:fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  //   throw new Error('Loading meals failed');
  return db.prepare('SELECT * FROM meals').all();

  // eğer tüm verileri almak istiyorsak all() kullanırız
  // eğer 1 veri almak istiyorsak get() kullanırız
  // veri ekliyorsak ya da değiştiriyorsak run() metodu kullanırız
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  // createWriteStream belli bir dosyaya veri yazmaya izin verecek.
  // bu dosya oluşturulmamışsa oluşturacak.
  // bu dosya varsa üzerine yazacak.
  const bufferedImage = await meal.image.arrayBuffer();
  // arrayBuffer yazmak için bize buffer alan oluşturacak

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving image failed!');
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `,
  ).run(meal);
}
