// Cocktail ingredient substitution database
// Each entry maps an ingredient to its possible substitutions with notes

export interface Substitution {
  ingredient: string;
  substitutes: {
    name: string;
    notes: string;
    quality: 'excellent' | 'good' | 'acceptable';
  }[];
  category: string;
}

const substitutions: Substitution[] = [
  // === ORANGE LIQUEURS ===
  { ingredient: "cointreau", category: "Orange Liqueur", substitutes: [
    { name: "Triple sec", notes: "Most direct swap. Slightly less refined but works in any recipe.", quality: "excellent" },
    { name: "Grand Marnier", notes: "Cognac-based, richer and oakier. Great in Margaritas and Sidecars.", quality: "excellent" },
    { name: "Curaçao", notes: "Similar orange profile. Pierre Ferrand dry curaçao is closest.", quality: "excellent" },
    { name: "Combier", notes: "The original triple sec. Clean, bright orange flavor.", quality: "excellent" },
  ]},
  { ingredient: "triple sec", category: "Orange Liqueur", substitutes: [
    { name: "Cointreau", notes: "Premium upgrade. Same role, more refined.", quality: "excellent" },
    { name: "Grand Marnier", notes: "Heavier, more complex. Adjust sweetness.", quality: "good" },
    { name: "Orange curaçao", notes: "Similar sweetness and orange flavor.", quality: "excellent" },
  ]},
  { ingredient: "grand marnier", category: "Orange Liqueur", substitutes: [
    { name: "Cointreau", notes: "Lighter and cleaner. Loses cognac depth.", quality: "good" },
    { name: "Pierre Ferrand dry curaçao", notes: "Cognac-based like Grand Marnier. Closest match.", quality: "excellent" },
    { name: "Triple sec + splash of brandy", notes: "DIY approximation of the cognac-orange blend.", quality: "acceptable" },
  ]},
  { ingredient: "curaçao", category: "Orange Liqueur", substitutes: [
    { name: "Cointreau", notes: "Cleaner orange. Works in most tiki recipes.", quality: "excellent" },
    { name: "Triple sec", notes: "Budget-friendly swap with similar sweetness.", quality: "good" },
    { name: "Grand Marnier", notes: "Richer substitute, slightly heavier.", quality: "good" },
  ]},
  { ingredient: "blue curaçao", category: "Orange Liqueur", substitutes: [
    { name: "Orange curaçao + blue food coloring", notes: "Same flavor, maintains the color.", quality: "excellent" },
    { name: "Triple sec", notes: "Same flavor, no blue color.", quality: "good" },
    { name: "Cointreau", notes: "Premium upgrade, no blue hue.", quality: "good" },
  ]},

  // === VERMOUTHS ===
  { ingredient: "sweet vermouth", category: "Vermouth", substitutes: [
    { name: "Carpano Antica Formula", notes: "Premium upgrade — richer, more vanilla.", quality: "excellent" },
    { name: "Punt e Mes", notes: "More bitter and intense. Reduce amount by 25%.", quality: "good" },
    { name: "Cocchi Vermouth di Torino", notes: "Well-balanced, widely available premium option.", quality: "excellent" },
    { name: "Port wine", notes: "In a pinch — similar sweetness but different herbs.", quality: "acceptable" },
  ]},
  { ingredient: "dry vermouth", category: "Vermouth", substitutes: [
    { name: "Dolin Dry", notes: "Clean and balanced — bartender favorite.", quality: "excellent" },
    { name: "Noilly Prat", notes: "More herbal and oxidative. Classic French style.", quality: "excellent" },
    { name: "Lillet Blanc", notes: "Sweeter and fruitier. Works in Martini riffs.", quality: "good" },
    { name: "Dry white wine", notes: "Lacks herbal complexity but provides dryness.", quality: "acceptable" },
  ]},

  // === BITTERS ===
  { ingredient: "angostura bitters", category: "Bitters", substitutes: [
    { name: "Peychaud's bitters", notes: "More floral and anise-forward. Different profile but works.", quality: "good" },
    { name: "Fee Brothers Old Fashioned bitters", notes: "Similar aromatic profile.", quality: "good" },
    { name: "Homemade aromatic bitters", notes: "If you have the time, highly rewarding.", quality: "excellent" },
  ]},
  { ingredient: "orange bitters", category: "Bitters", substitutes: [
    { name: "Regans' Orange Bitters No. 6", notes: "Industry standard. Bitter and bright.", quality: "excellent" },
    { name: "Fee Brothers West Indian Orange Bitters", notes: "Sweeter and less bitter.", quality: "good" },
    { name: "Angostura Orange Bitters", notes: "Warm spice with orange. Solid option.", quality: "excellent" },
    { name: "Orange peel expressed over drink", notes: "Adds aroma without bitterness.", quality: "acceptable" },
  ]},
  { ingredient: "peychaud's bitters", category: "Bitters", substitutes: [
    { name: "Angostura bitters + dash of absinthe", notes: "Approximates the anise/floral notes.", quality: "good" },
    { name: "Fee Brothers Peychaud's-style", notes: "Closest commercially available match.", quality: "good" },
  ]},

  // === SYRUPS ===
  { ingredient: "simple syrup", category: "Sweetener", substitutes: [
    { name: "Demerara syrup", notes: "Richer, more complex. Great in whiskey drinks.", quality: "excellent" },
    { name: "Honey syrup (2:1)", notes: "Adds floral depth. Dissolve honey in warm water.", quality: "excellent" },
    { name: "Agave syrup", notes: "Clean sweetness. Perfect for tequila drinks.", quality: "excellent" },
    { name: "Maple syrup (thinned)", notes: "Adds autumnal depth. Mix 2:1 with water.", quality: "good" },
  ]},
  { ingredient: "demerara syrup", category: "Sweetener", substitutes: [
    { name: "Simple syrup", notes: "Lighter — you lose the molasses depth.", quality: "good" },
    { name: "Turbinado sugar dissolved in water", notes: "Closest match to demerara flavor.", quality: "excellent" },
    { name: "Brown sugar syrup", notes: "Similar caramel/molasses notes.", quality: "excellent" },
  ]},
  { ingredient: "honey syrup", category: "Sweetener", substitutes: [
    { name: "Agave syrup", notes: "Similar viscosity and clean sweetness.", quality: "good" },
    { name: "Simple syrup", notes: "Loses floral notes but provides sweetness.", quality: "acceptable" },
    { name: "Maple syrup (thinned)", notes: "Different flavor but interesting swap.", quality: "acceptable" },
  ]},
  { ingredient: "agave syrup", category: "Sweetener", substitutes: [
    { name: "Simple syrup", notes: "Universal swap. Slightly different body.", quality: "good" },
    { name: "Honey syrup", notes: "Adds floral depth. Works well in tequila drinks.", quality: "good" },
  ]},
  { ingredient: "grenadine", category: "Sweetener", substitutes: [
    { name: "Pomegranate juice + simple syrup", notes: "Mix 2:1 for a quick homemade grenadine.", quality: "excellent" },
    { name: "Raspberry syrup", notes: "Different berry but similar color and sweetness.", quality: "good" },
    { name: "Hibiscus syrup", notes: "Floral, red, and sweet. Beautiful substitute.", quality: "good" },
  ]},

  // === CITRUS ===
  { ingredient: "fresh lemon juice", category: "Citrus", substitutes: [
    { name: "Fresh lime juice", notes: "More tart, less bright. Works in most sours.", quality: "good" },
    { name: "White wine vinegar (small amount)", notes: "Adds acidity without citrus flavor.", quality: "acceptable" },
    { name: "Grapefruit juice + acid", notes: "Different profile but can work in spritzy drinks.", quality: "acceptable" },
  ]},
  { ingredient: "fresh lime juice", category: "Citrus", substitutes: [
    { name: "Fresh lemon juice", notes: "Brighter, less tart. Adjust sugar accordingly.", quality: "good" },
    { name: "Key lime juice", notes: "More floral and aromatic. Premium upgrade.", quality: "excellent" },
  ]},
  { ingredient: "fresh grapefruit juice", category: "Citrus", substitutes: [
    { name: "Pomelo juice", notes: "Milder but similar bitterness. Closest match.", quality: "excellent" },
    { name: "Orange juice + lemon juice", notes: "Mix 3:1 to approximate grapefruit's bitter-sweet.", quality: "good" },
  ]},
  { ingredient: "fresh orange juice", category: "Citrus", substitutes: [
    { name: "Tangerine juice", notes: "Sweeter and more aromatic. Works great.", quality: "excellent" },
    { name: "Mandarin juice", notes: "Similar sweetness, slightly different aroma.", quality: "good" },
  ]},

  // === HERBAL LIQUEURS ===
  { ingredient: "green chartreuse", category: "Herbal Liqueur", substitutes: [
    { name: "Yellow Chartreuse", notes: "Milder, sweeter, less herbaceous. Use slightly more.", quality: "good" },
    { name: "Strega", notes: "Italian herbal liqueur. Similar complexity, different herbs.", quality: "good" },
    { name: "Genépy", notes: "Alpine herbal liqueur from the same family.", quality: "good" },
    { name: "Dolin Génépy des Alpes", notes: "Lighter but captures some Chartreuse DNA.", quality: "acceptable" },
  ]},
  { ingredient: "yellow chartreuse", category: "Herbal Liqueur", substitutes: [
    { name: "Green Chartreuse (use less)", notes: "Stronger and more herbal. Use 2/3 the amount.", quality: "good" },
    { name: "Strega", notes: "Similar sweetness and herbal profile.", quality: "good" },
    { name: "Bénédictine", notes: "Honey-herbal profile. Different but harmonious.", quality: "good" },
  ]},
  { ingredient: "bénédictine", category: "Herbal Liqueur", substitutes: [
    { name: "Yellow Chartreuse", notes: "More herbal, less honey. Close enough.", quality: "good" },
    { name: "B&B (Bénédictine & Brandy)", notes: "Half the herbal intensity, easier to find.", quality: "good" },
    { name: "Drambuie", notes: "Honey-herbal Scotch liqueur. Different base but similar role.", quality: "acceptable" },
  ]},
  { ingredient: "drambuie", category: "Herbal Liqueur", substitutes: [
    { name: "Honey syrup + Scotch", notes: "Mix 1:1 for a rough approximation.", quality: "acceptable" },
    { name: "Bénédictine", notes: "Similar honey-herb profile on a different base.", quality: "good" },
    { name: "Glayva", notes: "Scottish liqueur with similar honey-spice character.", quality: "excellent" },
  ]},

  // === AMARI & APERITIFS ===
  { ingredient: "campari", category: "Amaro/Aperitif", substitutes: [
    { name: "Aperol", notes: "Less bitter, more sweet. Use in equal amount for softer drink.", quality: "good" },
    { name: "Contratto Bitter", notes: "Italian craft alternative. Very similar profile.", quality: "excellent" },
    { name: "Cappelletti", notes: "Wine-based aperitif. Lighter but similar color and flavor.", quality: "good" },
    { name: "Select Aperitivo", notes: "Venetian Campari alternative. Slightly sweeter.", quality: "good" },
  ]},
  { ingredient: "aperol", category: "Amaro/Aperitif", substitutes: [
    { name: "Campari (use less + add sugar)", notes: "More bitter — use half amount and add 0.25oz simple syrup.", quality: "good" },
    { name: "Cappelletti", notes: "Similar bitterness level and color.", quality: "excellent" },
    { name: "Select Aperitivo", notes: "Classic Venetian spritz ingredient. Very close.", quality: "excellent" },
  ]},
  { ingredient: "fernet-branca", category: "Amaro/Aperitif", substitutes: [
    { name: "Branca Menta", notes: "Same family, mintier profile.", quality: "good" },
    { name: "Other fernet (Luxardo, R. Jelínek)", notes: "Similar bitter-herbal profile from different producers.", quality: "excellent" },
    { name: "Amaro Montenegro + mint", notes: "Lighter but captures the herbal-bitter notes.", quality: "acceptable" },
  ]},

  // === ABSINTHE ===
  { ingredient: "absinthe", category: "Anise Spirit", substitutes: [
    { name: "Pastis (Ricard, Pernod)", notes: "Similar anise profile. Most common swap.", quality: "excellent" },
    { name: "Herbsaint", notes: "New Orleans substitute created during Prohibition.", quality: "excellent" },
    { name: "Anisette", notes: "Sweeter and less herbal but provides anise.", quality: "acceptable" },
  ]},

  // === MARASCHINO ===
  { ingredient: "maraschino liqueur", category: "Fruit Liqueur", substitutes: [
    { name: "Kirsch (cherry eau de vie)", notes: "Dry cherry flavor. Add a touch of simple syrup.", quality: "good" },
    { name: "Cherry Heering", notes: "Sweeter and darker. Reduce any other sweetener.", quality: "good" },
    { name: "Crème de cerise", notes: "Sweet cherry liqueur. Different but cherry-forward.", quality: "acceptable" },
  ]},
  { ingredient: "cherry heering", category: "Fruit Liqueur", substitutes: [
    { name: "Maraschino liqueur + simple syrup", notes: "Drier — add syrup to match sweetness.", quality: "good" },
    { name: "Cherry brandy", notes: "Similar body and cherry profile.", quality: "excellent" },
    { name: "Crème de cerise", notes: "French cherry liqueur. Very close.", quality: "excellent" },
  ]},

  // === ELDERFLOWER ===
  { ingredient: "elderflower liqueur", category: "Floral Liqueur", substitutes: [
    { name: "St-Germain", notes: "The standard. If subbing another brand, adjust sweetness.", quality: "excellent" },
    { name: "Elderflower cordial + vodka", notes: "Mix for a DIY version.", quality: "good" },
    { name: "Lillet Blanc", notes: "Different flavor but provides floral, wine-based notes.", quality: "acceptable" },
  ]},

  // === LILLET / COCCHI ===
  { ingredient: "lillet blanc", category: "Aromatized Wine", substitutes: [
    { name: "Cocchi Americano", notes: "More bitter and quinine-forward. Closer to original Kina Lillet.", quality: "excellent" },
    { name: "Dry vermouth", notes: "Less sweet. Add a splash of simple syrup.", quality: "good" },
    { name: "Sauvignon Blanc + orange peel", notes: "Emergency swap — steep peel in wine briefly.", quality: "acceptable" },
  ]},

  // === FALERNUM ===
  { ingredient: "falernum", category: "Spiced Syrup/Liqueur", substitutes: [
    { name: "Orgeat + lime zest + clove", notes: "Approximate the almond-lime-spice profile.", quality: "good" },
    { name: "Allspice dram + simple syrup + lime", notes: "Captures the spice element.", quality: "good" },
    { name: "Velvet Falernum (John D. Taylor's)", notes: "The standard commercial version.", quality: "excellent" },
  ]},
  { ingredient: "allspice dram", category: "Spiced Syrup/Liqueur", substitutes: [
    { name: "Pimento dram", notes: "Same thing — different name.", quality: "excellent" },
    { name: "Falernum", notes: "Provides similar warm spice. More lime-forward.", quality: "good" },
    { name: "Simple syrup + allspice + clove", notes: "Simmer spices in syrup for a homemade version.", quality: "good" },
  ]},

  // === CREAM/CHOCOLATE LIQUEURS ===
  { ingredient: "crème de cacao", category: "Chocolate/Cream Liqueur", substitutes: [
    { name: "Chocolate liqueur (Godiva, Mozart)", notes: "Richer chocolate flavor. May need less.", quality: "good" },
    { name: "Cocoa syrup + vodka", notes: "DIY option for chocolate flavor.", quality: "acceptable" },
  ]},
  { ingredient: "coffee liqueur", category: "Chocolate/Cream Liqueur", substitutes: [
    { name: "Kahlúa", notes: "The standard. Sweet and coffee-forward.", quality: "excellent" },
    { name: "Mr Black", notes: "Less sweet, more coffee intensity. Premium option.", quality: "excellent" },
    { name: "Tia Maria", notes: "Jamaican rum-based. Slightly different but works.", quality: "good" },
    { name: "Cold brew + simple syrup + vodka", notes: "DIY coffee liqueur in a pinch.", quality: "acceptable" },
  ]},

  // === ORGEAT ===
  { ingredient: "orgeat", category: "Nut Syrup", substitutes: [
    { name: "Amaretto + simple syrup", notes: "Mix 1:1 for almond sweetness. Adds alcohol.", quality: "good" },
    { name: "Almond syrup", notes: "Direct swap. Less complex but almond-forward.", quality: "excellent" },
    { name: "Homemade orgeat (almonds, sugar, orange flower water)", notes: "Best results but requires prep.", quality: "excellent" },
  ]},

  // === SPIRITS ===
  { ingredient: "bourbon", category: "Whiskey", substitutes: [
    { name: "Rye whiskey", notes: "Spicier, less sweet. Works in any bourbon cocktail.", quality: "excellent" },
    { name: "Tennessee whiskey (Jack Daniel's)", notes: "Charcoal-filtered bourbon. Very close.", quality: "excellent" },
    { name: "Canadian whisky", notes: "Lighter body. Good in highballs.", quality: "good" },
    { name: "Scotch (blended)", notes: "Smokier — changes character but can work.", quality: "acceptable" },
  ]},
  { ingredient: "rye whiskey", category: "Whiskey", substitutes: [
    { name: "Bourbon", notes: "Sweeter, less spice. Most common swap.", quality: "excellent" },
    { name: "Canadian rye whisky", notes: "Lighter but maintains rye character.", quality: "good" },
    { name: "High-rye bourbon", notes: "Bulleit, Four Roses — bridge between styles.", quality: "excellent" },
  ]},
  { ingredient: "scotch", category: "Whiskey", substitutes: [
    { name: "Irish whiskey", notes: "Smoother, less peat. Works in most Scotch cocktails.", quality: "good" },
    { name: "Japanese whisky", notes: "Similar balance and delicacy. Premium swap.", quality: "excellent" },
    { name: "Bourbon", notes: "Sweeter, no smoke. Very different but functional.", quality: "acceptable" },
  ]},
  { ingredient: "irish whiskey", category: "Whiskey", substitutes: [
    { name: "Blended Scotch", notes: "Slightly smokier. Good in Irish Coffee and sours.", quality: "good" },
    { name: "Bourbon", notes: "Sweeter, more vanilla. Different but works.", quality: "good" },
    { name: "Japanese whisky", notes: "Smooth and balanced. Excellent swap.", quality: "excellent" },
  ]},
  { ingredient: "gin", category: "Spirit", substitutes: [
    { name: "London Dry gin", notes: "Juniper-forward standard.", quality: "excellent" },
    { name: "Plymouth gin", notes: "Softer, earthier. Great in Martinis.", quality: "excellent" },
    { name: "Vodka", notes: "Loses botanical complexity but works structurally.", quality: "acceptable" },
    { name: "Genever", notes: "Malty, richer. Works in Old Tom gin recipes.", quality: "good" },
  ]},
  { ingredient: "vodka", category: "Spirit", substitutes: [
    { name: "White rum", notes: "Adds subtle sweetness. Works in most vodka cocktails.", quality: "good" },
    { name: "Gin", notes: "Adds botanicals. Different but often better.", quality: "good" },
    { name: "Blanco tequila", notes: "Adds agave character. Fun substitution.", quality: "acceptable" },
  ]},
  { ingredient: "white rum", category: "Spirit", substitutes: [
    { name: "Silver/blanco tequila", notes: "Different character but similar weight.", quality: "acceptable" },
    { name: "Cachaça", notes: "Brazilian cane spirit. Funkier, grassier.", quality: "good" },
    { name: "Vodka", notes: "Neutral swap. Loses rum's sweetness.", quality: "acceptable" },
    { name: "Rhum agricole blanc", notes: "Grassy, funky. Premium upgrade for Daiquiris.", quality: "excellent" },
  ]},
  { ingredient: "dark rum", category: "Spirit", substitutes: [
    { name: "Aged rum", notes: "Less intense but similar warmth.", quality: "excellent" },
    { name: "Gold rum", notes: "Lighter body. Works in punches.", quality: "good" },
    { name: "Bourbon", notes: "Oak and caramel overlap. Interesting swap.", quality: "acceptable" },
  ]},
  { ingredient: "aged rum", category: "Spirit", substitutes: [
    { name: "Dark rum", notes: "More intense. Use slightly less.", quality: "excellent" },
    { name: "Gold rum", notes: "Lighter. Good for sessionable drinks.", quality: "good" },
    { name: "Bourbon", notes: "Both are oak-aged. Surprisingly compatible.", quality: "good" },
  ]},
  { ingredient: "blanco tequila", category: "Spirit", substitutes: [
    { name: "Reposado tequila", notes: "Slightly aged. Adds oak notes.", quality: "excellent" },
    { name: "Mezcal (with blanco)", notes: "Mix 1:1 for smoky complexity.", quality: "good" },
    { name: "Sotol", notes: "Similar agave-adjacent spirit from Chihuahua.", quality: "good" },
  ]},
  { ingredient: "reposado tequila", category: "Spirit", substitutes: [
    { name: "Blanco tequila", notes: "Lighter. Loses oak character but works.", quality: "good" },
    { name: "Añejo tequila", notes: "More aged. Richer in stirred drinks.", quality: "excellent" },
    { name: "Mezcal reposado", notes: "Adds smoke. Bold substitution.", quality: "good" },
  ]},
  { ingredient: "mezcal", category: "Spirit", substitutes: [
    { name: "Blanco tequila", notes: "Loses smoke. Add a rinse of Scotch for smokiness.", quality: "good" },
    { name: "Islay Scotch", notes: "Peated Scotch provides similar smokiness.", quality: "acceptable" },
    { name: "Raicilla", notes: "Mexican agave spirit with unique vegetal smoke.", quality: "good" },
  ]},
  { ingredient: "cognac", category: "Spirit", substitutes: [
    { name: "Brandy (VS or VSOP)", notes: "Less refined but same grape base.", quality: "good" },
    { name: "Armagnac", notes: "Rustic cousin of Cognac. More robust.", quality: "excellent" },
    { name: "Calvados", notes: "Apple brandy. Different fruit but similar richness.", quality: "good" },
  ]},
  { ingredient: "brandy", category: "Spirit", substitutes: [
    { name: "Cognac", notes: "Premium grape brandy upgrade.", quality: "excellent" },
    { name: "Pisco", notes: "Peruvian grape brandy. Lighter, more floral.", quality: "good" },
    { name: "Applejack", notes: "Apple-based. Different fruit, similar proof.", quality: "acceptable" },
  ]},

  // === GINGER ===
  { ingredient: "ginger beer", category: "Mixer", substitutes: [
    { name: "Ginger ale", notes: "Less spicy and less fizzy. More subtle.", quality: "good" },
    { name: "Homemade ginger syrup + soda water", notes: "More control over spice level.", quality: "excellent" },
    { name: "Club soda + fresh ginger", notes: "Muddle ginger, add soda for fresh ginger flavor.", quality: "good" },
  ]},
  { ingredient: "ginger ale", category: "Mixer", substitutes: [
    { name: "Ginger beer", notes: "Spicier and more intense. Upgrade.", quality: "excellent" },
    { name: "Club soda + ginger syrup", notes: "DIY ginger ale. Adjust sweetness.", quality: "good" },
  ]},

  // === TONIC / SODA ===
  { ingredient: "tonic water", category: "Mixer", substitutes: [
    { name: "Bitter lemon soda", notes: "More citrus, similar quinine bitterness.", quality: "good" },
    { name: "Club soda + tonic syrup", notes: "More control. Brands like Jack Rudy.", quality: "excellent" },
  ]},
  { ingredient: "club soda", category: "Mixer", substitutes: [
    { name: "Sparkling water / seltzer", notes: "Functionally identical.", quality: "excellent" },
    { name: "Topo Chico", notes: "Stronger carbonation. Bartender favorite.", quality: "excellent" },
  ]},

  // === CREAM ===
  { ingredient: "heavy cream", category: "Dairy", substitutes: [
    { name: "Coconut cream", notes: "Dairy-free, adds tropical note.", quality: "good" },
    { name: "Oat cream", notes: "Neutral flavor, good froth. Dairy-free.", quality: "good" },
    { name: "Half-and-half", notes: "Thinner but works. Slightly less rich.", quality: "good" },
  ]},
  { ingredient: "egg white", category: "Dairy", substitutes: [
    { name: "Aquafaba (chickpea water)", notes: "Vegan swap. 1 oz = 1 egg white. Same froth.", quality: "excellent" },
    { name: "Fee Brothers Fee Foam", notes: "Bottled foaming agent. Shelf-stable.", quality: "good" },
    { name: "Ms. Better's Miraculous Foamer", notes: "Professional-grade vegan foaming agent.", quality: "excellent" },
  ]},

  // === PROSECCO / CHAMPAGNE ===
  { ingredient: "prosecco", category: "Sparkling Wine", substitutes: [
    { name: "Champagne", notes: "Premium upgrade. More yeasty and complex.", quality: "excellent" },
    { name: "Cava", notes: "Spanish sparkling. Dry and affordable.", quality: "excellent" },
    { name: "Crémant", notes: "French sparkling from outside Champagne. Great value.", quality: "excellent" },
    { name: "Sparkling wine (any dry)", notes: "Any brut sparkling works.", quality: "good" },
  ]},
  { ingredient: "champagne", category: "Sparkling Wine", substitutes: [
    { name: "Prosecco", notes: "Fruitier and softer. Budget-friendly.", quality: "good" },
    { name: "Cava", notes: "Dry Spanish sparkling. Excellent value.", quality: "excellent" },
    { name: "Crémant d'Alsace", notes: "Closest to Champagne quality at lower price.", quality: "excellent" },
  ]},

  // === GALLIANO ===
  { ingredient: "galliano", category: "Herbal Liqueur", substitutes: [
    { name: "Strega", notes: "Similar herbal-vanilla profile from Italy.", quality: "good" },
    { name: "Yellow Chartreuse + vanilla syrup", notes: "Approximates the herbal-vanilla character.", quality: "acceptable" },
    { name: "Licor 43", notes: "Spanish vanilla-citrus liqueur. Similar sweetness.", quality: "good" },
  ]},

  // === AMARETTO ===
  { ingredient: "amaretto", category: "Nut Liqueur", substitutes: [
    { name: "Orgeat syrup + vodka", notes: "Almond sweetness without the almond liqueur.", quality: "good" },
    { name: "Frangelico", notes: "Hazelnut instead of almond. Different nut, similar role.", quality: "good" },
    { name: "Almond extract + simple syrup", notes: "A few drops go a long way. Very concentrated.", quality: "acceptable" },
  ]},

  // === COCONUT ===
  { ingredient: "coconut cream", category: "Mixer", substitutes: [
    { name: "Cream of coconut (Coco López)", notes: "Sweetened. Reduce other sugars.", quality: "excellent" },
    { name: "Coconut milk + simple syrup", notes: "Thinner. Shake extra hard.", quality: "good" },
    { name: "Heavy cream + coconut extract", notes: "Rich texture with coconut flavor.", quality: "acceptable" },
  ]},

  // === PINEAPPLE ===
  { ingredient: "pineapple juice", category: "Juice", substitutes: [
    { name: "Mango juice", notes: "Similar tropical sweetness. Different fruit.", quality: "good" },
    { name: "Guava nectar", notes: "Tropical and sweet. Works in tiki drinks.", quality: "good" },
    { name: "Passion fruit juice + simple syrup", notes: "Different but tropical. Adjust sweetness.", quality: "good" },
  ]},

  // === CRANBERRY ===
  { ingredient: "cranberry juice", category: "Juice", substitutes: [
    { name: "Pomegranate juice", notes: "Similar tartness and color. Slightly sweeter.", quality: "excellent" },
    { name: "Lingonberry juice", notes: "Scandinavian berry. Very similar.", quality: "excellent" },
    { name: "Tart cherry juice", notes: "Different color but similar tartness.", quality: "good" },
  ]},
];

// Build a search index
const searchIndex = new Map<string, Substitution>();
substitutions.forEach(s => {
  searchIndex.set(s.ingredient, s);
});

export function findSubstitution(ingredient: string): Substitution | undefined {
  const key = ingredient.toLowerCase().replace(/fresh\s+/g, '').replace(/\s+/g, ' ').trim();
  // Direct match
  if (searchIndex.has(key)) return searchIndex.get(key);
  // Partial match
  for (const [k, v] of searchIndex) {
    if (k.includes(key) || key.includes(k)) return v;
  }
  return undefined;
}

export function searchSubstitutions(query: string): Substitution[] {
  if (!query || query.length < 2) return [];
  const q = query.toLowerCase().trim();
  return substitutions.filter(s =>
    s.ingredient.includes(q) ||
    s.category.toLowerCase().includes(q) ||
    s.substitutes.some(sub => sub.name.toLowerCase().includes(q))
  );
}

export function getAllSubstitutions(): Substitution[] {
  return substitutions;
}

export default substitutions;
