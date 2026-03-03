import React from 'react';
import WorkCategories from '../components/WorkCategories';

export default function Work() {
    return (
        <main className="pt-24 bg-white min-h-screen">
            <div className="max-w-[1500px] mx-auto px-6 md:px-10 pt-20 pb-12">
                <h1 className="text-[40px] font-semibold text-black tracking-tight leading-[1.2] break-keep">
                    고민없이 쉽게 선택하세요
                </h1>
            </div>
            <WorkCategories />
        </main>
    );
}
