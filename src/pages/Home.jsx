import React from 'react';
import HomeHero from '../components/HomeHero';
import ReviewsSection from '../components/ReviewsSection';

export default function Home() {
    return (
        <main className="pt-20 bg-white min-h-screen">
            <HomeHero />
            <ReviewsSection />
        </main>
    );
}
