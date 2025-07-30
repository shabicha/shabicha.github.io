import { ReactP5Wrapper } from "react-p5-wrapper";
import "./App.css";

function sketch(p5) {
    let xScale = 0.015;
    let yScale = 0.02;
    p5.setup = () =>
        { 
        
        
        p5.createCanvas(127, 140); 
        p5.noStroke();

        };
    

    p5.draw = () => {
        
        p5.background(255);
        p5.fill(49, 48, 46);
        //x&y inside or outside?
        
        let offset = p5.map(p5.mouseX, 0, p5.width, 0, 1000);
        let gap = p5.constrain(p5.map(p5.mouseY, 0, p5.height, 5, 40), 10,40);

        for (let x = gap / 2; x < p5.width; x += gap) {
            for (let y = gap / 2; y < p5.height; y += gap) {
                let noiseValue = p5.noise((x + offset) * xScale, (y + offset) * yScale);
                let diameter = noiseValue * gap;
                p5.circle(x, y, diameter);
            }
        }
    };
}
export default function p5Effect() {
    return (
  <ReactP5Wrapper sketch={sketch} />
    );
}
