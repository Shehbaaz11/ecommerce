import NewCollectionHeader from "./new-collection-header/new-collections-header";
import Cards from "./collection-cards/collection-cards";
import "./new-collection.css";
import Items from "../heroine/heroine";
const NewCollection = () => {
  const cards_info = [
    {
      id: "polo-shirt",
      image:
        "https://images.unsplash.com/photo-1717127354833-e4d10625d3e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9sbyUyMHNoaXJ0fGVufDB8fDB8fHww",
      title: "Polo Shirts",
      subTitle: "Slim-Fit Striped Silk and Linen-Blend Polo Shirt",
      price: 45,
    },
    {
      id: "men-pants",
      image:
        "https://plus.unsplash.com/premium_photo-1690366911138-bd50985e0379?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "White Pants",
      subTitle: "Slim Fit men pants",
      price: 90,
    },
    {
      id: "glasses",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlkaGElMjBnbGFzc2VzfGVufDB8fDB8fHww",
      title: "Luxury Glasses",
      subTitle: "Black Glasses with luxury finishing",
      price: 50,
    },
    {
      id: "bomber-jacket",
      image:
        "https://media.istockphoto.com/id/1077792964/photo/good-looking-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=IZQHAxZ0esPWtEH02lTr_9k4UKRKptmJSmbXytTu1b8=",
      title: "Black Jacket",
      subTitle: "Luxury unisex bomber jacket",
      price: 52,
    },
    {
      id: "leather-shoes",
      image:
        "https://plus.unsplash.com/premium_photo-1670984281009-863453504c52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVhdGhlciUyMHNob2VzfGVufDB8fDB8fHww",
      title: "Leather Shoes Jack",
      subTitle: "Men leather shoes",
      price: 89,
    },
    {
      id: "grey-tshirt",
      image:
        "https://media.istockphoto.com/id/471184775/photo/front-of-an-unfolded-blank-gray-t-shirt-on-white-background.jpg?s=2048x2048&w=is&k=20&c=1EQxlwov8CMoRoEuzX1WYOfJC-h6vQeYx2aKpB5U32I=",
      title: "Grey Tshirt",
      subTitle: "Unisex grey tshirt",
      price: 21,
    },
  ];
  return (
    <div className="new-collection">
      <NewCollectionHeader />
      <div className="list-cards">
        {cards_info.map((item, index) => {
          return (
            <div>
              <Cards
                key={index}
                id={item.id}
                image={item.image}
                title={item.title}
                sub_title={item.subTitle}
                price={item.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewCollection;