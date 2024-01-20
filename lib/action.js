'use server';
import { saveMeal } from './meals';

export async function shareMeal(formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };
  await saveMeal(meal);
  //TODO: redirect should be added here
  // saveMeal fonksiyonu meal objesini alacak ve veritabanına kaydedecek
  // saveMeal fonksiyonu meals.js dosyasında tanımlı
}
