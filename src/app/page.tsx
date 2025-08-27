import React from 'react'
import Card from '@/components/Card'

const Page = () => {
    return (
        <main>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
                <h1 className="text-[--text-heading-2] leading-[--text-heading-2--line-height] font-[--text-heading-2--font-weight] text-[--color-dark-900]">
                    Nike
                </h1>

                <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card
                        imageSrc="/hero-shoe.png"
                        imageAlt="Nike Air Force 1 Mid '07"
                        title="Nike Air Force 1 Mid '07"
                        subtitle="Men's Shoes"
                        meta="6 Colour"
                        price="98.30"
                        badge={{ label: "Best Seller", color: "orange" }}
                    />
                    <Card
                        imageSrc="/hero-shoe.png"
                        imageAlt="Nike Air Max 90 SE"
                        title="Nike Air Max 90 SE"
                        subtitle="Men's Shoes"
                        meta="1 Colour"
                        price="98.30"
                        badge={{ label: "Extra 20% off", color: "green" }}
                    />
                    <Card
                        imageSrc="/hero-shoe.png"
                        imageAlt="Nike Legend Essential 3 Next Nature"
                        title="Nike Legend Essential 3 Next Nature"
                        subtitle="Men's Training Shoes"
                        meta="4 Colour"
                        price="98.30"
                        badge={{ label: "Extra 10% off", color: "green" }}
                    />
                </section>
            </div>
        </main>
    )
}
export default Page

