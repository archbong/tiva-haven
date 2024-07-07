import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    text: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
    name: "Leslie Alexander",
    username: "@lesliealexander",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", // Replace with actual path to the image
  },
  {
    id: 2,
    text: "Quia dolorem qui et. Atque quo aliquid sit eos officia. Dolores similique laboriosam quaerat cupiditate.",
    name: "Michael Foster",
    username: "@michaelfoster",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", // Replace with actual path to the image
  },
  {
    id: 3,
    text: "Consequatur ut atque. Itaque nostrum molestiae id veniam eos cumque. Ut quia eum fugiat labore inventore ut voluptate.",
    name: "Lindsay Walton",
    username: "@lindsaywalton",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 4,
    text: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
    name: "Leonard Krasner",
    username: "@leonardkrasner",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80", // Replace with actual path to the image
  },
  {
    id: 5,
    text: "Architecto libero natus est. Est quam debitis officia enim atque et ut non. Sunt reiciendis quasi eaque. Itaque error et et.",
    name: "Floyd Miles",
    username: "@floydmiles",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", // Replace with actual path to the image
  },
  {
    id: 6,
    text: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum reprehenderit saepe corrupti.",
    name: "Tom Cook",
    username: "@tomcook",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", // Replace with actual path to the image
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-base font-semibold text-purple-600 uppercase">Testimonials</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          We have worked with thousands of amazing people
        </p>
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-3 xl:grid-cols-4 px-4 sm:px-6 lg:px-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-medium text-gray-900">{testimonial.text}</p>
            <div className="mt-6 flex items-center">
              <Image
                className="h-10 w-10 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
                width={40}
                height={40}
              />
              <div className="ml-4">
                <p className="text-base font-medium text-gray-900">{testimonial.name}</p>
                <p className="text-sm font-medium text-gray-500">{testimonial.username}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
