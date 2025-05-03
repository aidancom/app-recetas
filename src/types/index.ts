export type RecipesType = {
  'id': string,
  'name': string,
  'desc': string,
  'image': string,
  'ingredients': string[],
  'difficult': number,
  'preparation': string,
  'preparation-time': number,
  'cooking-time': number,
  'category': string
}

export type Callback = () => string