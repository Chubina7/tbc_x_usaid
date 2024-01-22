# TBC_x_USAID Practical Project

---

## პროექტის აღწერა:

რეპოზიტორია შექმნილია TBC x USAID პროექტის React.JS-ის კურსზე შესარჩევი პრაქტიკული დავალებისთვის, რომლის ფარგლებშიც შერჩეულ კანდიდატებს უნდა გადაგვეკოპირებინა/დაგვეკლონა "თიბისის" ოფიციალური ვებ-გვერდის ერთი სრული [გვერდი](https://www.tbcacademy.ge/usaid).

დავალების არამაშტაბურობისდა გამო, კლონი აწყობილია ე.წ vanilla JavaScript-ით - არანაირი ბიბლიოთეკის გამოყენებით, მხოლოდ HTML, CSS და JS.

შესაბამისად, ამ პროექტის გაშვებაც მარტივია: მხოლოდ VSCode-ში ჩაშენებული extension-ის (Live Server-ის) გამოყენებით შეგვიძლია პროექტი დავსტარტოთ development mode-ში (უფრო დეტალურად, ჩამოსქროლეთ დაბლა)

## ფაილების სტრუქტურა:

- ე.წ Root ფოლდერში ერთი, `index.html` ფაილი, სადაც სემანტიკური ტეგების (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) გამოყენებით დაყოფილია მთლიანი კონტენტი. ასე ბრაუზერისთვისაც უფრო გასაგებია, რა უფრო მნიშვნელოვანია გამოსაჩენად, და დეველოპმენტის დროს, სამუშაოდაც მოქნილია კოდი.

- სამი ფოლდერი: `/styles`, `/script`, `/assets`.
- `/styles` შემდეგნაირადაა მოწყობილი:

* თითოეულ სექციას, რომელიც ლოგიკურად ერთმანეთთან იყო დაკავშირებული, ეკუთვნის "თავისი" სტილების ფაილი. ბრაუზერისთვის ეს მაინც ერთ მთლიან სტილების ფაილად გარდაიქმნება, თუმცა მუშაობის პროცესში სამმაგად კომფორტულია სტილების ამგვარი სეპარატიზაცია.
* HTML ელემენტებზე class-ების მინიჭებისას გამოყენებულია "ფორმულა": `class="{მშობელი}__{შვილი}"` (მაგ.: heading_section__text_box)

--
### დოკუმენტის სტრუქტურა:

- მთავარი მშობელი ელემენტი (body) არის "ფლექსი", რომელიც შვილებს ალაგებს ზემოდან ქვემოთ - ჰორიზონტალურად ცენტრში და ვერტიკალურად "ვიუპორტის" (viewport) დასაწყისში.

### პატარა კომენტარები:

- ფონტი (font) წამოღებულია google.font-იდან და არ არის ზუსტად ორიგინალი ვებ-გვერდის ასლი
- მაქსიმალურად ზუსტი ეფექტის მისაღებას ფერებისთვის და ზომებისთვის გამოვიყენე ბრაუზერშივე ჩაშენებული Dev Tools.
- სტილების უკეთ დასამენეჯმენტებლად გამოვიყენე :root ბლოკი და აღვწერე ყველაზე ხშირად გამოყენებადი თვისებები

### როგორ გავხსნათ პროექტი:

1. დასრულებული შედეგის სანახავად ეწვიეთ [ბმულს](https://chubina7.github.io/tbc_x_usaid/)
2. კოდის (ე.წ source code)-ის ნახვისთვის კი რამდენიმე გზა არსებობს:

- რეპოზიტორიაშივე კონკრეტულ ფაილზე დაკლიკებით
- რეპოზიტორიაში "<> CODE" ღილაკზე დაკლიკების შემდეგ .zip ფაილის ჩაწერა, ლოკალურ მანქანაში განზიპვა (unzip / "extract...") და შემდეგ ნებისმიერი IDE-ით (მაგ.: VSCode) გახსნა
- GitBash-ში სასურველ დირექტორიაში ნავიგაციითა და `git clone https://github.com/Chubina7/tbc_x_usaid.git` ბრძანების გაშვებით. ლოკალურ მოწყობილობაზე პროექტი ავტომატურად ჩამოიტვირთება
