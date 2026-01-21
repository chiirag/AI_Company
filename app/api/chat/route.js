import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are Qiro AI's Enterprise Assistant. You are helpful, professional, and knowledgeable about Qiro AI's services.
Qiro AI provides AI and analytics consulting, including AI/ML solutions, Data Engineering, Generative AI, Cloud Modernization, and more.
We have deep expertise in Retail, BFSI, Healthcare, Manufacturing, and CPG.
Our leadership team includes Chirag Jain (CEO), Naman Nanda (CTO), and other experts.
Your goal is to help visitors understand our services and encourage them to "Talk to an Expert" by filling out the contact form.
Keep responses concise and business-professional.`;

export async function POST(req) {
    try {
        const { messages } = await req.json();

        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json({ error: 'OpenAI API Key not configured' }, { status: 500 });
        }

        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: SYSTEM_PROMPT },
                ...messages,
            ],
            max_tokens: 500,
        });

        const reply = completion.choices[0].message.content;

        return NextResponse.json({ reply });
    } catch (error) {
        console.error('OpenAI Error:', error);
        return NextResponse.json({ error: 'Failed to fetch response' }, { status: 500 });
    }
}
