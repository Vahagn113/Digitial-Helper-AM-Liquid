# Digital Helper AM - Project Standards

This document outlines the coding standards and architectural decisions for the Digital Helper AM project.

## 1. Technology Stack
- **Frontend**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **AI**: Gemini API (`@google/genai`)

## 2. Design System
- **Color Palette**: Sophisticated dark/light modes with vibrant accents.
- **Typography**: Modern sans-serif (Inter/Roboto).
- **Effects**: Glassmorphism, subtle shadows, and smooth transitions.

## 3. Development Workflow
- **State Management**: React Hooks (useState, useReducer, useOptimistic).
- **Form Handling**: React Hook Form with Zod validation.
- **Components**: Functional components with TypeScript interfaces.

## 4. Performance & SEO
- **Static Export**: The project is configured for static export. Ensure all pages are pre-renderable.
- **Images**: Use `next/image` with optimized patterns.
- **SEO**: Implement metadata API in layouts and pages.

## 5. Directory Structure
- `/app`: Application routes and layouts.
- `/components`: Reusable UI components.
- `/lib`: Utility functions and shared logic.
- `/public`: Static assets.
