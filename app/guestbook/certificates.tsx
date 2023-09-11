import Image from "next/image";
import { client } from "../lib/sanity";

interface Data {
  title: string;
  overview: string;
  link: string;
  _id: string;
  imageUrl: string;
}

async function getcertificates() {
  const query = `*[_type == "Certificates"] {
    title,
      overview,
      link,
      _id,
      "imageUrl": image.asset->url
  }`;

  const data = await client.fetch(query);
  console.log(data)
  return data;
}

export const revalidate = 140;


export default async function Certificates() {
    const data: Data[] = await getcertificates();
  
    return (
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Certificates
          </h1>
        </div>
  
        <div className="grid gap-y-8 sm:gap-6  sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
          {data.map((Certificates) => (
            <article
              key={Certificates._id}
              className="overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-gray-700 shadow-teal-100"
            >
              <div className="h-56 w-full relative">
                <Image
                  fill
                  src={Certificates.imageUrl}
                  alt="Image of the project"
                  className="w-full h-full object-cover"
                />
              </div>
  
              <div className="p-4 sm:p-6">
                <a href={Certificates.link} target="_blank">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {Certificates.title}
                  </h3>
                </a>
  
                <p className=" line-clamp-3 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {Certificates.overview}
                </p>
  
                <a
                  href={Certificates.link}
                  target="_blank"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-500"
                >
                  Learn More!
                  <span className="block transition-all group-hover:ms-0.5">
                    &rarr;
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }