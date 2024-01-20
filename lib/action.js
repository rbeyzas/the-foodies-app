'use server';
import { revalidatePath } from 'next/cache';
import { saveMeal } from './meals';
function isInvalidText(text) {
  return !text || text.trim() === '';
}
export async function shareMeal(prevState, formData) {
  // useFormState kullandığımız için buradaki argümanı ikiye çıkardık. eğer böyle yapmasaydık formData initial değer sayıalcaktı ve yeni değerler gelmeyecekti.
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: 'Invalid input.',
    };
  }
  await saveMeal(meal);
  revalidatePath('/meals');
  //TODO: redirect should be added here
  // saveMeal fonksiyonu meal objesini alacak ve veritabanına kaydedecek
  // saveMeal fonksiyonu meals.js dosyasında tanımlı
}
