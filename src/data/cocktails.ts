export type Spirit = 'Bourbon' | 'Gin' | 'Rum' | 'Tequila' | 'Vodka' | 'Mezcal' | 'Brandy' | 'Whiskey' | 'Champagne' | 'Scotch' | 'Rye' | 'Pisco' | 'Absinthe' | 'Aperol' | 'Amaro';
export type Difficulty = 'Easy' | 'Intermediate' | 'Advanced';
export type Occasion = 'Date Night' | 'Party' | 'After Dinner' | 'Brunch' | 'Summer' | 'Winter' | 'Celebration' | 'Relaxing' | 'Happy Hour';
export type FlavorTag = 'Spirit-forward' | 'Citrus' | 'Sweet' | 'Bitter' | 'Herbal' | 'Smoky' | 'Tropical' | 'Creamy' | 'Spicy' | 'Floral' | 'Fruity' | 'Refreshing' | 'Rich' | 'Dry' | 'Effervescent';

export interface Cocktail {
  id: string;
  name: string;
  description: string;
  spirit: Spirit;
  difficulty: Difficulty;
  glassware: string;
  garnish: string;
  ingredients: { item: string; amount: string }[];
  instructions: string[];
  flavorTags: FlavorTag[];
  occasionTags: Occasion[];
  category: 'Classic' | 'Modern';
  abv: 'High' | 'Medium' | 'Low';
  prepTime: string;
  color: string; // gradient color for card
}

const cocktailsData: Cocktail[] = [
  // === THE ICONS (1-30) ===
  {
    id: "old-fashioned",
    name: "Old Fashioned",
    description: "The quintessential whiskey cocktail, a timeless expression of simplicity and balance.",
    spirit: "Bourbon",
    difficulty: "Easy",
    glassware: "Rocks Glass",
    garnish: "Orange peel, Luxardo cherry",
    ingredients: [
      { item: "Bourbon", amount: "2 oz" },
      { item: "Sugar cube", amount: "1" },
      { item: "Angostura bitters", amount: "2 dashes" },
      { item: "Water", amount: "1 tsp" }
    ],
    instructions: [
      "Place sugar cube in rocks glass",
      "Add bitters and water, muddle until dissolved",
      "Add large ice cube",
      "Pour bourbon over ice",
      "Stir gently for 20 seconds",
      "Express orange peel over drink and drop in"
    ],
    flavorTags: ["Spirit-forward", "Rich"],
    occasionTags: ["Date Night", "Relaxing", "After Dinner"],
    category: "Classic",
    abv: "High",
    prepTime: "3 min",
    color: "from-amber-900 to-amber-700"
  },
  {
    id: "manhattan",
    name: "Manhattan",
    description: "A sophisticated union of rye whiskey and sweet vermouth, stirred to perfection.",
    spirit: "Rye",
    difficulty: "Easy",
    glassware: "Coupe",
    garnish: "Luxardo cherry",
    ingredients: [
      { item: "Rye whiskey", amount: "2 oz" },
      { item: "Sweet vermouth", amount: "1 oz" },
      { item: "Angostura bitters", amount: "2 dashes" }
    ],
    instructions: [
      "Add all ingredients to mixing glass with ice",
      "Stir for 30 seconds until well-chilled",
      "Strain into chilled coupe glass",
      "Garnish with cherry"
    ],
    flavorTags: ["Spirit-forward", "Rich", "Sweet"],
    occasionTags: ["Date Night", "After Dinner"],
    category: "Classic",
    abv: "High",
    prepTime: "3 min",
    color: "from-red-950 to-amber-900"
  },
  {
    id: "negroni",
    name: "Negroni",
    description: "The perfect balance of bitter, sweet, and botanical. An Italian icon.",
    spirit: "Gin",
    difficulty: "Easy",
    glassware: "Rocks Glass",
    garnish: "Orange peel",
    ingredients: [
      { item: "Gin", amount: "1 oz" },
      { item: "Campari", amount: "1 oz" },
      { item: "Sweet vermouth", amount: "1 oz" }
    ],
    instructions: [
      "Add all ingredients to rocks glass with ice",
      "Stir gently for 20 seconds",
      "Garnish with orange peel"
    ],
    flavorTags: ["Bitter", "Herbal", "Spirit-forward"],
    occasionTags: ["Happy Hour", "Date Night"],
    category: "Classic",
    abv: "Medium",
    prepTime: "2 min",
    color: "from-red-900 to-orange-900"
  },
  {
    id: "martini",
    name: "Martini",
    description: "The most iconic cocktail ever created. Elegant, cold, and endlessly debatable.",
    spirit: "Gin",
    difficulty: "Easy",
    glassware: "Martini Glass",
    garnish: "Olive or lemon twist",
    ingredients: [
      { item: "London Dry Gin", amount: "2.5 oz" },
      { item: "Dry vermouth", amount: "0.5 oz" }
    ],
    instructions: [
      "Add gin and vermouth to mixing glass with ice",
      "Stir for 30 seconds",
      "Strain into chilled martini glass",
      "Garnish with olive or lemon twist"
    ],
    flavorTags: ["Spirit-forward", "Dry", "Herbal"],
    occasionTags: ["Date Night", "Celebration"],
    category: "Classic",
    abv: "High",
    prepTime: "2 min",
    color: "from-gray-800 to-gray-600"
  },
  {
    id: "daiquiri",
    name: "Daiquiri",
    description: "The perfect expression of rum — bright, balanced, and deceptively simple.",
    spirit: "Rum",
    difficulty: "Easy",
    glassware: "Coupe",
    garnish: "Lime wheel",
    ingredients: [
      { item: "White rum", amount: "2 oz" },
      { item: "Fresh lime juice", amount: "1 oz" },
      { item: "Simple syrup", amount: "0.75 oz" }
    ],
    instructions: [
      "Add all ingredients to shaker with ice",
      "Shake vigorously for 12 seconds",
      "Double strain into chilled coupe",
      "Garnish with lime wheel"
    ],
    flavorTags: ["Citrus", "Refreshing", "Sweet"],
    occasionTags: ["Summer", "Party", "Happy Hour"],
    category: "Classic",
    abv: "Medium",
    prepTime: "2 min",
    color: "from-lime-900 to-green-800"
  },
  {
    id: "margarita",
    name: "Margarita",
    description: "Mexico's greatest export — tart, bright, and perfectly salted.",
    spirit: "Tequila",
    difficulty: "Easy",
    glassware: "Rocks Glass",
    garnish: "Lime wheel, salt rim",
    ingredients: [
      { item: "Blanco tequila", amount: "2 oz" },
      { item: "Fresh lime juice", amount: "1 oz" },
      { item: "Cointreau", amount: "0.75 oz" },
      { item: "Agave syrup", amount: "0.25 oz" }
    ],
    instructions: [
      "Salt half the rim of a rocks glass",
      "Shake all ingredients with ice",
      "Strain over fresh ice into prepared glass",
      "Garnish with lime wheel"
    ],
    flavorTags: ["Citrus", "Refreshing", "Sweet"],
    occasionTags: ["Summer", "Party", "Happy Hour"],
    category: "Classic",
    abv: "Medium",
    prepTime: "3 min",
    color: "from-green-900 to-yellow-800"
  },
  {
    id: "whiskey-sour",
    name: "Whiskey Sour",
    description: "A perfect balance of spirit, citrus, and sweetness with a velvety foam crown.",
    spirit: "Bourbon",
    difficulty: "Intermediate",
    glassware: "Rocks Glass",
    garnish: "Angostura bitters design, cherry",
    ingredients: [
      { item: "Bourbon", amount: "2 oz" },
      { item: "Fresh lemon juice", amount: "0.75 oz" },
      { item: "Simple syrup", amount: "0.75 oz" },
      { item: "Egg white", amount: "1" }
    ],
    instructions: [
      "Dry shake all ingredients without ice for 15 seconds",
      "Add ice and shake again vigorously",
      "Strain into rocks glass over fresh ice",
      "Dash Angostura bitters on foam and create design"
    ],
    flavorTags: ["Citrus", "Creamy", "Sweet"],
    occasionTags: ["Date Night", "Happy Hour"],
    category: "Classic",
    abv: "Medium",
    prepTime: "4 min",
    color: "from-amber-800 to-yellow-700"
  },
  {
    id: "boulevardier",
    name: "Boulevardier",
    description: "A Negroni's richer, whiskey-based cousin. Deeper, darker, and more contemplative.",
    spirit: "Bourbon",
    difficulty: "Easy",
    glassware: "Rocks Glass",
    garnish: "Orange peel",
    ingredients: [
      { item: "Bourbon", amount: "1.5 oz" },
      { item: "Campari", amount: "1 oz" },
      { item: "Sweet vermouth", amount: "1 oz" }
    ],
    instructions: [
      "Add all ingredients to mixing glass with ice",
      "Stir for 30 seconds",
      "Strain over large ice cube in rocks glass",
      "Express orange peel and drop in"
    ],
    flavorTags: ["Bitter", "Rich", "Spirit-forward"],
    occasionTags: ["Date Night", "Winter", "After Dinner"],
    category: "Classic",
    abv: "High",
    prepTime: "3 min",
    color: "from-red-950 to-orange-900"
  },
  {
    id: "paper-plane",
    name: "Paper Plane",
    description: "A modern equal-parts masterpiece — bittersweet, complex, and dangerously drinkable.",
    spirit: "Bourbon",
    difficulty: "Intermediate",
    glassware: "Coupe",
    garnish: "None",
    ingredients: [
      { item: "Bourbon", amount: "0.75 oz" },
      { item: "Aperol", amount: "0.75 oz" },
      { item: "Amaro Nonino", amount: "0.75 oz" },
      { item: "Fresh lemon juice", amount: "0.75 oz" }
    ],
    instructions: [
      "Add all ingredients to shaker with ice",
      "Shake vigorously for 12 seconds",
      "Double strain into chilled coupe"
    ],
    flavorTags: ["Bitter", "Citrus", "Sweet"],
    occasionTags: ["Date Night", "Happy Hour"],
    category: "Modern",
    abv: "Medium",
    prepTime: "2 min",
    color: "from-orange-900 to-amber-800"
  },
  {
    id: "last-word",
    name: "Last Word",
    description: "A prohibition-era masterpiece rediscovered. Four equal parts of herbal perfection.",
    spirit: "Gin",
    difficulty: "Intermediate",
    glassware: "Coupe",
    garnish: "Brandied cherry",
    ingredients: [
      { item: "Gin", amount: "0.75 oz" },
      { item: "Green Chartreuse", amount: "0.75 oz" },
      { item: "Maraschino liqueur", amount: "0.75 oz" },
      { item: "Fresh lime juice", amount: "0.75 oz" }
    ],
    instructions: [
      "Add all ingredients to shaker with ice",
      "Shake vigorously",
      "Double strain into chilled coupe",
      "Garnish with brandied cherry"
    ],
    flavorTags: ["Herbal", "Citrus", "Sweet"],
    occasionTags: ["Date Night", "After Dinner"],
    category: "Classic",
    abv: "High",
    prepTime: "2 min",
    color: "from-green-900 to-emerald-800"
  },
  {
    id: "sidecar",
    name: "Sidecar",
    description: "Parisian elegance in a glass. Cognac meets citrus in a sugar-rimmed embrace.",
    spirit: "Brandy",
    difficulty: "Easy",
    glassware: "Coupe",
    garnish: "Sugar rim, orange peel",
    ingredients: [
      { item: "Cognac", amount: "2 oz" },
      { item: "Cointreau", amount: "0.75 oz" },
      { item: "Fresh lemon juice", amount: "0.75 oz" }
    ],
    instructions: [
      "Sugar half the rim of a coupe glass",
      "Shake all ingredients with ice",
      "Double strain into prepared glass",
      "Garnish with orange peel"
    ],
    flavorTags: ["Citrus", "Rich", "Sweet"],
    occasionTags: ["Date Night", "After Dinner", "Celebration"],
    category: "Classic",
    abv: "High",
    prepTime: "3 min",
    color: "from-amber-800 to-orange-700"
  },
  {
    id: "sazerac",
    name: "Sazerac",
    description: "New Orleans' official cocktail. Rye whiskey perfumed with absinthe and Peychaud's.",
    spirit: "Rye",
    difficulty: "Intermediate",
    glassware: "Rocks Glass",
    garnish: "Lemon peel (expressed, discarded)",
    ingredients: [
      { item: "Rye whiskey", amount: "2 oz" },
      { item: "Sugar cube", amount: "1" },
      { item: "Peychaud's bitters", amount: "3 dashes" },
      { item: "Absinthe", amount: "Rinse" }
    ],
    instructions: [
      "Rinse chilled rocks glass with absinthe, discard excess",
      "In mixing glass, muddle sugar with bitters",
      "Add rye and ice, stir for 30 seconds",
      "Strain into prepared glass (no ice)",
      "Express lemon peel over drink, discard"
    ],
    flavorTags: ["Spirit-forward", "Herbal", "Spicy"],
    occasionTags: ["After Dinner", "Relaxing"],
    category: "Classic",
    abv: "High",
    prepTime: "4 min",
    color: "from-amber-950 to-red-900"
  },
  {
    id: "vieux-carre",
    name: "Vieux Carré",
    description: "A complex, boozy sipper born in New Orleans' French Quarter. Rich and aromatic.",
    spirit: "Rye",
    difficulty: "Intermediate",
    glassware: "Rocks Glass",
    garnish: "Lemon peel",
    ingredients: [
      { item: "Rye whiskey", amount: "0.75 oz" },
      { item: "Cognac", amount: "0.75 oz" },
      { item: "Sweet vermouth", amount: "0.75 oz" },
      { item: "Bénédictine", amount: "1 tsp" },
      { item: "Peychaud's bitters", amount: "2 dashes" },
      { item: "Angostura bitters", amount: "2 dashes" }
    ],
    instructions: [
      "Combine all ingredients in mixing glass with ice",
      "Stir for 30 seconds",
      "Strain over large ice cube",
      "Garnish with lemon peel"
    ],
    flavorTags: ["Rich", "Spirit-forward", "Herbal"],
    occasionTags: ["After Dinner", "Winter", "Date Night"],
    category: "Classic",
    abv: "High",
    prepTime: "3 min",
    color: "from-red-950 to-amber-900"
  },
  {
    id: "aviation",
    name: "Aviation",
    description: "A floral pre-Prohibition gem with a gorgeous lavender hue. Delicate and ethereal.",
    spirit: "Gin",
    difficulty: "Intermediate",
    glassware: "Coupe",
    garnish: "Brandied cherry",
    ingredients: [
      { item: "Gin", amount: "2 oz" },
      { item: "Maraschino liqueur", amount: "0.5 oz" },
      { item: "Crème de violette", amount: "0.25 oz" },
      { item: "Fresh lemon juice", amount: "0.75 oz" }
    ],
    instructions: [
      "Add all ingredients to shaker with ice",
      "Shake vigorously for 12 seconds",
      "Double strain into chilled coupe",
      "Garnish with brandied cherry"
    ],
    flavorTags: ["Floral", "Citrus", "Sweet"],
    occasionTags: ["Date Night", "Celebration"],
    category: "Classic",
    abv: "Medium",
    prepTime: "2 min",
    color: "from-purple-900 to-indigo-800"
  },
  {
    id: "corpse-reviver-2",
    name: "Corpse Reviver No. 2",
    description: "A 'hair of the dog' classic. Citrus-forward, herbal, with a mysterious absinthe kiss.",
    spirit: "Gin",
    difficulty: "Intermediate",
    glassware: "Coupe",
    garnish: "Orange peel",
    ingredients: [
      { item: "Gin", amount: "0.75 oz" },
      { item: "Cointreau", amount: "0.75 oz" },
      { item: "Lillet Blanc", amount: "0.75 oz" },
      { item: "Fresh lemon juice", amount: "0.75 oz" },
      { item: "Absinthe", amount: "Rinse" }
    ],
    instructions: [
      "Rinse coupe glass with absinthe",
      "Shake remaining ingredients with ice",
      "Double strain into prepared glass",
      "Garnish with orange peel"
    ],
    flavorTags: ["Citrus", "Herbal", "Dry"],
    occasionTags: ["Brunch", "Happy Hour"],
    category: "Classic",
    abv: "Medium",
    prepTime: "3 min",
    color: "from-yellow-900 to-amber-700"
  },
  {
    id: "clover-club",
    name: "Clover Club",
    description: "A pre-Prohibition classic with a beautiful pink hue and silky raspberry foam.",
    spirit: "Gin",
    difficulty: "Intermediate",
    glassware: "Coupe",
    garnish: "Fresh raspberries",
    ingredients: [
      { item: "Gin", amount: "2 oz" },
      { item: "Fresh lemon juice", amount: "0.75 oz" },
      { item: "Raspberry syrup", amount: "0.5 oz" },
      { item: "Egg white", amount: "1" },
      { item: "Dry vermouth", amount: "0.5 oz" }
    ],
    instructions: [
      "Dry shake all ingredients without ice",
      "Add ice and shake vigorously",
      "Double strain into chilled coupe",
      "Garnish with fresh raspberries"
    ],
    flavorTags: ["Fruity", "Creamy", "Citrus"],
    occasionTags: ["Date Night", "Brunch", "Celebration"],
    category: "Classic",
    abv: "Medium",
    prepTime: "4 min",
    color: "from-pink-900 to-rose-800"
  },
  {
    id: "ramos-gin-fizz",
    name: "Ramos Gin Fizz",
    description: "The 12-minute shake. Ethereal, creamy, and worth every second of effort.",
    spirit: "Gin",
    difficulty: "Advanced",
    glassware: "Collins Glass",
    garnish: "None (foam rises above glass)",
    ingredients: [
      { item: "Gin", amount: "2 oz" },
      { item: "Fresh lemon juice", amount: "0.5 oz" },
      { item: "Fresh lime juice", amount: "0.5 oz" },
      { item: "Simple syrup", amount: "1 oz" },
      { item: "Heavy cream", amount: "1 oz" },
      { item: "Egg white", amount: "1" },
      { item: "Orange flower water", amount: "3 drops" },
      { item: "Club soda", amount: "1 oz" }
    ],
    instructions: [
      "Combine all ingredients except soda in shaker without ice",
      "Dry shake for 2 minutes (seriously)",
      "Add ice and shake for another minute",
      "Strain into collins glass without ice",
      "Let rest 1 minute",
      "Pour club soda down the center to lift the foam"
    ],
    flavorTags: ["Creamy", "Citrus", "Floral", "Effervescent"],
    occasionTags: ["Brunch", "Celebration"],
    category: "Classic",
    abv: "Low",
    prepTime: "8 min",
    color: "from-gray-300 to-gray-100"
  },
  {
    id: "singapore-sling",
    name: "Singapore Sling",
    description: "Raffles Hotel's legendary tropical creation. Complex, fruity, and endlessly refreshing.",
    spirit: "Gin",
    difficulty: "Advanced",
    glassware: "Hurricane Glass",
    garnish: "Pineapple wedge, cherry",
    ingredients: [
      { item: "Gin", amount: "1.5 oz" },
      { item: "Cherry Heering", amount: "0.5 oz" },
      { item: "Cointreau", amount: "0.25 oz" },
      { item: "Bénédictine", amount: "0.25 oz" },
      { item: "Pineapple juice", amount: "4 oz" },
      { item: "Fresh lime juice", amount: "0.5 oz" },
      { item: "Grenadine", amount: "0.25 oz" },
      { item: "Angostura bitters", amount: "1 dash" }
    ],
    instructions: [
      "Add all ingredients to shaker with ice",
      "Shake vigorously",
      "Strain into ice-filled hurricane glass",
      "Garnish with pineapple wedge and cherry"
    ],
    flavorTags: ["Tropical", "Fruity", "Sweet"],
    occasionTags: ["Party", "Summer", "Celebration"],
    category: "Classic",
    abv: "Medium",
    prepTime: "5 min",
    color: "from-pink-800 to-red-700"
  },
  {
    id: "mai-tai",
    name: "Mai Tai",
    description: "The king of Tiki. Rum, lime, orgeat, and curaçao in perfect tropical harmony.",
    spirit: "Rum",
    difficulty: "Intermediate",
    glassware: "Rocks Glass",
    garnish: "Mint sprig, lime shell, edible orchid",
    ingredients: [
      { item: "Aged Jamaican rum", amount: "1 oz" },
      { item: "Rhum agricole", amount: "1 oz" },
      { item: "Fresh lime juice", amount: "1 oz" },
      { item: "Orange curaçao", amount: "0.5 oz" },
      { item: "Orgeat", amount: "0.5 oz" }
    ],
    instructions: [
      "Combine all ingredients in shaker with ice",
      "Shake vigorously",
      "Strain over crushed ice in rocks glass",
      "Garnish with spent lime shell, mint sprig"
    ],
    flavorTags: ["Tropical", "Citrus", "Sweet"],
    occasionTags: ["Summer", "Party"],
    category: "Classic",
    abv: "Medium",
    prepTime: "4 min",
    color: "from-amber-700 to-orange-600"
  },
  {
    id: "zombie",
    name: "Zombie",
    description: "Don the Beachcomber's dangerously delicious creation. Three rums, proceed with caution.",
    spirit: "Rum",
    difficulty: "Advanced",
    glassware: "Tiki Mug",
    garnish: "Mint sprig, lime wheel",
    ingredients: [
      { item: "Gold rum", amount: "1.5 oz" },
      { item: "Dark Jamaican rum", amount: "1.5 oz" },
      { item: "Overproof rum", amount: "1 oz" },
      { item: "Fresh lime juice", amount: "0.75 oz" },
      { item: "Falernum", amount: "0.5 oz" },
      { item: "Grenadine", amount: "0.5 oz" },
      { item: "Angostura bitters", amount: "1 dash" },
      { item: "Absinthe", amount: "1 tsp" }
    ],
    instructions: [
      "Add all ingredients except overproof rum to shaker with ice",
      "Shake vigorously",
      "Pour into tiki mug filled with crushed ice",
      "Float overproof rum on top",
      "Garnish lavishly"
    ],
    flavorTags: ["Tropical", "Sweet", "Spicy", "Rich"],
    occasionTags: ["Party", "Summer"],
    category: "Classic",
    abv: "High",
    prepTime: "5 min",
    color: "from-red-900 to-orange-800"
  },
  {
    id: "jungle-bird",
    name: "Jungle Bird",
    description: "A tropical Negroni. Rum and Campari shouldn't work — but they absolutely do.",
    spirit: "Rum",
    difficulty: "Easy",
    glassware: "Rocks Glass",
    garnish: "Pineapple wedge",
    ingredients: [
      { item: "Blackstrap rum", amount: "1.5 oz" },
      { item: "Campari", amount: "0.75 oz" },
      { item: "Pineapple juice", amount: "1.5 oz" },
      { item: "Fresh lime juice", amount: "0.5 oz" },
      { item: "Demerara syrup", amount: "0.5 oz" }
    ],
    instructions: [
      "Add all ingredients to shaker with ice",
      "Shake vigorously",
      "Strain over fresh ice in rocks glass",
      "Garnish with pineapple wedge"
    ],
    flavorTags: ["Tropical", "Bitter", "Fruity"],
    occasionTags: ["Summer", "Party", "Happy Hour"],
    category: "Classic",
    abv: "Medium",
    prepTime: "3 min",
    color: "from-red-800 to-yellow-700"
  },
  {
    id: "espresso-martini",
    name: "Espresso Martini",
    description: "The cocktail that launched a thousand brunches. Caffeinated, creamy, dangerously moreish.",
    spirit: "Vodka",
    difficulty: "Easy",
    glassware: "Coupe",
    garnish: "Three coffee beans",
    ingredients: [
      { item: "Vodka", amount: "2 oz" },
      { item: "Coffee liqueur", amount: "0.5 oz" },
      { item: "Fresh espresso", amount: "1 oz" },
      { item: "Simple syrup", amount: "0.25 oz" }
    ],
    instructions: [
      "Brew espresso and let cool slightly",
      "Add all ingredients to shaker with ice",
      "Shake very hard for 15 seconds",
      "Double strain into chilled coupe",
      "Garnish with three coffee beans"
    ],
    flavorTags: ["Rich", "Sweet", "Bitter"],
    occasionTags: ["After Dinner", "Party", "Date Night"],
    category: "Modern",
    abv: "Medium",
    prepTime: "4 min",
    color: "from-amber-950 to-yellow-900"
  },
  {
    id: "french-75",
    name: "French 75",
    description: "Named after a French artillery cannon. Gin, lemon, and champagne — devastatingly elegant.",
    spirit: "Champagne",
    difficulty: "Easy",
    glassware: "Champagne Flute",
    garnish: "Lemon twist",
    ingredients: [
      { item: "Gin", amount: "1 oz" },
      { item: "Fresh lemon juice", amount: "0.5 oz" },
      { item: "Simple syrup", amount: "0.5 oz" },
      { item: "Champagne", amount: "3 oz" }
    ],
    instructions: [
      "Shake gin, lemon juice, and syrup with ice",
      "Strain into champagne flute",
      "Top with chilled champagne",
      "Garnish with lemon twist"
    ],
    flavorTags: ["Effervescent", "Citrus", "Refreshing"],
    occasionTags: ["Celebration", "Brunch", "Date Night"],
    category: "Classic",
    abv: "Medium",
    prepTime: "2 min",
    color: "from-yellow-700 to-amber-500"
  },
  {
    id: "bees-knees",
    name: "Bee's Knees",
    description: "A Prohibition-era charmer. Honey and lemon soften the gin to pure liquid gold.",
    spirit: "Gin",
    difficulty: "Easy",
    glassware: "Coupe",
    garnish: "Lemon twist",
    ingredients: [
      { item: "Gin", amount: "2 oz" },
      { item: "Fresh lemon juice", amount: "0.75 oz" },
      { item: "Honey syrup", amount: "0.75 oz" }
    ],
    instructions: [
      "Combine honey syrup (2:1 honey to water)",
      "Add all ingredients to shaker with ice",
      "Shake vigorously for 12 seconds",
      "Double strain into chilled coupe",
      "Garnish with lemon twist"
    ],
    flavorTags: ["Sweet", "Citrus", "Floral"],
    occasionTags: ["Happy Hour", "Date Night", "Summer"],
    category: "Classic",
    abv: "Medium",
    prepTime: "3 min",
    color: "from-yellow-800 to-amber-600"
  },
  {
    id: "paloma",
    name: "Paloma",
    description: "Mexico's real national cocktail. Tequila and grapefruit soda, simple and sublime.",
    spirit: "Tequila",
    difficulty: "Easy",
    glassware: "Highball Glass",
    garnish: "Grapefruit wedge, salt rim",
    ingredients: [
      { item: "Blanco tequila", amount: "2 oz" },
      { item: "Fresh grapefruit juice", amount: "2 oz" },
      { item: "Fresh lime juice", amount: "0.5 oz" },
      { item: "Agave syrup", amount: "0.25 oz" },
      { item: "Club soda", amount: "2 oz" }
    ],
    instructions: [
      "Salt the rim of a highball glass",
      "Add tequila, juices, and agave to glass with ice",
      "Top with club soda",
      "Stir gently and garnish"
    ],
    flavorTags: ["Citrus", "Refreshing", "Effervescent"],
    occasionTags: ["Summer", "Party", "Happy Hour"],
    category: "Classic",
    abv: "Low",
    prepTime: "2 min",
    color: "from-pink-800 to-orange-600"
  },
  {
    id: "tom-collins",
    name: "Tom Collins",
    description: "The original long drink. Gin, lemon, soda — refreshing since the 1870s.",
    spirit: "Gin",
    difficulty: "Easy",
    glassware: "Collins Glass",
    garnish: "Lemon wheel, cherry",
    ingredients: [
      { item: "London Dry Gin", amount: "2 oz" },
      { item: "Fresh lemon juice", amount: "1 oz" },
      { item: "Simple syrup", amount: "0.5 oz" },
      { item: "Club soda", amount: "3 oz" }
    ],
    instructions: [
      "Add gin, lemon juice, and syrup to collins glass with ice",
      "Stir to combine",
      "Top with club soda",
      "Garnish with lemon wheel and cherry"
    ],
    flavorTags: ["Refreshing", "Citrus", "Effervescent"],
    occasionTags: ["Summer", "Happy Hour", "Brunch"],
    category: "Classic",
    abv: "Low",
    prepTime: "2 min",
    color: "from-blue-800 to-cyan-700"
  },
  {
    id: "moscow-mule",
    name: "Moscow Mule",
    description: "Vodka meets ginger beer in a copper mug. Spicy, refreshing, and impossibly popular.",
    spirit: "Vodka",
    difficulty: "Easy",
    glassware: "Copper Mug",
    garnish: "Lime wheel, mint sprig",
    ingredients: [
      { item: "Vodka", amount: "2 oz" },
      { item: "Fresh lime juice", amount: "0.5 oz" },
      { item: "Ginger beer", amount: "4 oz" }
    ],
    instructions: [
      "Add vodka and lime juice to copper mug filled with ice",
      "Top with ginger beer",
      "Stir gently",
      "Garnish with lime wheel and mint"
    ],
    flavorTags: ["Spicy", "Refreshing", "Citrus"],
    occasionTags: ["Summer", "Party", "Happy Hour"],
    category: "Classic",
    abv: "Low",
    prepTime: "2 min",
    color: "from-yellow-700 to-green-700"
  },
  {
    id: "penicillin",
    name: "Penicillin",
    description: "Sam Ross's modern classic. Smoky Scotch, ginger, honey, and lemon — medicine never tasted this good.",
    spirit: "Scotch",
    difficulty: "Intermediate",
    glassware: "Rocks Glass",
    garnish: "Candied ginger",
    ingredients: [
      { item: "Blended Scotch", amount: "2 oz" },
      { item: "Fresh lemon juice", amount: "0.75 oz" },
      { item: "Honey-ginger syrup", amount: "0.75 oz" },
      { item: "Islay Scotch", amount: "0.25 oz" }
    ],
    instructions: [
      "Shake Scotch, lemon, and honey-ginger syrup with ice",
      "Strain over fresh ice in rocks glass",
      "Float Islay Scotch on top",
      "Garnish with candied ginger"
    ],
    flavorTags: ["Smoky", "Spicy", "Citrus", "Sweet"],
    occasionTags: ["Winter", "After Dinner", "Date Night"],
    category: "Modern",
    abv: "Medium",
    prepTime: "4 min",
    color: "from-amber-900 to-yellow-800"
  },
  {
    id: "naked-and-famous",
    name: "Naked and Famous",
    description: "The mezcal Last Word. Smoky, bitter, and citrusy in perfect equal parts.",
    spirit: "Mezcal",
    difficulty: "Intermediate",
    glassware: "Coupe",
    garnish: "None",
    ingredients: [
      { item: "Mezcal", amount: "0.75 oz" },
      { item: "Yellow Chartreuse", amount: "0.75 oz" },
      { item: "Aperol", amount: "0.75 oz" },
      { item: "Fresh lime juice", amount: "0.75 oz" }
    ],
    instructions: [
      "Add all ingredients to shaker with ice",
      "Shake vigorously",
      "Double strain into chilled coupe"
    ],
    flavorTags: ["Smoky", "Bitter", "Citrus", "Herbal"],
    occasionTags: ["Date Night", "Happy Hour"],
    category: "Modern",
    abv: "Medium",
    prepTime: "2 min",
    color: "from-orange-800 to-yellow-700"
  },
  {
    id: "trinidad-sour",
    name: "Trinidad Sour",
    description: "Angostura bitters as the base spirit. Sounds insane. Tastes incredible.",
    spirit: "Rye",
    difficulty: "Advanced",
    glassware: "Coupe",
    garnish: "None",
    ingredients: [
      { item: "Angostura bitters", amount: "1.5 oz" },
      { item: "Orgeat", amount: "1 oz" },
      { item: "Fresh lemon juice", amount: "0.75 oz" },
      { item: "Rye whiskey", amount: "0.5 oz" }
    ],
    instructions: [
      "Add all ingredients to shaker with ice",
      "Shake vigorously for 12 seconds",
      "Double strain into chilled coupe"
    ],
    flavorTags: ["Bitter", "Sweet", "Spicy"],
    occasionTags: ["After Dinner", "Date Night"],
    category: "Modern",
    abv: "High",
    prepTime: "2 min",
    color: "from-red-900 to-pink-800"
  },
  // === MODERN CLASSICS & BEYOND (31-200) ===
  ...generateRemainingCocktails()
];

function generateRemainingCocktails(): Cocktail[] {
  const remaining: Cocktail[] = [
    makeCocktail("aperol-spritz", "Aperol Spritz", "The unofficial drink of Italian summer. Bittersweet, bubbly, sunset-orange.", "Aperol", "Easy", "Wine Glass", "Orange slice", [{ item: "Aperol", amount: "2 oz" }, { item: "Prosecco", amount: "3 oz" }, { item: "Club soda", amount: "1 oz" }], ["Pour Aperol into wine glass with ice", "Add Prosecco", "Top with splash of soda", "Garnish with orange slice"], ["Bitter", "Effervescent", "Refreshing"], ["Summer", "Happy Hour", "Brunch"], "Classic", "Low", "1 min", "from-orange-700 to-red-600"),
    makeCocktail("americano", "Americano", "The precursor to the Negroni. Campari, vermouth, and soda in effortless harmony.", "Amaro", "Easy", "Highball Glass", "Orange slice", [{ item: "Campari", amount: "1.5 oz" }, { item: "Sweet vermouth", amount: "1.5 oz" }, { item: "Club soda", amount: "Top" }], ["Build in highball glass with ice", "Add Campari and vermouth", "Top with soda", "Garnish with orange slice"], ["Bitter", "Refreshing", "Herbal"], ["Summer", "Happy Hour"], "Classic", "Low", "2 min", "from-red-800 to-orange-700"),
    makeCocktail("garibaldi", "Garibaldi", "Two ingredients, one perfect drink. Campari and 'fluffy' orange juice.", "Aperol", "Easy", "Highball Glass", "Orange slice", [{ item: "Campari", amount: "1.5 oz" }, { item: "Fresh orange juice", amount: "4 oz" }], ["Blend orange juice until frothy", "Pour Campari into glass with ice", "Top with fluffy orange juice", "Garnish with orange slice"], ["Bitter", "Citrus", "Refreshing"], ["Brunch", "Summer"], "Modern", "Low", "3 min", "from-orange-800 to-red-700"),
    makeCocktail("sbagliato", "Sbagliato", "A 'mistake' Negroni made with Prosecco instead of gin. A beautiful accident.", "Aperol", "Easy", "Rocks Glass", "Orange peel", [{ item: "Campari", amount: "1 oz" }, { item: "Sweet vermouth", amount: "1 oz" }, { item: "Prosecco", amount: "1 oz" }], ["Add Campari and vermouth to glass with ice", "Top with Prosecco", "Stir very gently", "Garnish with orange peel"], ["Bitter", "Effervescent", "Sweet"], ["Happy Hour", "Summer"], "Classic", "Low", "1 min", "from-red-900 to-orange-800"),
    makeCocktail("gimlet", "Gimlet", "The purest gin cocktail. Just gin and lime cordial, stirred to perfection.", "Gin", "Easy", "Coupe", "Lime wheel", [{ item: "Gin", amount: "2.5 oz" }, { item: "Fresh lime juice", amount: "0.75 oz" }, { item: "Simple syrup", amount: "0.75 oz" }], ["Shake all ingredients with ice", "Strain into chilled coupe", "Garnish with lime wheel"], ["Citrus", "Refreshing", "Dry"], ["Happy Hour", "Summer"], "Classic", "Medium", "2 min", "from-green-800 to-lime-700"),
    makeCocktail("mojito", "Mojito", "Havana's gift to the world. Rum, lime, mint, sugar, and soda in sublime balance.", "Rum", "Easy", "Highball Glass", "Mint bouquet", [{ item: "White rum", amount: "2 oz" }, { item: "Fresh lime juice", amount: "1 oz" }, { item: "Simple syrup", amount: "0.75 oz" }, { item: "Mint leaves", amount: "8-10" }, { item: "Club soda", amount: "2 oz" }], ["Gently muddle mint with syrup in glass", "Add rum and lime juice", "Fill with ice and top with soda", "Stir gently, garnish with mint bouquet"], ["Refreshing", "Herbal", "Citrus"], ["Summer", "Party"], "Classic", "Low", "3 min", "from-green-700 to-lime-600"),
    makeCocktail("dark-n-stormy", "Dark 'n' Stormy", "Dark rum and spicy ginger beer. A storm in a glass, trademarked by Goslings.", "Rum", "Easy", "Highball Glass", "Lime wedge", [{ item: "Goslings Black Seal rum", amount: "2 oz" }, { item: "Ginger beer", amount: "4 oz" }, { item: "Fresh lime juice", amount: "0.5 oz" }], ["Fill highball glass with ice", "Add lime juice and ginger beer", "Float dark rum on top", "Garnish with lime wedge"], ["Spicy", "Rich", "Refreshing"], ["Summer", "Party"], "Classic", "Low", "2 min", "from-amber-900 to-gray-800"),
    makeCocktail("caipirinha", "Caipirinha", "Brazil's national cocktail. Cachaça muddled with lime and sugar. Raw and electric.", "Rum", "Easy", "Rocks Glass", "Lime wheel", [{ item: "Cachaça", amount: "2 oz" }, { item: "Lime", amount: "1, quartered" }, { item: "Sugar", amount: "2 tsp" }], ["Muddle lime quarters with sugar in rocks glass", "Fill with crushed ice", "Add cachaça", "Stir briefly"], ["Citrus", "Sweet", "Refreshing"], ["Summer", "Party"], "Classic", "Medium", "2 min", "from-green-800 to-yellow-700"),
    makeCocktail("pina-colada", "Piña Colada", "Tropical escapism in a glass. Rum, coconut, and pineapple blended to perfection.", "Rum", "Easy", "Hurricane Glass", "Pineapple wedge, cherry", [{ item: "White rum", amount: "2 oz" }, { item: "Coconut cream", amount: "1.5 oz" }, { item: "Pineapple juice", amount: "3 oz" }], ["Blend all ingredients with ice until smooth", "Pour into hurricane glass", "Garnish with pineapple wedge and cherry"], ["Tropical", "Creamy", "Sweet"], ["Summer", "Party"], "Classic", "Low", "3 min", "from-yellow-600 to-gray-200"),
    makeCocktail("mint-julep", "Mint Julep", "Kentucky Derby tradition. Bourbon, mint, sugar, crushed ice. Southern elegance.", "Bourbon", "Easy", "Julep Cup", "Large mint bouquet", [{ item: "Bourbon", amount: "2.5 oz" }, { item: "Simple syrup", amount: "0.5 oz" }, { item: "Fresh mint", amount: "8-10 leaves" }], ["Lightly muddle mint with syrup in julep cup", "Add bourbon", "Pack tightly with crushed ice", "Stir until cup frosts", "Crown with mint bouquet"], ["Spirit-forward", "Herbal", "Refreshing"], ["Summer", "Celebration"], "Classic", "High", "3 min", "from-green-900 to-amber-800"),
    makeCocktail("pisco-sour", "Pisco Sour", "Peru's national cocktail. Bright, frothy, and beautifully aromatic with bitters art.", "Pisco", "Intermediate", "Coupe", "Angostura bitters drops", [{ item: "Pisco", amount: "2 oz" }, { item: "Fresh lime juice", amount: "1 oz" }, { item: "Simple syrup", amount: "0.75 oz" }, { item: "Egg white", amount: "1" }, { item: "Angostura bitters", amount: "3 drops" }], ["Dry shake all ingredients without ice", "Add ice and shake vigorously", "Double strain into coupe", "Dot bitters on foam"], ["Citrus", "Creamy", "Sweet"], ["Happy Hour", "Date Night"], "Classic", "Medium", "4 min", "from-amber-700 to-lime-600"),
    makeCocktail("cosmopolitan", "Cosmopolitan", "The 90s icon. Vodka, cranberry, and lime in a sexy pink package.", "Vodka", "Easy", "Martini Glass", "Lime wheel", [{ item: "Citron vodka", amount: "1.5 oz" }, { item: "Cointreau", amount: "1 oz" }, { item: "Fresh lime juice", amount: "0.5 oz" }, { item: "Cranberry juice", amount: "1 oz" }], ["Shake all ingredients with ice", "Strain into chilled martini glass", "Garnish with lime wheel"], ["Citrus", "Fruity", "Sweet"], ["Party", "Date Night"], "Modern", "Easy", "2 min", "from-pink-700 to-red-600"),
    makeCocktail("tequila-sunrise", "Tequila Sunrise", "A visual showpiece. Tequila, orange juice, and grenadine create a sunrise effect.", "Tequila", "Easy", "Highball Glass", "Orange slice, cherry", [{ item: "Blanco tequila", amount: "2 oz" }, { item: "Orange juice", amount: "4 oz" }, { item: "Grenadine", amount: "0.5 oz" }], ["Pour tequila and OJ into glass with ice", "Slowly pour grenadine down the side", "Let it settle to create sunrise effect", "Garnish with orange and cherry"], ["Fruity", "Sweet", "Refreshing"], ["Summer", "Brunch", "Party"], "Classic", "Low", "2 min", "from-red-600 to-yellow-500"),
    makeCocktail("oaxaca-old-fashioned", "Oaxaca Old Fashioned", "Phil Ward's smoky twist on the classic. Mezcal and tequila in perfect balance.", "Mezcal", "Intermediate", "Rocks Glass", "Flamed orange peel", [{ item: "Reposado tequila", amount: "1.5 oz" }, { item: "Mezcal", amount: "0.5 oz" }, { item: "Agave syrup", amount: "1 tsp" }, { item: "Angostura bitters", amount: "2 dashes" }], ["Add agave and bitters to rocks glass", "Add tequila and mezcal", "Add large ice cube and stir", "Flame orange peel over drink"], ["Smoky", "Spirit-forward", "Rich"], ["Date Night", "After Dinner"], "Modern", "High", "3 min", "from-amber-950 to-orange-900"),
    makeCocktail("el-diablo", "El Diablo", "The devil's margarita. Tequila, crème de cassis, ginger beer, and lime.", "Tequila", "Easy", "Highball Glass", "Lime wheel", [{ item: "Blanco tequila", amount: "2 oz" }, { item: "Crème de cassis", amount: "0.5 oz" }, { item: "Fresh lime juice", amount: "0.75 oz" }, { item: "Ginger beer", amount: "3 oz" }], ["Shake tequila, cassis, and lime with ice", "Strain into ice-filled highball glass", "Top with ginger beer", "Garnish with lime"], ["Spicy", "Fruity", "Refreshing"], ["Party", "Summer"], "Classic", "Easy", "2 min", "from-purple-900 to-red-800"),
    makeCocktail("blood-and-sand", "Blood and Sand", "A pre-Prohibition Scotch cocktail. Cherry, orange, and vermouth play off the smoke.", "Scotch", "Intermediate", "Coupe", "Flamed orange peel", [{ item: "Blended Scotch", amount: "0.75 oz" }, { item: "Cherry Heering", amount: "0.75 oz" }, { item: "Sweet vermouth", amount: "0.75 oz" }, { item: "Fresh orange juice", amount: "0.75 oz" }], ["Shake all ingredients with ice", "Double strain into chilled coupe", "Garnish with flamed orange peel"], ["Fruity", "Smoky", "Sweet"], ["After Dinner", "Date Night"], "Classic", "Medium", "3 min", "from-red-900 to-orange-800"),
    makeCocktail("black-russian", "Black Russian", "Vodka and coffee liqueur over ice. Simple, strong, and timeless.", "Vodka", "Easy", "Rocks Glass", "None", [{ item: "Vodka", amount: "2 oz" }, { item: "Coffee liqueur", amount: "1 oz" }], ["Add both ingredients to rocks glass with ice", "Stir gently"], ["Rich", "Sweet", "Bitter"], ["After Dinner", "Relaxing"], "Classic", "Medium", "1 min", "from-gray-900 to-amber-950"),
    makeCocktail("white-russian", "White Russian", "The Dude's drink of choice. Add cream to a Black Russian and transcend.", "Vodka", "Easy", "Rocks Glass", "None", [{ item: "Vodka", amount: "2 oz" }, { item: "Coffee liqueur", amount: "1 oz" }, { item: "Heavy cream", amount: "1 oz" }], ["Add vodka and coffee liqueur to glass with ice", "Float cream on top", "Stir gently or let guest stir"], ["Creamy", "Sweet", "Rich"], ["After Dinner", "Relaxing", "Party"], "Classic", "Medium", "1 min", "from-amber-900 to-gray-300"),
    makeCocktail("brandy-alexander", "Brandy Alexander", "A dessert in a glass. Brandy, crème de cacao, and cream, dusted with nutmeg.", "Brandy", "Easy", "Coupe", "Freshly grated nutmeg", [{ item: "Cognac", amount: "1.5 oz" }, { item: "Crème de cacao", amount: "1 oz" }, { item: "Heavy cream", amount: "1 oz" }], ["Shake all ingredients vigorously with ice", "Double strain into chilled coupe", "Grate fresh nutmeg on top"], ["Creamy", "Sweet", "Rich"], ["After Dinner", "Date Night", "Winter"], "Classic", "Easy", "2 min", "from-amber-800 to-gray-400"),
    makeCocktail("rusty-nail", "Rusty Nail", "Scotch and Drambuie. A 1960s classic that's rich, honeyed, and warming.", "Scotch", "Easy", "Rocks Glass", "Lemon twist", [{ item: "Blended Scotch", amount: "1.5 oz" }, { item: "Drambuie", amount: "0.75 oz" }], ["Add both ingredients to rocks glass with ice", "Stir gently for 20 seconds", "Garnish with lemon twist"], ["Rich", "Sweet", "Herbal"], ["After Dinner", "Winter", "Relaxing"], "Classic", "High", "2 min", "from-amber-800 to-yellow-700"),
    makeCocktail("painkiller", "Painkiller", "Tiki's answer to the Piña Colada. Navy rum, pineapple, coconut, and nutmeg.", "Rum", "Easy", "Tiki Mug", "Nutmeg, orange slice", [{ item: "Navy rum", amount: "2 oz" }, { item: "Pineapple juice", amount: "4 oz" }, { item: "Coconut cream", amount: "1 oz" }, { item: "Fresh orange juice", amount: "1 oz" }], ["Shake all ingredients with ice", "Strain into tiki mug filled with crushed ice", "Top with grated nutmeg"], ["Tropical", "Creamy", "Sweet"], ["Summer", "Party"], "Classic", "Low", "3 min", "from-orange-700 to-yellow-500"),
    makeCocktail("fog-cutter", "Fog Cutter", "A Tiki legend with three base spirits. Complex, potent, and mysteriously delicious.", "Rum", "Advanced", "Tiki Mug", "Mint sprig", [{ item: "Light rum", amount: "1.5 oz" }, { item: "Brandy", amount: "1 oz" }, { item: "Gin", amount: "0.5 oz" }, { item: "Fresh lemon juice", amount: "1 oz" }, { item: "Fresh orange juice", amount: "1 oz" }, { item: "Orgeat", amount: "0.5 oz" }, { item: "Amontillado sherry", amount: "0.5 oz" }], ["Shake all ingredients except sherry with ice", "Strain into tiki mug with crushed ice", "Float sherry on top", "Garnish with mint"], ["Tropical", "Citrus", "Rich"], ["Party", "Summer"], "Classic", "High", "4 min", "from-gray-700 to-amber-600"),
    makeCocktail("gin-and-tonic", "Gin & Tonic", "The world's most popular mixed drink. Botanical, bitter, and brilliantly simple.", "Gin", "Easy", "Highball Glass", "Lime wedge", [{ item: "London Dry Gin", amount: "2 oz" }, { item: "Tonic water", amount: "4 oz" }, { item: "Lime wedge", amount: "1" }], ["Fill highball glass with ice", "Add gin", "Top with tonic water", "Squeeze lime wedge and drop in"], ["Bitter", "Refreshing", "Herbal"], ["Summer", "Happy Hour", "Relaxing"], "Classic", "Low", "1 min", "from-blue-900 to-cyan-700"),
    makeCocktail("jack-rose", "Jack Rose", "Applejack, grenadine, and lemon. A forgotten classic with gorgeous pink color.", "Brandy", "Easy", "Coupe", "Lemon twist", [{ item: "Applejack", amount: "2 oz" }, { item: "Grenadine", amount: "0.75 oz" }, { item: "Fresh lemon juice", amount: "0.75 oz" }], ["Shake all ingredients with ice", "Double strain into coupe", "Garnish with lemon twist"], ["Fruity", "Sweet", "Citrus"], ["Date Night", "After Dinner"], "Classic", "Medium", "2 min", "from-rose-800 to-pink-600"),
    makeCocktail("bramble", "Bramble", "Dick Bradsell's London gem. Gin, lemon, and blackberry in a crushed ice cloud.", "Gin", "Easy", "Rocks Glass", "Blackberries, lemon slice", [{ item: "Gin", amount: "2 oz" }, { item: "Fresh lemon juice", amount: "1 oz" }, { item: "Simple syrup", amount: "0.5 oz" }, { item: "Crème de mûre", amount: "0.5 oz" }], ["Add gin, lemon, and syrup to glass with crushed ice", "Stir briefly", "Drizzle crème de mûre over top", "Garnish with berries and lemon"], ["Fruity", "Citrus", "Sweet"], ["Summer", "Happy Hour"], "Modern", "Easy", "2 min", "from-purple-800 to-red-700"),
    makeCocktail("hemingway-daiquiri", "Hemingway Daiquiri", "Papa Hemingway's special. Extra lime, grapefruit, and maraschino. Tart and complex.", "Rum", "Intermediate", "Coupe", "Lime wheel", [{ item: "White rum", amount: "2 oz" }, { item: "Fresh lime juice", amount: "0.75 oz" }, { item: "Fresh grapefruit juice", amount: "0.5 oz" }, { item: "Maraschino liqueur", amount: "0.5 oz" }], ["Shake all ingredients with ice", "Double strain into chilled coupe", "Garnish with lime wheel"], ["Citrus", "Dry", "Refreshing"], ["Summer", "Happy Hour"], "Classic", "Medium", "2 min", "from-lime-800 to-pink-700"),
    makeCocktail("gin-fizz", "Gin Fizz", "The lighter cousin of the Ramos. Gin, citrus, and effervescence.", "Gin", "Easy", "Collins Glass", "Lemon wheel", [{ item: "Gin", amount: "2 oz" }, { item: "Fresh lemon juice", amount: "0.75 oz" }, { item: "Simple syrup", amount: "0.75 oz" }, { item: "Club soda", amount: "3 oz" }], ["Shake gin, lemon, and syrup with ice", "Strain into collins glass", "Top with soda"], ["Citrus", "Effervescent", "Refreshing"], ["Brunch", "Summer"], "Classic", "Low", "2 min", "from-blue-700 to-cyan-500"),
    makeCocktail("corpse-reviver-1", "Corpse Reviver No. 1", "The brandy-based original. Rich, warming, and genuinely reviving.", "Brandy", "Intermediate", "Coupe", "None", [{ item: "Cognac", amount: "1.5 oz" }, { item: "Apple brandy", amount: "0.75 oz" }, { item: "Sweet vermouth", amount: "0.75 oz" }], ["Stir all ingredients with ice", "Strain into chilled coupe"], ["Rich", "Spirit-forward", "Sweet"], ["After Dinner", "Winter"], "Classic", "High", "2 min", "from-amber-900 to-red-800"),
    makeCocktail("toronto", "Toronto", "A Manhattan's bolder sibling. Rye, Fernet-Branca, and simple syrup.", "Rye", "Easy", "Coupe", "Orange peel", [{ item: "Rye whiskey", amount: "2 oz" }, { item: "Fernet-Branca", amount: "0.25 oz" }, { item: "Simple syrup", amount: "0.25 oz" }, { item: "Angostura bitters", amount: "2 dashes" }], ["Stir all ingredients with ice for 30 seconds", "Strain into chilled coupe", "Express orange peel over drink"], ["Bitter", "Spirit-forward", "Herbal"], ["After Dinner", "Date Night"], "Classic", "High", "2 min", "from-amber-950 to-red-900"),
    makeCocktail("rob-roy", "Rob Roy", "A Manhattan made with Scotch. Smoky, sweet, and deeply satisfying.", "Scotch", "Easy", "Coupe", "Cherry", [{ item: "Blended Scotch", amount: "2 oz" }, { item: "Sweet vermouth", amount: "1 oz" }, { item: "Angostura bitters", amount: "2 dashes" }], ["Stir all ingredients with ice", "Strain into chilled coupe", "Garnish with cherry"], ["Smoky", "Sweet", "Rich"], ["After Dinner", "Date Night"], "Classic", "High", "2 min", "from-amber-800 to-red-900"),
    makeCocktail("amaretto-sour", "Amaretto Sour", "Jeffrey Morgenthaler's definitive version. Bourbon lifts the almond sweetness.", "Bourbon", "Easy", "Rocks Glass", "Cherry, lemon peel", [{ item: "Amaretto", amount: "1.5 oz" }, { item: "Bourbon", amount: "0.75 oz" }, { item: "Fresh lemon juice", amount: "1 oz" }, { item: "Simple syrup", amount: "0.5 oz" }, { item: "Egg white", amount: "1" }], ["Dry shake all ingredients", "Add ice and shake vigorously", "Strain over fresh ice", "Garnish with cherry and lemon"], ["Sweet", "Citrus", "Creamy"], ["Happy Hour", "Party"], "Modern", "Easy", "3 min", "from-amber-700 to-orange-600"),
    makeCocktail("gold-rush", "Gold Rush", "A whiskey Bee's Knees. Bourbon, honey, and lemon in liquid gold harmony.", "Bourbon", "Easy", "Rocks Glass", "Lemon wheel", [{ item: "Bourbon", amount: "2 oz" }, { item: "Honey syrup", amount: "0.75 oz" }, { item: "Fresh lemon juice", amount: "0.75 oz" }], ["Shake all ingredients with ice", "Strain over fresh ice in rocks glass", "Garnish with lemon wheel"], ["Sweet", "Citrus", "Spirit-forward"], ["Happy Hour", "Date Night"], "Modern", "Medium", "2 min", "from-yellow-700 to-amber-600"),
    makeCocktail("boulevardier-mezcal", "Mezcal Boulevardier", "Smoky mezcal replaces bourbon for an even bolder, more contemplative sipper.", "Mezcal", "Intermediate", "Rocks Glass", "Orange peel", [{ item: "Mezcal", amount: "1.5 oz" }, { item: "Campari", amount: "1 oz" }, { item: "Sweet vermouth", amount: "1 oz" }], ["Stir all ingredients with ice", "Strain over large ice cube", "Express orange peel"], ["Smoky", "Bitter", "Rich"], ["Date Night", "Winter"], "Modern", "High", "3 min", "from-red-950 to-amber-950"),
    makeCocktail("tommy-margarita", "Tommy's Margarita", "Julio Bermejo's agave-forward classic. Agave syrup replaces Cointreau.", "Tequila", "Easy", "Rocks Glass", "Lime wheel", [{ item: "Blanco tequila", amount: "2 oz" }, { item: "Fresh lime juice", amount: "1 oz" }, { item: "Agave syrup", amount: "0.75 oz" }], ["Shake all ingredients with ice", "Strain over fresh ice", "Garnish with lime wheel"], ["Citrus", "Sweet", "Refreshing"], ["Summer", "Happy Hour"], "Modern", "Medium", "2 min", "from-green-800 to-lime-700"),
    makeCocktail("agua-fresca", "Agua Fresca Cocktail", "A refreshing blend of mezcal with watermelon and lime for hot summer days.", "Mezcal", "Easy", "Highball Glass", "Watermelon cube", [{ item: "Mezcal", amount: "1.5 oz" }, { item: "Watermelon juice", amount: "3 oz" }, { item: "Fresh lime juice", amount: "0.75 oz" }, { item: "Agave syrup", amount: "0.5 oz" }], ["Shake all ingredients with ice", "Strain into ice-filled glass", "Garnish with watermelon cube"], ["Fruity", "Refreshing", "Smoky"], ["Summer", "Party"], "Modern", "Low", "2 min", "from-pink-700 to-green-700"),
    makeCocktail("southside", "Southside", "Gin, lime, and mint — like a gin mojito with more sophistication.", "Gin", "Easy", "Coupe", "Mint leaf", [{ item: "Gin", amount: "2 oz" }, { item: "Fresh lime juice", amount: "0.75 oz" }, { item: "Simple syrup", amount: "0.75 oz" }, { item: "Mint leaves", amount: "6" }], ["Muddle mint with syrup", "Add gin and lime, shake with ice", "Double strain into coupe", "Float mint leaf"], ["Herbal", "Citrus", "Refreshing"], ["Summer", "Date Night"], "Classic", "Easy", "3 min", "from-green-800 to-cyan-700"),
    makeCocktail("pornstar-martini", "Passion Fruit Martini", "London's most popular cocktail. Passion fruit, vanilla vodka, and a champagne sidecar.", "Vodka", "Intermediate", "Coupe", "Half passion fruit, champagne sidecar", [{ item: "Vanilla vodka", amount: "2 oz" }, { item: "Passion fruit purée", amount: "1 oz" }, { item: "Passion fruit liqueur", amount: "0.5 oz" }, { item: "Fresh lime juice", amount: "0.5 oz" }, { item: "Vanilla syrup", amount: "0.25 oz" }], ["Shake all ingredients vigorously with ice", "Double strain into chilled coupe", "Float half passion fruit on top", "Serve champagne shot on the side"], ["Tropical", "Sweet", "Fruity"], ["Party", "Date Night", "Celebration"], "Modern", "Medium", "3 min", "from-yellow-600 to-orange-500"),
    makeCocktail("basil-smash", "Gin Basil Smash", "Jörg Meyer's modern classic. Fresh basil transforms a simple gin sour.", "Gin", "Easy", "Rocks Glass", "Basil leaves", [{ item: "Gin", amount: "2 oz" }, { item: "Fresh lemon juice", amount: "0.75 oz" }, { item: "Simple syrup", amount: "0.75 oz" }, { item: "Fresh basil", amount: "6 leaves" }], ["Muddle basil with syrup", "Add gin and lemon, shake with ice", "Double strain over ice", "Garnish with basil leaves"], ["Herbal", "Citrus", "Refreshing"], ["Summer", "Happy Hour"], "Modern", "Easy", "3 min", "from-green-700 to-lime-600"),
    makeCocktail("whiskey-smash", "Whiskey Smash", "A seasonal muddled whiskey sour with fresh herbs and citrus.", "Bourbon", "Easy", "Rocks Glass", "Mint sprig, lemon wheel", [{ item: "Bourbon", amount: "2 oz" }, { item: "Lemon", amount: "2 wedges" }, { item: "Simple syrup", amount: "0.75 oz" }, { item: "Mint leaves", amount: "6" }], ["Muddle lemon and mint with syrup", "Add bourbon and shake with ice", "Strain over fresh ice", "Garnish with mint and lemon"], ["Herbal", "Citrus", "Spirit-forward"], ["Summer", "Happy Hour"], "Modern", "Easy", "3 min", "from-amber-700 to-green-700"),
    makeCocktail("chartreuse-swizzle", "Chartreuse Swizzle", "A tiki-style cocktail with Green Chartreuse. Herbal, tropical, and unexpectedly refreshing.", "Gin", "Intermediate", "Collins Glass", "Mint sprig, nutmeg", [{ item: "Green Chartreuse", amount: "1.5 oz" }, { item: "Pineapple juice", amount: "1 oz" }, { item: "Fresh lime juice", amount: "0.75 oz" }, { item: "Falernum", amount: "0.5 oz" }], ["Pour all ingredients into glass with crushed ice", "Swizzle until frosted", "Top with more crushed ice", "Garnish with mint and nutmeg"], ["Herbal", "Tropical", "Sweet"], ["Summer", "Party"], "Modern", "Medium", "3 min", "from-green-600 to-yellow-500"),
    makeCocktail("saturn", "Saturn", "A forgotten tiki gem from 1967. Gin with passion fruit and orgeat. Otherworldly.", "Gin", "Intermediate", "Coupe", "Lemon twist", [{ item: "Gin", amount: "1.5 oz" }, { item: "Passion fruit syrup", amount: "0.5 oz" }, { item: "Orgeat", amount: "0.25 oz" }, { item: "Falernum", amount: "0.25 oz" }, { item: "Fresh lemon juice", amount: "0.75 oz" }], ["Shake all ingredients with ice", "Double strain into coupe", "Garnish with lemon twist"], ["Tropical", "Citrus", "Sweet"], ["Party", "Summer"], "Classic", "Medium", "2 min", "from-orange-600 to-yellow-500"),
    makeCocktail("improved-whiskey", "Improved Whiskey Cocktail", "A 19th century upgrade with maraschino and absinthe. History in a glass.", "Rye", "Intermediate", "Rocks Glass", "Lemon peel", [{ item: "Rye whiskey", amount: "2 oz" }, { item: "Maraschino liqueur", amount: "1 tsp" }, { item: "Simple syrup", amount: "1 tsp" }, { item: "Angostura bitters", amount: "2 dashes" }, { item: "Absinthe", amount: "1 tsp" }], ["Combine all in mixing glass with ice", "Stir for 30 seconds", "Strain over large ice cube", "Express lemon peel"], ["Spirit-forward", "Herbal", "Rich"], ["After Dinner", "Date Night"], "Classic", "High", "3 min", "from-amber-900 to-red-900"),
    makeCocktail("hanky-panky", "Hanky Panky", "Ada Coleman's Savoy classic. Gin, sweet vermouth, and Fernet-Branca magic.", "Gin", "Easy", "Coupe", "Orange peel", [{ item: "Gin", amount: "1.5 oz" }, { item: "Sweet vermouth", amount: "1.5 oz" }, { item: "Fernet-Branca", amount: "2 dashes" }], ["Stir all ingredients with ice", "Strain into chilled coupe", "Express orange peel over drink"], ["Herbal", "Bitter", "Rich"], ["After Dinner", "Date Night"], "Classic", "High", "2 min", "from-red-900 to-green-900"),
    makeCocktail("algonquin", "Algonquin", "Named after the famous New York hotel. Rye, vermouth, and pineapple juice.", "Rye", "Easy", "Coupe", "None", [{ item: "Rye whiskey", amount: "1.5 oz" }, { item: "Dry vermouth", amount: "0.75 oz" }, { item: "Pineapple juice", amount: "0.75 oz" }], ["Shake all ingredients with ice", "Strain into chilled coupe"], ["Fruity", "Dry", "Spirit-forward"], ["Happy Hour", "Date Night"], "Classic", "Medium", "2 min", "from-amber-700 to-yellow-600"),
    makeCocktail("fitzgerald", "Fitzgerald", "A gin sour with Angostura bitters. Simple, balanced, and endlessly sippable.", "Gin", "Easy", "Coupe", "Lemon wheel", [{ item: "Gin", amount: "1.5 oz" }, { item: "Fresh lemon juice", amount: "0.75 oz" }, { item: "Simple syrup", amount: "0.75 oz" }, { item: "Angostura bitters", amount: "2 dashes" }], ["Shake all ingredients with ice", "Double strain into coupe", "Garnish with lemon wheel"], ["Citrus", "Refreshing", "Herbal"], ["Happy Hour", "Summer"], "Modern", "Easy", "2 min", "from-green-700 to-amber-600"),
    makeCocktail("el-presidente", "El Presidente", "Cuba's presidential cocktail. Rum, vermouth, curaçao, and grenadine.", "Rum", "Easy", "Coupe", "Orange peel", [{ item: "White rum", amount: "1.5 oz" }, { item: "Dry vermouth", amount: "0.75 oz" }, { item: "Orange curaçao", amount: "0.5 oz" }, { item: "Grenadine", amount: "1 bar spoon" }], ["Stir all ingredients with ice", "Strain into chilled coupe", "Express orange peel"], ["Sweet", "Fruity", "Rich"], ["Date Night", "Celebration"], "Classic", "Medium", "2 min", "from-orange-700 to-red-600"),
    makeCocktail("death-in-afternoon", "Death in the Afternoon", "Hemingway's absinthe and champagne creation. Louche, luminous, and literary.", "Absinthe", "Easy", "Champagne Flute", "None", [{ item: "Absinthe", amount: "1.5 oz" }, { item: "Champagne", amount: "4 oz" }], ["Pour absinthe into flute", "Slowly top with champagne until it turns opalescent", "Watch the louche form"], ["Herbal", "Effervescent", "Dry"], ["Celebration", "Date Night"], "Classic", "High", "1 min", "from-green-400 to-yellow-300"),
    makeCocktail("navy-grog", "Navy Grog", "Don the Beachcomber's three-rum powerhouse. Citrus-forward and dangerously smooth.", "Rum", "Advanced", "Rocks Glass", "Mint sprig", [{ item: "Light rum", amount: "1 oz" }, { item: "Gold rum", amount: "1 oz" }, { item: "Demerara rum", amount: "1 oz" }, { item: "Fresh lime juice", amount: "0.75 oz" }, { item: "Fresh grapefruit juice", amount: "0.75 oz" }, { item: "Honey syrup", amount: "0.5 oz" }], ["Shake all ingredients with ice", "Strain over crushed ice", "Add ice cone if available", "Garnish with mint"], ["Tropical", "Citrus", "Rich"], ["Party", "Summer"], "Classic", "High", "4 min", "from-amber-700 to-lime-600"),
    makeCocktail("martinez", "Martinez", "The Martini's ancestor. Sweet, complex, and utterly old-school.", "Gin", "Intermediate", "Coupe", "Lemon twist", [{ item: "Old Tom Gin", amount: "1.5 oz" }, { item: "Sweet vermouth", amount: "1.5 oz" }, { item: "Maraschino liqueur", amount: "1 tsp" }, { item: "Angostura bitters", amount: "2 dashes" }], ["Stir all ingredients with ice", "Strain into chilled coupe", "Garnish with lemon twist"], ["Rich", "Sweet", "Herbal"], ["Date Night", "After Dinner"], "Classic", "High", "2 min", "from-amber-800 to-red-700"),
    makeCocktail("campari-spritz", "Campari Spritz", "Campari's own spritz — bolder and more bitter than the Aperol version.", "Aperol", "Easy", "Wine Glass", "Orange slice", [{ item: "Campari", amount: "2 oz" }, { item: "Prosecco", amount: "3 oz" }, { item: "Club soda", amount: "1 oz" }], ["Add Campari to wine glass with ice", "Top with Prosecco and soda", "Garnish with orange slice"], ["Bitter", "Effervescent", "Refreshing"], ["Summer", "Happy Hour"], "Classic", "Low", "1 min", "from-red-700 to-orange-600"),
    makeCocktail("tuxedo", "Tuxedo", "A bone-dry gin cocktail from the Waldorf-Astoria. Elegant and precise.", "Gin", "Intermediate", "Martini Glass", "Lemon twist, cherry", [{ item: "Gin", amount: "1.5 oz" }, { item: "Dry vermouth", amount: "1.5 oz" }, { item: "Maraschino liqueur", amount: "0.25 oz" }, { item: "Absinthe", amount: "2 dashes" }, { item: "Orange bitters", amount: "2 dashes" }], ["Stir all ingredients with ice", "Strain into chilled martini glass", "Garnish with lemon twist and cherry"], ["Dry", "Herbal", "Spirit-forward"], ["Celebration", "Date Night"], "Classic", "High", "2 min", "from-gray-700 to-blue-800"),
    makeCocktail("banana-daiquiri", "Banana Daiquiri", "A frozen or shaken tribute to tropical decadence. Rum and banana perfection.", "Rum", "Easy", "Coupe", "Banana chip", [{ item: "White rum", amount: "2 oz" }, { item: "Fresh lime juice", amount: "0.75 oz" }, { item: "Banana liqueur", amount: "0.5 oz" }, { item: "Simple syrup", amount: "0.5 oz" }, { item: "Fresh banana", amount: "1/2" }], ["Blend all ingredients with ice", "Pour into coupe", "Garnish with banana chip"], ["Tropical", "Sweet", "Creamy"], ["Summer", "Party"], "Modern", "Easy", "3 min", "from-yellow-700 to-amber-500"),
    makeCocktail("mezcal-mule", "Mezcal Mule", "A smoky spin on the Moscow Mule. Mezcal brings depth to ginger beer.", "Mezcal", "Easy", "Copper Mug", "Lime wheel", [{ item: "Mezcal", amount: "2 oz" }, { item: "Fresh lime juice", amount: "0.75 oz" }, { item: "Ginger beer", amount: "4 oz" }], ["Add mezcal and lime to copper mug with ice", "Top with ginger beer", "Stir gently", "Garnish with lime wheel"], ["Smoky", "Spicy", "Refreshing"], ["Summer", "Party", "Happy Hour"], "Modern", "Low", "2 min", "from-amber-800 to-green-700"),
    makeCocktail("elderflower-spritz", "Elderflower Spritz", "A delicate, floral spritz with St-Germain. Light as a summer breeze.", "Champagne", "Easy", "Wine Glass", "Cucumber slice", [{ item: "St-Germain", amount: "1.5 oz" }, { item: "Prosecco", amount: "3 oz" }, { item: "Club soda", amount: "1.5 oz" }], ["Add St-Germain to wine glass with ice", "Top with Prosecco and soda", "Garnish with cucumber slice"], ["Floral", "Effervescent", "Refreshing"], ["Summer", "Brunch", "Celebration"], "Modern", "Low", "1 min", "from-green-400 to-yellow-300"),
    makeCocktail("industry-sour", "Industry Sour", "A bartender's handshake. Fernet-Branca and green Chartreuse with lemon.", "Amaro", "Intermediate", "Coupe", "None", [{ item: "Fernet-Branca", amount: "0.75 oz" }, { item: "Green Chartreuse", amount: "0.75 oz" }, { item: "Fresh lime juice", amount: "1 oz" }, { item: "Simple syrup", amount: "1 oz" }], ["Shake all ingredients with ice", "Double strain into coupe"], ["Bitter", "Herbal", "Citrus"], ["After Dinner", "Date Night"], "Modern", "High", "2 min", "from-green-900 to-amber-900"),
    makeCocktail("angostura-colada", "Angostura Colada", "A cocktail using Angostura bitters as the spirit. Unique, bold, and unforgettable.", "Rum", "Advanced", "Hurricane Glass", "Pineapple wedge", [{ item: "Angostura bitters", amount: "1.5 oz" }, { item: "Coconut cream", amount: "1.5 oz" }, { item: "Pineapple juice", amount: "3 oz" }, { item: "Fresh lime juice", amount: "0.5 oz" }], ["Blend all ingredients with ice", "Pour into hurricane glass", "Garnish with pineapple"], ["Tropical", "Bitter", "Creamy"], ["Party", "Summer"], "Modern", "Medium", "3 min", "from-red-700 to-yellow-500"),
    makeCocktail("greenpoint", "Greenpoint", "A Brooklyn-born Manhattan variation with Yellow Chartreuse and bitters.", "Rye", "Intermediate", "Coupe", "Lemon twist", [{ item: "Rye whiskey", amount: "2 oz" }, { item: "Sweet vermouth", amount: "0.5 oz" }, { item: "Yellow Chartreuse", amount: "0.5 oz" }, { item: "Angostura bitters", amount: "1 dash" }, { item: "Orange bitters", amount: "1 dash" }], ["Stir all ingredients with ice", "Strain into coupe", "Garnish with lemon twist"], ["Spirit-forward", "Herbal", "Rich"], ["After Dinner", "Date Night"], "Modern", "High", "2 min", "from-amber-800 to-green-800"),
    makeCocktail("midori-sour", "Midori Sour", "A melon-green crowd-pleaser. Sweet, fruity, and unapologetically fun.", "Vodka", "Easy", "Rocks Glass", "Cherry, orange", [{ item: "Midori", amount: "1 oz" }, { item: "Vodka", amount: "0.5 oz" }, { item: "Fresh lemon juice", amount: "0.75 oz" }, { item: "Simple syrup", amount: "0.5 oz" }], ["Shake all ingredients with ice", "Strain over ice", "Garnish with cherry and orange"], ["Sweet", "Fruity", "Citrus"], ["Party", "Summer"], "Modern", "Easy", "2 min", "from-green-500 to-lime-400"),
    makeCocktail("bobby-burns", "Bobby Burns", "A Scotch cocktail named after the poet. Sweet vermouth and Bénédictine.", "Scotch", "Easy", "Coupe", "Lemon twist", [{ item: "Blended Scotch", amount: "1.5 oz" }, { item: "Sweet vermouth", amount: "1.5 oz" }, { item: "Bénédictine", amount: "0.5 oz" }], ["Stir all ingredients with ice", "Strain into coupe", "Garnish with lemon twist"], ["Rich", "Sweet", "Smoky"], ["After Dinner", "Winter"], "Classic", "High", "2 min", "from-amber-900 to-red-800"),
    makeCocktail("tipperary", "Tipperary", "Irish whiskey meets Green Chartreuse in this elegant pre-dinner sipper.", "Whiskey", "Intermediate", "Coupe", "Orange peel", [{ item: "Irish whiskey", amount: "1.5 oz" }, { item: "Sweet vermouth", amount: "0.75 oz" }, { item: "Green Chartreuse", amount: "0.5 oz" }], ["Stir all ingredients with ice", "Strain into chilled coupe", "Express orange peel"], ["Herbal", "Rich", "Spirit-forward"], ["After Dinner", "Date Night"], "Classic", "High", "2 min", "from-green-800 to-amber-700"),
    makeCocktail("final-ward", "Final Ward", "A Last Word riff with rye and lemon. Complex and perfectly balanced.", "Rye", "Intermediate", "Coupe", "None", [{ item: "Rye whiskey", amount: "0.75 oz" }, { item: "Green Chartreuse", amount: "0.75 oz" }, { item: "Maraschino liqueur", amount: "0.75 oz" }, { item: "Fresh lemon juice", amount: "0.75 oz" }], ["Shake all ingredients with ice", "Double strain into coupe"], ["Herbal", "Citrus", "Sweet"], ["Date Night", "After Dinner"], "Modern", "High", "2 min", "from-green-800 to-amber-700"),
    makeCocktail("champagne-cocktail", "Champagne Cocktail", "The original celebratory drink. A sugar cube, bitters, and bubbles.", "Champagne", "Easy", "Champagne Flute", "Lemon twist", [{ item: "Champagne", amount: "5 oz" }, { item: "Sugar cube", amount: "1" }, { item: "Angostura bitters", amount: "3 dashes" }, { item: "Cognac", amount: "0.5 oz" }], ["Place sugar cube in flute", "Dash bitters onto sugar", "Add cognac", "Top slowly with champagne", "Garnish with lemon twist"], ["Effervescent", "Sweet", "Rich"], ["Celebration", "Date Night"], "Classic", "Low", "1 min", "from-yellow-500 to-amber-400"),
    makeCocktail("monte-carlo", "Monte Carlo", "Rye whiskey, Bénédictine, and Angostura. Simple, rich, herbal.", "Rye", "Easy", "Rocks Glass", "None", [{ item: "Rye whiskey", amount: "2 oz" }, { item: "Bénédictine", amount: "0.5 oz" }, { item: "Angostura bitters", amount: "2 dashes" }], ["Stir all ingredients with ice", "Strain over large ice cube"], ["Spirit-forward", "Herbal", "Rich"], ["After Dinner", "Relaxing"], "Classic", "High", "2 min", "from-amber-800 to-red-700"),
    makeCocktail("last-word-mezcal", "Ultima Palabra", "The Last Word with mezcal. Smoke and Chartreuse in unexpected harmony.", "Mezcal", "Intermediate", "Coupe", "None", [{ item: "Mezcal", amount: "0.75 oz" }, { item: "Green Chartreuse", amount: "0.75 oz" }, { item: "Maraschino liqueur", amount: "0.75 oz" }, { item: "Fresh lime juice", amount: "0.75 oz" }], ["Shake all ingredients with ice", "Double strain into coupe"], ["Smoky", "Herbal", "Citrus"], ["Date Night", "After Dinner"], "Modern", "High", "2 min", "from-green-900 to-gray-800"),
    makeCocktail("kentucky-mule", "Kentucky Mule", "A bourbon-based mule. Warm whiskey meets spicy ginger beer.", "Bourbon", "Easy", "Copper Mug", "Lime wheel, mint", [{ item: "Bourbon", amount: "2 oz" }, { item: "Fresh lime juice", amount: "0.5 oz" }, { item: "Ginger beer", amount: "4 oz" }], ["Add bourbon and lime to mug with ice", "Top with ginger beer", "Stir gently"], ["Spicy", "Spirit-forward", "Refreshing"], ["Summer", "Party"], "Modern", "Low", "2 min", "from-amber-700 to-green-600"),
    makeCocktail("suffering-bastard", "Suffering Bastard", "A hangover cure from Cairo. Bourbon, gin, lime, and ginger beer.", "Bourbon", "Easy", "Collins Glass", "Mint sprig, orange", [{ item: "Bourbon", amount: "1 oz" }, { item: "Gin", amount: "1 oz" }, { item: "Fresh lime juice", amount: "0.5 oz" }, { item: "Angostura bitters", amount: "2 dashes" }, { item: "Ginger beer", amount: "4 oz" }], ["Add spirits, lime, and bitters to glass with ice", "Top with ginger beer", "Garnish with mint and orange"], ["Spicy", "Citrus", "Refreshing"], ["Brunch", "Party"], "Classic", "Low", "2 min", "from-amber-600 to-green-600"),
    makeCocktail("lavender-collins", "Lavender Collins", "A floral twist on the classic Collins. Gin with lavender syrup and lemon.", "Gin", "Easy", "Collins Glass", "Lavender sprig", [{ item: "Gin", amount: "2 oz" }, { item: "Fresh lemon juice", amount: "1 oz" }, { item: "Lavender syrup", amount: "0.75 oz" }, { item: "Club soda", amount: "3 oz" }], ["Shake gin, lemon, and syrup with ice", "Strain into glass with ice", "Top with soda", "Garnish with lavender sprig"], ["Floral", "Citrus", "Effervescent"], ["Summer", "Brunch", "Date Night"], "Modern", "Easy", "2 min", "from-purple-700 to-blue-600"),
    makeCocktail("rosemary-gin-fizz", "Rosemary Gin Fizz", "Herbaceous and aromatic. Gin with rosemary syrup, lemon, and egg white.", "Gin", "Intermediate", "Collins Glass", "Rosemary sprig", [{ item: "Gin", amount: "2 oz" }, { item: "Fresh lemon juice", amount: "1 oz" }, { item: "Rosemary syrup", amount: "0.75 oz" }, { item: "Egg white", amount: "1" }, { item: "Club soda", amount: "2 oz" }], ["Dry shake gin, lemon, syrup, and egg white", "Add ice and shake again", "Strain into glass", "Top with soda and rosemary"], ["Herbal", "Citrus", "Creamy"], ["Date Night", "Summer"], "Modern", "Easy", "3 min", "from-green-700 to-gray-500"),
    makeCocktail("dark-cherry-manhattan", "Black Cherry Manhattan", "A Manhattan with black cherry syrup for deep, rich fruit notes.", "Rye", "Easy", "Coupe", "Brandied cherry", [{ item: "Rye whiskey", amount: "2 oz" }, { item: "Sweet vermouth", amount: "1 oz" }, { item: "Black cherry syrup", amount: "0.25 oz" }, { item: "Angostura bitters", amount: "2 dashes" }], ["Stir all ingredients with ice", "Strain into coupe", "Garnish with brandied cherry"], ["Rich", "Fruity", "Spirit-forward"], ["Date Night", "Winter"], "Modern", "High", "2 min", "from-red-950 to-purple-900"),
    makeCocktail("honey-bee", "Honey Bee", "Rum, honey, and lemon. A tropical Bee's Knees that's smooth as silk.", "Rum", "Easy", "Coupe", "Lemon twist", [{ item: "White rum", amount: "2 oz" }, { item: "Honey syrup", amount: "0.75 oz" }, { item: "Fresh lemon juice", amount: "0.75 oz" }], ["Shake all ingredients with ice", "Strain into coupe", "Garnish with lemon twist"], ["Sweet", "Citrus", "Refreshing"], ["Happy Hour", "Summer"], "Classic", "Medium", "2 min", "from-yellow-700 to-amber-500"),
    makeCocktail("ranch-water", "Ranch Water", "West Texas simplicity. Blanco tequila, lime, and Topo Chico.", "Tequila", "Easy", "Highball Glass", "Lime wedge", [{ item: "Blanco tequila", amount: "2 oz" }, { item: "Fresh lime juice", amount: "1 oz" }, { item: "Topo Chico or sparkling water", amount: "4 oz" }], ["Add tequila and lime to glass with ice", "Top with Topo Chico", "Stir gently", "Garnish with lime wedge"], ["Refreshing", "Citrus", "Dry"], ["Summer", "Relaxing"], "Modern", "Low", "1 min", "from-blue-700 to-cyan-500"),
    makeCocktail("spicy-margarita", "Spicy Margarita", "A jalapeño-infused margarita that brings the heat. Sweet, sour, and fiery.", "Tequila", "Intermediate", "Rocks Glass", "Jalapeño slice, salt rim", [{ item: "Blanco tequila", amount: "2 oz" }, { item: "Fresh lime juice", amount: "1 oz" }, { item: "Cointreau", amount: "0.75 oz" }, { item: "Agave syrup", amount: "0.5 oz" }, { item: "Jalapeño slices", amount: "2-3" }], ["Muddle jalapeño in shaker", "Add remaining ingredients with ice", "Shake and strain over ice", "Garnish with jalapeño and salt rim"], ["Spicy", "Citrus", "Sweet"], ["Party", "Summer", "Happy Hour"], "Modern", "Medium", "3 min", "from-green-700 to-red-600"),
    makeCocktail("japanese-highball", "Japanese Highball", "Precision carbonation. Japanese whisky and soda elevated to an art form.", "Whiskey", "Easy", "Highball Glass", "None", [{ item: "Japanese whisky", amount: "1.5 oz" }, { item: "Soda water", amount: "4 oz" }], ["Fill highball glass with ice to the top", "Pour whisky over ice", "Stir 13.5 times", "Top with cold soda", "Stir once more"], ["Spirit-forward", "Refreshing", "Dry"], ["Relaxing", "Happy Hour"], "Modern", "Low", "2 min", "from-amber-600 to-gray-500"),
    makeCocktail("brown-derby", "Brown Derby", "A classic bourbon cocktail with grapefruit and honey. Bright and refined.", "Bourbon", "Easy", "Coupe", "Grapefruit twist", [{ item: "Bourbon", amount: "2 oz" }, { item: "Fresh grapefruit juice", amount: "1 oz" }, { item: "Honey syrup", amount: "0.5 oz" }], ["Shake all ingredients with ice", "Double strain into coupe", "Garnish with grapefruit twist"], ["Citrus", "Sweet", "Spirit-forward"], ["Happy Hour", "Brunch"], "Classic", "Medium", "2 min", "from-pink-700 to-amber-600"),
    makeCocktail("gin-rickey", "Gin Rickey", "The original DC cocktail. Gin, lime, and soda — bone dry and refreshing.", "Gin", "Easy", "Highball Glass", "Lime wedge", [{ item: "Gin", amount: "2 oz" }, { item: "Fresh lime juice", amount: "0.5 oz" }, { item: "Club soda", amount: "4 oz" }], ["Squeeze lime into glass", "Add gin and ice", "Top with soda", "Stir gently"], ["Dry", "Citrus", "Refreshing"], ["Summer", "Relaxing"], "Classic", "Low", "1 min", "from-cyan-700 to-blue-600"),
    makeCocktail("vesper", "Vesper", "James Bond's personal recipe. Gin, vodka, and Lillet. Shaken, not stirred.", "Gin", "Easy", "Martini Glass", "Lemon twist", [{ item: "Gin", amount: "3 oz" }, { item: "Vodka", amount: "1 oz" }, { item: "Lillet Blanc", amount: "0.5 oz" }], ["Shake all ingredients with ice until very cold", "Strain into chilled martini glass", "Garnish with lemon twist"], ["Spirit-forward", "Dry", "Citrus"], ["Date Night", "Celebration"], "Classic", "High", "2 min", "from-gray-600 to-blue-700"),
    makeCocktail("blue-lagoon", "Blue Lagoon", "A vibrant 80s classic. Vodka, blue curaçao, and lemonade. Pure fun.", "Vodka", "Easy", "Highball Glass", "Cherry, orange slice", [{ item: "Vodka", amount: "1.5 oz" }, { item: "Blue curaçao", amount: "1 oz" }, { item: "Lemonade", amount: "4 oz" }], ["Pour vodka and blue curaçao into glass with ice", "Top with lemonade", "Stir gently", "Garnish with cherry and orange"], ["Sweet", "Citrus", "Refreshing"], ["Party", "Summer"], "Classic", "Low", "1 min", "from-blue-500 to-cyan-400"),
    makeCocktail("hurricane", "Hurricane", "Pat O'Brien's New Orleans legend. Passion fruit, rum, and tropical intensity.", "Rum", "Easy", "Hurricane Glass", "Orange slice, cherry", [{ item: "Dark rum", amount: "2 oz" }, { item: "White rum", amount: "2 oz" }, { item: "Passion fruit juice", amount: "2 oz" }, { item: "Orange juice", amount: "1 oz" }, { item: "Fresh lime juice", amount: "0.5 oz" }, { item: "Grenadine", amount: "0.5 oz" }, { item: "Simple syrup", amount: "0.5 oz" }], ["Shake all ingredients with ice", "Strain into hurricane glass filled with ice", "Garnish with orange and cherry"], ["Tropical", "Sweet", "Fruity"], ["Party", "Summer"], "Classic", "Low", "3 min", "from-red-600 to-orange-500"),
    makeCocktail("long-island", "Long Island Iced Tea", "Five spirits, one glass, zero tea. The cocktail that launched a thousand mistakes.", "Vodka", "Easy", "Collins Glass", "Lemon wedge", [{ item: "Vodka", amount: "0.5 oz" }, { item: "Gin", amount: "0.5 oz" }, { item: "White rum", amount: "0.5 oz" }, { item: "Tequila", amount: "0.5 oz" }, { item: "Cointreau", amount: "0.5 oz" }, { item: "Fresh lemon juice", amount: "0.75 oz" }, { item: "Simple syrup", amount: "0.5 oz" }, { item: "Cola", amount: "Splash" }], ["Add all spirits, lemon, and syrup to glass with ice", "Stir briefly", "Top with splash of cola", "Garnish with lemon wedge"], ["Citrus", "Sweet", "Refreshing"], ["Party"], "Classic", "Medium", "3 min", "from-amber-600 to-gray-500"),
    makeCocktail("blackberry-bourbon-smash", "Blackberry Bourbon Smash", "Fresh blackberries muddled with bourbon, lemon, and mint. Summer in a glass.", "Bourbon", "Easy", "Rocks Glass", "Blackberry, mint sprig", [{ item: "Bourbon", amount: "2 oz" }, { item: "Blackberries", amount: "4-5" }, { item: "Fresh lemon juice", amount: "0.75 oz" }, { item: "Simple syrup", amount: "0.75 oz" }, { item: "Mint leaves", amount: "4" }], ["Muddle blackberries and mint with syrup", "Add bourbon and lemon, shake with ice", "Double strain over fresh ice", "Garnish with blackberry and mint"], ["Fruity", "Sweet", "Herbal"], ["Summer", "Party"], "Modern", "Easy", "3 min", "from-purple-800 to-red-700"),
    makeCocktail("cucumber-gimlet", "Cucumber Gimlet", "A cool, vegetal twist on the classic gimlet. Refreshing and spa-like.", "Gin", "Easy", "Coupe", "Cucumber ribbon", [{ item: "Gin", amount: "2 oz" }, { item: "Fresh lime juice", amount: "0.75 oz" }, { item: "Simple syrup", amount: "0.5 oz" }, { item: "Cucumber", amount: "4 slices" }], ["Muddle cucumber slices in shaker", "Add remaining ingredients and ice", "Shake and double strain into coupe", "Garnish with cucumber ribbon"], ["Refreshing", "Herbal", "Citrus"], ["Summer", "Brunch"], "Modern", "Easy", "3 min", "from-green-600 to-cyan-500"),
    makeCocktail("coffee-negroni", "Coffee Negroni", "A Negroni with cold brew coffee. Bitter meets bitter in caffeinated harmony.", "Gin", "Easy", "Rocks Glass", "Orange peel", [{ item: "Gin", amount: "1 oz" }, { item: "Campari", amount: "1 oz" }, { item: "Sweet vermouth", amount: "0.75 oz" }, { item: "Cold brew coffee", amount: "0.5 oz" }], ["Stir all ingredients with ice", "Strain over large ice cube", "Garnish with orange peel"], ["Bitter", "Rich", "Spirit-forward"], ["After Dinner", "Date Night"], "Modern", "High", "2 min", "from-amber-950 to-red-900"),
    makeCocktail("white-negroni", "White Negroni", "A lighter, more floral take on the classic using Suze and Lillet Blanc.", "Gin", "Easy", "Rocks Glass", "Grapefruit twist", [{ item: "Gin", amount: "1.5 oz" }, { item: "Lillet Blanc", amount: "1 oz" }, { item: "Suze", amount: "0.75 oz" }], ["Stir all ingredients with ice", "Strain over large ice cube", "Garnish with grapefruit twist"], ["Bitter", "Floral", "Dry"], ["Happy Hour", "Summer"], "Modern", "Medium", "2 min", "from-yellow-600 to-gray-400"),
    makeCocktail("jungle-juice", "Jungle Juice Punch", "A communal party punch with multiple spirits and tropical juices.", "Rum", "Easy", "Punch Bowl", "Fruit slices", [{ item: "White rum", amount: "1 cup" }, { item: "Vodka", amount: "1 cup" }, { item: "Pineapple juice", amount: "2 cups" }, { item: "Orange juice", amount: "2 cups" }, { item: "Cranberry juice", amount: "1 cup" }, { item: "Lemon-lime soda", amount: "1 liter" }], ["Combine spirits and juices in punch bowl", "Stir well", "Add ice and soda just before serving", "Garnish with fruit slices"], ["Sweet", "Fruity", "Refreshing"], ["Party"], "Modern", "Low", "5 min", "from-orange-500 to-pink-500"),
    makeCocktail("irish-coffee", "Irish Coffee", "Hot coffee, Irish whiskey, brown sugar, and cream. Warming and indulgent.", "Whiskey", "Easy", "Irish Coffee Glass", "Whipped cream", [{ item: "Irish whiskey", amount: "1.5 oz" }, { item: "Hot coffee", amount: "6 oz" }, { item: "Brown sugar", amount: "2 tsp" }, { item: "Heavy cream", amount: "Float" }], ["Warm glass with hot water, discard", "Add sugar and coffee, stir to dissolve", "Add whiskey", "Float lightly whipped cream on top"], ["Rich", "Sweet", "Creamy"], ["Winter", "After Dinner", "Brunch"], "Classic", "Medium", "4 min", "from-amber-900 to-gray-700"),
    makeCocktail("bellini", "Bellini", "Venice's beloved brunch cocktail. Fresh white peach purée and Prosecco.", "Champagne", "Easy", "Champagne Flute", "None", [{ item: "White peach purée", amount: "2 oz" }, { item: "Prosecco", amount: "4 oz" }], ["Add peach purée to flute", "Slowly top with Prosecco", "Stir very gently"], ["Fruity", "Effervescent", "Sweet"], ["Brunch", "Celebration", "Summer"], "Classic", "Low", "1 min", "from-orange-400 to-pink-300"),
    makeCocktail("kir-royale", "Kir Royale", "Champagne and crème de cassis. French elegance at its simplest.", "Champagne", "Easy", "Champagne Flute", "Lemon twist", [{ item: "Champagne", amount: "5 oz" }, { item: "Crème de cassis", amount: "0.5 oz" }], ["Pour cassis into flute", "Top slowly with champagne", "Garnish with lemon twist"], ["Sweet", "Fruity", "Effervescent"], ["Celebration", "Brunch", "Date Night"], "Classic", "Low", "1 min", "from-purple-600 to-pink-500"),
    makeCocktail("mimosa", "Mimosa", "Orange juice and champagne. Sunday morning perfection.", "Champagne", "Easy", "Champagne Flute", "Orange slice", [{ item: "Champagne", amount: "3 oz" }, { item: "Fresh orange juice", amount: "3 oz" }], ["Pour orange juice into flute", "Top with champagne", "Stir gently"], ["Citrus", "Effervescent", "Sweet"], ["Brunch", "Celebration"], "Classic", "Low", "1 min", "from-orange-500 to-yellow-400"),
    makeCocktail("grasshopper", "Grasshopper", "A retro dessert cocktail. Mint, chocolate, and cream in vivid green.", "Vodka", "Easy", "Coupe", "Grated chocolate", [{ item: "Crème de menthe (green)", amount: "1 oz" }, { item: "Crème de cacao (white)", amount: "1 oz" }, { item: "Heavy cream", amount: "1 oz" }], ["Shake all ingredients with ice", "Strain into coupe", "Garnish with grated chocolate"], ["Creamy", "Sweet", "Herbal"], ["After Dinner", "Party"], "Classic", "Easy", "2 min", "from-green-500 to-emerald-400"),
    makeCocktail("ward-eight", "Ward Eight", "A Boston classic from 1898. Rye, lemon, orange juice, and grenadine.", "Rye", "Easy", "Coupe", "Orange slice, cherry", [{ item: "Rye whiskey", amount: "2 oz" }, { item: "Fresh lemon juice", amount: "0.75 oz" }, { item: "Fresh orange juice", amount: "0.75 oz" }, { item: "Grenadine", amount: "0.5 oz" }], ["Shake all ingredients with ice", "Double strain into coupe", "Garnish with orange and cherry"], ["Citrus", "Fruity", "Sweet"], ["Happy Hour", "Party"], "Classic", "Medium", "2 min", "from-red-700 to-orange-600"),
    makeCocktail("planter-punch", "Planter's Punch", "Rum, citrus, and spice in an old plantation classic. Rich and tropical.", "Rum", "Easy", "Collins Glass", "Orange slice, cherry, nutmeg", [{ item: "Dark Jamaican rum", amount: "2 oz" }, { item: "Fresh lime juice", amount: "1 oz" }, { item: "Fresh orange juice", amount: "1 oz" }, { item: "Grenadine", amount: "0.5 oz" }, { item: "Simple syrup", amount: "0.5 oz" }, { item: "Angostura bitters", amount: "3 dashes" }], ["Shake all ingredients with ice", "Strain over ice in collins glass", "Grate nutmeg on top", "Garnish with orange and cherry"], ["Tropical", "Sweet", "Citrus"], ["Summer", "Party"], "Classic", "Low", "3 min", "from-red-700 to-amber-600"),
    makeCocktail("scorpion-bowl", "Scorpion Bowl", "A communal tiki bowl for sharing. Multiple rums, citrus, and orgeat.", "Rum", "Advanced", "Scorpion Bowl", "Mint, tropical flowers", [{ item: "Light rum", amount: "2 oz" }, { item: "Brandy", amount: "1 oz" }, { item: "Fresh orange juice", amount: "2 oz" }, { item: "Fresh lemon juice", amount: "1.5 oz" }, { item: "Orgeat", amount: "1 oz" }, { item: "Overproof rum", amount: "0.5 oz (for flaming)" }], ["Blend all ingredients except overproof with crushed ice", "Pour into scorpion bowl", "Float overproof in center well", "Ignite carefully, serve with straws"], ["Tropical", "Sweet", "Citrus"], ["Party"], "Classic", "High", "5 min", "from-orange-600 to-red-500"),
    makeCocktail("new-york-sour", "New York Sour", "A whiskey sour crowned with a red wine float. Beautiful and delicious.", "Bourbon", "Intermediate", "Rocks Glass", "Cherry, lemon wheel", [{ item: "Bourbon", amount: "2 oz" }, { item: "Fresh lemon juice", amount: "1 oz" }, { item: "Simple syrup", amount: "0.75 oz" }, { item: "Egg white", amount: "1" }, { item: "Red wine", amount: "0.5 oz" }], ["Dry shake bourbon, lemon, syrup, and egg white", "Add ice and shake again", "Strain over ice", "Float red wine on top over back of spoon"], ["Citrus", "Fruity", "Creamy"], ["Date Night", "After Dinner"], "Modern", "Medium", "4 min", "from-purple-800 to-amber-700"),
    makeCocktail("test-pilot", "Test Pilot", "A forgotten tiki classic. Three rums and falernum create aviation fuel for the soul.", "Rum", "Advanced", "Coupe", "Cherry", [{ item: "Dark Jamaican rum", amount: "1.5 oz" }, { item: "Light Puerto Rican rum", amount: "0.75 oz" }, { item: "Cointreau", amount: "0.5 oz" }, { item: "Falernum", amount: "0.5 oz" }, { item: "Fresh lime juice", amount: "0.5 oz" }, { item: "Angostura bitters", amount: "1 dash" }], ["Shake all ingredients with ice", "Double strain into coupe", "Garnish with cherry"], ["Tropical", "Citrus", "Spicy"], ["Party", "Summer"], "Classic", "High", "3 min", "from-amber-700 to-orange-600"),
    makeCocktail("batanga", "Batanga", "Don Javier's tequila and cola creation, stirred with a knife. Mexican dive bar classic.", "Tequila", "Easy", "Highball Glass", "Lime wedge, salt rim", [{ item: "Blanco tequila", amount: "2 oz" }, { item: "Fresh lime juice", amount: "0.5 oz" }, { item: "Mexican Coca-Cola", amount: "4 oz" }], ["Salt the rim of a highball glass", "Add tequila and lime over ice", "Top with cola", "Stir with a knife (tradition)"], ["Sweet", "Citrus", "Refreshing"], ["Party", "Relaxing"], "Classic", "Low", "2 min", "from-amber-700 to-gray-600"),
    makeCocktail("rickey-highball", "Scotch Rickey", "A bone-dry Scotch cocktail with lime and soda. Minimal and refreshing.", "Scotch", "Easy", "Highball Glass", "Lime wedge", [{ item: "Scotch whisky", amount: "2 oz" }, { item: "Fresh lime juice", amount: "0.75 oz" }, { item: "Club soda", amount: "4 oz" }], ["Add Scotch and lime to glass with ice", "Top with soda", "Stir gently"], ["Smoky", "Dry", "Refreshing"], ["Summer", "Relaxing"], "Modern", "Low", "1 min", "from-amber-700 to-cyan-600"),
    makeCocktail("stinger", "Stinger", "Brandy and crème de menthe. A post-dinner classic from the supper club era.", "Brandy", "Easy", "Coupe", "Mint leaf", [{ item: "Cognac", amount: "2 oz" }, { item: "White crème de menthe", amount: "1 oz" }], ["Stir both ingredients with ice", "Strain into chilled coupe", "Garnish with mint leaf"], ["Herbal", "Rich", "Sweet"], ["After Dinner", "Winter"], "Classic", "High", "2 min", "from-green-600 to-amber-500"),
    makeCocktail("between-sheets", "Between the Sheets", "A stronger Sidecar with rum. Cognac, rum, Cointreau, and lemon.", "Brandy", "Easy", "Coupe", "Lemon twist", [{ item: "Cognac", amount: "1 oz" }, { item: "Light rum", amount: "1 oz" }, { item: "Cointreau", amount: "1 oz" }, { item: "Fresh lemon juice", amount: "0.75 oz" }], ["Shake all ingredients with ice", "Strain into coupe", "Garnish with lemon twist"], ["Citrus", "Rich", "Sweet"], ["Date Night", "After Dinner"], "Classic", "Medium", "2 min", "from-amber-700 to-orange-600"),
    makeCocktail("hot-toddy", "Hot Toddy", "The ultimate cold-weather remedy. Whiskey, honey, lemon, and hot water.", "Whiskey", "Easy", "Mug", "Lemon wheel, cinnamon stick", [{ item: "Bourbon or Scotch", amount: "2 oz" }, { item: "Honey", amount: "1 tbsp" }, { item: "Fresh lemon juice", amount: "0.5 oz" }, { item: "Hot water", amount: "4 oz" }, { item: "Cinnamon stick", amount: "1" }], ["Add honey and lemon to mug", "Pour in hot water and stir to dissolve", "Add whiskey", "Garnish with lemon wheel and cinnamon"], ["Sweet", "Citrus", "Rich"], ["Winter", "Relaxing"], "Classic", "Low", "3 min", "from-amber-600 to-yellow-500"),
    makeCocktail("dark-daiquiri", "Dark Daiquiri", "A daiquiri made with aged rum for deeper, caramel-rich flavors.", "Rum", "Easy", "Coupe", "Lime wheel", [{ item: "Aged rum", amount: "2 oz" }, { item: "Fresh lime juice", amount: "1 oz" }, { item: "Demerara syrup", amount: "0.75 oz" }], ["Shake all ingredients with ice", "Double strain into coupe", "Garnish with lime wheel"], ["Rich", "Citrus", "Sweet"], ["Date Night", "After Dinner"], "Modern", "Medium", "2 min", "from-amber-900 to-lime-700"),
    makeCocktail("watermelon-margarita", "Watermelon Margarita", "Fresh watermelon juice transforms the margarita into summer perfection.", "Tequila", "Easy", "Rocks Glass", "Watermelon wedge", [{ item: "Blanco tequila", amount: "2 oz" }, { item: "Fresh watermelon juice", amount: "2 oz" }, { item: "Fresh lime juice", amount: "0.75 oz" }, { item: "Agave syrup", amount: "0.5 oz" }], ["Shake all ingredients with ice", "Strain over fresh ice", "Garnish with watermelon wedge"], ["Fruity", "Refreshing", "Sweet"], ["Summer", "Party"], "Modern", "Low", "3 min", "from-pink-600 to-red-500"),
    makeCocktail("fitzgerald-riff", "Modern Fitzgerald", "A gin sour with elderflower and cucumber for a garden-party twist.", "Gin", "Easy", "Coupe", "Cucumber slice", [{ item: "Gin", amount: "1.5 oz" }, { item: "Fresh lemon juice", amount: "0.75 oz" }, { item: "Elderflower liqueur", amount: "0.75 oz" }, { item: "Cucumber", amount: "3 slices" }], ["Muddle cucumber in shaker", "Add remaining ingredients and ice", "Shake and double strain", "Garnish with cucumber slice"], ["Floral", "Citrus", "Refreshing"], ["Summer", "Brunch"], "Modern", "Easy", "3 min", "from-green-500 to-yellow-400"),
    makeCocktail("paloma-rosa", "Paloma Rosa", "A pink paloma with hibiscus syrup and grapefruit. Gorgeous and refreshing.", "Tequila", "Easy", "Highball Glass", "Grapefruit slice", [{ item: "Blanco tequila", amount: "2 oz" }, { item: "Fresh grapefruit juice", amount: "2 oz" }, { item: "Fresh lime juice", amount: "0.5 oz" }, { item: "Hibiscus syrup", amount: "0.5 oz" }, { item: "Club soda", amount: "2 oz" }], ["Shake tequila, juices, and syrup with ice", "Strain into glass with ice", "Top with soda", "Garnish with grapefruit"], ["Floral", "Citrus", "Refreshing"], ["Summer", "Brunch", "Party"], "Modern", "Low", "2 min", "from-pink-600 to-orange-500"),
    makeCocktail("benton-old-fashioned", "Benton's Old Fashioned", "Don Lee's fat-washed bourbon masterpiece with bacon and maple.", "Bourbon", "Advanced", "Rocks Glass", "Orange peel", [{ item: "Bacon-fat-washed bourbon", amount: "2 oz" }, { item: "Maple syrup", amount: "0.25 oz" }, { item: "Angostura bitters", amount: "2 dashes" }], ["Stir all ingredients with ice for 30 seconds", "Strain over large ice cube", "Express orange peel over drink"], ["Smoky", "Sweet", "Spirit-forward"], ["After Dinner", "Winter"], "Modern", "High", "3 min", "from-amber-900 to-red-800"),
    makeCocktail("division-bell", "Division Bell", "A mezcal Last Word variant with Aperol. Smoky, bitter, bright.", "Mezcal", "Intermediate", "Coupe", "Grapefruit twist", [{ item: "Mezcal", amount: "1 oz" }, { item: "Aperol", amount: "0.75 oz" }, { item: "Maraschino liqueur", amount: "0.5 oz" }, { item: "Fresh lime juice", amount: "0.75 oz" }], ["Shake all ingredients with ice", "Double strain into coupe", "Garnish with grapefruit twist"], ["Smoky", "Bitter", "Citrus"], ["Happy Hour", "Date Night"], "Modern", "Medium", "2 min", "from-orange-700 to-gray-700"),
    makeCocktail("enzoni", "Enzoni", "A Negroni-sour hybrid with muddled grapes. Unexpectedly brilliant.", "Gin", "Intermediate", "Rocks Glass", "Grape, orange slice", [{ item: "Gin", amount: "1 oz" }, { item: "Campari", amount: "1 oz" }, { item: "Fresh lemon juice", amount: "0.75 oz" }, { item: "Simple syrup", amount: "0.5 oz" }, { item: "Green grapes", amount: "5" }], ["Muddle grapes in shaker", "Add remaining ingredients and ice", "Shake and strain over ice", "Garnish with grape and orange"], ["Bitter", "Fruity", "Citrus"], ["Happy Hour", "Summer"], "Modern", "Medium", "3 min", "from-green-600 to-red-600"),
    makeCocktail("clarified-milk-punch", "Clarified Milk Punch", "Benjamin Franklin's recipe. Crystal clear, silky smooth, impossibly complex.", "Brandy", "Advanced", "Coupe", "Lemon twist", [{ item: "Cognac", amount: "2 oz" }, { item: "Rum", amount: "1 oz" }, { item: "Fresh lemon juice", amount: "1.5 oz" }, { item: "Simple syrup", amount: "1 oz" }, { item: "Hot milk", amount: "2 oz" }, { item: "Tea", amount: "2 oz" }], ["Combine spirits, lemon, syrup, and tea", "Pour hot milk on top — it will curdle", "Let rest 2 hours, strain through cheesecloth 3x", "Serve chilled in coupe"], ["Rich", "Citrus", "Sweet"], ["After Dinner", "Celebration"], "Classic", "Medium", "3 hours", "from-gray-300 to-amber-200"),
    makeCocktail("mezcal-paloma", "Mezcal Paloma", "A smoky paloma that elevates grapefruit soda to something transcendent.", "Mezcal", "Easy", "Highball Glass", "Grapefruit wedge, salt rim", [{ item: "Mezcal", amount: "2 oz" }, { item: "Fresh grapefruit juice", amount: "2 oz" }, { item: "Fresh lime juice", amount: "0.5 oz" }, { item: "Agave syrup", amount: "0.25 oz" }, { item: "Club soda", amount: "2 oz" }], ["Salt the rim of glass", "Shake mezcal, juices, and agave with ice", "Strain over ice", "Top with soda"], ["Smoky", "Citrus", "Refreshing"], ["Summer", "Happy Hour"], "Modern", "Low", "2 min", "from-pink-700 to-gray-600"),
    makeCocktail("blood-orange-negroni", "Blood Orange Negroni", "A seasonal Negroni with blood orange juice for extra depth and color.", "Gin", "Easy", "Rocks Glass", "Blood orange slice", [{ item: "Gin", amount: "1 oz" }, { item: "Campari", amount: "1 oz" }, { item: "Sweet vermouth", amount: "0.75 oz" }, { item: "Blood orange juice", amount: "0.5 oz" }], ["Stir all ingredients with ice", "Strain over large ice cube", "Garnish with blood orange slice"], ["Bitter", "Citrus", "Rich"], ["Winter", "Date Night"], "Modern", "Medium", "2 min", "from-red-800 to-orange-700"),
    makeCocktail("absinthe-frappe", "Absinthe Frappé", "Crushed ice and absinthe. New Orleans' most refreshing herbal cooling agent.", "Absinthe", "Easy", "Highball Glass", "Mint sprig", [{ item: "Absinthe", amount: "1.5 oz" }, { item: "Simple syrup", amount: "0.5 oz" }, { item: "Club soda", amount: "2 oz" }], ["Add absinthe and syrup to glass", "Pack with crushed ice", "Top with soda", "Stir until frosted", "Garnish with mint"], ["Herbal", "Refreshing", "Dry"], ["Summer", "After Dinner"], "Classic", "Low", "2 min", "from-green-500 to-white"),
    makeCocktail("angostura-sour", "Angostura Sour", "Bitters as the star. A Trinidad Sour's easier cousin — still bold, still unusual.", "Rye", "Intermediate", "Coupe", "None", [{ item: "Angostura bitters", amount: "1 oz" }, { item: "Fresh lemon juice", amount: "0.75 oz" }, { item: "Simple syrup", amount: "1 oz" }, { item: "Egg white", amount: "1" }], ["Dry shake all ingredients", "Add ice and shake vigorously", "Double strain into coupe"], ["Bitter", "Creamy", "Citrus"], ["After Dinner", "Date Night"], "Modern", "Medium", "3 min", "from-red-800 to-amber-700"),
    makeCocktail("salty-dog", "Salty Dog", "Vodka and grapefruit with a salt rim. The Greyhound's better-dressed cousin.", "Vodka", "Easy", "Highball Glass", "Salt rim, grapefruit wedge", [{ item: "Vodka", amount: "2 oz" }, { item: "Fresh grapefruit juice", amount: "4 oz" }], ["Salt the rim of a highball glass", "Add vodka and grapefruit over ice", "Stir gently", "Garnish with grapefruit wedge"], ["Citrus", "Dry", "Refreshing"], ["Brunch", "Summer"], "Classic", "Low", "1 min", "from-pink-500 to-gray-400"),
    makeCocktail("peach-bellini", "Peach Bellini", "The OG Bellini variation with ripe peach purée and cold Prosecco.", "Champagne", "Easy", "Champagne Flute", "Peach slice", [{ item: "Fresh peach purée", amount: "2 oz" }, { item: "Prosecco", amount: "4 oz" }], ["Add peach purée to flute", "Slowly top with cold Prosecco", "Stir very gently"], ["Fruity", "Effervescent", "Sweet"], ["Brunch", "Celebration", "Summer"], "Classic", "Low", "1 min", "from-orange-400 to-yellow-300"),
    makeCocktail("pendennis-club", "Pendennis Club", "Louisville's pre-Prohibition classic. Gin, apricot brandy, and lime.", "Gin", "Easy", "Coupe", "Cherry", [{ item: "Gin", amount: "2 oz" }, { item: "Apricot brandy", amount: "1 oz" }, { item: "Fresh lime juice", amount: "0.75 oz" }, { item: "Peychaud's bitters", amount: "2 dashes" }], ["Shake all ingredients with ice", "Strain into coupe", "Garnish with cherry"], ["Fruity", "Citrus", "Sweet"], ["Happy Hour", "Date Night"], "Classic", "Medium", "2 min", "from-orange-600 to-amber-500"),
    makeCocktail("earl-grey-martini", "Earl Grey MarTEAni", "Audrey Saunders' genius. Earl Grey-infused gin with lemon and egg white.", "Gin", "Intermediate", "Coupe", "Lemon twist", [{ item: "Earl Grey-infused gin", amount: "2 oz" }, { item: "Fresh lemon juice", amount: "0.75 oz" }, { item: "Simple syrup", amount: "0.75 oz" }, { item: "Egg white", amount: "1" }], ["Dry shake all ingredients", "Add ice and shake vigorously", "Double strain into coupe", "Garnish with lemon twist"], ["Floral", "Citrus", "Creamy"], ["Date Night", "After Dinner"], "Modern", "Medium", "4 min", "from-gray-600 to-amber-500"),
  ];

  return remaining;
}

function makeCocktail(
  id: string, name: string, description: string, spirit: Spirit, difficulty: Difficulty,
  glassware: string, garnish: string, ingredients: { item: string; amount: string }[],
  instructions: string[], flavorTags: FlavorTag[], occasionTags: Occasion[],
  category: 'Classic' | 'Modern', abv: string, prepTime: string, color: string
): Cocktail {
  const normalizedAbv: 'High' | 'Medium' | 'Low' = abv === 'High' ? 'High' : abv === 'Low' ? 'Low' : 'Medium';
  return { id, name, description, spirit, difficulty, glassware, garnish, ingredients, instructions, flavorTags, occasionTags, category, abv: normalizedAbv, prepTime, color };
}

import extraCocktails from './cocktails-extra';
import ginCocktails from './cocktails-gin';
import vodkaCocktails from './cocktails-vodka';
import whiskeyCocktails from './cocktails-whiskey';
import tequilaCocktails from './cocktails-tequila';
import rumCocktails from './cocktails-rum';
cocktailsData.push(...extraCocktails, ...ginCocktails, ...vodkaCocktails, ...whiskeyCocktails, ...tequilaCocktails, ...rumCocktails);

export default cocktailsData;

// Helper to get unique spirits
export const allSpirits: Spirit[] = ['Bourbon', 'Gin', 'Rum', 'Tequila', 'Vodka', 'Mezcal', 'Brandy', 'Whiskey', 'Champagne', 'Scotch', 'Rye', 'Pisco', 'Absinthe', 'Aperol', 'Amaro'];
export const allDifficulties: Difficulty[] = ['Easy', 'Intermediate', 'Advanced'];
export const allOccasions: Occasion[] = ['Date Night', 'Party', 'After Dinner', 'Brunch', 'Summer', 'Winter', 'Celebration', 'Relaxing', 'Happy Hour'];
export const allFlavorTags: FlavorTag[] = ['Spirit-forward', 'Citrus', 'Sweet', 'Bitter', 'Herbal', 'Smoky', 'Tropical', 'Creamy', 'Spicy', 'Floral', 'Fruity', 'Refreshing', 'Rich', 'Dry', 'Effervescent'];
