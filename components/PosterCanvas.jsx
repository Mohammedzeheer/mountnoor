import React, { useEffect, useRef } from 'react';

const PosterCanvas = ({ imageSrc, category, item, results }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Clear the canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set canvas dimensions
    canvas.width = 800;
    canvas.height = 600;

    const image = new Image();
    image.src = imageSrc;

    image.onload = () => {
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      ctx.font = '30px Arial';
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';

      // Draw category and item
      ctx.fillText(`Category: ${category}`, canvas.width / 2, 50);
      ctx.fillText(`Item: ${item}`, canvas.width / 2, 100);

      // Draw results
      results.forEach((result, index) => {
        const y = 150 + index * 50; // Adjust spacing as needed
        ctx.fillText(`${index + 1}. ${result.firstName} - ${result.firstDivision}`, canvas.width / 2, y);
      });
    };

    image.onerror = () => {
      console.error('Failed to load the image');
    };
  }, [imageSrc, category, item, results]);

  return <canvas ref={canvasRef} />;
};

export default PosterCanvas;

