// Auto-import all cocktail images from this directory
const imageModules = import.meta.glob('./*.png', { eager: true, import: 'default' }) as Record<string, string>;

const cocktailImages: Record<string, string> = {};

for (const path in imageModules) {
  // Extract filename without extension: './old-fashioned.png' -> 'old-fashioned'
  const id = path.replace('./', '').replace('.png', '');
  cocktailImages[id] = imageModules[path];
}

export default cocktailImages;
