import { useEffect, useRef } from "react";

interface GearAnimationProps {
  className?: string;
  size?: number;
  speed?: number;
  reverse?: boolean;
}

export function GearAnimation({ 
  className = "", 
  size = 200, 
  speed = 20,
  reverse = false 
}: GearAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rotation = 0;
    let animationId: number;

    const drawGear = () => {
      ctx.clearRect(0, 0, size, size);
      
      const centerX = size / 2;
      const centerY = size / 2;
      const outerRadius = size * 0.4;
      const innerRadius = size * 0.25;
      const teethCount = 12;
      const toothHeight = size * 0.08;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);

      // Draw gear teeth
      ctx.beginPath();
      for (let i = 0; i < teethCount; i++) {
        const angle = (i * 2 * Math.PI) / teethCount;
        const nextAngle = ((i + 1) * 2 * Math.PI) / teethCount;
        
        const toothAngle = (nextAngle - angle) * 0.4;
        
        // Outer arc
        ctx.arc(0, 0, outerRadius, angle, angle + toothAngle, false);
        
        // Tooth
        const x1 = Math.cos(angle + toothAngle) * outerRadius;
        const y1 = Math.sin(angle + toothAngle) * outerRadius;
        const x2 = Math.cos(angle + toothAngle) * (outerRadius + toothHeight);
        const y2 = Math.sin(angle + toothAngle) * (outerRadius + toothHeight);
        
        ctx.lineTo(x2, y2);
        
        const x3 = Math.cos(nextAngle - toothAngle) * (outerRadius + toothHeight);
        const y3 = Math.sin(nextAngle - toothAngle) * (outerRadius + toothHeight);
        
        ctx.lineTo(x3, y3);
        
        const x4 = Math.cos(nextAngle - toothAngle) * outerRadius;
        const y4 = Math.sin(nextAngle - toothAngle) * outerRadius;
        
        ctx.lineTo(x4, y4);
      }
      ctx.closePath();
      ctx.strokeStyle = "rgba(37, 99, 235, 0.3)";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = "rgba(37, 99, 235, 0.05)";
      ctx.fill();

      // Inner circle
      ctx.beginPath();
      ctx.arc(0, 0, innerRadius, 0, 2 * Math.PI);
      ctx.strokeStyle = "rgba(37, 99, 235, 0.4)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Center hole
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.08, 0, 2 * Math.PI);
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.fill();
      ctx.strokeStyle = "rgba(37, 99, 235, 0.3)";
      ctx.stroke();

      ctx.restore();

      rotation += (reverse ? -1 : 1) * (Math.PI / 180) / speed;
      animationId = requestAnimationFrame(drawGear);
    };

    drawGear();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [size, speed, reverse]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className={className}
    />
  );
}
