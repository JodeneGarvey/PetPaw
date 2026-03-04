import p1_img from "./Fancy Feast.jpg"
import p2_img from "./Temptation.jpg"
import p3_img from "./Friskies.jpg"
import p4_img from "./Pedigree.jpg"
import p5_img from "./Meow Mix.jpg"
import p6_img from "./Fluff Ball.jpg"
import p7_img from "./Friskies Treat.jpg"
import p8_img from "./Kibbles.jpg"
import p9_img from "./Milk Bone.jpg"
import p10_img from "./cat feeder.jpg"
import p11_img from "./Cat toy.jpg"
import p12_img from "./Dog Chew Toy.jpg"
import p13_img from "./mouse toy.jpg"
import p14_img from "./dog rope.jpg"
import p15_img from "./Cat tree.jpg"
import p16_img from "./dog bed reversible.jpg"
import p17_img from "./Dog Leash.jpg"
import p18_img from "./Cat-Bowls.jpg"
import p19_img from "./Cat Tower.jpg"
import p20_img from "./Dog Bowls.jpg"
import p21_img from "./Puppy Chew Toy.jpg"
import p22_img from "./Dog Ball.jpg"
import p23_img from "./Ball Thrower.jpg"
import p24_img from "./Dog Food Iams.jpg"

let all_product = [
  {
    id: 1,
    name: "Fancy Feast",
    category: "Cat",
    description: "A leading gourmet wet and dry cat food known for offering over 100 recipes featuring high-quality proteins like real seafood, poultry, and beef",
    image: p1_img,
    new_price: 5000,
    old_price: 8000,
  },
  {
    id: 2,
    name: "Temptation Cat Treats",
    category: "Cat",
    description: "Highly popular cat snacks known for their crunchy outside, soft inside texture and, famously, a shake-of-the-bag appeal that brings cats running",
    image: p2_img,
    new_price: 850,
    old_price: 1200,
  },
  {
    id: 3,
    name: "Frieskies",
    category: "Cat",
    description: "Crunchy, bite-sized, and nutrient-balanced snacks for adult cats",
    image: p3_img,
    new_price: 600,
    old_price: 1000,
  },
  {
    id: 4,
    name: "Pedigree",
    category: "Dog",
    description: "A widely available, budget-friendly brand offering complete and balanced nutrition designed for various life stages and breeds.",
    image: p4_img,
    new_price: 1000,
    old_price: 1500,
  },
  {
    id: 5,
    name: "Meow Mix",
    category: "Cat",
    description: "A popular, affordable dry cat food brand known for its Original Choice blend, which combines chicken, turkey, salmon, and ocean fish flavors",
    image: p5_img,
    new_price: 850,
    old_price: 1200,
  },
  {
    id: 6,
    name: "Fluff Ball",
    category: "Cat",
    description: "Soft, lightweight, and fuzzy, designed for indoor cats to bat, chase, and cuddle",
    image: p6_img,
    new_price: 850,
    old_price: 1200,
  },
  {
    id: 7,
    name: "Frieskies Treat",
    category: "Cat",
    description: "Crunchy, bite-sized snacks for adult cats, featuring real chicken, fish, or dairy as the first ingredient.",
    image: p7_img,
    new_price: 850,
    old_price: 1200,
  },
  {
    id: 8,
    name: "Kibbles",
    category: "Dog",
    description: "A popular, nutrient-dense dry dog food made by cooking ingredients like meat, grains, and vegetables through a high-heat extrusion process into small, shelf-stable, bite-sized pellets.",
    image: p8_img,
    new_price: 850,
    old_price: 1200,
  },
  {
    id: 9,
    name: "Milk Bone",
    category: "Dog",
    description: "Iconic, bone-shaped, crunchy biscuits designed to clean teeth, reduce tartar buildup, and freshen breath.",
    image: p9_img,
    new_price: 850,
    old_price: 1200,
  },
  {
    id: 10,
    name: "Automatic Cat Feeder",
    category: "Cat",
    description: "A programmable device that dispenses precise, scheduled meals of dry or wet food",
    image: p10_img,
    new_price: 850,
    old_price: 1200,
  },
  {
    id: 11,
    name: "Cat Toy",
    category: "Cat",
    description: "Cat Toy Ball with Mouse,Cat Bell Ball Toy,Jingle Bell Cat Toy Interactive Plastic Cat Toy Ball for Indoor Play Activity Chase Training Kitten Toys",
    image: p11_img,
    new_price: 800,
    old_price: 1000
  },
  {
    id: 12,
    name: "Dog Chew Toy",
    category: "Dog",
    description: "SHARLOVY Dog Chew Toys for Aggressive Chewers, Dog Balls for Large Dogs, Heavy Duty Dog Toys with Tough Twisted, Dental Cotton Dog Rope Toy for Medium Dogs, 6 Pack Indestructible Chew Toys",
    image: p12_img,
    new_price: 800,
    old_price: 1000
  },
  {
    id: 13,
    name: "Catnip Mouse Toy",
    category: "Cat",
    description: "5-pack of Kats'n Us Real Rabbit Fur Mouse Cat Toys with Rattle. These toys are designed to stimulate a cat's natural hunting instincts. ",
    image: p13_img,
    new_price: 800,
    old_price: 1000
  },
  {
    id: 14,
    name: "Dog Tug Rope",
    category: "Dog",
    description: "Durable, interactive toys designed for tug-of-war, fetching, and chewing, crafted from strong, braided cotton or natural fibers.",
    image: p14_img,
    new_price: 600,
    old_price: 1000
  },
  {
    id: 15,
    name: "Cat Tree",
    category: "Cat",
    description: "Kerbl Cat Tree Square, a large, multi-level activity center designed for cats. ",
    image: p15_img,
    new_price: 600,
    old_price: 1000
  },
  {
    id: 16,
    name: "Reversible Dog Bed",
    category: "Dog",
    description: "Offers year-round comfort with a versatile, two-in-one design featuring a warm, soft side (e.g., fleece or plush) for winter and a cool side (e.g., suede or canvas) for summer",
    image: p16_img,
    new_price: 800,
    old_price: 1400
  },
  {
    id: 17,
    name: "Dog Leash",
    category: "Dog",
    description: "An essential, durable, and secure connector for walking, training, or controlling your pet, typically measuring 4–6 feet in length.",
    image: p17_img,
    new_price: 500,
    old_price: 1000
  },
  {
    id: 18,
    name: "Cat Bowl Set",
    category: "Cat",
    description: "Personalized Whisker-friendly Ceramic Cat Bowl, Cat Gift, Kitten Bowl, Kitten Gift, Personalized Cat Food Dish",
    image: p18_img,
    new_price: 200,
    old_price: 400
  },
  {
    id: 19,
    name: "Cat Tower",
    category: "Cat",
    description: "A modern, multi-level cat tree tower designed for indoor cats, suitable for large or multiple cats.",
    image: p19_img,
    new_price: 10000,
    old_price: 15000
  },
  {
    id: 20,
    name: "Dog Bowl Set",
    category: "Dog",
    description: "Two durable, easy-to-clean bowls (often stainless steel or ceramic) designed for food and water, frequently paired with a non-slip, elevated, or stylish stand",
    image: p20_img,
    new_price: 1000,
    old_price: 700
  },
  {
    id: 21,
    name: "Chew Toy",
    category: "Dog",
    description: "Nylabone Puppy Starter Kit, a set of three dental dog chews designed to encourage healthy chewing habits and help puppies through various developmental stages. ",
    image: p21_img,
    new_price: 500,
    old_price: 800
  },
  {
    id: 22,
    name: "Interactive Dog Ball",
    category: "Dog",
    description: "A self-moving, rechargeable toy designed to keep dogs engaged, active, and entertained, often featuring motion-activated technology that triggers unpredictable rolling, jumping, or vibrating to stimulate natural prey drive",
    image: p22_img,
    new_price: 1000,
    old_price: 1500
  },
  {
    id: 23,
    name: "Automatic Ball Launcher",
    category: "Dog",
    description:"An interactive, battery-operated or plug-in device designed to throw standard-sized tennis balls for fetch-loving dogs",
    image: p23_img,
    new_price: 10000,
    old_price: 15000
  },
  {
    id: 24,
    name: "Iams Dog Food",
    category: "Dog",
    description: "offers veterinarian-recommended,, complete and balanced nutrition tailored for all life stages, focusing on high-quality animal proteins like chicken or beef as the first ingredient.",
    image: p24_img,
    new_price: 5000,
    old_price: 7000
  },
];
export default all_product;


