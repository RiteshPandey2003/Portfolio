import Image from "next/image";
import { client } from "../lib/sanity";

interface Data {
  title: string;
  _id: string;
  imageUrl: string;
}

async function getskills() {
  const query = `*[_type == "Skills"] {
    title,
      _id,
      "imageUrl": image.asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

export const revalidate = 140;


export default async function Skills() {
    const data: Data[] = await getskills();
  
    return (
      <div className="divide-y divide-gray-200 dark:divide-gray-700 pt-8">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            skills
          </h1>
        </div>
  
        <div className="grid  gap-y-8 sm:gap-6  sm:grid-cols-5 md:gap-6 lg:grid-cols-5 lg:gap-10 pt-8">
          {data.map((Certificates) => (
            <article
              key={Certificates._id}
              className="overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-gray-700 shadow-teal-100"
            >
              {/* <div className="h-28 w-full relative ">
                <Image
                  fill
                  src={Certificates.imageUrl}
                  alt="Image of the project"
                  className="w-full h-full object-cover sm:hidden"
                />
              </div> */}
  
              <div className="p-4 sm:p-2 pb-6">
                <a href="" target="_blank">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white text-center">
                    {Certificates.title}
                  </h3>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }