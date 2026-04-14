#!/usr/bin/env node

/**
 * Script para generar video demo de FlowPilot
 * Requiere: npm install ffmpeg-static fluent-ffmpeg
 * Uso: node scripts/generate-video.js
 */

const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');
const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

ffmpeg.setFfmpegPath(ffmpegPath);

const CANVAS_WIDTH = 1280;
const CANVAS_HEIGHT = 720;
const FPS = 30;
const DURATION = 75; // segundos
const TOTAL_FRAMES = FPS * DURATION;

const colors = {
    bg: '#ffffff',
    indigo: '#4f46e5',
    purple: '#9333ea',
    text: '#1f2937',
    lightText: '#6b7280',
    accent: '#06b6d4',
};

async function generateFrame(frameNum) {
    const canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    const ctx = canvas.getContext('2d');

    // Fondo
    ctx.fillStyle = colors.bg;
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Progreso del video
    const progress = frameNum / TOTAL_FRAMES;

    // SCENE 1: Intro (0-15s)
    if (progress < 0.2) {
        const sceneProgress = progress / 0.2;
        drawIntro(ctx, sceneProgress);
    }
    // SCENE 2: Feature 1 - El Problema (15-30s)
    else if (progress < 0.4) {
        const sceneProgress = (progress - 0.2) / 0.2;
        drawProblem(ctx, sceneProgress);
    }
    // SCENE 3: Feature 2 - IA Resumen (30-50s)
    else if (progress < 0.67) {
        const sceneProgress = (progress - 0.4) / 0.27;
        drawAIFeature(ctx, sceneProgress);
    }
    // SCENE 4: Feature 3 - Tareas Automáticas (50-70s)
    else if (progress < 0.93) {
        const sceneProgress = (progress - 0.67) / 0.26;
        drawAutomation(ctx, sceneProgress);
    }
    // SCENE 5: CTA Final (70-75s)
    else {
        const sceneProgress = (progress - 0.93) / 0.07;
        drawCTA(ctx, sceneProgress);
    }

    return canvas;
}

function drawIntro(ctx, progress) {
    // Logo que aparece
    const opacity = Math.min(progress, 1);
    ctx.globalAlpha = opacity;

    // Fondo gradiente
    const gradient = ctx.createLinearGradient(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    gradient.addColorStop(0, '#f3f4f6');
    gradient.addColorStop(1, '#e0e7ff');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    ctx.globalAlpha = 1;

    // Título
    ctx.font = 'bold 72px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
    ctx.fillStyle = colors.text;
    ctx.textAlign = 'center';
    ctx.globalAlpha = opacity;
    ctx.fillText('FlowPilot', CANVAS_WIDTH / 2, 250);

    // Subtitle
    ctx.font = '32px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
    ctx.fillStyle = colors.lightText;
    ctx.globalAlpha = opacity * 0.8;
    ctx.fillText('Organiza decisiones con IA', CANVAS_WIDTH / 2, 330);

    ctx.globalAlpha = 1;
}

function drawProblem(ctx, progress) {
    // Fondo
    ctx.fillStyle = '#fef2f2';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Título
    ctx.font = 'bold 56px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
    ctx.fillStyle = '#dc2626';
    ctx.textAlign = 'center';
    ctx.fillText('El Problema', CANVAS_WIDTH / 2, 120);

    // Estadísticas que aparecen
    const stats = [
        { value: '70%', label: 'del tiempo buscando decisiones' },
        { value: '15+', label: 'herramientas desconectadas' },
        { value: '∞', label: 'conversaciones perdidas' },
    ];

    stats.forEach((stat, idx) => {
        const isVisible = progress > idx * 0.3;
        const opacity = Math.max(0, Math.min(1, (progress - idx * 0.3) / 0.25));

        ctx.globalAlpha = opacity;
        ctx.font = 'bold 48px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
        ctx.fillStyle = colors.indigo;
        ctx.textAlign = 'center';
        ctx.fillText(stat.value, CANVAS_WIDTH / 2, 280 + idx * 90);

        ctx.font = '24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
        ctx.fillStyle = colors.lightText;
        ctx.fillText(stat.label, CANVAS_WIDTH / 2, 320 + idx * 90);
    });

    ctx.globalAlpha = 1;
}

function drawAIFeature(ctx, progress) {
    // Fondo
    ctx.fillStyle = '#f0f9ff';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Título
    ctx.font = 'bold 56px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
    ctx.fillStyle = colors.indigo;
    ctx.textAlign = 'center';
    ctx.fillText('✨ IA Inteligente', CANVAS_WIDTH / 2, 100);

    // Simulación de resumen
    ctx.font = '20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
    ctx.fillStyle = colors.text;
    ctx.textAlign = 'left';

    const messages = [
        '📌 Conversación: "¿Qué decidimos sobre el pricing?"',
        '🤖 ResumenIA: "Decidimos modelo freemium con 3 tiers"',
        '✅ Acción: "Implementar premium a $29/mes"',
        '👥 Responsable: "Juan - vence el 15 de abril"',
    ];

    messages.forEach((msg, idx) => {
        const msgProgress = Math.max(0, Math.min(1, progress * 4 - idx * 0.8));
        ctx.globalAlpha = msgProgress * 0.9;

        ctx.fillStyle = idx % 2 === 0 ? '#e0e7ff' : '#dbeafe';
        ctx.fillRect(80, 180 + idx * 80, CANVAS_WIDTH - 160, 60);

        ctx.globalAlpha = 1;
        ctx.fillStyle = colors.text;
        ctx.fillText(msg, 110, 215 + idx * 80);
    });

    ctx.globalAlpha = 1;
}

function drawAutomation(ctx, progress) {
    // Fondo
    ctx.fillStyle = '#f5f3ff';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Título
    ctx.font = 'bold 56px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
    ctx.fillStyle = colors.purple;
    ctx.textAlign = 'center';
    ctx.fillText('⚡ Automatización', CANVAS_WIDTH / 2, 100);

    // Features que aparecen
    const features = [
        { icon: '📋', title: 'Tareas Automáticas', desc: 'Se crean al detectar acciones' },
        { icon: '🔔', title: 'Notificaciones Inteligentes', desc: 'Solo lo importante' },
        { icon: '📊', title: 'Dashboard en Tiempo Real', desc: 'Todas las decisiones en un lugar' },
    ];

    features.forEach((feature, idx) => {
        const isVisible = progress > idx * 0.3;
        const opacity = Math.max(0, Math.min(1, (progress - idx * 0.3) / 0.25));

        ctx.globalAlpha = opacity;

        // Card
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(0,0,0,0.1)';
        ctx.shadowBlur = 20;
        ctx.fillRect(100, 200 + idx * 110, CANVAS_WIDTH - 200, 90);

        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;

        // Icon
        ctx.font = 'bold 40px Arial';
        ctx.fillStyle = colors.text;
        ctx.textAlign = 'center';
        ctx.fillText(feature.icon, 150, 250 + idx * 110);

        // Title
        ctx.font = 'bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
        ctx.fillStyle = colors.text;
        ctx.textAlign = 'left';
        ctx.fillText(feature.title, 240, 245 + idx * 110);

        // Description
        ctx.font = '16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
        ctx.fillStyle = colors.lightText;
        ctx.fillText(feature.desc, 240, 270 + idx * 110);
    });

    ctx.globalAlpha = 1;
}

function drawCTA(ctx, progress) {
    // Fondo gradiente
    const gradient = ctx.createLinearGradient(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    gradient.addColorStop(0, colors.indigo);
    gradient.addColorStop(1, colors.purple);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Mainmensaje
    ctx.font = 'bold 64px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.globalAlpha = Math.min(progress, 1);
    ctx.fillText('¿Listo para cambiar?', CANVAS_WIDTH / 2, 200);

    // CTA
    ctx.font = 'bold 36px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
    ctx.globalAlpha = Math.min(Math.max(0, progress - 0.3), 1);
    ctx.fillText('Prueba 14 días GRATIS', CANVAS_WIDTH / 2, 350);

    // Subtext
    ctx.font = '20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto';
    ctx.globalAlpha = Math.min(Math.max(0, progress - 0.5), 1);
    ctx.fillText('Sin tarjeta de crédito', CANVAS_WIDTH / 2, 420);

    ctx.globalAlpha = 1;
}

async function main() {
    console.log('🎬 Generando video demo de FlowPilot...');
    console.log(`Duración: ${DURATION}s, FPS: ${FPS}, Total frames: ${TOTAL_FRAMES}`);

    const outputDir = path.join(__dirname, '../public/videos');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const framesDir = path.join(__dirname, '../.temp-frames');
    if (fs.existsSync(framesDir)) {
        fs.rmSync(framesDir, { recursive: true });
    }
    fs.mkdirSync(framesDir, { recursive: true });

    // Generar frames
    for (let i = 0; i < TOTAL_FRAMES; i++) {
        if (i % 30 === 0) {
            console.log(`Frame ${i}/${TOTAL_FRAMES}`);
        }
        const canvas = await generateFrame(i);
        const buffer = canvas.toBuffer('image/png');
        fs.writeFileSync(path.join(framesDir, `frame-${String(i).padStart(6, '0')}.png`), buffer);
    }

    console.log('✅ Frames generados. Compilando video...');

    // Compilar video con ffmpeg
    const videoPath = path.join(outputDir, 'flowpilot-demo.mp4');

    return new Promise((resolve, reject) => {
        ffmpeg()
            .input(path.join(framesDir, 'frame-%06d.png'))
            .inputFPS(FPS)
            .output(videoPath)
            .outputOptions('-c:v libx264')
            .outputOptions('-pix_fmt yuv420p')
            .outputOptions('-crf 23')
            .on('end', () => {
                console.log(`✅ Video generado: ${videoPath}`);
                // Limpiar frames temporales
                fs.rmSync(framesDir, { recursive: true });
                resolve();
            })
            .on('error', reject)
            .run();
    });
}

main().catch(console.error);
