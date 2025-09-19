interface CardProps {
    title: string;
    description: string;
    image?: string;
    name?: string;
    role?: string;
}

export default function BlogCard({
    title,
    description,
    image = "https://tse1.mm.bing.net/th/id/OIP.oNihAJLWLKieLKMWRJgkAAHaHa?pid=Api&P=0&h=180",
    name = "Bonnie Green",
    role = "Developer at OpenAI",
}: CardProps) {
    return (
        <div className="grid mb-8 border border-gray-200 rounded-lg shadow-md dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {title}
                    </h3>
                    <p className="my-4">{description}</p>
                </blockquote>
                <figcaption className="flex items-center justify-center">
                    <img
                        className="rounded-full w-9 h-9"
                        src={image}
                        alt={name}
                    />
                    <div className="space-y-0.5 font-medium dark:text-white text-left ms-3">
                        <div>{name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            {role}
                        </div>
                    </div>
                </figcaption>
            </figure>
        </div>
    );
}
