'use client'
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Image from "next/image";
import { categories, itemsByCategory } from '../data/moutune.js'
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import temp from "@/public/assets/temp2.jpg";


function Result() {
  const [dbResults, setDbResults] = useState([])
  const [displayedResult, setDisplayedResult] = useState([])
  const [notUploaded, setNotUploaded] = useState(false)
  const [category, setCategory] = useState('')
  const [item, setItem] = useState('')
  const [imageLoaded, setImageLoaded] = useState(false);

  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [image, setImage] = useState(null);
  const imageRef = useRef(null);

  const fetchResults = async () => {
    try {
      const res = await axios.get('/api/results/');
      const fetchedResults = res.data.results;
      setDbResults(fetchedResults);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchResults();
  }, []);

  useEffect(() => {
    if (canvasRef.current && imageRef.current) {
      setCanvas(canvasRef.current);
      setImage(imageRef.current);
    }
  }, [imageLoaded, displayedResult]);

  useEffect(() => {
    if (Array.isArray(dbResults) && dbResults.length > 0) {
      setNotUploaded(false);
      const filteredResults = dbResults.filter(result => result.category === category && result.item === item);
      setDisplayedResult(filteredResults);
      if (filteredResults.length === 0) {
        setNotUploaded(true);
      }
    }
  }, [item, category, dbResults]);

  useEffect(() => {
    if (imageLoaded && canvas && image && displayedResult.length > 0) {
      const context = canvas.getContext("2d");

      if (context) {
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        const drawText = (text, x, y, maxWidth, lineHeight) => {
          const words = text.split(' ');
          let line = '';
          let lineCount = 0;
          for (let n = 0; n < words.length; n++) {
            let testLine = line + words[n] + ' ';
            let metrics = context.measureText(testLine);
            let testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
              context.fillText(line, x, y);
              line = words[n] + ' ';
              y += lineHeight;
              lineCount++;
            } else {
              line = testLine;
            }
          }
          context.fillText(line, x, y);
          lineCount++;
          return lineCount;
        };

        // context.font = "600 60px Poppins, sans-serif";
        // context.fillStyle = "#111254";
        // const lines = drawText(displayedResult[0].item, 130, 170, 500, 70);

        // context.font = "400 40px Poppins, sans-serif";
        // context.fillStyle = "black";
        // drawText(displayedResult[0].category, 130, 150 + lines * 70, 500, 45);


        context.font = "600 40px Poppins, sans-serif";
        context.fillStyle = "#111254";
        const lines = drawText(displayedResult[0].item, 350, 700, 500, 70);

        context.font = "400 35px Poppins, sans-serif";
        context.fillStyle = "black";
        drawText(displayedResult[0].category, 350, 740, 500, 45);

        context.beginPath();
        context.arc(550, 800, 30, 0, 2 * Math.PI);
        context.fillStyle = "#e0e0e0";
        context.fill();

        context.font = "400 35px Poppins, sans-serif";
        context.fillStyle = "#154c79";
        context.fillText("1", 550, 810);

        context.font = "600 30px Poppins, sans-serif";
        context.fillStyle = "#220a82";
        const text = displayedResult[0].firstName.toUpperCase();
        context.fillText(text, 600, 800);

        context.font = "400 20px Poppins, sans-serif";
        context.fillStyle = "#154c79";
        context.fillText(displayedResult[0].firstTeam, 600, 820);


        context.beginPath();
        context.arc(550, 880, 30, 0, 2 * Math.PI);
        context.fillStyle = "#e0e0e0";
        context.fill();

        context.font = "400 35px Poppins, sans-serif";
        context.fillStyle = "#154c79";
        context.fillText("2", 550, 890);

        context.font = "600 30px Poppins, sans-serif";
        context.fillStyle = "#220a82";
        const text2 = displayedResult[0].secondName.toUpperCase();
        context.fillText(text2, 600, 880);

        context.font = "400 20px Poppins, sans-serif";
        context.fillStyle = "#154c79";
        context.fillText(displayedResult[0].secondTeam, 600, 900);

        context.beginPath();
        context.arc(550, 960, 30, 0, 2 * Math.PI);
        context.fillStyle = "#e0e0e0";
        context.fill();

        context.font = "400 35px Poppins, sans-serif";
        context.fillStyle = "#154c79";
        context.fillText("3", 550, 970);

        context.font = "600 30px Poppins, sans-serif ";
        context.fillStyle = "#220a82";
        const text3 = displayedResult[0].thirdName.toUpperCase();
        context.fillText(text3, 600, 960);

        context.font = "400 20px Poppins, sans-serif";
        context.fillStyle = "#154c79";
        context.fillText(displayedResult[0].firstTeam, 600, 980);
      }
    }
  }, [displayedResult, canvas, image, imageLoaded]);

  const handleDownload = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/jpeg");
      let dwtext = `${displayedResult[0].category} ${displayedResult[0].item}`;
      link.download = `${dwtext}.jpg`;
      link.click();
    }
  };


  return (
    <div className="w-full p-6 px-12 lg:px-36 md:px-24">
      <div className="flex md:flex-row flex-col md:justify-between space-y-1.5 md:space-y-0 ">
        <div className="flex flex-col items-start">
          <label htmlFor="" className="text-lg">Category</label>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setItem('');
            }}
            className="bg-black w-full text-black-600 md:text-lg p-2 py-3 md:p-3 font-medium  md:px-8 rounded">
            <option value="">Select Category</option>
            {categories.map((cat, i) => <option key={i} value={cat}>{cat}</option>)}
          </select>
        </div>
        <div className="flex flex-col items-start">
          <label className="text-lg" htmlFor="">Item</label>
          <select
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="bg-black w-full py-3 text-black-600 md:text-lg p-2 md:p-3 font-medium  md:px-8 rounded">
            <option value="">Select Item</option>
            {category && itemsByCategory[category].map((item, i) => <option key={i} value={item}>{item}</option>)}
          </select>
        </div>
      </div>
      {item && (
        <div className="mt-0 md:mt-8 ">
          {displayedResult.length == 1 && <div className="flex flex-col w-full pt-4">
            <div className="flex flex-col md:flex-row p-8 gap-4">
              <div className="flex items-center gap-5">
                <h1 className="text-xl font-semibold ">1</h1>
                <div className="-space-y-2">
                  <h1 className="text-2xl font-bold">{capitalizeFirstLetter(displayedResult[0].firstName)}</h1>
                  <h1>{displayedResult[0].firstTeam}</h1>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <h1 className="text-xl font-semibold">2</h1>
                <div className="-space-y-2">
                  <h1 className="text-2xl font-bold">{capitalizeFirstLetter(displayedResult[0].secondName)}</h1>
                  <h1>{displayedResult[0].secondTeam}</h1>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <h1 className="text-xl font-semibold">3</h1>
                <div className="-space-y-2">
                  <h1 className="text-2xl font-bold">{capitalizeFirstLetter(displayedResult[0].thirdName)}</h1>
                  <h1>{displayedResult[0].thirdTeam}</h1>
                </div>
              </div>
            </div>
          </div>}

          {/* Hidden image for canvas drawing */}
          <Image
            objectFit='contain'
            priority
            fill
            quality={100}
            sizes="100vw"
            src={temp.src}
            alt="temp"
            className='w-full hidden'
            onLoad={() => setImageLoaded(true)}
            ref={imageRef}
          />

          {/* Canvas for rendering and downloading */}
          <canvas ref={canvasRef} className="shadow-lg w-full"></canvas>

          {/* Download button */}
          <button
            className="bg-black-600 text-white w-full p-3 text-xl font-semibold"
            onClick={handleDownload}
          >
            Download
          </button>

          {item === '' && <h1 className='pt-4'>Please Select Your Item</h1>}
          {notUploaded && item ? <h1 className='pt-4'>Sorry.. This result isn&apos;t uploaded yet.</h1> : null}
        </div>
      )}
    </div>
  )
}

export default Result