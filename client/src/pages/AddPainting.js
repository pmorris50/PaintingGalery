import React, { useState } from 'react';

const AddPaintingForm = () => {
  const [image, setImage] = useState('');
  const [cardPrice, setCardPrice] = useState(0);
  const [stickerPrice, setStickerPrice] = useState(0);
  const [category, setCategory] = useState('flowers');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPainting = {
      image,
      prices: {
        card: cardPrice,
        sticker: stickerPrice
      },
      category
    };
    fetch('/api/paintings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPainting)
    })
      .then(res => res.json())
      .then(data => {
        console.log('Painting added successfully!');
        setImage('');
        setCardPrice(0);
        setStickerPrice(0);
        setCategory('flowers');
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Image:
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </label>
      <br />
      <label>
        Card Price:
        <input type="number" value={cardPrice} onChange={(e) => setCardPrice(e.target.value)} />
      </label>
      <br />
      <label>
        Sticker Price:
        <input type="number" value={stickerPrice} onChange={(e) => setStickerPrice(e.target.value)} />
      </label>
      <br />
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="flowers">Flowers</option>
          <option value="landscape">Landscape</option>
          <option value="city">City</option>
        </select>
      </label>
      <br />
      <button type="submit">Add Painting</button>
    </form>
  );
};

export default AddPaintingForm;