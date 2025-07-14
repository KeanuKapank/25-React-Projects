import { useEffect, useState } from "react";
import "./style.css";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    barcode: string;
    qrCode: string;
  };
  thumbnail: string;
  images: string[];
}

interface Review {
  rating: number;
  comment: string;
  date: string; // ISO date string
  reviewerName: string;
  reviewerEmail: string;
}

const Pagination = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [count, setCount] = useState<number>(0);
  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products/?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const results = await response.json();
      setProducts((prevData) => [...prevData, ...results.products]);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="container">
          <div>
            {products && products.length > 0 ? (
              <div className="products-container">
                {products.map((product: Product) => (
                  <div className="product" key={product.id}>
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      width={product.dimensions.width * 5}
                      height={product.dimensions.height * 5}
                    />
                    <p>{product.title}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <div className="button-container">
            {count !== 3 ? (
              <button onClick={() => setCount(count + 1)}>
                Load More Products
              </button>
            ) : (
              <div>
                <button onClick={() => setCount(count + 1)} disabled={true}>
                  Load More Products
                </button>
                <p>No More Products Available</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Pagination;
