import questions from '@/data/quiz.json';
import { NextResponse } from 'next/server';

export const GET = async () => {
	try {
		const random = Math.floor(Math.random() * questions.data.length);
		return NextResponse.json({
			randomQuestion: questions.data[random].id,
		});
	} catch (error) {
		console.log(error);
		return new NextResponse('Internal Server Error', { status: 500 });
	}
};
