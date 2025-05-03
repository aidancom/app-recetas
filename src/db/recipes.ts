import type { RecipesType, Callback } from '../types'

const uniqueKey: Callback = () => Math.random().toString(36).substring(2) + Date.now().toString(36)

export const recipesDB: RecipesType[] = [
  {
    'id': uniqueKey(),
    'name': 'Torrijas con horchata',
    'desc': 'Las torrijas, doradas y crujientes por fuera, suaves y jugosas por dentro, desprenden un aroma cálido a canela y azúcar caramelizado. Cada bocado se funde en la boca con una mezcla de leche infusionada y huevo que envuelve el pan con una textura sedosa y reconfortante. Acompañadas de un vaso bien frío de horchata de chufa, ligeramente dulce y refrescante, el contraste es perfecto: la calidez especiada de las torrijas se equilibra con la frescura vegetal y ligera de la horchata. Juntas, forman una combinación ideal para una merienda tradicional con un toque mediterráneo.',
    'image': 'torrijas-de-horchata',
    'ingredients': ['1 l de horchata de chufa', '10 rebanadas de pan del día anterior', '1 huevo batido', '500 ml de aceite de girasol para freír', 'Azúcar blanco para rebozar'],
    'difficult': 3,
    'preparation': 'Vertemos 1 litro de horchata en una fuente o recipiente en el que vayamos a remojar el pan.\nPonemos 10 rebanadas pan del día anterior con la horchata y dejamos que absorban la horchata, con unos 10-15 minutos por cada lado será suficiente.\nEscurrimos el exceso de horchata poniendo las rebanadas de pan sobre una rejilla.\nPasamos el pan por 1 huevo batido por ambos lados.\nCalentamos el aceite de girasol, unos 500 ml o la cantidad suficiente para freír las torrijas, en una cacerola baja o sartén hasta que llegue a 180 ºC idealmente. Freímos las torrijas por ambos lados hasta que estén doradas a nuestro gusto.\nDejamos las torrijas sobre papel de cocina para eliminar el exceso de aceite. A continuación, rebozamos las torrijas por ambos lados con azúcar blanco.\nServimos las torrijas de horchata templadas o frías',
    'preparation-time': 30,
    'cooking-time': 20,
    'category': 'Postres'
  },
  {
    'id': uniqueKey(),
    'name': 'Cheescake de oreo',
    'desc': 'La cheesecake de Oreo combina la cremosidad del queso con el sabor inconfundible de las galletas más famosas del mundo. Cada cucharada ofrece una textura suave y untuosa, salpicada de trocitos crujientes de Oreo que intensifican su dulzura y su aroma a cacao. La base, hecha de galletas trituradas y mantequilla, aporta un contraste firme y mantecoso que sostiene el relleno sedoso. Coronada con más galletas troceadas o una capa generosa de crema, esta tarta es una explosión de placer goloso que conquista tanto a pequeños como a grandes, perfecta para cualquier celebración o capricho especial.',
    'image': 'cheescake-oreo',
    'ingredients': ['250 gr queso de untar', '500 gr nata para montar 35% MG', '150 gr azúcar', '300 ml leche entera temperatura ambiente', '2 sobres cuajadas Royal', '240 gr galletas oreo', '50 gr mantequilla temperatura ambiente'],
    'difficult': 2,
    'preparation': 'Separar las galletas y reservar la crema que llevan las galletas en medio. Trituraremos todas las galletas hasta que sean polvo y reservar las que corresponden para decorar la cobertura unos 60 gr. \nMezclar las galletas con mantequilla a temperatura ambiente para formar la base de la tarta.Formar una masa con las galletas.Rellenar la base del molde con la mezcla de la galleta polvo y mantequilla, presionaremos con la yema de los dedos o una cuchara y repartiremos de forma homogénea por toda la base. Dejar enfriar en el frigorífico. \nEn un cazo a fuego medio poner a calentar la leche, la nata, el queso junto a la crema de las galletas oreo, el azúcar y la cuajada previamente diluida en un poquito de leche templada. Remover la mezcla de manera constante con unas varillas a fuego medio, disolver bien todos los ingredientes.En el momento que la mezcla rompe a hervir, apartar del fuego. \nEchar la mezcla sobre la base de galletas que teníamos reservada en el frigorífico. \nDejar templar la tarta y cuando haya perdido el calor, meteremos en la nevera como mínimo unas 3 horas. \nUna vez transcurrido este tiempo y que nuestra tarta este completamente cuajada decorar con las galletas en polvo que teníamos reservadas, espolvorear con un colador por toda la superficie. \nDes-moldar la tarta y lista para servir.',
    'preparation-time': 30,
    'cooking-time': 240,
    'category': 'Postres'
  },
  {
    'id': uniqueKey(),
    'name': 'Lasaña de carne',
    'desc': 'La lasaña de carne, con sus capas de pasta al dente, carne jugosa y salsa bechamel cremosa, se convierte en un plato reconfortante e irresistible. Al salir del horno, el queso gratinado burbujea dorado en la superficie, liberando un aroma tentador a especias y tomate. Cada bocado combina el sabor robusto de la carne sazonada, la suavidad de la salsa y el toque crujiente de la cobertura, creando un equilibrio perfecto de texturas y sabores que reconfortan desde el primer momento.',
    'image': 'lasana-de-carne',
    'ingredients': ['12 láminas de lasaña precocida', '400 gr carne picada de ternera', '400 gr carne picada de cerdo', '1 cebolla grande', '2 dientes de ajo', '400 gr tomate triturado', '2 cucharadas de tomate concentrado', '1 cucharadita de orégano', '1 cucharadita de albahaca seca', 'Sal y pimienta al gusto', 'Aceite de oliva', '500 ml leche entera', '40 gr mantequilla', '40 gr harina de trigo', '150 gr queso rallado (mozzarella o mezcla para gratinar)'],
    'difficult': 5,
    'preparation': 'Pelar y picar finamente la cebolla y los ajos. Sofreír en una sartén grande con un poco de aceite de oliva hasta que estén dorados.\nAgregar la carne picada de ternera y cerdo. Cocinar a fuego medio-alto, desmenuzándola con una cuchara, hasta que pierda el color crudo.\nIncorporar el tomate triturado, el tomate concentrado, el orégano, la albahaca, sal y pimienta. Cocinar a fuego lento unos 20 minutos hasta que la salsa espese ligeramente.\nMientras tanto, preparar la bechamel: en un cazo derretir la mantequilla, añadir la harina y cocinar removiendo 2 minutos. Añadir poco a poco la leche caliente, batiendo constantemente para evitar grumos, hasta obtener una salsa espesa y suave. Salpimentar al gusto.\nMontar la lasaña en una fuente para horno: colocar una capa fina de carne en la base, cubrir con láminas de lasaña, seguir con más carne, bechamel y repetir las capas hasta terminar, acabando con bechamel.\nEspolvorear con abundante queso rallado.\nHornear en horno precalentado a 180°C durante 30-35 minutos hasta que esté dorada y burbujeante.\nDejar reposar 10 minutos antes de servir.',
    'preparation-time': 30,
    'cooking-time': 45,
    'category': 'Platos principales'
  },
  {
    'id': uniqueKey(),
    'name': 'Spaghetti Carbonara',
    'desc': 'Los spaghetti carbonara, con su salsa sedosa de huevo, queso y panceta crujiente, ofrecen una experiencia intensa y reconfortante. Cada hebra de pasta se impregna de una mezcla cremosa y sabrosa, donde el equilibrio entre la untuosidad del queso pecorino, el ahumado de la panceta y la textura al dente de los spaghetti crea una armonía perfecta. Un plato sencillo pero profundamente satisfactorio, que captura la esencia de la cocina italiana tradicional en cada bocado.',
    'image': 'espaguetis-carbonara',
    'ingredients': ['400 gr spaghetti', '150 gr panceta o guanciale', '3 yemas de huevo', '1 huevo entero', '100 gr queso pecorino romano rallado', 'Sal al gusto', 'Pimienta negra recién molida'],
    'difficult': 3,
    'preparation': 'Poner a hervir abundante agua con sal en una olla grande y cocinar los spaghetti hasta que estén al dente según las instrucciones del paquete.\nMientras tanto, cortar la panceta o guanciale en tiras pequeñas y dorarla en una sartén a fuego medio hasta que esté crujiente. No tirar la grasa que suelta.\nEn un bol grande, batir las yemas y el huevo entero con el queso pecorino rallado, añadiendo abundante pimienta negra.\nEscurrir la pasta reservando un poco del agua de cocción.\nAñadir rápidamente los spaghetti calientes a la sartén con la panceta, apagar el fuego y verter la mezcla de huevos y queso.\nRemover enérgicamente para crear una salsa cremosa, añadiendo un poco del agua de cocción si es necesario para ajustar la textura.\nServir inmediatamente con más queso y pimienta al gusto.',
    'preparation-time': 10,
    'cooking-time': 15,
    'category': 'Platos principales'
  },
  {
    'id': uniqueKey(),
    'name': 'Patatas Bravas',
    'desc': 'Las patatas bravas, crujientes por fuera y tiernas por dentro, son un clásico irresistible de la cocina española. Bañadas en una salsa vibrante y ligeramente picante, cada bocado ofrece un contraste perfecto entre la suavidad de la patata y el golpe especiado de la salsa. Perfectas como tapa o aperitivo, estas patatas son una explosión de sabor sencilla pero profundamente satisfactoria, que invita a repetir una y otra vez.',
    'image': 'patatas-bravas',
    'ingredients': ['600 gr patatas', 'Aceite de oliva para freír', 'Sal al gusto', '1 cucharadita de pimentón dulce', '1/2 cucharadita de pimentón picante', '1 cucharada de harina', '200 ml caldo de pollo o verduras', '2 dientes de ajo', 'Aceite de oliva extra para la salsa'],
    'difficult': 3,
    'preparation': 'Pelar y cortar las patatas en cubos medianos.\nFreírlas en abundante aceite de oliva a temperatura media hasta que estén tiernas por dentro.\nSubir el fuego para dorarlas y dejarlas crujientes por fuera. Escurrir sobre papel absorbente y salar al gusto.\nPara la salsa, calentar un poco de aceite en una sartén y dorar los ajos picados.\nAñadir la harina, los pimentones y mezclar bien.\nVerter el caldo poco a poco, removiendo constantemente para evitar grumos.\nCocinar a fuego medio hasta que la salsa espese.\nTriturar si se desea una textura más fina.\nServir las patatas calientes cubiertas con la salsa brava.',
    'preparation-time': 15,
    'cooking-time': 25,
    'category': 'Entrantes'
  },
  {
    'id': uniqueKey(),
    'name': 'Filetes Empanados',
    'desc': 'Los filetes empanados, dorados y crujientes por fuera, esconden en su interior una carne jugosa y tierna que se deshace en la boca. Cada mordisco combina el sabor reconfortante del empanado clásico con la suavidad de la carne bien sazonada. Acompañados de una guarnición ligera o simplemente con un chorrito de limón, son una opción versátil y deliciosa para comidas cotidianas o celebraciones informales.',
    'image': 'filetes-empanados',
    'ingredients': ['4 filetes de ternera o pollo', '2 huevos', 'Pan rallado', 'Harina de trigo', 'Sal al gusto', 'Pimienta negra al gusto', 'Aceite de oliva para freír'],
    'difficult': 2,
    'preparation': 'Salpimentar los filetes por ambos lados.\nPasar cada filete primero por harina, sacudiendo el exceso.\nLuego sumergirlos en huevo batido.\nFinalmente empanar bien cubriéndolos con pan rallado.\nCalentar abundante aceite de oliva en una sartén a temperatura media-alta.\nFreír los filetes hasta que estén dorados y crujientes por fuera, aproximadamente 2-3 minutos por lado.\nEscurrir sobre papel absorbente.\nServir calientes, acompañados de limón, ensalada o patatas fritas.',
    'preparation-time': 10,
    'cooking-time': 10,
    'category': 'Platos principales'
  },
  {
    'id': uniqueKey(),
    'name': 'Paella',
    'desc': 'La paella, emblema de la cocina española, ofrece un espectáculo de colores y aromas en cada cucharada. Con su arroz impregnado de caldo sabroso, mariscos frescos, pollo y verduras, cada bocado es una explosión de sabores intensos y equilibrados. Dorada y ligeramente crujiente en el fondo, la paella invita a compartir momentos únicos alrededor de la mesa.',
    'image': 'paella',
    'ingredients': ['400 gr arroz bomba', '800 ml caldo de pollo o pescado', '200 gr pollo troceado', '150 gr calamares', '150 gr gambas', '100 gr judías verdes', '1 pimiento rojo', '2 tomates maduros', '1 cucharadita pimentón dulce', 'Azafrán o colorante alimentario', 'Aceite de oliva', 'Sal al gusto'],
    'difficult': 6,
    'preparation': 'Sofreír en una paellera el pollo troceado hasta dorarlo.\nAñadir los calamares, las gambas, las judías verdes y el pimiento en tiras.\nAgregar los tomates rallados y cocinar unos minutos.\nIncorporar el arroz y el pimentón.\nVerter el caldo caliente y el azafrán.\nCocinar a fuego fuerte 8 minutos y luego a fuego bajo 10 minutos.\nDejar reposar 5 minutos antes de servir.',
    'preparation-time': 20,
    'cooking-time': 25,
    'category': 'Platos principales'
  },
  {
    'id': uniqueKey(),
    'name': 'Pizza 4 Quesos',
    'desc': 'La pizza cuatro quesos es un homenaje a la intensidad y la cremosidad, con cada variedad de queso fundiéndose en una sinfonía de sabores. Mozzarella, gorgonzola, parmesano y emmental se combinan sobre una base crujiente para ofrecer una experiencia irresistible para los amantes del queso.',
    'image': 'pizza-4-quesos',
    'ingredients': ['1 base de pizza', '100 gr mozzarella rallada', '50 gr gorgonzola', '50 gr parmesano rallado', '50 gr queso emmental', '2 cucharadas de salsa de tomate', 'Orégano al gusto'],
    'difficult': 2,
    'preparation': 'Precalentar el horno a 220°C.\nExtender la salsa de tomate sobre la base de pizza.\nDistribuir los cuatro quesos uniformemente.\nEspolvorear con orégano.\nHornear 8-10 minutos o hasta que los quesos estén fundidos y dorados.\nServir caliente.',
    'preparation-time': 10,
    'cooking-time': 10,
    'category': 'Platos principales'
  },
  {
    'id': uniqueKey(),
    'name': 'Churros',
    'desc': 'Los churros, dorados y crujientes por fuera, esconden un interior esponjoso y ligero. Espolvoreados con azúcar y acompañados de una taza de chocolate caliente, son el desayuno o merienda perfecta para disfrutar de un momento dulce y reconfortante.',
    'image': 'churros',
    'ingredients': ['250 gr harina', '250 ml agua', '1 pizca de sal', 'Aceite para freír', 'Azúcar para espolvorear'],
    'difficult': 4,
    'preparation': '1. Hervir el agua con una pizca de sal.\nAñadir la harina de golpe y mezclar hasta obtener una masa homogénea.\nDejar templar.\nIntroducir la masa en una manga pastelera con boquilla estrellada.\nFormar los churros y freírlos en aceite caliente hasta dorar.\nEscurrir sobre papel y espolvorear con azúcar.',
    'preparation-time': 10,
    'cooking-time': 10,
    'category': 'Postres'
  },
  {
    'id': uniqueKey(),
    'name': 'Crepes de Nutella',
    'desc': 'Los crepes de Nutella son una combinación irresistible de suavidad y dulzura. Cada crepe, fino y delicado, envuelve una capa generosa de Nutella derretida, ofreciendo una explosión de sabor avellanado y chocolatoso en cada bocado.',
    'image': 'crepes-de-nutella',
    'ingredients': ['125 gr harina', '250 ml leche', '1 huevo', '30 gr mantequilla derretida', '1 pizca de sal', 'Nutella al gusto'],
    'difficult': 2,
    'preparation': '1. Batir la harina, la leche, el huevo, la mantequilla derretida y la sal hasta obtener una masa líquida y homogénea.\nDejar reposar 30 minutos.\nCalentar una sartén antiadherente, untarla ligeramente con mantequilla.\nVerter una capa fina de masa y cocinar 1-2 minutos por lado.\nRellenar los crepes con Nutella caliente y doblar o enrollar.',
    'preparation-time': 10,
    'cooking-time': 10,
    'category': 'Postres'
  },
  {
    'id': uniqueKey(),
    'name': 'Huevos Rotos con Jamón Serrano',
    'desc': 'Los huevos rotos con jamón serrano son una explosión de sabores sencillos pero contundentes: patatas doradas, huevos cremosos y jamón curado forman una combinación perfecta para un plato tradicional y sabroso.',
    'image': 'huevos-rotos-jamon',
    'ingredients': ['4 patatas grandes', '4 huevos', '100 gr jamón serrano en lonchas', 'Aceite de oliva para freír', 'Sal al gusto'],
    'difficult': 2,
    'preparation': '1. Pelar y cortar las patatas en rodajas gruesas.\nFreírlas en aceite de oliva a temperatura media hasta que estén doradas y tiernas.\nEscurrir y salar.\nFreír los huevos en el mismo aceite dejando la yema líquida.\nColocar las patatas en un plato, romper los huevos encima y añadir el jamón serrano troceado.\nServir inmediatamente.',
    'preparation-time': 10,
    'cooking-time': 20,
    'category': 'Platos principales'
  },
  {
    'id': uniqueKey(),
    'name': 'Tortitas de Desayuno',
    'desc': 'Esponjosas y doradas, las tortitas de desayuno son un clásico reconfortante. Servidas con miel, frutas o sirope de arce, transforman cualquier mañana en un momento especial lleno de dulzura y suavidad.',
    'image': 'tortitas',
    'ingredients': ['200 gr harina', '2 cucharadas azúcar', '1 cucharadita levadura química', '1 pizca sal', '250 ml leche', '1 huevo', '30 gr mantequilla derretida'],
    'difficult': 2,
    'preparation': '1. Mezclar los ingredientes secos en un bol.\nEn otro recipiente batir la leche, el huevo y la mantequilla derretida.\nCombinar ambas mezclas hasta integrar.\nCalentar una sartén antiadherente y verter porciones de masa.\nCocinar hasta que salgan burbujas, dar la vuelta y dorar.\nServir calientes con toppings al gusto.',
    'preparation-time': 10,
    'cooking-time': 15,
    'category': 'Desayunos'
  },
  {
    'id': uniqueKey(),
    'name': 'Tacos',
    'desc': 'Los tacos, con sus tortillas suaves rellenas de carne sazonada, verduras frescas y salsas vibrantes, ofrecen un festín de texturas y sabores. Son perfectos para compartir y personalizar al gusto, trayendo el espíritu festivo de la cocina mexicana a cualquier mesa.',
    'image': 'tacos',
    'ingredients': ['8 tortillas de maíz', '300 gr carne picada de ternera', '1 cebolla', '1 tomate', 'Lechuga', 'Queso rallado', 'Salsa picante al gusto', 'Aceite de oliva', 'Sal y pimienta al gusto'],
    'difficult': 3,
    'preparation': '1. Saltear la cebolla picada en aceite.\nAñadir la carne y cocinar hasta dorar.\nSalpimentar al gusto.\nCalentar las tortillas.\nRellenar con carne, lechuga troceada, tomate en cubitos y queso rallado.\nAñadir salsa al gusto.\nServir calientes.',
    'preparation-time': 15,
    'cooking-time': 15,
    'category': 'Platos principales'
  },
  {
    'id': uniqueKey(),
    'name': 'Albóndigas de Carne',
    'desc': 'Las albóndigas de carne, jugosas y tiernas, se bañan en una salsa rica y aromática que realza su sabor. Cada bocado ofrece una textura melosa y una combinación de especias que convierten este plato en un clásico reconfortante para toda la familia.',
    'image': 'albondigas',
    'ingredients': ['400 gr carne picada', '1 huevo', '2 cucharadas pan rallado', '1 diente de ajo picado', '1 cucharada perejil picado', 'Sal y pimienta', 'Aceite de oliva', '200 ml tomate frito', '100 ml caldo de carne'],
    'difficult': 3,
    'preparation': '1. Mezclar la carne picada con el huevo, pan rallado, ajo, perejil, sal y pimienta.\nFormar bolitas.\nFreír las albóndigas en aceite caliente hasta dorar.\nEn otra sartén, calentar el tomate frito con el caldo.\nAñadir las albóndigas a la salsa y cocinar a fuego medio durante 15 minutos.\nServir calientes acompañadas de arroz o patatas.',
    'preparation-time': 15,
    'cooking-time': 25,
    'category': 'Platos principales'
  }
]