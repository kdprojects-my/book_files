# Salem Recipe Book

> **Traditional recipes from Central Asia & Beyond**  
> By Saule Dairabayeva & Karly D. Croci

A professional, centralized recipe website built for scalability (30-45+ recipes).

---

## 📁 Project Structure

```
salem-recipe-book/
├── index.html              # Main HTML (single entry point)
├── css/
│   └── styles.css          # Single global stylesheet
├── js/
│   └── app.js              # Centralized JavaScript (loads recipes, handles all UI)
├── data/
│   └── recipes.json        # **ALL RECIPES** stored here
├── assets/
│   └── images/             # Recipe images (optional)
└── README.md               # This file
```

---

## 🚀 Getting Started

### Quick Start (Local Development)
```bash
# Simply open index.html in your browser
# OR use a local server:
python -m http.server 8000
# Then visit: http://localhost:8000
```

### Deploy to Netlify
1. Drag the entire `salem-recipe-book` folder to Netlify
2. Done! No build configuration needed

---

## ➕ How to Add New Recipes

### Step 1: Open `data/recipes.json`

All recipes are stored in a single JSON file for easy management.

### Step 2: Copy a Template Recipe

```json
{
  "id": 13,
  "title": "Your Recipe Name",
  "category": "Appetizers & Side Dishes",
  "story": "Brief story about the dish origin or family connection",
  "prepTime": "15 min",
  "cookTime": "30 min",
  "difficulty": "Easy",
  "cuisine": "Turkish",
  "baseServings": 4,
  "image": "assets/images/your-recipe.jpg",
  "dietary": ["Vegan", "Gluten-Free"],
  "nutrition": {
    "calories": 200,
    "protein": "5g",
    "carbs": "25g",
    "fat": "8g"
  },
  "ingredients": [
    {"name": "ingredient name", "amount": 1, "unit": "cup"},
    {"name": "another ingredient", "amount": 2, "unit": "Tbsp"}
  ],
  "instructions": [
    {"step": 1, "title": "Step title", "text": "Detailed instructions."},
    {"step": 2, "title": "Next step", "text": "More instructions."}
  ],
  "tips": [
    "First cooking tip",
    "Second helpful tip"
  ]
}
```

### Step 3: Fill In Your Recipe Data

**Important Fields:**
- `id` - **Must be unique!** (13, 14, 15, etc.)
- `category` - Choose from existing categories or create new ones:
  - "Appetizers & Side Dishes"
  - "Soups"
  - "Salads"
  - "Main Dishes"
  - "Desserts" (add this category for future recipes)
  - "Breads & Pastries" (etc.)
- `dietary` - Array of tags: ["Vegan", "Vegetarian", "Gluten-Free", "Dairy-Free"]
- `image` - Optional (leave as `""` if no image)
- `unit` - Common units: "cup", "Tbsp", "tsp", "lb", "oz", "g", or "" (for countable items like eggs)

### Step 4: Save and Test

1. Save `recipes.json`
2. Refresh your browser
3. Check the recipe appears in navigation and renders correctly

---

## 🖼️ Adding Recipe Images

### Option 1: Local Images
1. Save your image to `assets/images/`
2. Use descriptive filenames: `turkish-green-beans.jpg`
3. Update recipe JSON: `"image": "assets/images/turkish-green-beans.jpg"`

### Option 2: External Images (CDN)
Use URLs directly: `"image": "https://example.com/image.jpg"`

### Image Guidelines
- **Format:** JPG or PNG
- **Size:** 800-1200px wide (responsive design)
- **File size:** < 500KB (optimize with tools like TinyPNG)

---

## 📊 Recipe Categories

The app automatically groups recipes by category. Create new categories by simply using them in recipes:

```json
"category": "Desserts"
```

The navigation sidebar will automatically create a new section.

---

## 🔧 Customization

### Change Colors/Styling
Edit `css/styles.css` - all styles are in one file:
```css
:root {
  --accent: #c9733a;  /* Change main accent color */
  --bark: #5c3d2e;    /* Change header color */
  /* ... more variables */
}
```

### Modify Search/Filter Behavior
Edit `js/app.js` → `buildNav()` function

### Add New Features
All JavaScript is in `js/app.js` with clear section comments

---

## 📈 Scaling to 45+ Recipes

The architecture is designed for scale:

✅ **Single data source** (`recipes.json`)  
✅ **Category auto-grouping** (no code changes needed)  
✅ **Search built-in** (searches title, category, cuisine)  
✅ **Dynamic rendering** (no manual HTML updates)  

### Adding Recipe #14-45:
1. Copy existing recipe in `recipes.json`
2. Update `id`, `title`, and other fields
3. Save
4. Done!

---

## 🎨 Design Features

- **Responsive** - Works on mobile, tablet, desktop
- **Print-friendly** - Print button generates clean PDFs
- **Servings scaler** - Auto-adjusts ingredient amounts
- **Fraction formatting** - Displays ¼, ½, ⅓, etc.
- **Collapsible sections** - Clean, organized recipe view
- **Search & filter** - Find recipes instantly
- **Cultural info** - AI-powered background stories

---

## 📝 JSON Schema Reference

### Required Fields
```json
{
  "id": number (unique),
  "title": string,
  "category": string,
  "story": string,
  "prepTime": string ("X min"),
  "cookTime": string ("X min"/"X hrs"),
  "difficulty": "Easy" | "Medium" | "Hard",
  "cuisine": string,
  "baseServings": number,
  "dietary": array of strings,
  "nutrition": {
    "calories": number,
    "protein": string,
    "carbs": string,
    "fat": string
  },
  "ingredients": [
    {
      "name": string,
      "amount": number,
      "unit": string
    }
  ],
  "instructions": [
    {
      "step": number,
      "title": string,
      "text": string
    }
  ],
  "tips": array of strings
}
```

### Optional Fields
```json
{
  "image": string (path or URL, can be "")
}
```

---

## 🐛 Troubleshooting

### Recipes not loading?
- Check browser console (F12) for errors
- Verify `data/recipes.json` has valid JSON (use JSONLint.com)
- Ensure each recipe has a unique `id`

### Images not showing?
- Check file path in `image` field
- Ensure images exist in `assets/images/`
- Verify image file extensions match (jpg vs jpeg)

### Styling issues?
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check `css/styles.css` loaded correctly

---

## 📄 License

Copyright © 2017-2025 Saule Dairabayeva & Karly D. Croci  
All recipes and content are proprietary.

---

## 🙏 Credits

**Recipes by:** Saule Dairabayeva & Karly D. Croci  
**Design & Development:** Centralized architecture for scalability  
**Fonts:** Playfair Display + DM Sans (Google Fonts)

---

**Happy Cooking! 🍽️**
