import Image from 'next/image';
import Link from 'next/link';
import wallpaper from '@/assets/images/wallpaper.jpg';
import { Container } from '@/components/container';
import { getRandomQuizQuestion } from '@/lib/quiz';

const Page = async () => {
	const data = await getRandomQuizQuestion();
	return (
		<Container className="flex flex-col gap-5 py-5 md:flex-row-reverse md:justify-between">
			<div className="relative overflow-hidden rounded-2xl">
				<div className="md:w-[24rem]">
					<Image src={wallpaper} alt="" width={700} height={700} />
				</div>
				<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent md:bg-gradient-to-r"></div>
			</div>

			<div className="md:w-[50%] flex flex-col gap-5">
				<h1 className="text-2xl font-semibold">Family Guy Quiz</h1>
				<p className="text-sm leading-6 text-gray-300">
					Take this quiz to find out how much you know about the hit animated
					sitcom Family Guy. Test your knowledge of the characters, the
					episodes, and the show&apos;s many pop culture references.
				</p>
				<Link
					href={`/quiz/${data.randomQuestion}`}
					className="flex items-center justify-center gap-1 px-5 py-4 font-semibold text-orange-500 transition-colors rounded-md outline duration-700 hover:bg-orange-950">
					Take a Quiz Now!
				</Link>
			</div>
		</Container>
	);
};

export default Page;
