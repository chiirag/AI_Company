'use client';
import { useEffect, useRef } from 'react';
import styles from './HeroParticles.module.css';

export default function HeroParticles() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let width, height;
        let mouse = { x: null, y: null };
        let hexs = [];

        // Configuration
        const hexSize = 40;
        const hexHeight = hexSize * Math.sqrt(3);
        const hexWidth = hexSize * 2;
        const xOffset = hexWidth * 3 / 4;

        // Colors - Cybernetic Palette
        const colorBg = 'rgba(10, 22, 40, 1)'; // Deep Navy
        const colorStroke = 'rgba(0, 255, 200, 0.1)'; // Faint Cyan
        const colorActive = '0, 255, 200'; // Bright Cyan
        const colorHighlight = '255, 0, 150'; // Magenta/Neon Pink for "Warnings/Activity"

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initHexGrid();
        };

        class Hex {
            constructor(x, y, row, col) {
                this.x = x;
                this.y = y;
                this.row = row;
                this.col = col;
                this.active = false;
                this.activationLevel = 0;
                this.neighborIds = []; // store indices of neighbors
                this.bot = null; // Can hold a "repair bot"
            }

            draw(ctx) {
                ctx.beginPath();
                for (let i = 0; i < 6; i++) {
                    const angle = 2 * Math.PI / 6 * (i + 0.5);
                    const x_i = this.x + hexSize * Math.cos(angle);
                    const y_i = this.y + hexSize * Math.sin(angle);
                    if (i === 0) ctx.moveTo(x_i, y_i);
                    else ctx.lineTo(x_i, y_i);
                }
                ctx.closePath();

                // Base grid stroke
                if (this.activationLevel > 0.01) {
                    ctx.strokeStyle = `rgba(${colorActive}, ${0.1 + this.activationLevel * 0.5})`;
                    ctx.lineWidth = 1 + this.activationLevel * 2;
                    ctx.fillStyle = `rgba(${colorActive}, ${this.activationLevel * 0.1})`;
                    ctx.fill();
                } else {
                    ctx.strokeStyle = colorStroke;
                    ctx.lineWidth = 1;
                }
                ctx.stroke();

                // Draw Bot if present
                if (this.bot) {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${colorHighlight}, 0.8)`;
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = `rgba(${colorHighlight}, 1)`;
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
            }

            update() {
                // Decay activation
                if (this.activationLevel > 0) this.activationLevel *= 0.95;

                // Mouse interaction
                if (mouse.x != null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        this.activationLevel = Math.min(1, this.activationLevel + 0.1);
                    }
                }

                // Random activation for "glitch/computation" effect
                if (Math.random() < 0.001) this.activationLevel = 1;
            }
        }

        const initHexGrid = () => {
            hexs = [];
            const rows = Math.ceil(height / hexHeight) + 2;
            const cols = Math.ceil(width / xOffset) + 2;

            for (let c = -1; c < cols; c++) {
                for (let r = -1; r < rows; r++) {
                    let x = c * xOffset;
                    let y = r * hexHeight;
                    if (c % 2 !== 0) {
                        y += hexHeight / 2;
                    }
                    hexs.push(new Hex(x, y, r, c));
                }
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Background scanline (optional)
            // ctx.fillStyle = `rgba(0, 255, 200, 0.02)`;
            // const scanY = (Date.now() / 10) % height;
            // ctx.fillRect(0, scanY, width, 2);

            hexs.forEach(h => {
                h.update();
                h.draw(ctx);
            });

            // "Robotic agents" logic - moving highlighting across grid?
            // Simplified: The update logic inside Hex handles the visual pulse

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);

        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.canvas} />;
}
