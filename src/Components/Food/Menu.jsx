import { products } from "@/data/products";
import Image from "next/image";

export default function Menu() {
  return (
    <div>
      {/* menu items */}
      <div>
        {products.map((product, i) => {
          const { id, name, description, photo, category, sizes } = product;

          return (
            <div key={id}>
              {/* item img */}
              <div>
                <Image src={photo} width={300} height={200} alt={name} />
              </div>

              {/* details */}
              <div>
                {/* header (name + description) */}
                <div>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>

                {/* sizes */}
                <div>
                  {sizes.map((size) => {
                    const { name, price } = size;
                    return (
                      <div key={name}>
                        <h4>{name}</h4>
                        <p>{price} EGP</p>
                      </div>
                    );
                  })}
                </div>

                {/* actions */}
                <div>
                  {/* amount */}
                  <div>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>

                  {/* add to cart */}
                  <div>
                    <button>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
