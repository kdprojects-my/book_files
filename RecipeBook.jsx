import React, { useState } from 'react';
import { ChefHat, Users, Clock, Info, Menu, X, Printer, Search, ChevronDown, ChevronUp, Star } from 'lucide-react';

const RecipeBook = () => {
  const [currentRecipe, setCurrentRecipe] = useState(0);
  const [servings, setServings] = useState(4);
  const [showCulturalInfo, setShowCulturalInfo] = useState(false);
  const [culturalFact, setCulturalFact] = useState('');
  const [loading, setLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState({ ingredients: true, instructions: true, tips: true });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const recipes = [
    {
      id: 0,
      title: "Turkish Green Beans (Fasulye)",
      category: "Appetizers & Side Dishes",
      story: "A staple in Turkish cuisine that Karly's mother-in-law used to make for every family gathering. Saule spent two years learning authentic Turkish dishes from her.",
      prepTime: "10 min",
      cookTime: "45 min",
      difficulty: "Easy",
      cuisine: "Turkish",
      baseServings: 4,
      dietary: ["Vegan", "Gluten-Free"],
      nutrition: { calories: 145, protein: "3g", carbs: "18g", fat: "8g" },
      ingredients: [
        { name: "fresh green beans", amount: 1, unit: "lb" },
        { name: "large onion, sliced", amount: 1, unit: "" },
        { name: "garlic cloves, sliced", amount: 2, unit: "" },
        { name: "large tomatoes", amount: 2, unit: "" },
        { name: "sugar", amount: 1, unit: "Tbsp" },
        { name: "extra virgin olive oil", amount: 0.33, unit: "cup" },
        { name: "water", amount: 0.5, unit: "cup" },
        { name: "kosher salt", amount: 0.5, unit: "Tbsp" }
      ],
      instructions: [
        { step: 1, title: "Prepare green beans", text: "Clean and trim fresh green beans on both ends. Place in a wide pot or pan." },
        { step: 2, title: "Add onions", text: "Slice onion into rings and place on top of green beans." },
        { step: 3, title: "Prepare tomatoes", text: "Make an X-shaped cut on the bottom of each tomato. Place on top of onions." },
        { step: 4, title: "Season", text: "Add sugar, salt, and olive oil. Pour in water." },
        { step: 5, title: "Initial cooking", text: "Bring to boil and cook 3-5 minutes on medium-high heat." },
        { step: 6, title: "Simmer", text: "Lower heat and cook 40 minutes until beans are tender." }
      ],
      tips: [
        "Use a wide pan for best results",
        "Traditionally served cold, but can be enjoyed warm",
        "Tomatoes break down naturally, creating a light sauce"
      ]
    },
    {
      id: 1,
      title: "Borscht",
      category: "Soups",
      story: "A classic comfort soup. The best we tried was in Brooklyn at 'Ocean' restaurant on a cold January day.",
      prepTime: "30 min",
      cookTime: "2 hrs",
      difficulty: "Medium",
      cuisine: "Russian/Ukrainian",
      baseServings: 8,
      dietary: ["Gluten-Free"],
      nutrition: { calories: 285, protein: "22g", carbs: "28g", fat: "9g" },
      ingredients: [
        { name: "beef meat and ribs", amount: 1, unit: "lb" },
        { name: "water", amount: 16, unit: "cups" },
        { name: "medium potatoes, cubed", amount: 2, unit: "" },
        { name: "leeks, sliced", amount: 2, unit: "" },
        { name: "white cabbage, sliced", amount: 1, unit: "lb" },
        { name: "olive oil", amount: 3, unit: "Tbsp" },
        { name: "onion, chopped", amount: 1, unit: "" },
        { name: "large tomatoes, cubed", amount: 3, unit: "" },
        { name: "tomato paste", amount: 2, unit: "Tbsp" },
        { name: "medium beets, chopped", amount: 3, unit: "" },
        { name: "carrots, chopped", amount: 3, unit: "" },
        { name: "sugar", amount: 1, unit: "Tbsp" },
        { name: "apple cider vinegar", amount: 1, unit: "Tbsp" },
        { name: "salt", amount: 2, unit: "Tbsp" },
        { name: "bay leaves", amount: 2, unit: "" },
        { name: "sour cream for serving", amount: 0.5, unit: "cup" }
      ],
      instructions: [
        { step: 1, title: "Make broth", text: "Cook meat and ribs in water for 1.5 hours. Skim foam." },
        { step: 2, title: "Add vegetables", text: "Add potatoes, leeks, cabbage. Cook 20-30 minutes." },
        { step: 3, title: "Prepare zazharka", text: "Sauté onions in olive oil. Add tomatoes and paste. Cook 10-15 minutes." },
        { step: 4, title: "Cook beets", text: "Add beets and carrots to zazharka with broth. Cook 20-30 minutes. Add vinegar and sugar." },
        { step: 5, title: "Combine", text: "Add zazharka to pot with bay leaves. Cook 5-10 minutes." },
        { step: 6, title: "Serve", text: "Top with sour cream and dill." }
      ],
      tips: [
        "Use pressure cooker on slow setting for 10-15 hours to save time",
        "Keep heat low so vegetables retain color",
        "Shred vegetables in food processor"
      ]
    },
    {
      id: 2,
      title: "Manti (Steamed Dumplings)",
      category: "Main Dishes",
      story: "Central Asian dumplings with butternut squash and meat. Making manti is often a family affair.",
      prepTime: "45 min",
      cookTime: "40 min",
      difficulty: "Medium",
      cuisine: "Central Asian",
      baseServings: 6,
      dietary: [],
      nutrition: { calories: 380, protein: "18g", carbs: "42g", fat: "15g" },
      ingredients: [
        { name: "all-purpose flour", amount: 3, unit: "cups" },
        { name: "eggs", amount: 2, unit: "" },
        { name: "warm water", amount: 0.75, unit: "cup" },
        { name: "salt", amount: 1, unit: "tsp" },
        { name: "ground beef", amount: 1, unit: "lb" },
        { name: "onion, minced", amount: 1, unit: "large" },
        { name: "butternut squash, grated", amount: 1.5, unit: "cups" },
        { name: "olive oil", amount: 2, unit: "Tbsp" },
        { name: "black pepper", amount: 0.5, unit: "tsp" }
      ],
      instructions: [
        { step: 1, title: "Make dough", text: "Mix flour, egg, water, salt. Knead smooth. Rest 30 minutes." },
        { step: 2, title: "Prepare filling", text: "Mix beef, onion, squash, egg, oil, salt, pepper." },
        { step: 3, title: "Roll and cut", text: "Roll dough thin. Cut into 3x3 inch squares." },
        { step: 4, title: "Fill and fold", text: "Add 1 Tbsp filling to center. Fold corners diagonally, pinch together." },
        { step: 5, title: "Steam", text: "Boil water in steamer. Steam manti 40 minutes without touching." }
      ],
      tips: [
        "Lukewarm water makes softer dough",
        "Don't let manti touch in steamer",
        "Serve with garlic yogurt and red pepper oil"
      ]
    },
    {
      id: 3,
      title: "Pelmeni (Russian Dumplings)",
      category: "Main Dishes",
      story: "T.Lyuda prepares 600 pieces before every cold season as family tradition. They freeze beautifully!",
      prepTime: "60 min",
      cookTime: "20 min",
      difficulty: "Medium",
      cuisine: "Russian",
      baseServings: 6,
      dietary: [],
      nutrition: { calories: 340, protein: "16g", carbs: "38g", fat: "13g" },
      ingredients: [
        { name: "all-purpose flour", amount: 3, unit: "cups" },
        { name: "eggs", amount: 2, unit: "" },
        { name: "warm water", amount: 0.75, unit: "cup" },
        { name: "salt", amount: 0.5, unit: "tsp" },
        { name: "ground beef", amount: 1, unit: "lb" },
        { name: "onion, minced", amount: 1, unit: "large" },
        { name: "olive oil", amount: 2, unit: "Tbsp" },
        { name: "butter", amount: 3, unit: "Tbsp" }
      ],
      instructions: [
        { step: 1, title: "Make dough", text: "Mix flour, eggs, water, salt. Knead smooth. Rest 30 minutes." },
        { step: 2, title: "Prepare filling", text: "Mix beef, onion, oil, salt, pepper." },
        { step: 3, title: "Shape", text: "Roll thin, cut 2.5-inch squares. Add filling, fold diagonally, join corners." },
        { step: 4, title: "Cook", text: "Boil water with onion, butter, salt. Add pelmeni. Cook 20 minutes." }
      ],
      tips: [
        "Freeze uncooked on tray, then bag once frozen",
        "Cook from frozen",
        "Serve with sour cream or vinegar"
      ]
    },
    {
      id: 4,
      title: "Russian Vinaigrette",
      category: "Salads",
      story: "A Nepalese colleague was amused by how much beet he consumed in one week visiting Kazakhstan!",
      prepTime: "15 min",
      cookTime: "0 min",
      difficulty: "Easy",
      cuisine: "Russian",
      baseServings: 4,
      dietary: ["Vegan", "Gluten-Free"],
      nutrition: { calories: 165, protein: "4g", carbs: "22g", fat: "7g" },
      ingredients: [
        { name: "roasted beets, cubed", amount: 1, unit: "lb" },
        { name: "kosher baby dill pickles", amount: 0.5, unit: "cup" },
        { name: "frozen green peas, thawed", amount: 0.5, unit: "cup" },
        { name: "red onion, diced", amount: 0.5, unit: "" },
        { name: "extra virgin olive oil", amount: 3, unit: "Tbsp" },
        { name: "fresh dill or parsley", amount: 0.25, unit: "cup" }
      ],
      instructions: [
        { step: 1, title: "Prep", text: "Cube beets and pickles. Thaw peas. Dice onion and herbs." },
        { step: 2, title: "Combine", text: "Mix all ingredients." },
        { step: 3, title: "Season", text: "Drizzle olive oil, add salt and pepper." }
      ],
      tips: [
        "Roasted beets taste better than boiled",
        "Roast in advance - keeps 4-5 days"
      ]
    },
    {
      id: 5,
      title: "Kotlety (Russian Meatballs)",
      category: "Main Dishes",
      story: "Pan-fried then baked for incredible juiciness without fat. A Soviet comfort food staple.",
      prepTime: "20 min",
      cookTime: "35 min",
      difficulty: "Easy",
      cuisine: "Russian",
      baseServings: 6,
      dietary: [],
      nutrition: { calories: 295, protein: "24g", carbs: "12g", fat: "17g" },
      ingredients: [
        { name: "ground beef", amount: 2.2, unit: "lbs" },
        { name: "onions, chopped", amount: 2, unit: "" },
        { name: "eggs", amount: 2, unit: "" },
        { name: "olive oil", amount: 3, unit: "Tbsp" },
        { name: "salt", amount: 1.5, unit: "tsp" },
        { name: "black pepper", amount: 0.5, unit: "tsp" },
        { name: "flour for coating", amount: 0.5, unit: "cup" }
      ],
      instructions: [
        { step: 1, title: "Mix", text: "Combine beef, eggs, oil, salt, pepper, onion. Rest 10 minutes." },
        { step: 2, title: "Form", text: "Shape into oval patties 3 inches long." },
        { step: 3, title: "Fry", text: "Coat in flour. Fry 2 minutes per side for crust." },
        { step: 4, title: "Bake", text: "Transfer to pan. Add water, cover. Bake 320°F for 25-30 minutes." }
      ],
      tips: [
        "Two-step cooking: fry for crust, bake for juiciness",
        "Serve with mashed potatoes and pickles"
      ]
    }
  ];

  const recipe = recipes[currentRecipe];
  const scale = servings / recipe.baseServings;

  const formatAmount = (amount) => {
    const scaled = amount * scale;
    if (scaled % 1 === 0) return scaled.toString();
    const fractions = { 0.25: '¼', 0.33: '⅓', 0.5: '½', 0.67: '⅔', 0.75: '¾' };
    const whole = Math.floor(scaled);
    const frac = scaled - whole;
    const closest = Object.keys(fractions).reduce((p, c) =>
      Math.abs(c - frac) < Math.abs(p - frac) ? c : p
    );
    if (Math.abs(closest - frac) < 0.05) {
      return whole > 0 ? `${whole}${fractions[closest]}` : fractions[closest];
    }
    return scaled % 1 === 0 ? scaled.toString() : scaled.toFixed(2).replace(/\.?0+$/, '');
  };

  const fetchCulturalInfo = async () => {
    setLoading(true);
    setShowCulturalInfo(true);
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: `Share a brief cultural fact about the dish "${recipe.title}" from ${recipe.cuisine} cuisine. Keep it to 2-3 sentences.` }]
        })
      });
      const data = await response.json();
      const text = data.content.find(i => i.type === "text")?.text || "This dish has deep cultural roots.";
      setCulturalFact(text);
    } catch (e) {
      setCulturalFact("This beloved dish represents generations of culinary tradition.");
    } finally {
      setLoading(false);
    }
  };

  const filteredRecipes = recipes.filter(r =>
    r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedRecipes = filteredRecipes.reduce((acc, r) => {
    if (!acc[r.category]) acc[r.category] = [];
    acc[r.category].push(r);
    return acc;
  }, {});

  // Decorative wheat SVG
  const WheatSVG = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="14" cy="6" rx="3" ry="5" fill="#d4a574" transform="rotate(0 14 6)" />
      <ellipse cx="8" cy="9" rx="3" ry="5" fill="#c49460" transform="rotate(-30 8 9)" />
      <ellipse cx="20" cy="9" rx="3" ry="5" fill="#c49460" transform="rotate(30 20 9)" />
      <ellipse cx="5" cy="15" rx="2.5" ry="4.5" fill="#b8845a" transform="rotate(-45 5 15)" />
      <ellipse cx="23" cy="15" rx="2.5" ry="4.5" fill="#b8845a" transform="rotate(45 23 15)" />
      <line x1="14" y1="11" x2="14" y2="27" stroke="#8b6914" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: 'linear-gradient(180deg, #faf6f0 0%, #f0e6d6 100%)', minHeight: '100vh', color: '#3b2f2f' }}>

      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #5c3d2e 0%, #3b2420 100%)', padding: '18px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.04\'%3E%3Cpath d=\'M20 20c-1-1-2-3-1-5s3-3 5-2 2 3 1 5-3 3-5 2z\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <WheatSVG />
            <div>
              <h1 style={{ margin: 0, color: '#f5dcc3', fontSize: '22px', fontWeight: 'normal', letterSpacing: '1px' }}>Salem</h1>
              <p style={{ margin: 0, color: '#c9a882', fontSize: '11px', letterSpacing: '2.5px', textTransform: 'uppercase' }}>Central Asian & Beyond</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={() => window.print()} style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '7px 13px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', color: '#f5dcc3', fontSize: '13px', cursor: 'pointer' }}>
              <Printer size={14} /> Print
            </button>
            <button onClick={() => setShowMenu(!showMenu)} style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '7px 13px', background: '#c9733a', border: 'none', borderRadius: '6px', color: '#fff', fontSize: '13px', cursor: 'pointer' }}>
              {showMenu ? <X size={16} /> : <Menu size={16} />} Recipes
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {showMenu && (
        <div onClick={() => setShowMenu(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.35)', zIndex: 40 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ position: 'absolute', top: '68px', right: '16px', width: '300px', background: '#fff', borderRadius: '12px', boxShadow: '0 12px 40px rgba(0,0,0,0.18)', zIndex: 50, overflow: 'hidden' }}>
            <div style={{ padding: '14px', background: '#5c3d2e' }}>
              <p style={{ margin: 0, color: '#f5dcc3', fontSize: '13px', fontWeight: 'bold', marginBottom: '8px' }}>Recipes</p>
              <div style={{ position: 'relative' }}>
                <Search size={15} style={{ position: 'absolute', left: '9px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
                <input
                  type="text"
                  placeholder="Search recipes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ width: '100%', paddingLeft: '30px', paddingRight: '10px', paddingTop: '8px', paddingBottom: '8px', border: 'none', borderRadius: '6px', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
            </div>
            <div style={{ maxHeight: '340px', overflowY: 'auto', padding: '8px' }}>
              {Object.entries(groupedRecipes).map(([cat, recs]) => (
                <div key={cat} style={{ marginBottom: '6px' }}>
                  <p style={{ margin: '6px 0 4px 10px', fontSize: '10px', color: '#c9733a', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 'bold' }}>{cat}</p>
                  {recs.map(r => (
                    <button
                      key={r.id}
                      onClick={() => { setCurrentRecipe(r.id); setServings(r.baseServings); setShowCulturalInfo(false); setShowMenu(false); }}
                      style={{ display: 'block', width: '100%', textAlign: 'left', padding: '9px 12px', borderRadius: '7px', border: 'none', background: currentRecipe === r.id ? '#c9733a' : 'transparent', color: currentRecipe === r.id ? '#fff' : '#3b2f2f', cursor: 'pointer', fontSize: '14px', transition: 'background 0.2s' }}
                      onMouseEnter={(e) => { if (currentRecipe !== r.id) e.currentTarget.style.background = '#f5ede6'; }}
                      onMouseLeave={(e) => { if (currentRecipe !== r.id) e.currentTarget.style.background = 'transparent'; }}
                    >
                      {r.title}
                      <span style={{ display: 'block', fontSize: '11px', color: currentRecipe === r.id ? 'rgba(255,255,255,0.75)' : '#9a8678', marginTop: '1px' }}>{r.cuisine} • {r.difficulty}</span>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '28px 20px 60px' }}>

        {/* Recipe Title Card */}
        <div style={{ background: '#fff', borderRadius: '14px', padding: '24px 26px 20px', boxShadow: '0 2px 18px rgba(90,60,40,0.08)', borderTop: '4px solid #c9733a', marginBottom: '18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
            <div>
              <h2 style={{ margin: 0, fontSize: '26px', color: '#3b2420', fontWeight: 'normal', letterSpacing: '0.3px' }}>{recipe.title}</h2>
              <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#c9733a', fontStyle: 'italic' }}>{recipe.category}</p>
            </div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {recipe.dietary.map((tag, i) => (
                <span key={i} style={{ fontSize: '11px', background: '#e8f5e9', color: '#2e7d32', padding: '3px 10px', borderRadius: '12px', fontFamily: 'sans-serif', letterSpacing: '0.5px' }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Story */}
          <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid #efe8e0', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '20px', marginTop: '-2px' }}>📖</span>
            <p style={{ margin: 0, fontSize: '14px', color: '#6b5a4e', lineHeight: 1.6, fontStyle: 'italic' }}>{recipe.story}</p>
          </div>
        </div>

        {/* Meta Row: Prep / Cook / Difficulty */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '18px' }}>
          {[
            { icon: <Clock size={18} color="#c9733a" />, label: 'Prep', value: recipe.prepTime },
            { icon: <Clock size={18} color="#c9733a" />, label: 'Cook', value: recipe.cookTime },
            { icon: <ChefHat size={18} color="#c9733a" />, label: 'Difficulty', value: recipe.difficulty }
          ].map((item, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '10px', padding: '14px 10px', textAlign: 'center', boxShadow: '0 2px 10px rgba(90,60,40,0.07)' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '6px' }}>{item.icon}</div>
              <p style={{ margin: 0, fontSize: '10px', color: '#9a8678', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.label}</p>
              <p style={{ margin: '3px 0 0', fontSize: '14px', fontWeight: 'bold', color: '#3b2420' }}>{item.value}</p>
            </div>
          ))}
        </div>

        {/* Nutrition Bar */}
        <div style={{ background: '#fff', borderRadius: '10px', padding: '14px 18px', boxShadow: '0 2px 10px rgba(90,60,40,0.07)', display: 'flex', justifyContent: 'space-around', marginBottom: '18px' }}>
          <p style={{ margin: 0, fontSize: '11px', color: '#9a8678', textTransform: 'uppercase', letterSpacing: '0.8px', textAlign: 'center' }}>
            Nutrition <span style={{ display: 'block', fontSize: '10px', opacity: 0.7 }}>(per serving)</span>
          </p>
          {[
            { label: 'Calories', value: `${Math.round(recipe.nutrition.calories)}` },
            { label: 'Protein', value: recipe.nutrition.protein },
            { label: 'Carbs', value: recipe.nutrition.carbs },
            { label: 'Fat', value: recipe.nutrition.fat }
          ].map((n, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <p style={{ margin: 0, fontSize: '17px', fontWeight: 'bold', color: '#3b2420' }}>{n.value}</p>
              <p style={{ margin: '2px 0 0', fontSize: '10px', color: '#9a8678' }}>{n.label}</p>
            </div>
          ))}
        </div>

        {/* Ingredients Section */}
        <div style={{ background: '#fff', borderRadius: '14px', boxShadow: '0 2px 18px rgba(90,60,40,0.08)', marginBottom: '18px', overflow: 'hidden' }}>
          <button onClick={() => toggleSection('ingredients')} style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', padding: '16px 22px', background: 'none', border: 'none', cursor: 'pointer', borderBottom: expandedSections.ingredients ? '1px solid #efe8e0' : 'none' }}>
            <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#3b2420' }}>🥄 Ingredients</span>
            {expandedSections.ingredients ? <ChevronUp size={18} color="#c9733a" /> : <ChevronDown size={18} color="#c9733a" />}
          </button>
          {expandedSections.ingredients && (
            <div style={{ padding: '10px 22px 18px' }}>
              {/* Servings Adjuster */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '14px', padding: '8px 14px', background: '#faf6f0', borderRadius: '8px' }}>
                <Users size={16} color="#c9733a" />
                <button onClick={() => setServings(Math.max(1, servings - 1))} style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #ddd', background: '#fff', cursor: 'pointer', fontSize: '16px', color: '#c9733a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>−</button>
                <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#3b2420', minWidth: '24px', textAlign: 'center' }}>{servings}</span>
                <button onClick={() => setServings(servings + 1)} style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid #ddd', background: '#fff', cursor: 'pointer', fontSize: '16px', color: '#c9733a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
                <span style={{ fontSize: '13px', color: '#9a8678' }}>servings</span>
              </div>
              {/* Ingredient List */}
              {recipe.ingredients.map((ing, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'baseline', padding: '6px 0', borderBottom: i < recipe.ingredients.length - 1 ? '1px solid #f2ebe4' : 'none' }}>
                  <span style={{ fontSize: '13px', color: '#c9733a', marginRight: '6px' }}>•</span>
                  <span style={{ fontSize: '14px', color: '#3b2f2f' }}>
                    <strong>{formatAmount(ing.amount)} {ing.unit}</strong> {ing.name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cultural Info Banner */}
        <div style={{ background: 'linear-gradient(135deg, #5c3d2e, #7a5038)', borderRadius: '14px', padding: '18px 22px', marginBottom: '18px', boxShadow: '0 4px 18px rgba(60,30,10,0.18)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: showCulturalInfo ? '10px' : '0' }}>
            <Info size={18} color="#f5dcc3" />
            <span style={{ color: '#f5dcc3', fontSize: '15px', fontWeight: 'bold' }}>Explore the Tradition</span>
          </div>
          {!showCulturalInfo ? (
            <button onClick={fetchCulturalInfo} style={{ marginTop: '8px', padding: '8px 18px', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '6px', color: '#f5dcc3', fontSize: '13px', cursor: 'pointer' }}>
              Discover Cultural Background
            </button>
          ) : (
            <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '8px', padding: '12px 14px', marginTop: '4px' }}>
              {loading ? (
                <p style={{ margin: 0, color: '#c9a882', fontSize: '13px', fontStyle: 'italic' }}>Loading...</p>
              ) : (
                <p style={{ margin: 0, color: '#f0dcc8', fontSize: '14px', lineHeight: 1.6 }}>{culturalFact}</p>
              )}
            </div>
          )}
        </div>

        {/* Instructions Section */}
        <div style={{ background: '#fff', borderRadius: '14px', boxShadow: '0 2px 18px rgba(90,60,40,0.08)', marginBottom: '18px', overflow: 'hidden' }}>
          <button onClick={() => toggleSection('instructions')} style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', padding: '16px 22px', background: 'none', border: 'none', cursor: 'pointer', borderBottom: expandedSections.instructions ? '1px solid #efe8e0' : 'none' }}>
            <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#3b2420' }}>📝 Instructions</span>
            {expandedSections.instructions ? <ChevronUp size={18} color="#c9733a" /> : <ChevronDown size={18} color="#c9733a" />}
          </button>
          {expandedSections.instructions && (
            <div style={{ padding: '10px 22px 18px' }}>
              {recipe.instructions.map((inst, idx) => (
                <div key={inst.step} style={{ display: 'flex', gap: '14px', padding: '12px 0', borderBottom: idx < recipe.instructions.length - 1 ? '1px solid #f2ebe4' : 'none' }}>
                  <div style={{ minWidth: '32px', height: '32px', borderRadius: '50%', background: '#c9733a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#fff', fontSize: '14px', fontWeight: 'bold' }}>{inst.step}</span>
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: '#3b2420' }}>{inst.title}</p>
                    <p style={{ margin: '3px 0 0', fontSize: '14px', color: '#6b5a4e', lineHeight: 1.5 }}>{inst.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tips Section */}
        <div style={{ background: '#fff', borderRadius: '14px', boxShadow: '0 2px 18px rgba(90,60,40,0.08)', marginBottom: '18px', overflow: 'hidden' }}>
          <button onClick={() => toggleSection('tips')} style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', padding: '16px 22px', background: 'none', border: 'none', cursor: 'pointer', borderBottom: expandedSections.tips ? '1px solid #efe8e0' : 'none' }}>
            <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#3b2420' }}>✨ Kitchen Secrets</span>
            {expandedSections.tips ? <ChevronUp size={18} color="#c9733a" /> : <ChevronDown size={18} color="#c9733a" />}
          </button>
          {expandedSections.tips && (
            <div style={{ padding: '10px 22px 18px' }}>
              {recipe.tips.map((tip, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', padding: '10px 0', borderBottom: i < recipe.tips.length - 1 ? '1px solid #f2ebe4' : 'none' }}>
                  <span style={{ fontSize: '18px' }}>✨</span>
                  <p style={{ margin: 0, fontSize: '14px', color: '#6b5a4e', lineHeight: 1.5 }}>{tip}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', paddingTop: '16px', borderTop: '1px solid #e0d5c8' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '4px' }}>
            <WheatSVG />
            <span style={{ fontSize: '13px', color: '#9a8678', fontStyle: 'italic' }}>From the family cookbook of Saule & Karly</span>
            <WheatSVG />
          </div>
          <p style={{ margin: 0, fontSize: '11px', color: '#b8a498', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Salem: Recipes from Central Asia and Beyond</p>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body { background: #fff !important; }
          button { display: none !important; }
          .no-print { display: none !important; }
        }
        input[type="number"]::-webkit-inner-spin-button { -webkit-appearance: none; }
        input[type="number"] { -moz-appearance: textfield; }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
};

export default RecipeBook;
