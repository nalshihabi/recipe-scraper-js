import * as scraper from './index';
import 'request';
import fetch from 'node-fetch';
import { request } from 'http';

const testRecipes = [
  'https://whatsgabycooking.com/cauliflower-rice-kale-bowls-instant-pot-black-beans/',
  // 'https://www.simplyrecipes.com/recipes/chicken_panzanella_salad/',
  'https://copykat.com/homemade-croutons-made-in-an-air-fryer/',
  'http://www.eatingwell.com/recipe/264666/pressure-cooker-chicken-enchilada-soup/',
  'https://www.kitchenstories.com/en/recipes/chorizo-breakfast-tacos-with-salsa-verde',
  'https://www.budgetbytes.com/chicken-lime-soup/',
  'https://therealfoodrds.com/veggie-loaded-turkey-chili/',
  // 'https://www.foodandwine.com/recipes/french-onion-soup-ludo-lefebvre',
  'https://www.allrecipes.com/recipe/274411/bucatini-cacio-e-pepe-roman-sheep-herders-pasta',
  'https://www.yummly.com/recipe/No-Bake-Lemon-Mango-Cheesecakes-with-Speculoos-crust-781945',
  // 'https://www.foodnetwork.com/recipes/food-network-kitchen/cast-iron-skillet-provencal-pork-chops-and-potatoes-3542642',
  'https://www.bbc.co.uk/food/recipes/sausage_and_gnocchi_bake_80924',
  // 'https://www.bbcgoodfood.com/recipes/1853652/doughnut-muffins',
  'https://www.101cookbooks.com/coleslaw-recipe/',
  'http://www.gimmesomeoven.com/grilled-chicken-kabobs/',
  'https://www.ambitiouskitchen.com/street-corn-pasta-salad-with-cilantro-pesto-goat-cheese/',
  // 'https://www.finecooking.com/recipe/white-chicken-chili',
  'https://damndelicious.net/2019/08/20/raspberry-croissant-french-toast-bake/',
  'https://www.epicurious.com/recipes/food/views/trout-toast-with-soft-scrambled-eggs',
  'https://www.seriouseats.com/recipes/2019/08/korean-chilled-cucumber-soup-oi-naengguk-recipe.html',
  'https://cookieandkate.com/fresh-spring-rolls-recipe/',
  'https://nomnompaleo.com/west-lake-beef-soup',
  'https://www.closetcooking.com/reina-pepiada-arepa-chicken-and-avocado-sandwich/',
  'https://www.thespruceeats.com/grilled-squid-recipe-1808848',
  'https://www.food.com/recipe/oatmeal-raisin-cookies-35813',
  'https://omnivorescookbook.com/dan-dan-noodles/',
  'https://www.averiecooks.com/thai-chicken-coconut-curry/',
  'https://www.bonappetit.com/recipe/soba-noodles-with-crispy-kale',
  'https://minimalistbaker.com/fudgy-sweet-potato-brownies-v-gf/',
  // 'https://www.woolworths.com.au/shop/recipedetail/6303/eamon-s-smiley-face-nachos',
  // 'https://smittenkitchen.com/2014/12/endives-with-oranges-and-almonds/',
  // 'https://www.myrecipes.com/recipe/London-broil-roasted-garlic-aioli',
  // 'https://www.centraltexasfoodbank.org/recipe/crock-pot-chicken-mole',
  // 'https://www.thepioneerwoman.com/food-cooking/recipes/a86873/french-dip-sandwiches/',
];

testRecipes
  .forEach(async (url: string) => {
    await test(`Should resolve, retrieve instructions and ingredients: ${url}`, async () => {
      let answer = null;
      try {
        let res = await fetch(url);
        if (res.status === 200) {
          answer = await scraper.scrape(await res.text());
        }
      } catch (e) {
        answer = null;
      }
      expect(answer).not.toBe(null);
    });
  });
