import Form from "../components/Form"
import prisma from "../db"
import Skills from "./Skills";
import Certificates from "./certificates";

// async function getEntries() {
//     const data = await prisma.guestbook.findMany({
//         take: 50,
//         orderBy: {
//             creates_at: "desc",
//         },
//     });
//     return data;
// }

// export const revalidate = 140;

export default async function Guestbook() {
    // const data = await getEntries();
    return (
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">

                <Certificates />
                <Skills/>
            </div>

        </div>
    )
}
