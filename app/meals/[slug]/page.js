'use client';
import Image from 'next/image';
import { getMeal } from '@/lib/meals';
import classes from './page.module.css';
import { notFound } from 'next/navigation';

// eğer bir meta data verisi bulamazsa böyle bir fonksiyonun olup olmadığını kontrol ediyor.
// eğer böyle bir fonksiyon varsa next.js onu çalıştırır.
// sayfa içerisinde olan params'lardan destek alarak oluşturur.
export async function generateMetaData({ params }) {
  const meal = await getMeal(params.slug);
  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealsDetailsPage({ params }) {
  const meal = getMeal(params.slug);
  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, '<br />');
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
