// app/page.js
import FoodCarousel from '../components/FoodCarousel';
import FoodGrid from '../components/FoodGrid';

export default function HomePage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff', color: '#222' }}>
      <h1 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '15px' }}>FOODS AVAILABLE</h1>
      <FoodCarousel />

      <h2 style={{ marginTop: '40px', fontSize: '20px', fontWeight: 'bold' }}>FOODS MENU IN HOTEL</h2>
      <FoodGrid />
    </div>
  );
}
