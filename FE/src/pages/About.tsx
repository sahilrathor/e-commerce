import { useAppInfo } from "../stores/app-info";


export default function About() {
    const { name } = useAppInfo()

    return (
        <div className="about-container w-full min-h-screen p-8 bg-gray-50 flex flex-col items-center text-gray-800">
            <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>

            <div className="max-w-4xl">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
                    <p>
                        Welcome to <strong>{name}</strong>, your go-to online destination for the best in fashion, electronics, and home essentials.
                        Since our founding in 2024, we've been dedicated to offering top-quality products with a focus on sustainability, excellent customer service, and great prices.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                    <p>
                        Our mission is to make online shopping a joyful, seamless experience by providing a wide selection of high-quality products that meet our customers' needs
                        and expectations. We strive to empower consumers by delivering the latest trends, technology, and convenience in one place.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Why Shop With Us?</h2>
                    <ul className="list-disc list-inside ml-4">
                        <li><strong>Wide Range of Products:</strong> From the latest gadgets to stylish apparel, we offer something for everyone.</li>
                        <li><strong>Quality You Can Trust:</strong> We partner with reputable brands to ensure that every product meets our standards.</li>
                        <li><strong>Customer Satisfaction:</strong> With dedicated support and hassle-free returns, we prioritize our customers’ experience.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
                    <p>
                        We believe in transparency, innovation, and community. Every decision we make is guided by these values, helping us to foster
                        a strong relationship with our customers and partners alike.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">Connect With Us</h2>
                    <p>
                        We're more than just an online store; we’re a community! Follow us on social media to stay up-to-date on our latest products, offers, and tips.
                    </p>
                    {/* <div className="flex items-center gap-2">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
                        >
                            <FaInstagram size={32}
                                className="cursor-pointer rounded-md transition-colors duration-300"
                            />
                        </a>
                    </div> */}
                </section>
            </div>
        </div>
    );
}
