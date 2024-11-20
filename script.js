let fruits = ["Olma", "Banan", "Gilos", "Shaftoli"];
alert("Boshlanishida Arrayning uzunligi: " + fruits.length);
console.log(fruits)



if (confirm("Sizning arrayingizdan 'Shaftoli'ni olib tashlamoqchimisiz?")) {
    fruits.pop(); // Arraydan oxirgi elementni ('Shaftoli') olib tashlash
    alert("Endi Arrayning uzunligi: " + fruits.length);
    console.log(fruits);
} else {
    alert("Array o'zgartirilmadi.");
}