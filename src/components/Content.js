import React,{useState,useEffect} from "react";

const Content = () => {
    const [text, setText] = useState("");
    const textArray = [
        "Than Genius Donec ut ultricies ante. Proin at sodales risus. Fusce tempor dui id convallis sollicitudin. Mauris vitae elit elementum, faucibus libero a, interdum tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec ut ultricies ante. Proin at sodales risus. Fusce tempor dui id convallis sollicitudin. Mauris vitae elit elementum, faucibus libero a, interdum tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Donec ut ultricies ante. Proin at sodales risus. Fusce tempor dui id convallis sollicitudin. Mauris vitae elit elementum, faucibus libero a, interdum tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
       
        "Mauris at sapien ut libero tempor convallis volutpat et dolor. Duis eleifend odio ante, at scelerisque est blandit a. Morbi faucibus dolor nisi, id suscipit massa vulputate at."
      ];
      const [currentTextIndex, setCurrentTextIndex] = useState(0);
      const [isZoomed, setIsZoomed] = useState(false);

      const handleMouseOver = () => {
        setIsZoomed(true);
      };
    
      const handleMouseOut = () => {
        setIsZoomed(false);
      };
    
      useEffect(() => {
        const interval = setInterval(() => {
          const currentText = textArray[currentTextIndex];
          setText((prevText) => {
            if (prevText === currentText) {
              setCurrentTextIndex((prevIndex) =>
                prevIndex === textArray.length - 1 ? 0 : prevIndex + 1
              );
              return "";
            }
            return currentText.slice(0, prevText.length + 1);
          });
        }, 10); // Adjust typing speed here (milliseconds)
        return () => clearInterval(interval);
      }, [currentTextIndex, textArray]);

  return (
    <div className="row m-5">
      <div className="col-md-12 d-flex justify-content-between align-item-center">
        <div className="col-md-6">
          <div
            style={{
              fontWeight: "bold",
              fontSize: 28,
              fontFamily: "cursive",
              marginBottom: 20,
            }}
          >
            ABOUT US
          </div>
          <div
            style={{
              fontSize: 22,
              fontFamily: ' "Goudy Bookletter 1911", sans-serif',
              marginBottom: 20,
            }}
          >
            Industry Is A Better Horse To Ride
          </div>
          <div style={{ marginBottom: 20, overflowWrap: "anywhere",fontOpticalSizing:'none',fontFamily:'fantasy' }}>
            {text}
          </div>
        </div>
        <div className="col-md-6">
          <img
             style={{
                width: "100%",
                transition: "transform 0.5s ease",
                transform: isZoomed ? "scale(1.1)" : "scale(0.9)"
              }}
            src="https://plus.unsplash.com/premium_photo-1682144414044-2efd12428b9e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG93ZXIlMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
