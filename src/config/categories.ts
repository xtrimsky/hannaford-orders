export const categoryMappings: { [key: string]: RegExp } = {
  'Fries': /(fries|ore-ida)/i,
  'Pasta': /(pasta|spaghetti|ziti|penne|rotini|linguine|fettuccine|lasagna|macaroni|rigatoni|tortelloni|tortellini|de?.cecco|barilla?.medium?.shells|cavatappi|hannaford?.small?.shells|ditalini|hakubaku)/i,
  'Red Bull': /red bull/i,
  'LU Ecolier': /(lu.?ecolier|lu?.petite)/i,
  'Rice': /(brown?.rice|jasmine?.rice|carolina|rice?.pilaf)/i,
  'Vinegar': /vinegar/i,
  'Beer/Cider': /(beer|corona|pilsner|downeast?.unfiltered)/i,
  'Ground Beef': /(ground?.beef)/i,
  'Hot Dogs': /(beef?.franks|hot?.dogs)/i,
  'Chicken': /(chicken?.breast|chicken?.tenders|grilled?.chicken|rotisserie?.chicken|applewood?.smoked?.chicken)/i,
  'Hand Soap': /hand.?soap/i,
  'Frozen Pizza': /Screamin/i,
  'Pepperoni': /(pepperoni|salame)/i,
  'Chocolate Chips': /(baking?.chips|dark?.chocolate?.chips|sweet?.chocolate?.chips)/i,
  'Couscous': /pearl?.couscous/i,
  'Baking (flour, sugar,...)': /(flour|all.?purpose|domino|baking?.soda|carnation|betty?.crocker|brownie?.mix)/i,
  'Donuts': /(donut|doughnut)/i,
  'Ice Cream': /(ice.?cream|gelato)/i,
  'Bacon': /bacon/i,
  'Crescents': /(crescent?.rolls)/i,
  'Butter': /(butter|margarine)/i,
  'Paper towels': /paper.?towels?/i,
  'White Bread': /(white.?bread|sandwich.?bread)/i,
  'Baguette': /(baguette|parisien?.french?.bread)/i,
  'Deodorant': /(deodorant|antiperspirant)/i,
  'Chocolate Candies': /(chocolate?.bar|lindt|hugs?.white?.creme|kinder)/i,
  'Coffee': /(coffee|espresso)/i,
  'Oil': /(olive?.oil|oil?.cooking?.spray)/i,
  'Homemade Pizza': /(pizza.?dough|pizza?.sauce|galbani|italian?.sausage|ground?.chorizo|hannaford?.hot?.italian)/i,
  'Salmon': /(salmon)/i,
  'Goldfish': /(goldfish)/i,
  'Whipped Creme': /(whipped?.creme)/i,
  'Trash Bags': /(tall?.kitchen|leaf?.bags|trash?.bags)/i,
  'Cookies': /(chocolate?.chip?.cookies|oreo|sugar?.cookies|chocolate?.cookies|pepperidge?.farm|cookies)/i,
  'Grated Cheese & Parmesan': /(cabot?.shredded|kraft?.grated?.parmesan|cheddar?.shredded?.cheese|kraft?.finely?.shredded)/i,
  'Ramen': /ramen?.noodles/i,
  'Eggs': /eggs/i,
  'Milk & Chocolate Milk': /(stonyfield?.organic?.whole?.milk|horizon?.organic)/i,
  'Shampoo & Conditioner': /(conditioner|pantene|shampoo)/i,
  'Body Wash': /(clean?.body?.wash|gel?.wash)/i,
  'Spices/Sauces': /(hot?.ones|taco?.seasoning?.mix|cholula?.chipotle|enchilada?.sauce|soy?.sauce|pesto?.sauce|dip|mccormick|delallo?.olive?.tapenade)/i,
  'Wipes': /(pampers|lysol|clorox|baby?.wipes)/i,
  'Naan': /naan/i,
  'Marshmallows': /marshmallows/i,
  'Clothes Washing': /(tide?.pods|bounce)/i,
  'Chips': /(pringles|tortilla?.chips|takis|bbq?.chips|frito?.lay)/i,
  'Toilet Paper': /scott?.bath?.tissue/i,
  'Medecin/Vitamins': /(vicks?.dayQuil|nature?.made|hydration?.multiplier|flintstones?.gummies|one?.a?.day)/i,
  'Ground Turkey': /ground?.turkey/i,
  'Salt': /morton/i,
  'Tofu': /tofu/i,
  'Pudding': /(pudding|kozy?.shack)/i,
  'Steak': /(sirloin|ribeye|London?.Broil|top?.round?.steak|steak)/i,
  'Vegetables': /(asparagus|avocado|brocolli|potatoes|carrot|green?.beans|baby?.spinach|onions|squash|garlic|broccoli|cluster?.tomatoes|cucumber|basil?.leaves|living?.basil|pepper?.strips)/i,
  'Fruits': /(berry?.platter|blueberries|strawberries|blackberries|kiwi?.fruit|plums|pineapple|bananas|mixed?.berries|pumpkins|grapes)/i,
  'Whole Cheese': /(cracker barrel|boursin|brie?.cheese|cabot?.simply?.sharp|jarlsberg?.cheese|muenster?.cheese|belGioioso|blue?.cheese)/i,
  'Beans': /(goya.*beans|pigeon?.peas)/i,
  'Spray Cleaners': /(scrubbing?.bubbles|windex|granite?.gold|weiman)/i,
  'Nutella Crackers': /(go?.hazelnut?.spread|nutella?.&?.go)/i,
  'Nutella': /nutella/i,
  'Cereal Bars': /(made?.good|granola?.bars|clif?.kid|love?.crunch|krispie?.treats)/i,
  'Foil & Parchment': /(foil|parchment)/i,
  'Dishwashing': /(dishwashing|jet?.dry)/i,
  'Other Drinks': /(orange?.juice|capri?.sun|kombucha|lime?.soda|poland?.spring|sparkling?.tonic)/i,
  'Other Snacks': /(pop-tarts|uncrustables|kelloggs?.graham|jell-o|mixed?.nuts|sambazon|little?.debbie|snack?.mix|two-bite|snack?.packs|goldbears|triscuit|pecan?.halves|honey?.biscuits|mallomars?.pure?.chocolate|krispies?.treats)/i,
  'Pork': /(all?.natural?.pork|boneless?.pork|hatfield)/i,
  'Cereal': /(chex?.cereal)/i,
  'Tissues': /(kleenex|puffs)/i,
  'Other Cleaning Products': /(liquid-plumr|spinbrush|tape)/i,
  'Ziploc': /ziploc/i,
  'Dental': /(toothpaste|flossers|oral-b)/i,
  'Pilmeni': /(catelli?.meatball|bouillon?.cubes)/i,
  'Samosa': /sukhi/i,
  'Hair Gel': /fructis/i,
  'Stock & Broth': /(stock|broth)/i,
  'Starkist': /starkist/i,
  'Whipping Cream/Heavy Cream': /(whipping?.cream|whipped?.cream|heavy?.cream)/i,
  'Sour Cream': /(sour?.cream)/i,
  'Tacos & Tortillas': /(mission?.restaurant|taco?.dinner)/i,
  'Tomato Sauce': /hunt/i,
};
