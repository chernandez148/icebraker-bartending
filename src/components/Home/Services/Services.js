import React from 'react';
import './styles.css';

function Services() {
    const services = [
        { name: "Weddings", url: "wedding.jpg" },
        { name: "Celebrations", url: "parties.png" },
        { name: "Baby Showers", url: "baby-shower.png" },
        { name: "Special Events", url: "special-events.jpg" }
    ];

    const menu = [
        {
            package: "Basic Menu",
            menu_list: [
                {
                    name: "Margarita",
                    ingredients: "2oz Tequila, 1oz Triple Sec, 1oz Lime Juice, Salt for Rimming the Glass, Lemon Wedge for Garnish"
                },
                {
                    name: "Mojito",
                    ingredients: "2oz White Rum, 1oz Fresh Lime Juice, 2tbs Sugar, 6-8 Fresh Mint Leaves, Soda Water, Lime Garnish and Mint Sprig for Garnish"
                },
                {
                    name: "Piña Colada",
                    ingredients: "2oz White Rum, 3oz Pineapple Juice, 1oz Coconut Cream, Pineapple Slice and Maraschino Cherry for Garnish"
                },
                {
                    name: "Old Fashioned",
                    ingredients: "2oz Bourbon or Rye Whiskey, 1 Sugar Cube, 2 Dashes Angostura Bitters, Orange Peel and Cherry for Garnish"
                },
                {
                    name: "Moscow Mule",
                    ingredients: "2oz Vodka, 4oz Ginger Beer, 1/2oz Fresh Lime Juice, Lime Wheel and Mint Sprig for Garnish"
                },
                {
                    name: "Screwdriver",
                    ingredients: "1.5oz Vodka, 3oz Orange Juice, Orange Slice for Garnish"
                },
                {
                    name: "Daiquiri",
                    ingredients: "2oz White Rum, 1oz Fresh Lime Juice, 1/2oz Simple Syrup"
                },
                {
                    name: "Whiskey Sour",
                    ingredients: "2oz Bourbon or Rye Whiskey, 3/4oz Fresh Lemon Juice, 1/2oz Simple Syrup, Lemon Wheel and Cherry for Garnish"
                },
                {
                    name: "Tom Collins",
                    ingredients: "2oz Gin, 1oz Fresh Lemon Juice, 1/2oz Simple Syrup, Soda Water, Lemon Slice and Cherry for Garnish"
                },
                {
                    name: "Tequila Sunrise",
                    ingredients: "1.5oz Tequila, 4oz Orange Juice, 1/2oz Grenadine, Orange Slice and Cherry for Garnish"
                },
            ],
        },
        {
            package: "Premium Menu",
            menu_list: [
                {
                    name: "Negroni",
                    ingredients: "1oz Gin, 1oz Campari, 1oz Sweet Vermouth, Orange Peel for Garnish"
                },
                {
                    name: "French 75",
                    ingredients: "1oz Gin, 1/2oz Fresh Lemon Juice, 1/2oz Simple Syrup, Champagne, Lemon Twist for Garnish"
                },
                {
                    name: "Aviation",
                    ingredients: "2oz Gin, 1/2oz Maraschino Liqueur, 1/4oz Crème de Violette, 1/2oz Fresh Lemon Juice, Cherry for Garnish"
                },
                {
                    name: "Sazerac",
                    ingredients: "2oz Rye Whiskey, 1 Sugar Cube, 2 Dashes Peychaud's Bitters, Absinthe Rinse, Lemon Twist for Garnish"
                },
                {
                    name: "Corpse Reviver #2",
                    ingredients: "1oz Gin, 1oz Cointreau, 1oz Lillet Blanc, 1oz Fresh Lemon Juice, Absinthe Rinse, Lemon Twist for Garnish"
                },
                {
                    name: "Boulevardier",
                    ingredients: "1.5oz Bourbon, 1oz Campari, 1oz Sweet Vermouth, Orange Twist for Garnish"
                },
                {
                    name: "Hemingway Daiquiri",
                    ingredients: "2oz White Rum, 3/4oz Fresh Lime Juice, 1/2oz Fresh Grapefruit Juice, 1/2oz Maraschino Liqueur, Lime Wheel for Garnish"
                },
                {
                    name: "Clover Club",
                    ingredients: "2oz Gin, 1oz Raspberry Syrup, 3/4oz Fresh Lemon Juice, Egg White, Raspberry for Garnish"
                },
                {
                    name: "Sidecar",
                    ingredients: "2oz Cognac, 1oz Cointreau, 3/4oz Fresh Lemon Juice, Sugar Rim"
                },
                {
                    name: "Last Word",
                    ingredients: "3/4oz Gin, 3/4oz Green Chartreuse, 3/4oz Maraschino Liqueur, 3/4oz Fresh Lime Juice, Lime Twist for Garnish"
                },
            ],
        },
        {
            package: "Luxury Menu",
            menu_list: [
                {
                    name: "Diamond Fizz",
                    ingredients: "2oz Premium Vodka, 1oz Fresh Lemon Juice, 1/2oz Simple Syrup, Champagne, Lemon Twist for Garnish, Edible Gold Flakes (Optional)"
                },
                {
                    name: "Truffle Martini",
                    ingredients: "2oz Premium Gin, 1/2oz Dry Vermouth, Truffle-Infused Olive Brine, Truffle-Stuffed Olive for Garnish"
                },
                {
                    name: "Royal Blush",
                    ingredients: "1.5oz Premium Scotch Whisky, 1oz Hibiscus Syrup, 1/2oz Fresh Lemon Juice, Edible Rose Petals for Garnish, Gold-Dusted Rim (Optional)"
                },
                {
                    name: "Black Pearl",
                    ingredients: "2oz Aged Rum, 1/2oz Amaro, 1/2oz Coffee Liqueur, Blackberry and Luxardo Cherry for Garnish, Crushed Coffee Beans (Optional)"
                },
                {
                    name: "Crystal Collins",
                    ingredients: "2oz Crystal Head Vodka, 1oz Fresh Lemon Juice, 1/2oz Elderflower Liqueur, Edible Flower and Crystal Skull Stir Stick for Garnish"
                },
                {
                    name: "Platinum Margarita",
                    ingredients: "2oz Premium Tequila, 1oz Grand Marnier, 1oz Fresh Lime Juice, Salt for Rimming the Glass, Lime Zest for Garnish"
                },
                {
                    name: "Golden Emperor",
                    ingredients: "1.5oz Japanese Whisky, 1oz Goldschlager, 1/2oz Yuzu Juice, Edible Gold Leaf Garnish, Yuzu Twist"
                },
                {
                    name: "Opulent Old Fashioned",
                    ingredients: "2oz Rare Single Malt Scotch, 1 Demerara Sugar Cube, 2 Dashes Angostura Bitters, Luxardo Cherry and Orange Twist for Garnish, Diamond Ice Cube (Optional)"
                },
                {
                    name: "Pearl Elixir",
                    ingredients: "1.5oz Grey Goose La Poire Vodka, 1/2oz Elderflower Liqueur, 1/2oz Lychee Juice, Edible Pearl Dust Garnish, Lychee Fruit"
                },
                {
                    name: "Imperial Martini",
                    ingredients: "2oz Beluga Gold Line Vodka, 1/2oz Dry Vermouth, Edible Gold Flakes in the Martini, Lemon Twist Garnish"
                },
            ],
        },
        {
            package: "Virgin Menu",
            menu_list: [
                {
                    name: "Virgin Mojito",
                    ingredients: "Fresh Lime Juice, 2 tbs Sugar, 6-8 Fresh Mint Leaves, Soda Water, Lime Garnish and Mint Sprig for Garnish"
                },
                {
                    name: "Virgin Piña Colada",
                    ingredients: "Pineapple Juice, Coconut Cream, Pineapple Slice and Maraschino Cherry for Garnish"
                },
                {
                    name: "Virgin Shirley Temple",
                    ingredients: "Ginger Ale, Sprite or 7-Up, Grenadine, Maraschino Cherry and Orange Slice for Garnish"
                },
                {
                    name: "Virgin Daiquiri",
                    ingredients: "Fresh Lime Juice, Simple Syrup"
                },
                {
                    name: "Virgin Moscow Mule",
                    ingredients: "Ginger Beer, Fresh Lime Juice, Lime Wheel and Mint Sprig for Garnish"
                },
                {
                    name: "Virgin Mary",
                    ingredients: "Tomato Juice, Lemon Juice, Worcestershire Sauce, Hot Sauce, Celery Salt, Celery Stalk and Lemon Wedge for Garnish"
                },
                {
                    name: "Virgin Piñata",
                    ingredients: "Orange Juice, Pineapple Juice, Grenadine, Orange Slice and Cherry for Garnish"
                },
                {
                    name: "Virgin Blue Lagoon",
                    ingredients: "Sprite or 7-Up, Lemonade, Blue Curacao Syrup, Lemon Wheel for Garnish"
                },
                {
                    name: "Virgin Coconut Cooler",
                    ingredients: "Coconut Water, Pineapple Juice, Lime Juice, Mint Leaves for Garnish"
                },
                {
                    name: "Virgin Watermelon Punch",
                    ingredients: "Watermelon Juice, Lime Juice, Simple Syrup, Watermelon Wedge and Mint Sprig for Garnish"
                },
            ],
        }
    ];


    console.log(menu)

    return (
        <div className='Services'>
            <h1>SERVICES FOR</h1>
            <div className='services-wrapper'>
                <ul>
                    {services.map((service, index) => (
                        <li key={index}>
                            <img src={require(`../../../assets/services/${service.url}`)} alt={service.name} />
                            <h2>{service.name}</h2>
                        </li>
                    ))}
                </ul>
                <span>AND MORE</span>
            </div>
            <h1>THE MENU</h1>
            <div className='menu-wrapper'>
                {menu.map((info, index) => (
                    <div className='menu-card' key={index}>
                        <h2 className='menu-name'>{info.package}</h2>
                        {info.menu_list.map((item, itemIndex) => (
                            <div className='menu-info' key={itemIndex}>
                                <h3 className='drink-name'>{item.name}: </h3>
                                <p className='drink-ingredients'>{item.ingredients}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
