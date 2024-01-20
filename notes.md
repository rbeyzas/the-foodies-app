## 92- Reserved Filenames

As you already learned, there are some reserved filenames when working with NextJS.

Important: These filenames are only reserved when creating them inside of the app/ folder (or any subfolder). Outside of the app/ folder, these filenames are not treated in any special way.

Here's a list of reserved filenames in NextJS - you'll, of course, learn about the important ones throughout this section:

page.js => Create a new page (e.g., app/about/page.js creates a <your-domain>/about page)

layout.js => Create a new layout that wraps sibling and nested pages

not-found.js => Fallback page for "Not Found" errors (thrown by sibling or nested pages or layouts)

error.js => Fallback page for other errors (thrown by sibling pages or nested pages or layouts)

loading.js => Fallback page which is shown whilst sibling or nested pages (or layouts) are fetching data

route.js => Allows you to create an API route (i.e., a page which does NOT return JSX code but instead data, e.g., in the JSON format)

You also find a list with all supported filenames & detailed explanations in the official docs: https://nextjs.org/docs/app/api-reference/file-conventions

## 93 - Using Routes Parameters

Next.js keeps a hidden "params" in page.js. We don't need to write this. Next does this itself. Thanks to this "params" object, if there is a dynamic route in the app router - such as [slug] - it serves as a placeholder key.

![routes-parameters](/images/routes-parameters.png)

## 99 - CSS Modules

[CSS Modules with Next.js](https://nextjs.org/docs/app/building-your-application/styling/css-modules)

## 100 - Image Component

[Image Component](https://nextjs.org/docs/app/api-reference/components/image)

## 129. Ders Bonus: Storing Uploaded Images In The Cloud (AWS S3)

AWS hesabı açıp görselleri cloud file storage a atabilirsin.

## Ek Notlar

"async" server componentlerde kullanabiliriz. bu reactta yapabileceğimiz bir şey değil.

Suspense componenti react tarafından sağlanır. Loading durumlarını yönetmemizi sağlar. Bazı içerikler yüklenene kadar yedek içeriği gösterir.

![dangerouslySetInnerHTML](/notes-images/dangerouslySetInnerHTML.png)

Event handler'lar -onClick gibi- server componentlerda kullanılmaz. Bu tür etkileşimle client'ta gerçekleşir.

'use client' -> Server action. Sadece sunucuda yütülecekse bu keywordu kullanırız. bu keywordu kullandığımız fonksiyonun içerisinde mutlaka "async" kullanmalıyız. Bu özellik React'ta da var ama Vanilla React'ta yok. Kullanabilmemiz için Next.js gibi bir çerçeveye ihtiyaç var.
![user server](/notes-images/use-server-action.png)
bu action işleminden sonran Next şunu yapar

- Bir istek oluşturur
- Next.js sunucusuna gönderir.
- böylece fonksiyon tetiklenir.
- form gönderimi sunucuda gerçekleşmiş olur.
  Bu işlem sunucuda gerçekleşir. client'da değil

useFormState hook'u iki argüman alır. ilk argüman form günderildiğinde tetiklenmesi gerekendir. ikinci argüman ise formun initial state'idir.
revalidatePath?
public klasörü sadece development sürecinde kullanılır. production'a geçtiğimizde next onu .next klasörüne kopyalar. bu sorunu yaşamamak için AWS S3 kullanılabilir.
Meta data hakkında bilgi için: https://nextjs.org/docs/app/api-reference/functions/generate-metadata

## To Do List

[] Error messages will be added
[] generateMetaData is not fully working. review it
[] migrate images to AWS S3
