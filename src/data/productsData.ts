export type ProductLocale = 'en' | 'ru' | 'de'

export type ProductContent = {
  title: string
  paragraphs: string[]
  storage?: string[]
}

export type ProductDataItem = {
  id: number
  slug: string
  gradeKey: 'catalog.grades.high'
  methodKey: 'catalog.methods.sun' | 'catalog.methods.air' | 'catalog.methods.shade' | 'catalog.methods.pickled'
  weightKg: number
  imageUrl: string
  images: string[]
  content: Record<ProductLocale, ProductContent>
}

export const productLocales: ProductLocale[] = ['en', 'ru', 'de']

export const productsData: ProductDataItem[] = [
  {
    id: 1,
    slug: 'premium-dried-apricots',
    gradeKey: 'catalog.grades.high',
    methodKey: 'catalog.methods.sun',
    weightKg: 10,
    imageUrl: '/images/products/kuraga.png',
    images: [
      '/images/products/kuraga.png',
      '/images/products/dried-apricots-2.jpg',
      '/images/products/dried-apricots-3.jpg',
    ],
    content: {
      en: {
        title: 'Premium Dried Apricots from Uzbekistan',
        paragraphs: [
          'Uzbek dried apricots are one of the most famous treasures of the fertile Fergana Valley, where the unique climate and rich soil create ideal conditions for producing naturally sweet, flavorful, and premium-quality fruits.',
          'Our dried apricots are made from carefully selected “Subkhona” apricots, a variety highly valued for its rich taste, vibrant bright-orange color, soft texture, and naturally round shape. Unlike industrial drying methods, Uzbek apricots are traditionally sun- and shade-dried without the use of ovens or artificial processing, helping preserve their natural flavor, vitamins, and nutritional value.',
          'To maintain the fruit’s elegant appearance, the apricots are carefully dried whole before the pit is delicately removed, preserving their beautiful shape and tender texture.',
          'Uzbek dried apricots are highly appreciated worldwide for their premium quality and are widely used as a healthy snack, in desserts, confectionery products, and festive table presentations.',
          'At BRIVEX, we supply export-quality Uzbek dried apricots in bulk, carefully processed and packed according to international food safety and quality standards.',
        ],
      },
      ru: {
        title: 'Премиальная курага из Узбекистана',
        paragraphs: [
          'Узбекская курага является одним из главных богатств плодородной Ферганской долины, где уникальный климат и богатая почва создают идеальные условия для выращивания натуральных, сладких и высококачественных абрикосов.',
          'Наша курага производится из тщательно отобранного сорта абрикоса «Субхона», который ценится за насыщенный вкус, яркий оранжевый цвет, мягкую текстуру и красивую округлую форму. В отличие от промышленных методов обработки, узбекская курага проходит традиционную солнечную и теневую сушку без использования печей и искусственных технологий, что позволяет сохранить натуральный вкус, витамины и полезные свойства продукта.',
          'Для сохранения привлекательного внешнего вида абрикосы сначала сушатся целиком, после чего косточка аккуратно удаляется без повреждения формы плода.',
          'Узбекская курага высоко ценится на мировом рынке благодаря своему превосходному качеству и широко используется как полезный натуральный снек, а также в кондитерской продукции, десертах и праздничной подаче.',
          'Компания BRIVEX поставляет узбекскую курагу экспортного качества оптом, обеспечивая обработку и упаковку в соответствии с международными стандартами качества и безопасности пищевой продукции.',
        ],
      },
      de: {
        title: 'Premium Getrocknete Aprikosen aus Usbekistan',
        paragraphs: [
          'Usbekische getrocknete Aprikosen gehören zu den bekanntesten Schätzen des fruchtbaren Fergana-Tals, wo das einzigartige Klima und die reichen Böden ideale Bedingungen für die Herstellung natürlicher, süßer und hochwertiger Früchte schaffen.',
          'Unsere getrockneten Aprikosen werden aus sorgfältig ausgewählten Aprikosen der Sorte „Subkhona“ hergestellt, die für ihren intensiven Geschmack, ihre leuchtend orange Farbe, ihre weiche Textur und ihre schöne runde Form geschätzt werden. Im Gegensatz zu industriellen Verfahren werden usbekische Aprikosen traditionell unter Sonne und Schatten getrocknet - ohne Öfen oder künstliche Verarbeitung - wodurch Geschmack, Vitamine und wertvolle Nährstoffe erhalten bleiben.',
          'Um das attraktive Aussehen zu bewahren, werden die Aprikosen zunächst als ganze Früchte getrocknet und anschließend wird der Kern sorgfältig entfernt, ohne die Form der Frucht zu beschädigen.',
          'Usbekische getrocknete Aprikosen werden weltweit für ihre Premiumqualität geschätzt und eignen sich ideal als gesunder Snack, für Süßwaren, Desserts und elegante Präsentationen.',
          'BRIVEX liefert exportfähige usbekische getrocknete Aprikosen in Großmengen, sorgfältig verarbeitet und verpackt nach internationalen Qualitäts- und Lebensmittelsicherheitsstandards.',
        ],
      },
    },
  },
  {
    id: 2,
    slug: 'premium-almonds',
    gradeKey: 'catalog.grades.high',
    methodKey: 'catalog.methods.shade',
    weightKg: 10,
    imageUrl: '/images/products/almonds.png',
    images: ['/images/products/almonds-1.jpg', '/images/products/almonds-2.jpg', '/images/products/almonds-3.jpg'],
    content: {
      en: {
        title: 'Premium Almonds from Uzbekistan',
        paragraphs: [
          'Uzbek almonds are renowned for their rich flavor, natural sweetness, and exceptional quality. Grown in the mountainous and foothill regions of Uzbekistan, almond orchards benefit from fertile soil, abundant sunshine, and pure water flowing from the mountain rivers of Central Asia.',
          'With more than 30 local varieties, Uzbek almonds are distinguished by their delicate aroma, naturally high oil content, and smooth texture - qualities highly appreciated by international food producers and confectionery brands. Compared to many commercial varieties, Uzbek almonds offer a richer taste and a more refined flavor profile.',
          'Harvested during the autumn season, these premium almonds are carefully selected to ensure consistent size, freshness, and quality for export markets.',
          'Uzbek almonds are widely used in the bakery, confectionery, dairy, cosmetic, and healthy food industries. They are a key ingredient in almond flour, almond milk, marzipan, premium desserts, pastries, chocolates, creams, and gourmet snacks.',
          'At BRIVEX, we supply high-quality Uzbek almonds in bulk, carefully processed and packed according to international food safety and export standards for global markets.',
        ],
      },
      ru: {
        title: 'Премиальный миндаль из Узбекистана',
        paragraphs: [
          'Узбекский миндаль известен своим насыщенным вкусом, натуральной сладостью и высоким качеством. Миндальные сады Узбекистана расположены в горных и предгорных районах, где плодородная почва, большое количество солнечных дней и чистая вода горных рек создают идеальные условия для выращивания премиального продукта.',
          'Более 30 местных сортов придают узбекскому миндалю уникальный вкус, тонкий аромат, повышенную маслянистость и нежную текстуру, которые высоко ценятся мировыми производителями пищевой и кондитерской продукции. По своим вкусовым характеристикам узбекский миндаль отличается более насыщенным и благородным вкусом по сравнению со многими промышленными сортами.',
          'Сбор урожая осуществляется осенью, после чего миндаль проходит тщательный отбор для обеспечения стабильного качества, свежести и экспортных стандартов.',
          'Узбекский миндаль широко используется в хлебопекарной, кондитерской, молочной, косметической и индустрии здорового питания. Он является важным ингредиентом для производства миндальной муки, миндального молока, марципана, десертов, выпечки, шоколада, кремов и премиальных снеков.',
          'Компания BRIVEX поставляет высококачественный узбекский миндаль оптом, обеспечивая обработку и упаковку в соответствии с международными стандартами качества и безопасности пищевой продукции.',
        ],
      },
      de: {
        title: 'Premium Mandeln aus Usbekistan',
        paragraphs: [
          'Usbekische Mandeln sind weltweit für ihren intensiven Geschmack, ihre natürliche Süße und ihre hervorragende Qualität bekannt. Die Mandelgärten Usbekistans liegen in Berg- und Vorgebirgsregionen, wo fruchtbare Böden, viele Sonnentage und reines Wasser aus den Gebirgsflüssen ideale Bedingungen für den Anbau hochwertiger Mandeln schaffen.',
          'Mit mehr als 30 lokalen Sorten zeichnen sich usbekische Mandeln durch ihr feines Aroma, ihren natürlichen Ölgehalt und ihre zarte Textur aus - Eigenschaften, die von internationalen Lebensmittel- und Süßwarenherstellern besonders geschätzt werden. Im Vergleich zu vielen industriellen Sorten bieten usbekische Mandeln einen intensiveren und edleren Geschmack.',
          'Die Ernte erfolgt im Herbst, anschließend werden die Mandeln sorgfältig ausgewählt, um gleichbleibende Qualität, Frische und Exportstandards sicherzustellen.',
          'Usbekische Mandeln werden häufig in der Backwaren-, Süßwaren-, Milch-, Kosmetik- und Gesundheitslebensmittelindustrie verwendet. Sie sind ein wichtiger Bestandteil von Mandelmehl, Mandelmilch, Marzipan, Premium-Desserts, Gebäck, Schokolade, Cremes und Gourmet-Snacks.',
          'BRIVEX liefert hochwertige usbekische Mandeln in Großmengen, sorgfältig verarbeitet und verpackt nach internationalen Qualitäts- und Lebensmittelsicherheitsstandards für globale Märkte.',
        ],
      },
    },
  },
  {
    id: 3,
    slug: 'premium-apricot-kernels',
    gradeKey: 'catalog.grades.high',
    methodKey: 'catalog.methods.shade',
    weightKg: 10,
    imageUrl: '/images/products/abrikosoviy_orex.png',
    images: [
      '/images/products/apricot-kernels-1.jpg',
      '/images/products/apricot-kernels-2.jpg',
      '/images/products/apricot-kernels-3.jpg',
    ],
    content: {
      en: {
        title: 'Premium Apricot Kernels from Uzbekistan',
        paragraphs: [
          'Uzbek apricot kernels are highly valued for their delicate nutty flavor, natural aroma, and rich nutritional properties. Grown in the fertile regions of Uzbekistan, where sunny climate and traditional agriculture create ideal conditions for premium fruit cultivation, apricot kernels are considered one of the country’s unique natural products.',
          'The kernels are carefully extracted from selected apricot stones after natural drying, preserving their natural taste, texture, and valuable nutrients. Uzbek apricot kernels are known for their mild sweetness, soft crunch, and natural oil content, making them highly in demand in international food and cosmetic industries.',
          'Apricot kernels are widely used in confectionery, bakery products, healthy snacks, desserts, granola, oils, and cosmetic production. Their refined taste and natural qualities make them a premium ingredient for both food manufacturing and gourmet consumption.',
          'At BRIVEX, we supply high-quality Uzbek apricot kernels in bulk, carefully processed and packed according to international quality and food safety standards for export worldwide.',
        ],
      },
      ru: {
        title: 'Премиальный абрикосовый орех из Узбекистана',
        paragraphs: [
          'Узбекский абрикосовый орех высоко ценится благодаря своему нежному ореховому вкусу, натуральному аромату и богатым питательным свойствам. Выращенные в плодородных регионах Узбекистана, где солнечный климат и традиционные методы сельского хозяйства создают идеальные условия для выращивания фруктов премиального качества, абрикосовые косточки считаются одним из уникальных натуральных продуктов страны.',
          'Ядра аккуратно извлекаются из отборных абрикосовых косточек после естественной сушки, сохраняя натуральный вкус, текстуру и полезные микроэлементы. Узбекский абрикосовый орех отличается мягкой сладостью, приятным хрустом и высоким содержанием натуральных масел, благодаря чему пользуется высоким спросом в мировой пищевой и косметической промышленности.',
          'Абрикосовый орех широко используется в кондитерской и хлебопекарной продукции, полезных снеках, десертах, граноле, производстве масел и косметики. Его изысканный вкус и натуральные свойства делают продукт ценным ингредиентом как для пищевого производства, так и для премиального потребления.',
          'Компания BRIVEX поставляет высококачественный узбекский абрикосовый орех оптом, обеспечивая обработку и упаковку в соответствии с международными стандартами качества и безопасности пищевой продукции.',
        ],
      },
      de: {
        title: 'Premium Aprikosenkerne aus Usbekistan',
        paragraphs: [
          'Usbekische Aprikosenkerne werden für ihren feinen nussigen Geschmack, ihr natürliches Aroma und ihre wertvollen Nährstoffe geschätzt. Angebaut in den fruchtbaren Regionen Usbekistans, wo sonniges Klima und traditionelle Landwirtschaft ideale Bedingungen für hochwertige Früchte schaffen, gelten Aprikosenkerne als eines der besonderen Naturprodukte des Landes.',
          'Die Kerne werden nach der natürlichen Trocknung sorgfältig aus ausgewählten Aprikosensteinen gewonnen, wodurch Geschmack, Textur und wertvolle Inhaltsstoffe erhalten bleiben. Usbekische Aprikosenkerne zeichnen sich durch ihre milde Süße, ihren feinen Crunch und ihren natürlichen Ölgehalt aus und sind deshalb in der internationalen Lebensmittel- und Kosmetikindustrie besonders gefragt.',
          'Aprikosenkerne werden häufig in Süßwaren, Backwaren, gesunden Snacks, Desserts, Granola, Ölen und kosmetischen Produkten verwendet. Ihr raffinierter Geschmack und ihre natürlichen Eigenschaften machen sie zu einer hochwertigen Zutat für Lebensmittelproduktion und Gourmetprodukte.',
          'BRIVEX liefert hochwertige usbekische Aprikosenkerne in Großmengen, sorgfältig verarbeitet und verpackt nach internationalen Qualitäts- und Lebensmittelsicherheitsstandards für weltweite Exportmärkte.',
        ],
      },
    },
  },
  {
    id: 4,
    slug: 'premium-prunes',
    gradeKey: 'catalog.grades.high',
    methodKey: 'catalog.methods.sun',
    weightKg: 10,
    imageUrl: '/images/products/prunes.png',
    images: ['/images/products/prunes-1.jpg', '/images/products/prunes-2.jpg', '/images/products/prunes-3.jpg'],
    content: {
      en: {
        title: 'Premium Prunes from Uzbekistan',
        paragraphs: [
          'Uzbek prunes are renowned for their rich sweet taste, soft texture, and premium quality. Produced from carefully selected dark plum varieties grown in the fertile regions of Uzbekistan, our prunes are naturally sun-dried to preserve their authentic flavor, nutrients, and beautiful appearance.',
          'One of the most appreciated local varieties is the famous “Vengerka” plum, known for its naturally sweet flesh, delicate texture, and elegant round shape. Only whole and carefully selected fruits are used for drying. After natural drying, the pit is delicately removed without damaging the fruit, preserving its smooth texture and attractive appearance.',
          'Thanks to Uzbekistan’s favorable climate and traditional drying methods, Uzbek prunes are highly valued in the international food industry. Their balanced sweet-and-sour flavor makes them an ideal ingredient for confectionery, bakery products, chocolate production, sauces, meat dishes, desserts, cereals, and healthy snacks.',
          'Rich in fiber and natural nutrients, prunes are also appreciated for their beneficial nutritional properties and are widely consumed as part of a healthy diet.',
          'At BRIVEX, we supply premium-quality Uzbek prunes in bulk, carefully processed and packed according to international food safety and export standards.',
        ],
      },
      ru: {
        title: 'Отборный чернослив из Узбекистана',
        paragraphs: [
          'Узбекский чернослив славится своим насыщенным сладким вкусом, мягкой текстурой и премиальным качеством. Наш чернослив производится из тщательно отобранных сортов темной сливы, выращенной в плодородных регионах Узбекистана, и проходит процесс естественной сушки на солнце. Это позволяет сохранить подлинный вкус, питательные вещества и привлекательный внешний вид продукта.',
          'Одним из самых ценных местных сортов является знаменитая слива «Венгерка», известная своей натуральной сладкой мякотью, нежной текстурой и элегантной округлой формой. Для сушки отбираются только цельные, высококачественные плоды. После завершения процесса естественной сушки косточка деликатно удаляется без повреждения плода, что позволяет сохранить гладкую форму и эстетичный вид сухофрукта.',
        ],
      },
      de: {
        title: 'Premium Pflaumen aus Usbekistan',
        paragraphs: [
          'Usbekische Trockenpflaumen sind bekannt für ihren intensiven süßen Geschmack, ihre weiche Textur und ihre hervorragende Qualität. Sie werden aus sorgfältig ausgewählten dunklen Pflaumensorten hergestellt, die in den fruchtbaren Regionen Usbekistans angebaut werden, und natürlich unter der Sonne getrocknet, um Geschmack, Nährstoffe und ihr attraktives Aussehen zu bewahren.',
          'Eine der bekanntesten Sorten ist die berühmte „Vengerka“-Pflaume, die für ihr süßes Fruchtfleisch, ihre zarte Konsistenz und ihre elegante runde Form geschätzt wird. Für die Herstellung werden ausschließlich ganze und sorgfältig ausgewählte Früchte verwendet. Nach der natürlichen Trocknung wird der Kern schonend entfernt, ohne die Fruchtschale zu beschädigen, sodass die Pflaumen ihre schöne Form und weiche Struktur behalten.',
          'Dank des günstigen Klimas Usbekistans und traditioneller Trocknungsmethoden werden usbekische Trockenpflaumen in der internationalen Lebensmittelindustrie besonders geschätzt. Ihr ausgewogener süß-säuerlicher Geschmack macht sie ideal für Süßwaren, Backwaren, Schokolade, Saucen, Fleischgerichte, Desserts, Müslis und gesunde Snacks.',
          'Trockenpflaumen sind reich an Ballaststoffen und natürlichen Nährstoffen und gelten daher als wertvoller Bestandteil einer ausgewogenen Ernährung.',
          'BRIVEX liefert hochwertige usbekische Trockenpflaumen in Großmengen, sorgfältig verarbeitet und verpackt nach internationalen Qualitäts- und Lebensmittelsicherheitsstandards.',
        ],
      },
    },
  },
  {
    id: 5,
    slug: 'premium-pickled-grape-leaves',
    gradeKey: 'catalog.grades.high',
    methodKey: 'catalog.methods.pickled',
    weightKg: 10,
    imageUrl: '/images/products/grape_leaves.png',
    images: [
      '/images/products/pickled-grape-leaves-1.jpg',
      '/images/products/pickled-grape-leaves-2.jpg',
      '/images/products/pickled-grape-leaves-3.jpg',
    ],
    content: {
      en: {
        title: 'Premium Pickled Grape Leaves from Uzbekistan',
        paragraphs: [
          'Uzbek grape leaves are highly valued for their tenderness, delicate texture, and unique natural flavor. Thanks to the favorable climate and fertile vineyards of Uzbekistan, grape leaves grow thin, soft, and perfectly suited for culinary use.',
          'Fresh grape leaves are carefully harvested during the summer season, when the vines are in full bloom. Only the youngest and most delicate whole leaves are selected, then gently washed and preserved in a light traditional marinade with salt and selected spices to maintain their freshness, elasticity, and natural taste throughout the year.',
          'Pickled grape leaves are an essential ingredient in Middle Eastern, Mediterranean, Balkan, and Asian cuisine. They are especially famous for preparing Dolma - one of the world’s most beloved traditional dishes, where grape leaves add a refined sweet-and-sour flavor and delicate aroma.',
          'Rich in natural minerals and nutrients, grape leaves are appreciated not only for their culinary qualities but also for their nutritional value.',
          'At BRIVEX, we supply premium-quality pickled grape leaves from Uzbekistan in bulk, carefully processed and packed according to international food safety and export standards.',
        ],
        storage: [
          'Store in a cool and dry place away from direct sunlight.',
          'Refrigerate after opening.',
        ],
      },
      ru: {
        title: 'Премиальные маринованные виноградные листья из Узбекистана',
        paragraphs: [
          'Узбекские виноградные листья высоко ценятся за свою нежность, тонкую структуру и уникальный натуральный вкус. Благодаря благоприятному климату и плодородным виноградникам Узбекистана листья винограда вырастают мягкими, эластичными и идеально подходят для кулинарного использования.',
          'Свежие виноградные листья собираются летом в период активного роста лозы. Для маринования отбираются только самые молодые, красивые и цельные листья, после чего они тщательно промываются и консервируются в традиционном лёгком маринаде с добавлением соли и натуральных специй, сохраняя свежесть, эластичность и натуральный вкус в течение всего года.',
          'Маринованные виноградные листья являются важным ингредиентом ближневосточной, средиземноморской, балканской и азиатской кухни. Наиболее известное блюдо - долма, где виноградные листья придают мясной начинке изысканный кисло-сладкий вкус и особый аромат.',
          'Виноградные листья богаты натуральными минералами и полезными веществами, благодаря чему ценятся не только за вкусовые качества, но и за пищевую ценность.',
          'Компания BRIVEX поставляет высококачественные маринованные виноградные листья из Узбекистана оптом, обеспечивая обработку и упаковку в соответствии с международными стандартами качества и безопасности пищевой продукции.',
        ],
        storage: [
          'Хранить в сухом и прохладном месте, защищённом от прямых солнечных лучей.',
          'После вскрытия хранить в холодильнике.',
        ],
      },
      de: {
        title: 'Premium Eingelegte Weinblätter aus Usbekistan',
        paragraphs: [
          'Usbekische Weinblätter werden für ihre Zartheit, ihre feine Struktur und ihren einzigartigen natürlichen Geschmack hoch geschätzt. Dank des begünstigten Klimas und der fruchtbaren Weinberge Usbekistans wachsen die Blätter besonders weich und elastisch heran, wodurch sie sich ideal für die kulinarische Verwendung eignen.',
          'Die frischen Weinblätter werden im Sommer während der aktiven Wachstumsphase der Reben geerntet. Für die Einlegung werden ausschließlich die jüngsten, schönsten und unversehrten Blätter ausgewählt. Anschließend werden sie sorgfältig gewaschen und in einer traditionellen, leichten Marinade aus Salz und natürlichen Gewürzen konserviert. Dieser Prozess bewahrt die Frische, Elastizität und das natürliche Aroma über das ganze Jahr hinweg.',
          'Eingelegte Weinblätter sind ein unverzichtbarer Bestandteil der nahöstlichen, mediterranen, balkanischen und asiatischen Küche. Das bekannteste Gericht ist Dolma, bei dem die Weinblätter der Fleischfüllung eine exquisite säuerlich-süße Note und ein besonderes Aroma verleihen.',
          'Weinblätter sind reich an natürlichen Mineralien und wertvollen Nährstoffen, weshalb sie nicht nur für ihren Geschmack, sondern auch für ihren hohen physiologischen Brennwert geschätzt werden.',
          'Das Unternehmen BRIVEX liefert qualitativ hochwertige eingelegte Weinblätter aus Usbekistan im Großhandel. Wir gewährleisten eine Verarbeitung und Verpackung, die den internationalen Standards für Qualität und Lebensmittelsicherheit entspricht.',
        ],
        storage: [
          'An einem trockenen und kühlen Ort aufbewahren, vor direkter Sonneneinstrahlung schützen.',
          'Nach dem Öffnen im Kühlschrank lagern.',
        ],
      },
    },
  },
  {
    id: 6,
    slug: 'premium-walnuts',
    gradeKey: 'catalog.grades.high',
    methodKey: 'catalog.methods.shade',
    weightKg: 10,
    imageUrl: '/images/products/walnuts.png',
    images: ['/images/products/walnuts-1.jpg', '/images/products/walnuts-2.jpg', '/images/products/walnuts-3.jpg'],
    content: {
      en: {
        title: 'Premium Walnuts from Uzbekistan',
        paragraphs: [
          'Uzbek walnuts are renowned for their rich flavor, natural sweetness, and exceptional quality. Grown in the fertile mountainous regions of Uzbekistan, these walnuts benefit from abundant sunshine, clean mountain water, and favorable natural conditions that create a premium product with a delicate texture and high natural oil content.',
          'Carefully harvested and selected, Uzbek walnuts are valued for their light kernel color, fresh aroma, and naturally crunchy texture. Their balanced taste and premium quality make them highly demanded in international food markets.',
          'Walnuts are widely used in bakery and confectionery production, healthy snacks, desserts, cereals, sauces, dairy products, gourmet cuisine, and chocolate manufacturing. Rich in natural nutrients, vitamins, and healthy oils, they are considered an essential ingredient for healthy and premium food products.',
          'At BRIVEX, we supply premium-quality Uzbek walnuts in bulk, carefully processed and packed according to international quality and food safety standards for global export markets.',
        ],
      },
      ru: {
        title: 'Премиальные грецкие орехи из Узбекистана',
        paragraphs: [
          'Узбекские грецкие орехи известны своим насыщенным вкусом, натуральной сладостью и высоким качеством. Выращенные в плодородных горных регионах Узбекистана, орехи получают большое количество солнечного света, чистую горную воду и идеальные природные условия, благодаря чему приобретают нежную текстуру и высокое содержание натуральных масел.',
          'Тщательно собранные и отобранные, узбекские грецкие орехи ценятся за светлый цвет ядра, свежий аромат и приятный натуральный хруст. Их сбалансированный вкус и премиальное качество делают продукт востребованным на международных продовольственных рынках.',
          'Грецкие орехи широко используются в хлебопекарной и кондитерской промышленности, производстве полезных снеков, десертов, мюсли, соусов, молочной продукции, шоколада и блюд высокой кухни. Богатые витаминами, натуральными маслами и полезными веществами, они считаются важным ингредиентом здорового и премиального питания.',
          'Компания BRIVEX поставляет высококачественные узбекские грецкие орехи оптом, обеспечивая обработку и упаковку в соответствии с международными стандартами качества и безопасности пищевой продукции.',
        ],
      },
      de: {
        title: 'Premium Walnüsse aus Usbekistan',
        paragraphs: [
          'Usbekische Walnüsse sind bekannt für ihren intensiven Geschmack, ihre natürliche Süße und ihre hervorragende Qualität. Angebaut in den fruchtbaren Bergregionen Usbekistans profitieren diese Walnüsse von reichlich Sonnenschein, sauberem Bergwasser und idealen natürlichen Bedingungen, die ein Premiumprodukt mit feiner Textur und hohem natürlichem Ölgehalt entstehen lassen.',
          'Sorgfältig geerntet und ausgewählt, werden usbekische Walnüsse für ihre helle Kernfarbe, ihr frisches Aroma und ihre natürliche Knusprigkeit geschätzt. Ihr ausgewogener Geschmack und ihre Premiumqualität machen sie auf internationalen Lebensmittelmärkten besonders gefragt.',
          'Walnüsse werden häufig in der Backwaren- und Süßwarenindustrie, für gesunde Snacks, Desserts, Müslis, Saucen, Milchprodukte, Gourmetküche und Schokoladenherstellung verwendet. Reich an natürlichen Nährstoffen, Vitaminen und wertvollen Ölen gelten sie als wichtiger Bestandteil hochwertiger und gesunder Lebensmittel.',
          'BRIVEX liefert hochwertige usbekische Walnüsse in Großmengen, sorgfältig verarbeitet und verpackt nach internationalen Qualitäts- und Lebensmittelsicherheitsstandards für globale Exportmärkte.',
        ],
      },
    },
  },
  {
    id: 7,
    slug: 'premium-dried-white-mulberries',
    gradeKey: 'catalog.grades.high',
    methodKey: 'catalog.methods.sun',
    weightKg: 6,
    imageUrl: '/images/products/white_milberries.png',
    images: [
      '/images/products/dried-white-mulberries-1.jpg',
      '/images/products/dried-white-mulberries-2.jpg',
      '/images/products/dried-white-mulberries-3.jpg',
    ],
    content: {
      en: {
        title: 'Premium Dried White Mulberries from Uzbekistan',
        paragraphs: [
          'Uzbek dried white mulberries are a natural delicacy valued for their unique honey-like sweetness, soft texture, and rich nutritional properties. Grown under the warm sun of Uzbekistan, mulberries develop an intense natural flavor and are carefully sun-dried using traditional methods to preserve their vitamins, minerals, and natural sweetness.',
          'Thanks to the fertile soil and favorable climate of Uzbekistan, dried mulberries are distinguished by their light golden color, delicate taste, and premium quality. They are widely appreciated as a healthy natural snack and are often used in cereals, desserts, bakery products, teas, granola, and healthy food production.',
          'Naturally rich in fiber, antioxidants, vitamins, and minerals, dried mulberries are considered a valuable superfood and an excellent alternative to refined sugar due to their naturally sweet taste.',
          'At BRIVEX, we supply premium-quality dried white mulberries from Uzbekistan in bulk, carefully processed and packed according to international quality and food safety standards for global export markets.',
        ],
      },
      ru: {
        title: 'Премиальный сушёный светлый тутовник из Узбекистана',
        paragraphs: [
          'Узбекский сушёный светлый тутовник - это натуральное лакомство, ценящееся за свою медовую сладость, мягкую текстуру и богатые питательные свойства. Выращенный под тёплым солнцем Узбекистана, тутовник приобретает насыщенный натуральный вкус и проходит традиционную солнечную сушку, сохраняя витамины, минералы и природную сладость.',
          'Благодаря плодородной почве и благоприятному климату Узбекистана, сушёный тутовник отличается светло-золотистым цветом, нежным вкусом и высоким качеством. Он широко используется как полезный натуральный снек, а также в производстве мюсли, десертов, выпечки, чая, гранолы и продуктов здорового питания.',
          'Сушёный тутовник богат клетчаткой, антиоксидантами, витаминами и минералами и считается ценным суперфудом, а также натуральной альтернативой сахару благодаря своей природной сладости.',
          'Компания BRIVEX поставляет высококачественный сушёный светлый тутовник из Узбекистана оптом, обеспечивая обработку и упаковку в соответствии с международными стандартами качества и безопасности пищевой продукции.',
        ],
      },
      de: {
        title: 'Premium Getrocknete Weiße Maulbeeren aus Usbekistan',
        paragraphs: [
          'Usbekische getrocknete weiße Maulbeeren sind eine natürliche Delikatesse, die für ihre honigartige Süße, ihre weiche Textur und ihren hohen Nährwert geschätzt wird. Unter der warmen Sonne Usbekistans angebaut, entwickeln die Maulbeeren ein intensives natürliches Aroma und werden traditionell sonnengetrocknet, um Vitamine, Mineralstoffe und ihre natürliche Süße zu bewahren.',
          'Dank der fruchtbaren Böden und des günstigen Klimas Usbekistans zeichnen sich die getrockneten Maulbeeren durch ihre helle goldene Farbe, ihren feinen Geschmack und ihre Premiumqualität aus. Sie werden häufig als gesunder natürlicher Snack verwendet und finden Anwendung in Müslis, Desserts, Backwaren, Tee, Granola und gesunden Lebensmitteln.',
          'Getrocknete Maulbeeren sind reich an Ballaststoffen, Antioxidantien, Vitaminen und Mineralstoffen und gelten als wertvolles Superfood sowie als natürliche Alternative zu raffiniertem Zucker dank ihrer natürlichen Süße.',
          'BRIVEX liefert hochwertige getrocknete weiße Maulbeeren aus Usbekistan in Großmengen, sorgfältig verarbeitet und verpackt nach internationalen Qualitäts- und Lebensmittelsicherheitsstandards für globale Exportmärkte.',
        ],
      },
    },
  },
  {
    id: 8,
    slug: 'premium-pistachios',
    gradeKey: 'catalog.grades.high',
    methodKey: 'catalog.methods.shade',
    weightKg: 10,
    imageUrl: '/images/products/fistacho.png',
    images: ['/images/products/pistachios-1.jpg', '/images/products/pistachios-2.jpg', '/images/products/pistachios-3.jpg'],
    content: {
      en: {
        title: 'Premium Pistachios from Uzbekistan',
        paragraphs: [
          'Uzbekistan is considered one of the historical homelands of pistachio (Pistacia vera). Thanks to its hot sunny climate, fertile soil, and unique natural conditions, Uzbek pistachios are known for their rich flavor, high natural oil content, and premium quality.',
          'For centuries, pistachios have been cultivated in the mountainous and foothill regions of the country, where the environment helps develop their distinctive aroma and naturally rich taste.',
          'Today, Uzbek pistachios are highly valued in international markets and are widely used in the confectionery, food, and gourmet industries due to their premium quality and natural origin.',
        ],
      },
      ru: {
        title: 'Премиальные фисташки из Узбекистана',
        paragraphs: [
          'Узбекистан считается одной из исторических родин фисташки (Pistacia vera). Благодаря жаркому солнечному климату, плодородной почве и уникальным природным условиям, узбекские фисташки отличаются насыщенным вкусом, высокой маслянистостью и превосходным качеством.',
          'На протяжении многих веков фисташка выращивается в горных и предгорных регионах страны, где природная среда способствует формированию её натурального аромата и богатого вкуса.',
          'Сегодня узбекские фисташки высоко ценятся на международном рынке и широко используются в кондитерской, пищевой и ресторанной индустрии благодаря своему премиальному качеству и натуральному происхождению.',
        ],
      },
      de: {
        title: 'Premium Pistazien aus Usbekistan',
        paragraphs: [
          'Usbekistan gilt als eine der historischen Heimatregionen der Pistazie (Pistacia vera). Dank des heißen sonnigen Klimas, der fruchtbaren Böden und der einzigartigen natürlichen Bedingungen zeichnen sich usbekische Pistazien durch ihren intensiven Geschmack, ihren hohen natürlichen Ölgehalt und ihre hervorragende Qualität aus.',
          'Seit Jahrhunderten werden Pistazien in den Berg- und Vorgebirgsregionen des Landes angebaut, wo die natürliche Umgebung ihr besonderes Aroma und ihren reichen Geschmack prägt.',
          'Heute werden usbekische Pistazien auf internationalen Märkten hoch geschätzt und aufgrund ihrer Premiumqualität und natürlichen Herkunft häufig in der Süßwaren-, Lebensmittel- und Gourmetindustrie verwendet.',
        ],
      },
    },
  },
]

export const getProductContent = (product: ProductDataItem, locale: string) => {
  const normalizedLocale = productLocales.includes(locale as ProductLocale) ? (locale as ProductLocale) : 'en'

  return product.content[normalizedLocale] ?? product.content.en
}

export const getProductBySlug = (slug: string | string[]) => {
  const normalizedSlug = Array.isArray(slug) ? slug[0] : slug

  return productsData.find((product) => product.slug === normalizedSlug)
}
