# INVIdata - Invisible Internal Data Security

## Overview

INVIdata is a cybersecurity application focused on "Invisible Internal Data Security" (IIDS) technology. The system transforms files into zero-byte objects that appear invisible to attackers while maintaining full functionality within a secure environment. The application features a marketing website with interactive 3D elements, animations, and an integrated chatbot to explain the revolutionary cybersecurity approach.

## System Architecture

### Frontend Architecture
- **React + TypeScript**: Modern SPA built with React 18 and TypeScript for type safety
- **Vite**: Fast build tool and development server with hot module replacement
- **Tailwind CSS + shadcn/ui**: Utility-first CSS framework with pre-built accessible components
- **Animation Libraries**: GSAP for advanced animations, Three.js for 3D graphics, Locomotive Scroll for smooth scrolling
- **State Management**: React Query (TanStack Query) for server state management

### Backend Architecture
- **Express.js**: Node.js web framework serving API endpoints
- **TypeScript**: Full-stack type safety with ES modules
- **RESTful API**: Simple REST endpoints for chatbot functionality
- **Session Management**: PostgreSQL session storage with connect-pg-simple

### Database Layer
- **PostgreSQL**: Primary database using Neon serverless
- **Drizzle ORM**: Type-safe database operations with schema-first approach
- **Migration System**: Structured database versioning in `/migrations` directory

## Key Components

### Client-Side Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero3D**: Landing section with 3D animations and GSAP transitions
- **About**: Company information and value proposition
- **Technology**: IIDS explanation with interactive elements
- **Features**: Product capabilities showcase
- **Pricing**: Subscription plans with Indian rupee pricing
- **Testimonial**: Founder quote section
- **Chatbot**: Interactive support bot with keyword-based responses
- **CustomCursor**: Animated cursor effects throughout the site

### Server-Side Features
- **Chatbot API**: `/api/chatbot` endpoint with predefined responses about INVIdata features
- **Memory Storage**: In-memory user management system for development
- **Request Logging**: Comprehensive API request/response logging
- **Error Handling**: Centralized error handling with proper HTTP status codes

### UI Component System
- **shadcn/ui Integration**: Complete set of accessible, customizable components
- **Design System**: Consistent theming with CSS custom properties
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Dark/Light Theme**: CSS variable-based theming system

## Data Flow

1. **Client Request**: User interacts with frontend components
2. **State Management**: React Query manages server state and caching
3. **API Communication**: RESTful requests to Express backend
4. **Database Operations**: Drizzle ORM handles PostgreSQL interactions
5. **Response Processing**: Data flows back through React Query to UI components

## External Dependencies

### Animation & Graphics
- **GSAP**: Professional animation library for smooth transitions
- **Three.js**: 3D graphics rendering for visual effects
- **Locomotive Scroll**: Hardware-accelerated smooth scrolling

### UI & Styling
- **Radix UI**: Headless components for accessibility
- **Tailwind CSS**: Utility-first styling framework
- **Lucide React**: Icon library for consistent iconography

### Backend Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Font Awesome**: Icon fonts for visual elements

## Deployment Strategy

### Development
- **Vite Dev Server**: Fast development with HMR
- **Express Server**: Backend development with tsx
- **Database**: Local PostgreSQL or Neon development instance

### Production Build
- **Frontend**: Vite builds to `/dist/public`
- **Backend**: esbuild bundles server to `/dist/index.js`
- **Static Assets**: Served through Express static file serving
- **Database**: Neon serverless PostgreSQL in production

### Build Process
1. `npm run build`: Creates production-ready frontend and backend bundles
2. Frontend assets served from `/dist/public`
3. Express server runs bundled application
4. Database migrations applied via `npm run db:push`

## Changelog

- July 02, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.