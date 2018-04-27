import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private loremString = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum';
  private recipes: Recipe[] = [
    new Recipe('Hambuger', this.loremString, 'https://images.unsplash.com/photo-1468071174046-657d9d351a40?ixlib=rb-0.3.5&s=ba7023d8300e46c64ac7e6793a21a6bd&auto=format&fit=crop&w=750&q=60', [new Ingredient('Cheese', 1), new Ingredient('Miced Beef', 500), new Ingredient('Hambuger Bun', 1), new Ingredient('Salad', 100)]),
    new Recipe('Clubhouse Sandwich', this.loremString, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--653594_11.jpg?itok=9trM5bYp', [new Ingredient('White bread Slices', 3), new Ingredient('Lettuce', 2), new Ingredient('Cheese slice', 1), new Ingredient('Tomato', 1)])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }
}
