import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const slides = [
        "https://image.similarpng.com/file/similarpng/very-thumbnail/2020/04/fast-food-logo-emblem.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStCZfxVm7ImLSS7SewrBBt52zEng2rlx_3RQ&s",
        "https://potatox.pk/wp-content/uploads/2025/06/pizza-deal-2.png",
        "https://potatox.pk/wp-content/uploads/2025/06/pizza-deal-3.png",
        "https://potatox.pk/wp-content/uploads/2025/06/pizza-deal-4.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const colRef = collection(db, "products");
    const unsub = onSnapshot(colRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(data);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  return (
    <>
      <div>
        {/* Carousel */}
        <div className="carousel">
          {slides.map((src, i) => (
            <div
              key={i}
              className={`slide ${index === i ? "active" : ""}`}
              style={{ backgroundImage: `url("${src}")` }}
            />
          ))}

          <div className="overlay"></div>

          <div className="carousel-content">
            <h1>DISCOVER THE LATEST FOOD</h1>
            <Link to="/products">
              <button>SHOP NOW</button>
            </Link>
          </div>

          <div className="dots">
            {slides.map((_, i) => (
              <span
                key={i}
                className={index === i ? "dot active" : "dot"}
                onClick={() => setIndex(i)}
              ></span>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="products-section">
          <h2>SHOP BY CATEGORY</h2>

          {
          loading ? (
            <p className="status">LOADING PRODUCTS...</p>
          ) : products.length === 9 ? 
          (
            <p className="status">NO PRODUCTS FOUND.</p>
          ) : (
            <div className="product-grid">
              {products.map((cat) => (
                <div className="product-card" key={cat.id}>
                  <img src={cat.image} alt={cat.title} />
                  <div className="product-info">
                    <h3>{cat.title}</h3>
                    <p>{cat.des}</p>

                    <div className="product-footer">
                      <span>Price: {cat.price}$</span>
                      <Link to={`/products/${cat.id}`}>
                        <button>VIEW DETAILS</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        /* Carousel */
        .carousel {
          position: relative;
          width: 100%;
          height: 70vh;
          overflow: hidden;
          border-radius: 20px;
        }

        .slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transform: scale(1.05);
          transition: opacity 0.8s ease, transform 1s ease;
        }

        .slide.active {
          opacity: 1;
          transform: scale(1);
          z-index: 10;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6));
          z-index: 20;
        }

        .carousel-content {
          position: absolute;
          inset: 0;
          z-index: 30;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 20px;
        }

        .carousel-content h1 {
          font-size: clamp(32px, 6vw, 60px);
          font-weight: 800;
          margin-bottom: 20px;
          text-shadow: 0 10px 30px rgba(0,0,0,0.6);
        }

        .carousel-content button {
          background: white;
          color: black;
          padding: 14px 32px;
          border-radius: 14px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .carousel-content button:hover {
          transform: scale(1.08);
          box-shadow: 0 15px 30px rgba(255,255,255,0.4);
        }

        .dots {
          position: absolute;
          bottom: 18px;
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 10px;
          z-index: 40;
        }

        .dot {
          width: 12px;
          height: 12px;
          background: rgba(255,255,255,0.5);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s;
        }

        .dot.active {
          background: white;
          transform: scale(1.3);
        }

        /* Products */
        .products-section {
          padding: 60px 24px;
        }

        .products-section h2 {
          text-align: center;
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 40px;
          background: linear-gradient(90deg, #000, #555);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .status {
          text-align: center;
          padding: 80px 0;
          font-size: 18px;
          color: #6b7280;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .product-card {
          background: white;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0,0,0,0.12);
          transition: all 0.4s ease;
        }

        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.2);
        }

        .product-card img {
          width: 100%;
          height: 260px;
          object-fit: cover;
        }

        .product-info {
          padding: 20px;
        }

        .product-info h3 {
          font-size: 22px;
          font-weight: 700;
        }

        .product-info p {
          margin-top: 6px;
          color: #6b7280;
        }

        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
        }

        .product-footer span {
          font-weight: 700;
          font-size: 18px;
        }

        .product-footer button {
          background: black;
          color: white;
          padding: 10px 18px;
          border-radius: 10px;
          transition: all 0.3s;
        }

        .product-footer button:hover {
          background: #333;
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
}
