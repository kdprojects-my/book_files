# Recipe Image Filenames Reference

Here are the exact filenames your recipes are now expecting in the `assets/images/` folder:

## Appetizers & Side Dishes
1. `eggplant-tyeshin-yazyk.jpg` - Eggplant 'Tyeshin Yazyk'
2. `roasted-eggplant-peppers-zucchini.jpg` - Roasted Eggplant with Peppers & Zucchini
3. `desyatka-ten-vegetables.jpg` - Desyatka (Ten Vegetables)
4. `eggplant-turmeric.jpg` - Eggplant with Turmeric
5. `roasted-tomatoes.jpg` - Roasted Tomatoes
6. `turkish-green-beans.jpg` - Turkish Green Beans
7. `beets-potatoes.jpg` - Beets with Potatoes
8. `roasted-vegetables-vegan.jpg` - Roasted Vegetables (Vegan)

## Soups
9. `borscht.jpg` - Borscht

## Salads
10. `russian-vinaigrette.jpg` - Russian Vinaigrette

## Main Dishes
11. `manti.jpg` - Manti
12. `pelmeni.jpg` - Pelmeni
13. `kotlety.jpg` - Kotlety

---

## Quick Setup Instructions

1. **Save your recipe photos** with the exact filenames listed above
2. **Place them** in your project's `assets/images/` folder
3. **Refresh your browser** - images should appear automatically!

## Image Guidelines
- **Format:** JPG or PNG
- **Dimensions:** 800-1200px wide recommended
- **File size:** Under 500KB (use [TinyPNG.com](https://tinypng.com) to compress)
- **Naming:** Use the exact filenames above (lowercase, hyphens, .jpg extension)

## Don't Have Photos Yet?

No problem! The website will work fine without images. The image placeholders won't show anything until you add the actual image files.

## Alternative: Use URLs Instead

If your images are hosted online, you can change the paths in recipes.json from:
```json
"image": "assets/images/borscht.jpg"
```

To:
```json
"image": "https://example.com/your-image.jpg"
```
